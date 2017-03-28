/*
 Copyright 2014 Google Inc. All Rights Reserved.
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
 http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */
// Version: 16
importScripts('scripts/serviceworker-cache-polyfill.js');
importScripts('serviceworker-urls.js');

var CACHE_VERSION = 2;
var CURRENT_CACHES = {
  prefetch: 'prefetch-cache-v' + CACHE_VERSION,
  'read-through': 'read-through-cache-v' + CACHE_VERSION

};
var URLS_TO_PREFETCH = self.URLS_TO_PREFETCH || [];
URLS_TO_PREFETCH = URLS_TO_PREFETCH.concat([
  '/'
]);
var CACHE_THROUGH_DOMAINS = ['fonts.googleapis.com', 'fonts.gstatic.com', 'w69b-cookieconsent.appspot.com'];
// This has to match the pattern in app.yaml - all matches map to the main app file at /
// We add /views additionally as this is used during development.
var INDEX_PATH_RE = /^\/(?!images|audio|components|scripts|styles|api|views|_ah|g|[^\/]*\.).*/;

function shouldCacheThrough(requestUrl, response) {
  var url = new URL(requestUrl);

  if (response.headers.has('content-type') &&
    response.headers.get('content-type').match(/^font\//i))
    return true;

  if (CACHE_THROUGH_DOMAINS.indexOf(url.hostname) >= 0) {
    console.debug('Resource is in read-through domain whitelist');
    return true;
  }

  return false;
}

function shouldRespondWithIndex(url) {
  return (url.origin === self.location.origin && url.pathname.match(INDEX_PATH_RE));
}

function shouldSkip(url) {
  return (url.origin === self.location.origin && url.pathname.match(/^\/(api|_ah).*/));
}

self.addEventListener('install', function(event) {

  // All of these logging statements should be visible via the "Inspect" interface
  // for the relevant SW accessed via chrome://serviceworker-internals
  console.log('Handling install event. Resources to pre-fetch:', URLS_TO_PREFETCH);

  event.waitUntil(
    caches.open(CURRENT_CACHES['prefetch']).then(function(cache) {
      return cache.addAll(URLS_TO_PREFETCH.map(function(urlToPrefetch) {
        return new Request(urlToPrefetch, {mode: 'cors'});
      })).then(function() {
        if (typeof self.skipWaiting === 'function') {
          console.log('self.skipWaiting() is supported.');
          return self.skipWaiting();
        }
      }).then(function() {
        console.log('All resources have been fetched and cached.');
      });
    }).catch(function(error) {
      // This catch() will handle any exceptions from the caches.open()/cache.addAll() steps.
      console.error('Pre-fetching failed:', error);
    })
  );
});

self.addEventListener('activate', function(event) {
  // Delete all caches that aren't named in CURRENT_CACHES.
  // While there is only one cache in this example, the same logic will handle the case where
  // there are multiple versioned caches.
  var expectedCacheNames = Object.keys(CURRENT_CACHES).map(function(key) {
    return CURRENT_CACHES[key];
  });

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (expectedCacheNames.indexOf(cacheName) == -1) {
            // If this cache name isn't present in the array of "expected" cache names, then delete it.
            console.log('Deleting out of date cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      ).then(function() {
          if (self.clients && (typeof self.clients.claim === 'function')) {
            console.log('self.clients.claim() is supported.');
            return self.clients.claim();
          }
        });
    })
  );
});

self.addEventListener('fetch', function(event) {
  var request = event.request;
  console.log('Handling fetch event for', request.url);
  var url = new URL(event.request.url);
  if (shouldSkip(url)) return;
  if (shouldRespondWithIndex(url)) {
    console.log('Responsing with index');
    request = new Request('/', {
      headers: request.headers,
      method: request.method,
      body: request.body,
      credentials: request.credentials,
      cache: request.cache
    });
  }

  event.respondWith(
    // caches.match() will look for a cache entry in all of the caches available to the service worker.
    // It's an alternative to first opening a specific named cache and then matching on that.
    caches.match(request).then(function(response) {
      if (response) {
        console.log('Found response in cache:', request.url, response);

        return response;
      }

      console.log('No response found in cache. About to fetch from network...');
      return fetch(request).then(function(response) {
        console.log('  Response for %s from network is: %O', request.url, response);
        if (response.status < 400 && shouldCacheThrough(request.url, response)) {
          console.log('  Caching the response to', request.url);
          return caches.open(CURRENT_CACHES['read-through']).then(function(cache) {
            cache.put(request, response.clone());
            return response;
          });
        } else {
          console.log('  Not caching the response to', request.url)
          return response;
        }
      }).catch(function(error) {
        // This catch() will handle exceptions thrown from the fetch() operation.
        // Note that a HTTP error response (e.g. 404) will NOT trigger an exception.
        // It will return a normal response object that has the appropriate error code set.
        console.error('Fetching failed:', error);

        throw error;
      });
    })
  );
});
