"use strict";
angular.module("views/codeStats.html", []).run(["$templateCache", function(e) {
 e.put("views/codeStats.html", '<qr-app-layout>    <div class="view-codestats" layout-padding>        <div data-date-range             data-from="dateRange.from"             data-to="dateRange.to">        </div>        <div data-qr-views-chart="views"></div>        <div class="row">            <div class="span9">                The timezone for counting views is set to {{code.timezone}}.                You can change it in the                <a href="/mycodes/{{code.qrid}}?settings">settings.</a>            </div>            <div class="span9">                Do you need more advanced statistics? No Problem - <a                    href="/mycodes/{{code.qrid}}?settings">enter your Google                Analytics                Account</a>.            </div>        </div>    </div></qr-app-layout>')
}]), angular.module("views/dateRange.html", []).run(["$templateCache", function(e) {
 e.put("views/dateRange.html", '<div class="date-range-picker" layout="row">    <md-input-container>        <label>From</label>        <input type="date" ng-model="from" required               max="{{maxDate|date:\'yyyy-MM-dd\'}}">    </md-input-container>    <md-input-container>        <label>To</label>        <input type="date" ng-model="to" required               max="{{maxDate|date:\'yyyy-MM-dd\'}}"               min="{{from|date:\'yyyy-MM-dd\'}}">    </md-input-container></div>')
}]), angular.module("views/deleteDialog.html", []).run(["$templateCache", function(e) {
 e.put("views/deleteDialog.html", '<md-dialog>    <md-content>        <h2 class="md-title">Delete Code Permanently</h2>        <p>            Do you really want to permanently delete this Code?            Scanning this code will result in an error message.        </p>    </md-content>    <div class="md-actions">        <md-button ng-click="cancel()">Cancel</md-button>        <md-button class="md-warn" ng-click="save()">Yes, delete it        </md-button>    </div></md-dialog>')
}]), angular.module("views/demo.html", []).run(["$templateCache", function(e) {
 e.put("views/demo.html", '<div id="demo-view" class="qr-view">    <div data-qr-parsed-content         data-qr-content="contact"></div>    <br />    <div data-qr-parsed-content         data-qr-content="text"></div>    <br />    <div data-qr-parsed-content         data-qr-content="link"></div>    <br />    <div data-qr-parsed-content         data-qr-content="tel"></div>    <br />    <div data-qr-parsed-content         data-qr-content="sms"></div></div>')
}]), angular.module("views/editCode.html", []).run(["$templateCache", function(e) {
 e.put("views/editCode.html", '<div class="view-editcode" layout="column">    <qr-toolbar-content>        <h1 help-tour-highlight="code-title" ng-click="rename($event)">{{code.title}}</h1>        <div flex></div>        <md-button class="md-icon-button"                   ng-click="rename($event)"                   aria-label="Rename">            <md-icon md-svg-icon="core:edit"></md-icon>            <md-tooltip>Rename Code</md-tooltip>        </md-button>        <md-button class="md-icon-button"                   ng-click="showSettings($event)"                   aria-label="Tracking Settings">            <md-icon md-svg-icon="core:settings"></md-icon>        </md-button>    </qr-toolbar-content>    <div class="settings" ng-show="settingsShown">    </div>    <div data-help-tour data-tour-name="mycodes">        <div data-help-tour-step data-highlight-id="qr-inputs">            Awesome, you have just created a Dynamic QR Code. <br>            Your can change the content of Dynamic Codes while the            QR Code Image stays the same.            Try it.        </div>        <div data-help-tour-step data-highlight-id="code-title">            You can rename your Code by clicking on its title.        </div>        <div data-help-tour-step data-highlight-id="mycodes">            To modify your Dynamic Codes later or view statistics, go to            "My Codes".        </div>    </div>    <div data-qr-generate-widget         data-ng-show="staticContent"         data-qrcode="code.qrcode"         data-static-content="staticContent"></div></div>')
}]), angular.module("views/generate.html", []).run(["$templateCache", function(e) {
 e.put("views/generate.html", '<div class="view-generate" layout="column">    <div data-qr-generate-widget data-qrcode="qrcode"></div>    <div class="convert-dynamic" data-ng-show="modified && isOnline" layout-padding>        Do you need to change the content of the QR Code after it has been printed?        Or do you need statistics?        <a href="" data-ng-click="convertToDynamic()">            <span data-ng-show="$root.auth.isSignedIn">Convert your Code to a Dynamic QR                Code.</span>            <span data-ng-hide="$root.auth.isSignedIn">Sign In with Google and convert your                Code to a Dynamic QR Code.</span>        </a>    </div>    <visuallead data-ng-show="isOnline && $mdMedia(\'gt-sm\')" defer-ms="5000"                data-url="https://www.visualead.com/app/webroot/pages_ads/generic-iframe/">    </visuallead></div>')
}]), angular.module("views/generateWidget.html", []).run(["$templateCache", function(e) {
 e.put("views/generateWidget.html", '<div class="generate-widget" layout-gt-sm="row">    <qr-tabbed-inputs model="qrcode" flex layout-padding></qr-tabbed-inputs>    <div class="qr-generate-result md-whiteframe-z1"         flex layout="column">        <md-toolbar class="">            <div class="md-toolbar-tools">                <md-button class="md-button" ng-click="save($event)"                           aria-label="Save">                    <md-icon md-svg-icon="core:save"></md-icon>                    Save                </md-button>                <md-button class="md-icon-button" ng-click="share($event)"                ng-show="false"                           aria-label="Share">                    <md-icon md-svg-icon="core:share"></md-icon>                    <md-tooltip md-autohide>Share</md-tooltip>                </md-button>                <md-button class="md-icon-button"                           ng-show="false && $root.isOnline"                           ng-click="printWithZazzle()"                           aria-label="Print with Zazzle">                    <md-icon md-svg-icon="core:print"></md-icon>                    <md-tooltip md-autohide>Print with Zazzle</md-tooltip>                </md-button>                <span flex></span>                <md-button class="md-icon-button"                           ng-click="optionsShown = !optionsShown"                           aria-label="Options">                    <md-icon md-svg-icon="core:more-vert"></md-icon>                    <md-tooltip md-autohide>Options</md-tooltip>                </md-button>            </div>        </md-toolbar>        <div layout="column" layout-padding>            <div class="qr-options" ng-show="optionsShown">                <div class="option option-margin">                    <md-checkbox ng-model="options.noMargin">No margin                    </md-checkbox>                </div>                <div class="option">                    <div class="option-legend">Size</div>                    <div data-qr-size-chooser                         data-size="options.size"></div>                </div>            </div>            <h2 class="md-title"><span data-ng-show="staticContent">Dynamic QR Code</span>                <span data-ng-hide="staticContent">Static QR Code</span></h2>            <div layout-align="center center" layout="row" layout-margin>                <qr-code                        class="md-whiteframe-z3 qr-code-canvas"                        qr-size="{{clampedSize}}"                        qr-margin="{{options.margin}}"                        qr-content="{{encodedContent}}"></qr-code>            </div>            <div class="code-messages">            <p class="qr-text-warn"                 data-ng-show="options.size != qrCodeSize">                Size was set to {{qrCodeSize}}px to avoid scaling                which                would reduce readability.            </p>            <p class="qr-text-hint" ng-show="options.noMargin">                QR Code readers require a white                margin to detect QR Codes. So make sure to print                it on a light background instead.            </p>            <p class="qr-warn-text" data-ng-show="showClamped">                The QR Code is only displayed at a size of {{clampedSize}}px                but it                will be saved at a size of {{qrCodeSize}}px.            </p>            </div>        </div>    </div></div>')
}]), angular.module("views/help.html", []).run(["$templateCache", function(e) {
 e.put("views/help.html", '<qr-toolbar-content>    <h1 class="md-toolbar-tools">What is a QR Code?</h1></qr-toolbar-content><div class="view-help text-view" layout-padding>    <p>        A QR Code is a two-dimensional barcode that is readable by smartphones.        It allows to encode over 4000 characters in a two dimensional barcode.        QR Codes may be used to display text to the user, to open a URL, save        a contact to the address book or to compose text messages.        "QR Code" is a registered trademark of DENSO WAVE INCORPORATED.    </p>    <p>        To read QR Codes with your smartphone, you need an appropriate software        installed on your phone.        For Android-based devices, you can use        <a href="https://play.google.com/store/apps/details?id=com.google.zxing.client.android">Barcode            Scanner</a>        by ZXing. On iOS-Devices like        iPhones there are also QR Code readers available on the AppStore, for        Example        <a href="http://itunes.apple.com/de/app/i-nigma-qr-datamatrix-barcode/id331895424?mt=8">i-nigma</a>.        On Firefox OS try <a            href="https://marketplace.firefox.com/app/qr-code-scanner-1/">QR        Code Scanner</a>.        On Symbian devices, you can use        <a href="http://store.ovi.com/content/9708">Mobiletag barcodes            reader </a> for example.    </p>    <p>        If you use a modern web browser (recent versions of Firefox or Chrome) and        have a webcam, this site allows you to scan QR Codes with your web browser.        You can use this to send a link from a phone to your desktop browser for example.    </p>    <h3 class="md-title">Are the QR Codes generated on this site restricted to personal        use?</h3>    <p>        No! There is no restriction of any kind. You can use these QR Code        images for whatever you like, also commercially. Please note that the        word "QR Code" is a registered trademark of DENSO WAVE INCORPORATED. If        you want to use it, you have to add a trademark comment. Please see        <a href="http://www.qrcode.com/en/faq.html#patentH2Title">here</a> for        details.    </p>    <h3 class="md-title">What are Dynamic QR Codes?</h3>    <p>        The content of a QR Code cannot be changed once generated. What is        sometimes referred to as        a Dynamic QR Code, is a QR Code pointing to a static URL that hosts        the actual content (e.g. the real URL).        The hosted content can be changed after the QR Code has        been printed.        <br>        After signing in with a Google Account, this site also        allows you to generate Dynamic QR Codes (available under My Codes).        They can be handled exactly as our normal QR Codes.        We automatically create a static URL for you that points to your actual        content. We provide simple view tracking for these Codes.        You can also enter a Google Analytics Tracking ID for advanced        tracking.        <br>        This service is offered completely free of charge without any        restrictions.    </p></div>')
}]), angular.module("views/helpTour.html", []).run(["$templateCache", function(e) {
 e.put("views/helpTour.html", '<div class="help-tour">    <div class="steps" data-ng-transclude></div>    <div class="buttons" layout="row">        <span flex></span>        <md-button ng-click="close()">Close</md-button>        <md-button class="" ng-click="next()"                ng-show="hasNextStep()">Next</md-button>    </div></div>')
}]), angular.module("views/helpTourStep.html", []).run(["$templateCache", function(e) {
 e.put("views/helpTourStep.html", '<div class="help-tour-step" data-ng-transclude data-ng-show="shown"></div>')
}]), angular.module("views/impressum.html", []).run(["$templateCache", function(e) {
 e.put("views/impressum.html", '<qr-toolbar-content>    <h1 class="md-toolbar-tools">Impressum</h1></qr-toolbar-content><div class="view-impressum text-view">    <sub class="md-caption">For the sake of german laws</sub>    <p>        Die Seite www.the-qrcode-generator.com wird Ihnen angeboten von:    </p>    <p>        w69b GmbH<br/>        Schwabstr. 41<br/>        D-72108 Rottenburg <br/>        Tel: +497614587782 <br/>        E-Mail: mb@w69b.com    </p>    <p>    Umsatzsteuer-ID.-Nr.: DE303339169 <br>    Geschäftsführer: Manuel Braun <br>    Registergericht: Amtsgericht Stuttgart<br>    Registernummer: HRB 754693<br>    </p>    <h3>Hinweis zur Verwendung von Google Analytics</h3>    <p>        Diese Website benutzt Google Analytics, einen Webanalysedienst der        Google        Inc. („Google“). Google Analytics verwendet sog. „Cookies“,        Textdateien,        die auf Ihrem Computer gespeichert werden und die eine Analyse der        Benutzung der Website durch Sie ermöglichen. Die durch den Cookie erzeugten        Informationen über Ihre Benutzung dieser Website (einschließlich Ihrer        IP-Adresse) wird an einen Server von Google in den USA übertragen und        dort gespeichert. Google wird diese Informationen benutzen, um Ihre        Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten        für die Websitebetreiber zusammenzustellen und um weitere mit der        Websitenutzung und der Internetnutzung verbundene Dienstleistungen zu        erbringen. Auch wird Google diese Informationen gegebenenfalls an        Dritte übertragen, sofern dies gesetzlich vorgeschrieben oder soweit        Dritte diese Daten im Auftrag von Google verarbeiten. Google wird in        keinem Fall Ihre IP-Adresse mit anderen Daten von Google in Verbindung        bringen. Sie können die Installation der Cookies durch eine        entsprechende Einstellung Ihrer Browser Software verhindern; wir weisen        Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht        sämtliche Funktionen dieser Website vollumfänglich nutzen können. Durch        die Nutzung dieser Website erklären Sie sich mit der Bearbeitung der        über Sie erhobenen Daten durch Google in der zuvor beschriebenen Art        und Weise und zu dem zuvor benannten Zweck einverstanden.    </p></div>')
}]), angular.module("views/mycodes.html", []).run(["$templateCache", function(e) {
 e.put("views/mycodes.html", '<div class="view-mycodes" layout-padding>    <div class="heading-line">        <md-button class="md-fab" aria-label="Create Code" ng-click="create()">            <md-icon md-svg-icon="core:add"></md-icon>            <md-tooltip md-direction="right">Create Dymamic Code</md-tooltip>        </md-button>    </div>    <p data-ng-show="codes.firstPageLoaded && !codes.length">        You don\'t have any Dynamic Codes yet. Start by creating your first        Code.    </p>    <div class="codes-list" layout="row" layout-wrap>        <md-card ng-repeat="code in codes" ng-click="viewStats(code)" class="dynamic-code anim-list" flex>            <md-card-content>                <div layout="row">                    <md-icon md-svg-icon="core:link" class="type-icon"></md-icon>                    <div flex>                        <h3 class="title" flex>{{code.title}}</h3>                        <div class="num-scans">{{code.totalViews}} Scans</div>                    </div>                </div>                <p qr-dynamic-preview="code.qrcode" class="md-body-1">                </p>            </md-card-content>            <div flex></div>            <md-card-footer layout="row" layout-align="end center">                <md-button href="/mycodes/{{code.qrid}}">Edit</md-button>                <md-button ng-click="delete(code, $event)">Delete</md-button>            </md-card-footer>        </md-card>    </div>    <div            data-qr-when-scrolled="codes.loadNextPage()">    </div></div>')
}]), angular.module("views/parsedContent.html", []).run(["$templateCache", function(e) {
 e.put("views/parsedContent.html", '<div class="qr-parsed-content">    <div data-ng-switch data-on="content.type">        <div data-ng-switch-when="sms" class="sms">            <div class="type-info">Type: SMS</div>            <span class="label">To:</span> <a href="tel:{{content.number}}">            {{content.number}}        </a>            <div class="content-text">{{content.text}}</div>        </div>        <div data-ng-switch-when="url" class="url">            <div class="type-info">Type: URL</div>            <a href="{{content.href}}">{{content.href}}</a>        </div>        <div data-ng-switch-when="tel" class="tel">            <div class="type-info">Type: Phone Number</div>            <a href="tel:{{content.number}}">{{content.number}}</a>        </div>        <div data-ng-switch-when="contact" class="contact">            <div class="type-info">Type: Contact</div>            <div class="name contact-item">                {{content.firstname}} {{content.name}}            </div>            <div data-ng-show="content.organization"                 class="organization contact-item">                {{content.organization}}            </div>            <div data-ng-show="content.addresses">                <div data-ng-repeat="address in content.addresses">                    <div class="address contact-item">                        {{address}}                    </div>                </div>            </div>            <div data-ng-repeat="tel in content.telephones">                <a href="tel:{{tel}}">{{tel}}</a>            </div>            <div data-ng-repeat="email in content.emails">                <a href="mailto:{{email}}">{{email}}</a>            </div>            <div data-ng-repeat="url in content.urls">                <a href="{{url}}">{{url}}</a>            </div>        </div>        <div data-ng-switch-when="text" class="text">            <div class="type-info">Type: Text</div>            <div class="content-text"                 data-ng-bind-html="content.text | linky"></div>        </div>        <div data-ng-switch-when="geo" class="geo">            <div class="type-info">Type: Location</div>            <a href="https://maps.google.de/maps?q={{content.longitude}},{{content.latitude}}">                Coordinate: {{content.longitude}}, {{content.latitude}}            </a>        </div>        <div data-ng-switch-default class="default">            <div class="type-info">Unknown Type</div>        </div>    </div></div>')
}]), angular.module("views/privacy.html", []).run(["$templateCache", function(e) {
 e.put("views/privacy.html", '<qr-toolbar-content>  <h1 class="md-toolbar-tools">Privacy Policy</h1></qr-toolbar-content><div class="view-help text-view" layout-padding>  <p>    Thank you for using the-qrcode-generator.com!    Here we describe what information we collect, why we collect it and how we handle it.  </p>  <h3>TL;DR</h3>  <p>    We collect anonymous statistics about your visit, like which pages you viewed.    Some 3rd parties like ad networks may know you visited this website.    We never share your data with 3rd parties except to help us deliver our services.    These are the key points, if you need detail, keep reading.  </p>  <h3>What we collect</h3>  <p>    <em>Information you give to us related to your account.</em> For example our email address    (if you sign in).  </p>  <p>    <em>Usage information.</em> When you use our services, we may automatically collect and    store    information in logs. This may include details how you use our services, your IP address,    system type or settings  </p>  <p>    <em>Google Analytics.</em>    We measure visitors to our website using Google Analytics. This records what pages you view    within our site, how you arrived at our site and some basic information about your    computer. All of that information is anonymous. So we don’t know who you are, just that    somebody visited our site.    The information we collect from analytics helps us understand what parts of our sites are    doing well, how people arrive at our site and so on. Like most websites, we use this    information to make our website better.    Please <a href="https://www.google.com/policies/privacy/partners/">see here</a> how Google    uses data. You can also <a href="https://tools.google.com/dlpage/gaoptout">opt out if you    wish.</a>  </p>  <p>    <em>Advertisement on our sites.</em>    We do not share any data with Advertisers. Third party vendors, including Google, use cookies    to serve ads based on prior visits to our sites. Google uses a DoubleClick cookie that enables    it and its partners to serve ads based on your visit to our sites and/or other sites on the    Internet. You can opt out of the use of the DoubleClick cookie for interest-based advertising    by visiting <a href="http://www.google.com/ads/preferences/">Ads Settings</a>. Please see <a    href="https://www.google.com/policies/privacy/partners/">here</a> how Google uses data.    The cookies of other third-party vendors or ad networks may also be used to serve ads on our    sites. You can opt out of many third-party vendor\'s use of cookies for interest-based    advertising by visiting <a href="http://www.aboutads.info/choices/">aboutads.info</a>.  </p>  <p>    <em>Static QR Codes.</em>    Static QR codes you create with our Service directly encode all content directly in the image    itself.    We do not collect, transmit or store any information you enter. The Code is generated directly    in the browser without transmiting any information to a remote system (that\'s why it also works    offline by the way).  </p>  <p>    <em>Dynamic QR Codes.</em>    Dynamic QR codes you create with our Service encode a static URL that points to the actual    content (for example the actual URL) hosted by our Services.    We store the content of your QR Codes on our Servers to deliver this Service.  </p>  <p>    <em>Scanning QR Codes.</em>    We do not collect, transmit or store any data from QR Codes you scan using our Services.    Scanning happens completely locally in your browser.  </p>  <h3>Children’s Privacy</h3>  <p>    Our Services are not intended for and may not be used by children under the age of 13. We    do not knowingly collect information from children under the age of 13 and we do not target    our Services to children under the age of 13.  </p>  <p>    Educators that have the authority to act on parent’s behalf, may allow students under    13 to use our Services, if such use is for educational purposes, and if this    use ensures that students will not provide any personal information.  </p>  <p>If you have questions about our Service, please contact us at <a    href="mailto:mb@the-qrcode-generator.com">mb@the-qrcode-generator.com</a></p></div>')
}]), angular.module("views/qrShareableCode.html", []).run(["$templateCache", function(e) {
 e.put("views/qrShareableCode.html", '<div class="qr-shareable-code">    <div data-qr-code data-qr-size="{{size}}"         data-qr-content="{{content}}"></div>    <div class="qr-share-buttons">        <button data-ng-show="canShare" data-ng-click="share()">Share</button>        <button data-ng-show="canSave" data-ng-click="save()">Save</button>    </div></div>')
}]), angular.module("views/qrSizeChooser.html", []).run(["$templateCache", function(e) {
 e.put("views/qrSizeChooser.html", '<div class="qr-size-chooser">    <md-button ng-repeat="size in sizes"        ng-click="$parent.radioSize = size"        ng-class="{checked: size == radioSize}">        <span class="qr-size-name">{{size}}px</span>    </md-button>    <div class="qr-size-custom"         ng-click="radioSize = \'custom\'"        data-ng-class="{checked: \'custom\' == radioSize}">        <label>            <span class="qr-size-name">Custom</span>            <span class="input-wrapper">                <input type="number"                       data-qr-autoselect                       data-ng-model="customSize"/>px            </span>        </label>    </div></div>')
}]), angular.module("views/qrTabbedInputs.html", []).run(["$templateCache", function(e) {
 e.put("views/qrTabbedInputs.html", '<md-tabs md-selected="selectedIdx">    <md-tab label="{{tab.label}}" ng-repeat="tab in tabs"></md-tab></md-tabs><div ng-switch="model.type" help-tour-highlight="qr-inputs">    <div ng-switch-when="txt">        <md-input-container>            <label>Enter text to share here</label>            <textarea                    qr-focus="true"                    autofocus="autofocus"                    columns="1"                    ng-model="data.txt"></textarea>        </md-input-container>    </div>    <div ng-switch-when="url">        <md-input-container>            <label>Enter URL</label>            <input type="text" class="input-xlarge" autofocus="true"                   ng-model="data.url"                   qr-focus="true"/>        </md-input-container>        <md-button class="md-raised"                   data-ng-disabled="shortenButtonDisabled"                   data-ng-show="!model.isDynamic &&                data.url.length > 19 && shortURLInfo.shortURL != data.url"                   data-ng-click="shortenURL()">Shorten URL        </md-button>        <div class="alert alert-info"             data-ng-show="shortURLInfo.shortURL && shortURLInfo.shortURL == data.url">            The short URL {{shortURLInfo.shortURL}} encoded in the QR Code            redirects to <a data-ng-href="{{shortURLInfo.originalURL}}"                            target="_blank">            {{shortURLInfo.originalURL}}        </a>.        </div>    </div>    <div ng-switch-when="contact">        <md-input-container>            <label>Name</label>            <input type="text" ng-model="data.contact.name"                   data-qr-focus="true">        </md-input-container>        <md-input-container>            <label>First Name</label>            <input type="text" ng-model="data.contact.firstname">        </md-input-container>        <md-input-container>            <label>Organization</label>            <input type="text" ng-model="data.contact.organization">        </md-input-container>        <md-input-container>            <label>Email</label>            <input type="text" ng-model="data.contact.email">        </md-input-container>        <md-input-container>            <label>Phone</label>            <input type="text" ng-model="data.contact.phone">        </md-input-container>        <md-input-container>            <label>Cell</label>            <input type="text" ng-model="data.contact.cell">        </md-input-container>        <md-input-container>            <label>Fax</label>            <input type="text" ng-model="data.contact.fax">        </md-input-container>        <md-input-container>            <label>Street</label>            <input type="text" ng-model="data.contact.street">        </md-input-container>        <md-input-container>            <label>Postcode</label>            <input type="text" ng-model="data.contact.postcode">        </md-input-container>        <md-input-container>            <label>City</label>            <input type="text" ng-model="data.contact.city">        </md-input-container>        <md-input-container>            <label>Region/State</label>            <input type="text" ng-model="data.contact.region">        </md-input-container>        <md-input-container>            <label>Country</label>            <input type="text" ng-model="data.contact.country">        </md-input-container>        <md-input-container>            <label>URL/Website</label>            <input type="text" ng-model="data.contact.url">        </md-input-container>    </div>    <div data-tab         ng-switch-when="phone">        <md-input-container>            <label>Enter Phone Number</label>            <input type="tel" ng-model="data.phone"                   data-qr-focus="true"/>        </md-input-container>    </div>    <div ng-switch-when="sms">        <md-input-container>            <label>Number</label>            <input type="tel" ng-model="data.sms.number"                   data-qr-focus="true"/>        </md-input-container>        <md-input-container>            <label>Enter Message</label>            <textarea                    rows="5"                    ng-model="data.sms.message">            </textarea>        </md-input-container>    </div></div>')
}]), angular.module("views/renameDialog.html", []).run(["$templateCache", function(e) {
 e.put("views/renameDialog.html", '<md-dialog>    <md-content>        <h2 class="md-title">Rename Code</h2>        <form data-ng-submit="save()">            <md-input-container>                <label>                    Enter a title for this QR Code:                </label>                <input type="text" data-ng-model="title"                       autofocus="true"                       qr-focus="true"                       qr-autoselect>            </md-input-container>            <span class="help-block">The title is only visible to you.</span>        </form>    </md-content>    <div class="md-actions">        <md-button ng-click="cancel()">Cancel</md-button>        <md-button class="md-primary" ng-click="save()">OK</md-button>    </div></md-dialog>')
}]), angular.module("views/saveDialog.html", []).run(["$templateCache", function(e) {
 e.put("views/saveDialog.html", '<md-dialog aria-label="Save QR Code">    <md-content>        <h2 class="md-title">Save QR Code</h2>        <form class="form-horizontal" data-ng-submit="save()">            <md-input-container>                <label>Filename</label>                <input type="text" ng-model="filename"                       autofocus="true"                       qr-focus="true"                       data-placeholder="qrcode.{{format}}">            </md-input-container>            <p>Format:</p>            <md-radio-group ng-model="format" layout="row">                <md-radio-button value="png" class="md-primary">PNG</md-radio-button>                <md-radio-button value="svg">SVG</md-radio-button>                <md-radio-button value="eps">EPS</md-radio-button>            </md-radio-group>        </form>    </md-content>    <div class="md-actions">        <md-button ng-click="cancel()">Cancel</md-button>        <md-button class="md-primary" ng-click="save()">Save</md-button>    </div></md-dialog>')
}]), angular.module("views/scan.html", []).run(["$templateCache", function(e) {
 e.put("views/scan.html", '<div class="view-scan">    <qr-toolbar-content>        <h1 ng-if="isScanning">QR Code Scanner</h1>        <h1 ng-if="!isScanning">Content of QR Code</h1>    </qr-toolbar-content>    <div class="qr-scanner" data-ng-if="isScanning">        <div class="access-hint">            <div class="grant-access">                Please grant access to your webcam...            </div>        </div>        <div data-qr-scanning             class="qr-continuous-scanner"             data-on-decoded="onDecoded"             data-stopped="!isScanning">        </div>    </div>    <div data-ng-show="!isScanning" class="qr-scanner-decoded" layout-padding>        <md-button class="md-primary md-raised" data-ng-hide="isScanning"                   data-ng-click="isScanning = true">Scan Again        </md-button>        <div data-qr-parsed-content             data-qr-content="decoded"></div>    </div></div>')
}]), angular.module("views/scanFallback.html", []).run(["$templateCache", function(e) {
 e.put("views/scanFallback.html", '<div id="scan-fallback-view" class="qr-view">    <ul class="buttons-list">        <li>            <button data-ng-click="scan()">Scan Again</button>        </li>    </ul>    <div data-ng-show="decoded" class="qr-scanner-decoded">        <div data-qr-parsed-content             data-qr-content="decoded"></div>    </div>    <div role="status" data-ng-show="isProcessing">        <progress class="small"></progress>        <span>Loading Image</span>    </div>    <div data-ng-show="notFound" class="qr-scanner-notfound">        No QR Code was detected.    </div></div>')
}]), angular.module("views/settingsDialog.html", []).run(["$templateCache", function(e) {
 e.put("views/settingsDialog.html", '<md-dialog>    <md-content>        <h2 class="md-title">Tracking Settings</h2>        <md-input-container>            <label>Google Analytics Property ID.</label>            <input type="text" id="ga-account"                   data-ng-model="code.gaAccount"                   data-qr-focus="true"                   placeholder="UA-XXXXXX-X">        </md-input-container>        <p>Enter your Google Analytics Property ID to track scans on Google Analytics.</p>        <md-select ng-model="code.timezone" placeholder="Timezone">            <md-option ng-value="zone.id" ng-repeat="zone in timezones">{{ zone.name }}            </md-option>        </md-select>        <p>Timezone used for tracking. All future views are counted            for the days of the selected timezone.</p>    </md-content>    <div class="md-actions">        <md-button ng-click="save()">Close</md-button>    </div></md-dialog>')
}]), angular.module("views/shareDialog.html", []).run(["$templateCache", function(e) {
 e.put("views/shareDialog.html", '<md-dialog>    <md-content>        <h2 class="md-title">Embed or Share QR Code</h2>        <div class="qr-warn-text" data-ng-show="isSizeClamped">            The QR Code will be shared at a size of only {{size}}px.            Larger sizes are currently not supported for sharing. If you need a            bigger code please save it instead.        </div>        <md-input-container>            <label>                HTML-Code            </label>            <textarea                    data-ng-model="shareHTML"                    autofocus="autofocus"                    data-qr-focus="true"                    readonly                    data-qr-autoselect>            </textarea>        </md-input-container>        <span class="help-block">This HTML-Code can be used to embed the generated            QR-Code on any site.            Alternatively, you can use the save button to save an image instead.</span>        <md-input-container>            <label>                Image URL            </label>            <input type="text" id="share-imgurl" ng-model="imageURL"                   readonly                   data-qr-autoselect>        </md-input-container>    </md-content>    <div class="md-actions">        <md-button ng-click="cancel()">Close</md-button>    </div></md-dialog>')
}]), angular.module("views/signIn.html", []).run(["$templateCache", function(e) {
 e.put("views/signIn.html", '<div class="view" layout-padding>    <div data-ng-hide="auth.checkPending">        <div class="well">            You need to be signed in to view the requested page.        </div>        <md-button class="md-primary" ng-click="signIn()">Sign in with            Google        </md-button>    </div></div>')
}]), angular.module("views/tos.html", []).run(["$templateCache", function(e) {
 e.put("views/tos.html", '<qr-toolbar-content>  <h1 class="md-toolbar-tools">Terms of Service</h1></qr-toolbar-content><div class="view-help text-view" layout-padding>  <p>    Thank you for using the-qrcode-generator.com!    These terms of service (<em>Terms</em>) cover your use and access of our website, our    Chrome Extension    and related software (our <em>Services</em>). <br>    These Services are provided by w69b GmbH, Schwabstr. 41, 72108 Rottenburg, Germany (<em>we</em>,    <em>our</em>, or <em>us</em>).  </p>  <p>    By using our Services you agree these Terms and to review our <a href="/privacy">Privacy    Policy</a>. If you do not agree to these Terms or our    Privacy Policy, you should not use our Services.  </p>  <h3>Software</h3>  <p>    Our Services may include web-based or downloadable software, which may update automatically on    your    device to newer versions.    We grant you a worldwide, non-exclusive and non-transferable to use the software solely to    use the Services.    Components of the software may be offered under an open source license, in this case we    will make that license available to you. Provisions of the open source license may expressly    override some of these Terms.  </p>  <h3>Changes to Services</h3>  <p>    We may change the features of our Services, withdraw or add new features form time to time.  </p>  <h3>Pricing</h3>  <p>    Our Services are offered for free. We fund this by ads that are shown solely on the generator    website.    We will never show any advertisement to users that scan your QR Codes.  </p>  <p>    <em>No scan limits and we\'ll play nice.</em>    We do not limit the number of scans of your dynamic QR Codes, nor will we ever ask you to pay    to keep your Dynamic QR Codes accessible.    We\'ll also never try to charge you for using your Services retrospectively in any other way    (which should go    without saying).    Note that static QR Codes are completely stand-alone, without any reference or    dependency on our Service. That\'s because they encode any content directly. So technically    they are completely indpendent from us, once created.  </p>  <p><em>Shutdown policy.</em>    If we should ever have to close this Service in the future, we\'ll give prominent notice on this    site at least 3 years before any dynamic QR Code becomes invalid.  </p>  <h3>Limitation of Liability</h3>  <p>    To the fullest extend permitted by law, in no event shall we be liable for    any damages or loss of data, business, profits, computer hardware or software.    In no event shall our liability to you exceed the greater than 20 EURO or the amounts paid    by you to us for the past 12 months.  </p>  <h3>Warranties</h3>  <p>    We strive to provide good Services and hope you enjoy using them. But there are things we    cannot guarantee.    We provide our Services "As is". To the fullest extend permitted by law, we make no    warranties    either implied or expressed about    the Services. We do not make any promise about the specific functions of the services,    their    reliability or availability.</p>  <h3>Changes to Terms</h3>  <p>    We reserve the right these Terms at any time. We will always post the most current version    on our website.    By continuing to use the Services after the changes become effective, you agree to the    revised Terms.  </p></div>')
}]), angular.module("views/userMenu.html", []).run(["$templateCache", function(e) {
 e.put("views/userMenu.html", '<div class="dropdown pull-left user-menu">    <a href class="dropdown-toggle">        <i class="glyphicon-user"></i><i class="caret"></i>    </a>    <ul class="dropdown-menu">        <li>{{auth.nick}}</li>        <li class="divider"></li>        <li><a href="" data-ng-click="auth.signOut()">Sign Out</a></li>    </ul></div>')
}]), angular.module("templates", ["views/codeStats.html", "views/dateRange.html", "views/deleteDialog.html", "views/demo.html", "views/editCode.html", "views/generate.html", "views/generateWidget.html", "views/help.html", "views/helpTour.html", "views/helpTourStep.html", "views/impressum.html", "views/mycodes.html", "views/parsedContent.html", "views/privacy.html", "views/qrShareableCode.html", "views/qrSizeChooser.html", "views/qrTabbedInputs.html", "views/renameDialog.html", "views/saveDialog.html", "views/scan.html", "views/scanFallback.html", "views/settingsDialog.html", "views/shareDialog.html", "views/signIn.html", "views/tos.html", "views/userMenu.html"]), angular.module("qrAppCommon", ["qrApp.routes", "qrApp.services", "qrApp.analytics", "qrApp.directives", "qrApp.ctrls", "qrApp.constants", "qrApp.offline", "ngSanitize", "ngMaterial", "w69b.ui.pageTitle", "templates"]).config(["$httpProvider", function(e) {
 e.interceptors.push("httpInterceptor")
}]).config(["$mdIconProvider", function(e) {
 e.iconSet("core", "images/material-icons.svg", 24)
}]).config(["$mdThemingProvider", function(e) {
 e.theme("default").primaryPalette("light-green", {
  "default": "800",
  "hue-1": "100",
  "hue-2": "600",
  "hue-3": "A200"
 }).accentPalette("orange", {
  "default": "500"
 })
}]), angular.module("qrApp", ["qrAppCommon"]).run(["auth", "httpErrorNotifier", function(e) {
 e.checkAuth()
}]), angular.module("qrAppDev", ["qrApp"]), "qr.w69b.com" == window.location.hostname && (window.location.href = "https://www.the-qrcode-generator.com"), w69b.qr.decoding.setWorkerUrl("components/barcode.js/w69b.qrcode.decodeworker.min.js"), angular.module("qrApp.routes", ["qrApp.services", "ngRoute"]).config(["$routeProvider", "$locationProvider", function(e, t) {
 e.when("/", {
  templateUrl: "views/generate.html",
  controller: "GenerateCtrl",
  reloadOnSearch: !1
 }).when("/scan", {
  templateUrl: "views/scan.html",
  controller: "ScanCtrl",
  pageTitle: "QR Code Scanner"
 }).when("/signin", {
  templateUrl: "views/signIn.html",
  controller: "SignInCtrl"
 }).when("/mycodes", {
  templateUrl: "views/mycodes.html",
  controller: "MyCodesCtrl",
  authRequired: !0,
  pageTitle: "My Dynamic QR Codes"
 }).when("/mycodes/:qrid", {
  templateUrl: "views/editCode.html",
  controller: "EditCodeCtrl",
  reloadOnSearch: !1,
  authRequired: !0
 }).when("/mycodes/:qrid/stats", {
  templateUrl: "views/codeStats.html",
  controller: "CodeStatsCtrl",
  authRequired: !0
 }).when("/whats-a-qr-code", {
  templateUrl: "views/help.html"
 }).when("/whats_a_qr_code.html", {
  redirectTo: "/whats_a_qr_code"
 }).when("/whats_a_qr_code", {
  redirectTo: "/whats-a-qr-code"
 }).when("/impressum", {
  templateUrl: "views/impressum.html"
 }).when("/terms", {
  templateUrl: "views/tos.html"
 }).when("/privacy", {
  templateUrl: "views/privacy.html"
 }).when("/impressum.html", {
  redirectTo: "/impressum"
 }).when("/demo", {
  templateUrl: "views/demo.html",
  controller: "DemoCtrl"
 }).otherwise({
  redirectTo: "/"
 }), t.html5Mode(!0)
}]).config(["$compileProvider", function(e) {
 e.aHrefSanitizationWhitelist(/^\s*(https?|mailto|tel):/)
}]).run(["authRoutes", function() {}]), angular.module("qrApp.offline", []).run(["$rootScope", "$window", "$document", "constants", "$mdToast", function(e, t, n, o, a) {
 function r() {
  e.isOnline = t.navigator.onLine !== !1, t.navigator.userAgent.match(/PhantomJS/) && (e.isOnline = !0)
 }

 function i(e) {
  return new Promise(function(t, n) {
   if (e.installing) {
    var o = e.installing;
    o.addEventListener("statechange", function a(e) {
     "installed" == e.target.state ? (o.removeEventListener("statechagne", a), t()) : "redundant" == e.target.state && (o.removeEventListener("statechagne", a), n())
    })
   } else t()
  })
 }

 function s() {
  return new Promise(function(e, t) {
   var n = navigator.serviceWorker;
   n ? n.controller ? e() : n.addEventListener("controllerchange", function o() {
    n.controller && (n.removeEventListener("controllerchange", o), e())
   }) : t("no service worker available")
  })
 }

 function c() {
  "serviceWorker" in navigator && navigator.serviceWorker.register("/serviceworker.js", {
   scope: "/"
  }).then(i).then(s).then(function() {
   t.localStorage[l] || a.showSimple({
    content: "This App also works offline. Try it.",
    action: "Got It"
   }).then(function() {
    return t.localStorage[l] = !0
   })
  }).catch(function(e) {
   console.error("service worker installation failed", e)
  })
 }
 var l = "offline_hint_shown";
 r(), o.OFFLINE_SUPPORT && (t.addEventListener("online", function() {
  e.$apply(r)
 }), t.addEventListener("offline", function() {
  e.$apply(r)
 }), c())
}]), angular.module("qrApp.services", ["ngResource", "ngMaterial", "ngSanitize", "qrApp.analytics", "qr.toolbar"]), angular.module("qrApp.ctrls", ["qrApp.services", "qrApp.analytics", "ngMaterial", "w69b.throttle"]), angular.module("qrApp.directives", ["qrApp.ctrls", "qrApp.constants", "ngMaterial", "templates"]), angular.module("qrApp.ctrls").controller("ScanCtrl", ["$scope", "qrContentParser", "qrAudio", "backStack", "analytics", function(e, t, n, o, a) {
 e.isScanning = !0, e.onDecoded = function(r) {
  n.beep(), e.decoded = t.parse(r), a.trackEvent("Scan", "Decoded", e.decoded.type), e.isScanning = !1, o.push(function() {
   e.isScanning = !0
  })
 }, e.$on("$routeChangeStart", function() {
  e.$broadcast("qrScanDispose")
 })
}]), angular.module("qrApp.ctrls").controller("AppCtrl", ["$scope", "$mdSidenav", "$mdMedia", "toolbarSpinner", function(e, t, n, o) {
 e.scanSupported = w69b.qr.ui.ContinuousScanner.isSupported(), e.$mdMedia = n, e.openMenu = function() {
  return t("left").open()
 }, e.$on("$locationChangeSuccess", function() {
  t("left").close()
 }), e.toolbarSpinner = o
}]), angular.module("qrApp.directives").directive("qrTap", ["$parse", function(e) {
 return function(t, n, o) {
  var a = !1,
   r = e(o.qrTap);
  n.bind("touchstart", function() {
   a = !0
  }), n.bind("touchmove", function() {
   a = !1
  }), n.bind("touchend", function() {
   a && t.$apply(r, n)
  })
 }
}]), angular.module("qrApp.directives").directive("button", function() {
 return {
  restrict: "E",
  link: function(e, t, n) {
   if (!("btnCheckbox" in n)) {
    var o = "active";
    t.bind("touchstart", function() {
     t.addClass(o)
    }), t.bind("touchend", function() {
     t.removeClass(o)
    })
   }
  }
 }
}), angular.module("qrApp.directives").directive("qrScanning", ["$interval", function(e) {
 return {
  restrict: "AE",
  scope: {
   onDecoded: "=",
   stopped: "="
  },
  link: function(t, n, o) {
   function a() {
    l.setStopped(t.stopped || document.hidden)
   }
   var r = n[0],
    i = o.workerUrl,
    s = o.maxDecodeResolution,
    c = o.maxVisualizationResolution,
    l = new w69b.qr.ui.ContinuousScanner(i);
   t.onDecoded && l.setDecodedCallback(function(e) {
    t.$apply(function() {
     t.onDecoded(e)
    })
   });
   var d = e(function() {
    l.updateSizeFromClient()
   }, 1e3);
   t.$on("$destroy", function() {
    l.dispose(), document.removeEventListener("visibilitychange", a), e.cancel(d)
   }), t.$watch("stopped", function(e) {
    l.setStopped(e || document.hidden)
   }), document.addEventListener("visibilitychange", a), s && l.setMaxVisualizationResolution(Number(c)), s && l.setMaxDecodingResolution(Number(s)), l.render(r)
  }
 }
}]).directive("qrScanningEmbedded", ["constants", function(e) {
 return {
  restrict: "AE",
  template: '<iframe class="qr-scanning-embedded"></iframe>',
  replace: !0,
  scope: {
   onDecoded: "=",
   stopped: "="
  },
  link: function(t, n) {
   function o(t, n) {
    i && i.postMessage({
     msgtype: t,
     data: n
    }, e.SCAN_IFRAME_ORIGIN)
   }
   var a = n[0],
    r = e.SCAN_IFRAME_URL,
    i = a.contentWindow;
   if (!r) throw Error("no url configured");
   a.src = r, r = a.src, window.addEventListener("message", function(e) {
    if (e.source == i) {
     var n = e.data.msgtype,
      o = e.data.data;
     "decoded" == n && t.$apply(function() {
      t.onDecoded(o)
     })
    }
   }, !1), t.$on("qrScanDispose", function() {
    o("dispose"), a.src = "about:blank"
   }), n.bind("load", function() {
    t.$watch("stopped", function(e) {
     o("setStopped", e)
    })
   })
  }
 }
}]), angular.module("qrApp.directives").directive("qrParsedContent", function() {
 return {
  scope: {
   content: "=qrContent"
  },
  templateUrl: "views/parsedContent.html",
  replace: !0,
  controller: "ParsedContentCtrl",
  link: function(e, t) {
   t.bind("click", function(t) {
    var n = t.target;
    "a" == angular.lowercase(n.tagName) && (t.preventDefault(), e.openURL(n.href))
   })
  }
 }
}), angular.module("qrApp.services").factory("qrContentParser", ["QrContent", function(e) {
 function t(t) {
  var n = /^SMSTO:([^:]*):(.*)$/i,
   o = n.exec(t);
  return o ? new e("sms", {
   number: o[1],
   text: o[2]
  }) : null
 }

 function n(t) {
  var n = /^tel:(.*)$/i,
   o = n.exec(t);
  return o ? new e("tel", {
   number: o[1]
  }) : null
 }

 function o(t) {
  var n = /^https?:\/\/[^\s]+$/i,
   o = n.exec(t);
  return o ? new e("url", {
   href: o[0]
  }) : null
 }

 function a(e) {
  var t = /^MECARD:(.*);$/i,
   n = t.exec(e);
  if (!n) return null;
  for (var o = s(n[1], ";"), a = {}, i = 0; o.length > i; ++i) {
   var c = s(o[i], ":");
   if (!(2 > c.length)) {
    var d = angular.lowercase(c[0]),
     u = r(c.slice(1).join(":"));
    a[d] = a[d] || [], a[d].push([u])
   }
  }
  return l(a)
 }

 function r(e) {
  return e.replace(/\\,/g, ",").replace(/\\;/g, ";").replace(/\\\\/g, "\\").replace(/\\n/gi, "\n").replace(/\\:/g, ":")
 }

 function i(e) {
  return e.split("").reverse().join("")
 }

 function s(e, t) {
  var n = RegExp(t + "(?!\\\\)");
  return i(e).split(n).reverse().map(i)
 }

 function c(e) {
  var t = e.split(/\n|(\r\n)|(\n\r)/),
   n = /^\s*BEGIN:VCARD$/i,
   o = /^END:VCARD\s*$/i;
  if (!n.test(t[0])) return null;
  for (var a = {}, i = 1; t.length > i; ++i) {
   var c = t[i];
   if (o.test(c)) break;
   var d = /^(\w+)(?:;(?:TYPE=)?([\w]*)[^:]*)?:(.+)$/i.exec(c);
   if (d) {
    var u = angular.lowercase(d[1]),
     p = d[2],
     m = null;
    p && (m = angular.lowercase(p.split(";")[0])), m = m || "home";
    var h = d[3];
    h = s(h, ";").map(r), a[u] = a[u] || [], a[u].push(h)
   }
  }
  return l(a)
 }

 function l(t) {
  function n(e) {
   return t[e][0].join(", ").trim()
  }

  function o(e) {
   return t[e].map(function(e) {
    return e.filter(function(e) {
     return e
    }).join(", ").trim()
   })
  }
  var a = {};
  return t.org && (a.organization = n("org")), t.email && (a.emails = o("email")), t.tel && (a.telephones = o("tel")), t.adr && (a.addresses = o("adr")), t.url && (a.urls = o("url")), t.n ? (a.name = t.n[0][0], a.firstname = t.n[0].slice(1).join(" ").trim()) : t.fn && (a.name = n("fn")), _.isEmpty(a) ? null : new e("contact", a)
 }

 function d(t) {
  var n = /^geo:([\-\d\.]+),([\-\d\.]+)(?:,([\-\d\.]+))?(?:\?(.*))?$/i,
   o = n.exec(t);
  if (!o) return null;
  var a = parseFloat(o[1]),
   r = parseFloat(o[2]);
  return r > 90 || -90 > r || a > 180 || -180 > r ? null : new e("geo", {
   longitude: a,
   latitude: r
  })
 }

 function u(t) {
  return new e("text", {
   text: t
  })
 }

 function p(e) {
  for (var r = [n, o, t, c, a, d, u], i = 0; r.length > i; ++i) {
   var s = r[i](e);
   if (s) return s
  }
  return null
 }
 return {
  parseTel: n,
  parseURL: o,
  parseSMS: t,
  parseVCard: c,
  parseMeCard: a,
  parseGeo: d,
  parse: p
 }
}]), angular.module("qrApp.services").factory("QrContent", function() {
 var e = function(e, t) {
  angular.forEach(t, function(e, t) {
   this[t] = e
  }, this), this.type = e
 };
 return e
}), angular.module("qrApp.services").factory("qrAudio", ["$window", function(e) {
 function t() {
  o.play()
 }
 var n;
 angular.isDefined(e.Audio) ? n = e.Audio : (n = function() {}, n.prototype.play = function() {});
 var o = new n("/audio/beep.ogg");
 return {
  beep: t
 }
}]), angular.module("qrApp.services").provider("backStack", function() {
 var e = {};
 this.setParent = function(t, n) {
  e[t] = n
 }, this.$get = ["$location", function(t) {
  function n(e) {
   i.push(e)
  }

  function o() {
   if (i.length > 0) {
    var e = i.pop();
    e()
   } else {
    var n = a(t.path());
    n && t.path(n)
   }
  }

  function a(t) {
   var n = e[t] || "/";
   return t != n ? n : null
  }

  function r() {
   return !!(i.length > 0 || a(t.path()))
  }
  var i = [];
  return {
   canGoBack: r,
   back: o,
   push: n
  }
 }]
}), angular.module("qrApp.ctrls").controller("ActionBarCtrl", ["$scope", "backStack", function(e, t) {
 e.canGoBack = t.canGoBack, e.goBack = t.back
}]), angular.module("qrApp.ctrls").controller("HomeCtrl", ["$scope", "$location", function(e, t) {
 e.onScan = function() {
  t.path("/scan")
 }, e.onGenerate = function() {
  t.path("/generate")
 }
}]), angular.module("qrApp.ctrls").controller("DemoCtrl", ["$scope", "QrContent", function(e, t) {
 e.contact = new t("contact", {
  firstname: "Manuel",
  name: "Braun",
  telephones: ["12345", "789123"],
  emails: ["mb@example.com", "bla@xxxasdfasldkfjasfdlkasjadsasdfasdffk.com"],
  addresses: ["SomeStreet, SomeTown, Somewhere blabla USA", "Edith-Stein-Str 11, 79110 Freiburg, Germany"],
  urls: ["http://example.com", "http://youtube.com"],
  organization: "w69b"
 }), e.link = new t("url", {
  href: "http://example.com"
 }), e.tel = new t("tel", {
  number: "123456"
 }), e.text = new t("text", {
  text: "lorem ipem\nasdfasdf\nasdfdf\n<safe>asdfdf</safe>\n what about http://example.com ? or bla@example.com"
 }), e.sms = new t("sms", {
  number: "+4977123456",
  text: "hello world"
 })
}]), angular.module("qrApp.services").factory("webActivities", ["$window", function(e) {
 function t(t) {
  h ? new MozActivity({
   name: "view",
   data: {
    type: "url",
    url: t
   }
  }) : e.open(t)
 }

 function n(t) {
  e.location = t
 }

 function o(t, n, o) {
  var a = n || "",
   r = o || "",
   i = "mailto:" + t + "?subject=" + encodeURIComponent(a) + "&body=" + encodeURIComponent(r);
  h ? new MozActivity({
   name: "new",
   data: {
    url: i
   }
  }) : e.location.href = i
 }

 function a(e) {
  h && new MozActivity({
   name: "new",
   data: {
    type: "websms/sms",
    number: e
   }
  })
 }

 function r(t) {
  h ? new MozActivity({
   name: "dial",
   data: {
    number: t
   }
  }) : e.location.href = "tel:" + t
 }

 function i(e) {
  if (h) {
   var t = new MozActivity({
    name: "pick",
    data: {
     type: ["image/png", "image/jpg", "image/jpeg"]
    }
   });
   t.onsuccess = function() {
    e(t.result.blob)
   }
  } else {
   var n = document.createElement("input");
   n.type = "file";
   var o = function() {
    n.files.length && e(n.files[0]), n.removeEventListener("change", o, !1)
   };
   n.addEventListener("change", o, !1), n.click()
  }
 }

 function s() {
  if (h) {
   var e = new MozActivity({
    name: "pick",
    data: {
     type: ["webcontacts/contact"]
    }
   });
   e.onsuccess = function() {
    console.log(e.result)
   }
  }
 }

 function c(e) {
  if (h) {
   var t = {};
   e.telephones && e.telephones.length > 0 && (t.tel = e.telephones[0]), e.firstname && (t.giveName = e.firstname), e.name && (t.familyName = e.name), e.emails && e.emails.length > 0 && (t.email = e.emails[0]), e.organization && (t.company = e.organization), e.addresses && e.addresses.length > 0 && (t.address = e.addresses[0]), new MozActivity({
    name: "new",
    data: {
     type: "webcontacts/contact",
     params: t
    }
   })
  }
 }

 function l(e) {
  new MozActivity({
   name: "share",
   data: {
    number: 1,
    url: e
   }
  })
 }

 function d(e) {
  new MozActivity({
   name: "share",
   data: {
    number: 1,
    blobs: [e]
   }
  })
 }

 function u(e, t) {
  w69b.FileSaver.saveAs(e, t)
 }

 function p() {
  return w69b.FileSaver.isSupported()
 }

 function m() {
  return h
 }
 var h = window.MozActivity ? !0 : !1;
 return {
  openURL: t,
  redirectTo: n,
  pickImage: i,
  pickContact: s,
  openDialer: r,
  composeSMS: a,
  composeEmail: o,
  saveContact: c,
  shareBlob: d,
  shareURL: l,
  saveBlob: u,
  isSaveBlobSupported: p,
  isComposeSMSSupported: m,
  isShareBlobSupported: m,
  isSaveContactSupported: m
 }
}]), angular.module("qrApp.ctrls").controller("ParsedContentCtrl", ["$scope", "webActivities", function(e, t) {
 e.canComposeSMS = t.isComposeSMSSupported(), e.canSaveContact = t.isSaveContactSupported(), e.openURL = t.openURL, e.openDialer = t.openDialer, e.composeEmail = t.composeEmail, e.composeSMS = t.composeSMS, e.saveContact = t.saveContact
}]), angular.module("qrApp.services").factory("fallbackDecoder", ["$window", function(e) {
 function t(t, o) {
  var a;
  a = angular.isString(t) ? t : e.URL.createObjectURL(t);
  var r = new Image;
  r.onload = function() {
   var i = w69b.imgtools.getImageData(r, 700);
   angular.isString(t) || e.URL.revokeObjectURL(a), n(i, o)
  }, r.src = a
 }

 function n(e, t) {
  a.decode(e, function(e, n) {
   e == o.DECODED ? t(n.text) : e == o.NOTFOUND && t(null)
  })
 }
 var o = w69b.qr.WorkerMessageType,
  a = new w69b.qr.DecodeInWorkerHelper;
 return {
  decode: n,
  decodeImage: t
 }
}]), angular.module("qrApp.ctrls").controller("GenerateWidgetCtrl", ["$scope", "qrContentEncoder", "qrEncoder", "webActivities", "analytics", "$timeout", "zazzle", "statusbar", "$mdDialog", function(e, t, n, o, a, r, i, s, c) {
 function l() {
  return Math.min(1e4, e.qrCodeSize)
 }

 function d(t) {
  n.getPngBlob(e.encodedContent, l(), e.options.margin, function(e) {
   o.saveBlob(e, t), a.trackEvent("Generate", "Save", "saved png")
  })
 }

 function u(t) {
  var i = n.getSvgBlob(e.encodedContent, l(), e.options.margin);
  r(function() {
   o.saveBlob(i, t)
  }, 0), a.trackEvent("Generate", "Save", "saved svg")
 }

 function p(t) {
  var i = n.getEpsBlob(e.encodedContent, l(), e.options.margin);
  r(function() {
   o.saveBlob(i, t)
  }, 0), a.trackEvent("Generate", "Save", "saved eps")
 }
 var m = 200;
 e.optionsShown = 0, e.options = {
  size: 200,
  margin: 1
 }, e.zazzleRunning = !1, e.$watch("options.noMargin", function(t) {
  e.options.margin = t ? 0 : 1
 }), e.$watch("[qrcode, staticContent]", _.throttle(function() {
  e.encodedContent = e.staticContent ? e.staticContent : e.qrcode && e.qrcode.type ? t.encode(e.qrcode) : "", e.$root.$$phase || e.$apply()
 }, 200), !0), e.$watch("[options, encodedContent]", function() {
  var t = e.options.size;
  if (!n.isSupported()) return e.qrCodeSize = t, void 0;
  var o = n.getSize(e.encodedContent);
  1 > e.options.margin && (t = Math.floor(t / o) * o), o > t && (t = o), e.qrCodeSize = t
 }, !0), e.$watch("qrCodeSize", function(t) {
  e.showClamped = t > m, e.clampedSize = Math.min(Math.max(t, 0), m)
 }), e.save = function(e) {
  a.trackEvent("Generate", "Save", "Dialog"), c.show({
   controller: "SaveDialogCtrl",
   templateUrl: "views/saveDialog.html",
   targetEvent: e,
   focusOnOpen: !1
  }).then(function(e) {
   e && ("png" == e.format ? d(e.filename) : "eps" == e.format ? p(e.filename) : u(e.filename))
  })
 }, e.share = function(t) {
  var n = {
   content: angular.copy(e.encodedContent),
   size: e.clampedSize,
   margin: e.options.margin
  };
  c.show({
   locals: {
    qrcode: n
   },
   controller: "ShareDialogCtrl",
   focusOnOpen: !1,
   templateUrl: "views/shareDialog.html",
   targetEvent: t
  }), a.trackEvent("Generate", "Share")
 }, e.printWithZazzle = function() {
  if (!e.zazzleRunning) {
   if (!e.encodedContent.length) return s.showMessage("Please enter something first.", 2e3), void 0;
   e.zazzleRunning = !0, a.trackEvent("Zazzle", "Prepare", e.qrcode.type), i.prepareProducts(e.encodedContent, e.qrcode).then(function() {
    e.zazzleRunning = !1
   })
  }
 }
}]), angular.module("qrApp.directives").directive("qrCode", ["qrEncoder", function(e) {
 var t = !e.isSupported(),
  n = '<canvas data-ng-hide="hide"></canvas>';
 return t && (n = '<img data-ng-hide="hide"/>'), {
  restrict: "E",
  scope: {
   content: "@qrContent",
   size: "@qrSize",
   hide: "=qrHide",
   margin: "@qrMargin"
  },
  template: n,
  replace: !0,
  link: function(n, o) {
   var a = o[0],
    r = function() {
     return "" !== n.margin ? Number(n.margin) : 1
    },
    i = function() {
     n.hide || (t ? a.src = e.getHostedURL(n.content, Number(n.size) || 100, r()) : e.drawOnCavas(n.content, a, r()))
    },
    s = function() {
     var e = n.size || 100;
     a.width = e, a.height = e, i()
    };
   n.$watch("[content, hide, margin]", function(e, t) {
    angular.equals(e, t) || i()
   }, !0), n.$watch("size", s)
  }
 }
}]), angular.module("qrApp.ctrls").controller("QrShareableCodeCtrl", ["$scope", "qrEncoder", "webActivities", function(e, t, n) {
 e.canSave = n.isSaveBlobSupported(), e.canShare = n.isShareBlobSupported(), e.share = function() {
  t.getPngBlob(e.content, 300, function(e) {
   n.shareBlob(e)
  })
 }, e.save = function() {
  t.getPngBlob(e.content, 300, function(e) {
   n.saveBlob(e, "qrcode.png")
  })
 }
}]), angular.module("qrApp.services").factory("qrEncoder", function() {
 function e(e, t, n) {
  w69b.qr.encoding.drawOnCanvas(e || "", t, n)
 }

 function t(e) {
  return w69b.qr.encoding.getSize(e)
 }

 function n(t, n, o, a) {
  var r = document.createElement("canvas");
  r.width = n, r.height = n, e(t, r, o), w69b.imgtools.getCanvasAsBlob(r, a)
 }

 function o(e, t, n) {
  return new Blob([w69b.qr.encoding.drawAsSVG(e, t, n)])
 }

 function a(e, t, n) {
  return new Blob([w69b.qr.encoding.drawAsEPS(e, t, n)])
 }

 function r(e, t, n) {
  var o = angular.isDefined(n) ? n : 1;
  return "http://chart.apis.google.com/chart?chs=" + t + "x" + t + "&cht=qr&chld=|" + o + "&chl=" + encodeURIComponent(e)
 }

 function i(e, t, n) {
  var o = angular.isDefined(n) ? n : 1;
  return "http://gen.the-qrcode-generator.com/?dl=1&size=" + t + "&margin=" + o + "&content=" + encodeURIComponent(e)
 }

 function s() {
  return "undefined" != typeof Int32Array
 }
 return {
  drawOnCavas: e,
  getSvgBlob: o,
  getEpsBlob: a,
  getPngBlob: n,
  getHostedURL: r,
  getDownloadURL: i,
  isSupported: s,
  getSize: t
 }
}), angular.module("qrApp.directives").directive("qrShareableCode", ["$window", function(e) {
 return {
  scope: {
   content: "@qrContent",
   show: "=qrShow"
  },
  templateUrl: "views/qrShareableCode.html",
  replace: !0,
  controller: "QrShareableCodeCtrl",
  link: function(t, n, o) {
   function a() {
    var e = o.qrMinSize || 100,
     n = i.clientHeight,
     a = r.clientHeight - n;
    a -= 5;
    var s = Math.max(Math.min(r.clientWidth, a), e);
    t.size = s
   }
   var r = n[0],
    i = n.children()[1],
    s = angular.element(e);
   t.$watch("show", function(e) {
    n.css("display", e === !1 ? "none" : ""), a()
   }), s.bind("resize", t.$apply.bind(t, a)), n.bind("$destroy", function() {
    s.unbind("resize", a)
   }), a()
  }
 }
}]), angular.module("qrApp.directives").controller("TabbedInputsCtrl", ["$scope", "$http", "statusbar", function(e, t, n) {
 function o() {
  var t = e.model.type;
  return {
   type: t,
   isDynamic: e.model.isDynamic,
   content: e.data[t]
  }
 }
 e.data = {
  txt: "",
  contact: {},
  sms: {},
  phone: "",
  url: ""
 }, e.tabs = [{
  value: "txt",
  label: "Free Text"
 }, {
  value: "url",
  label: "URL"
 }, {
  value: "contact",
  label: "Contact"
 }, {
  value: "phone",
  label: "Phone"
 }, {
  value: "sms",
  label: "SMS"
 }], Object.defineProperty(e, "selectedIdx", {
  get: function() {
   return e.tabs.map(function(e) {
    return e.value
   }).indexOf(e.model.type)
  },
  set: function(t) {
   e.model.type = e.tabs[t].value
  }
 }), e.shortenButtonDisabled = !1, e.shortURLInfo = {
  shortURL: "",
  originalURL: ""
 }, e.model || (e.model = {
  type: "txt",
  content: ""
 }), e.$watch("model.content", function(t) {
  e.data[e.model.type] = t
 }, !0), e.$watch(o, function(t) {
  e.model = t
 }, !0), e.shortenURL = function() {
  var o = e.data.url;
  /^https?:\/\//.test(o) || (o = "http://" + o), e.shortenButtonDisabled = !0, n.showMessage("Shortening URL...", 0), t.post("/api/shorten", o).success(function(t) {
   var a = t.short_url;
   e.data.url = a, e.shortenButtonDisabled = !1, e.shortURLInfo.originalURL = o, e.shortURLInfo.shortURL = a, n.hide()
  }).error(function() {
   e.shortenButtonDisabled = !1, n.showError("Oups, we could not shorten the URL. Are you online?")
  })
 }
}]).directive("qrTabbedInputs", function() {
 return {
  restrict: "E",
  templateUrl: "views/qrTabbedInputs.html",
  replace: !1,
  controller: "TabbedInputsCtrl",
  scope: {
   model: "="
  }
 }
}).directive("qrSizeChooser", function() {
 return {
  restrict: "EA",
  controller: ["$scope", function(e) {
   e.sizes = [50, 100, 200, 300], e.radioSize = 200, e.customSize = 150
  }],
  templateUrl: "views/qrSizeChooser.html",
  replace: !0,
  scope: {
   size: "="
  },
  link: function(e) {
   e.$watch("[radioSize, customSize]", function() {
    e.size = "custom" == e.radioSize ? e.customSize || 0 : e.radioSize
   }, !0)
  }
 }
}), angular.module("qrApp.analytics", ["qrApp.constants"]).run(["$window", "$rootScope", "$location", "analytics", "constants", function(e, t, n, o, a) {
 var r = a.ANALYTICS_ACCOUNT;
 a.ANALYTICS_ENABLE || (e["ga-disable-" + r] = !0), o.push(["_setAccount", r]),
  function() {
   var e = document.createElement("script");
   e.type = "text/javascript", e.async = !0, e.src = ("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";
   var t = document.getElementsByTagName("script")[0];
   t.parentNode.insertBefore(e, t)
  }();
 var i = null;
 t.$on("$viewContentLoaded", function() {
  var e = n.path();
  i != e && (o.trackPageView(e), i = e)
 })
}]).service("analytics", ["$window", function(e) {
 function t(e) {
  o.push(["_trackPageview", e])
 }

 function n() {
  var e = Array.prototype.slice.call(arguments);
  o.push(["_trackEvent"].concat(e))
 }
 var o = {
  trackEvent: n,
  trackPageView: t,
  push: function(t) {
   e._gaq || (e._gaq = []), e._gaq.push(t)
  }
 };
 return o
}]), angular.module("qrApp.services").factory("idGenerator", function() {
 var e = 0;
 return {
  getId: function() {
   return "gid-" + e++
  }
 }
}), angular.module("qrApp.services").factory("qrContentEncoder", function() {
 function e() {
  function e(e) {
   return !e
  }
  var t = ["BEGIN:VCARD", "VERSION:3.0"];
  return {
   addType: function(n, o) {
    var a;
    if (angular.isArray(o)) {
     if (_.every(o, e)) return;
     o = o.filter(_.isString), a = o.map(r).join(";")
    } else {
     if (!o) return;
     a = r(o)
    }
    t.push(angular.uppercase(n) + ":" + a)
   },
   toString: function() {
    return t.concat("END:VCARD").join("\n")
   }
  }
 }

 function t(e) {
  return "tel:" + e
 }

 function n(e, t) {
  return "SMSTO:" + e + ":" + t
 }

 function o(e) {
  return /^https?:\/\//i.test(e) ? e : "http://" + e
 }

 function a(t) {
  var n = e();
  return n.addType("n", [t.name, t.firstname]), n.addType("org", t.organization), n.addType("email;type=internet", t.email), n.addType("url", t.url), n.addType("tel;type=cell", t.cell), n.addType("tel", t.phone), n.addType("tel;type=fax", t.fax), n.addType("adr", ["", "", t.street, t.city, t.region, t.postcode, t.country]), "" + n
 }

 function r(e) {
  return e.replace(/\\/g, "\\\\").replace(/,/g, "\\,").replace(/;/g, "\\;").replace(/(\r?\n)|\r/g, "\\n")
 }

 function i(e) {
  var r = e.type,
   i = e.content;
  switch (r) {
   case "url":
    return o(i);
   case "txt":
    return i;
   case "sms":
    return n(i.number || "", i.message || "");
   case "phone":
    return t(i);
   case "contact":
    return a(i)
  }
  return ""
 }
 return {
  encode: i,
  vcardEscape: r,
  encodeVCard: a
 }
}), angular.module("qrApp.ctrls").controller("ConfirmDialogCtrl", ["$scope", "$mdDialog", function(e, t) {
 e.cancel = function() {
  t.cancel()
 }, e.save = function() {
  t.hide(!0)
 }
}]).controller("RenameDialogCtrl", ["$scope", "$mdDialog", "title", function(e, t, n) {
 e.title = n, e.cancel = function() {
  t.cancel()
 }, e.save = function() {
  t.hide(e.title)
 }
}]).controller("SaveDialogCtrl", ["$scope", "$mdDialog", function(e, t) {
 e.cancel = function() {
  t.cancel()
 }, e.save = function() {
  var n = e.filename || "qrcode",
   o = e.format;
  /\.(png|svg|eps)/i.test(n) || (n += "." + o), t.hide({
   filename: n,
   format: o
  })
 }, e.format = "png"
}]).controller("ShareDialogCtrl", ["$scope", "qrEncoder", "$mdDialog", "qrcode", function(e, t, n, o) {
 function a() {
  var e = r.replace(/&/g, "&amp;");
  return '<a href="https://www.the-qrcode-generator.com/"><img src="' + e + '" alt="QR Code" /></a>'
 }
 e.size = o.size, e.isSizeClamped = !1, e.size > 500 && (e.isSizeClamped = !0, e.size = 500);
 var r = t.getHostedURL(o.content, e.size, o.margin);
 e.shareHTML = a(), e.imageURL = r, e.cancel = function() {
  n.cancel()
 }
}]), angular.module("w69b.ui.pageTitle", []).controller("titleController", ["$scope", "$route", function(e, t) {
 e.$root.$on("$routeChangeSuccess", function() {
  e.$root.pageTitle = t.current.pageTitle
 })
}]), angular.module("qrApp.directives").directive("qrFocus", ["$timeout", function(e) {
 return {
  link: function(t, n, o) {
   t.$watch(o.qrFocus, function(t) {
    angular.isDefined(t) && t && e(function() {
     n[0].focus(), n[0].select()
    })
   }, !0), n.bind("blur", function() {
    angular.isDefined(o.qrFocusLost) && t.$apply(o.qrFocusLost)
   })
  }
 }
}]).directive("qrAutoselect", ["$timeout", function(e) {
 return {
  link: function(t, n) {
   n.bind("focus click", function() {
    e(function() {
     n[0].select()
    })
   })
  }
 }
}]), angular.module("qrApp.directives").directive("qrRouteLink", ["$location", function(e) {
 return {
  restrict: "A",
  link: function(t, n, o) {
   var a = o.qrRouteLink || "active",
    r = o.href;
   "#" == r[0] && (r = r.substr(1)), t.$watch(function() {
    return e.path()
   }, function(e) {
    r.lastIndexOf(e) === r.length - e.length ? n.addClass(a) : n.removeClass(a)
   })
  }
 }
}]), angular.module("qrApp.services").provider("statusbar", function() {
 var e = null;
 this.setRootElement = function(t) {
  e = t
 }, this.$get = ["$document", "$timeout", "$compile", "$rootScope", "$window", "$mdTheming", function(t, n, o, a, r, i) {
  function s(e, t, o, a) {
   g && n.cancel(g), angular.isDefined(t) || (t = h), f.additionalClasses = o, f.message = e, f.shown = !0, f.closeable = a, t && (g = n(u, t))
  }

  function c(e, t, n) {
   s(e, t, "md-warn", n)
  }

  function l() {
   m = o(v)(f), i(m), m.bind("click", function(e) {
    var t = e.target;
    "a" == angular.lowercase(t.tagName) && (e.preventDefault(), u(), f.$digest(), r.open(t.href))
   }), (e || t.find("body")).append(m)
  }

  function d(e) {
   f.shown = e
  }

  function u() {
   d(!1)
  }

  function p() {
   m.remove()
  }
  var m, h = 3e3,
   g = null,
   v = '<md-toast class="md-bottom md-left"data-ng-class="additionalClasses" data-ng-show="shown"><span flex>{{message}}</span><md-button class="md-action" ng-if="closeable" ng-click="close()">Close</md-button></md-toast>',
   f = a.$new(!0);
  return f.shown = !1, f.message = "", f.closeable = !0, f.additionalClasses = "", f.close = u, l(), {
   showMessage: s,
   showError: c,
   hide: u,
   dispose: p
  }
 }]
}), angular.module("w69b.throttle", []).factory("throttle", ["$timeout", function(e) {
 function t(t, n, o) {
  var a, r, i;
  o = o !== !1;
  var s = function() {
   i = angular.copy(arguments, []), r = function() {
    return a = null, r = null, t.apply(null, i)
   }, o ? (a && e.cancel(a), a = e(r, n)) : a || (a = e(r, n))
  };
  return s.flush = function() {
   a && (e.cancel(a), r())
  }, s
 }
 return t
}]), angular.module("qrApp.constants", []).config(["$provide", function(e) {
 e.constant("constants", {
  SCAN_IFRAME_BASE: "",
  SCAN_IFRAME_URL: "/scan_embed.html",
  SCAN_IFRAME_ORIGIN: "*",
  ANALYTICS_ACCOUNT: "UA-23874345-1",
  ANALYTICS_ENABLE: !1,
  OFFLINE_SUPPORT: !1,
  IS_DEVELOPMENT: !0
 })
}]), angular.module("qrApp.constants").config(["constants", function(e) {
 e.SCAN_IFRAME_BASE = "https://www.the-qrcode-generator.com", e.SCAN_IFRAME_URL = e.SCAN_IFRAME_BASE + "/scan_embed.html", e.SCAN_IFRAME_ORIGIN = e.SCAN_IFRAME_BASE, e.ANALYTICS_ENABLE = !0, e.OFFLINE_SUPPORT = "serviceWorker" in navigator, e.IS_DEVELOPMENT = !1
}]), angular.module("qrApp.directives").directive("visuallead", ["$timeout", "constants", "$window", function(e, t, n) {
 return {
  template: "",
  restrict: "E",
  link: function(o, a, r) {
   t.IS_DEVELOPMENT || angular.element(n).bind("load", function() {
    e(function() {
     a.html('<iframe id="visual_qr" src="' + r.url + '"' + 'seamless scrolling="no" ' + "></iframe>")
    }, r.deferMs || 0)
   })
  }
 }
}]), angular.module("qrApp.services").factory("zazzle", ["$http", "$q", "$mdToast", "strUtils", "statusbar", function(e, t, n, o, a) {
 function r(e) {
  var t = {},
   n = null;
  if ("contact" == e.type) {
   var o = e.content,
    a = [o.firstname, o.name].filter(_.isString);
   a.length && (t.name = a.join(" ")), t.organization = o.organization || t.name, o.url && (n = s(o.url));
   var r = [o.email, o.phone, n].filter(_.isString);
   r.length && (2 > r.length && r.push(""), t.contact = r.join("\n"))
  } else "url" == e.type && (n = s(e.content));
  return n && (t.url = n), t
 }

 function i(o, i) {
  var s = t.defer();
  a.showMessage("Preparing your Zazzle Products...", 0);
  var c = r(i);
  return c.encoded = o, e.post("/api/zazzle", c).success(function(e) {
   var t = e.url;
   a.hide(), n.show({
    hideDelay: 1e4,
    template: '<md-toast><span flex>We have prepared your Zazzle products!</span><md-button href="' + t + '" target="_blank">' + "Show them" + "</md-button>" + "</md-toast>"
   }), s.resolve()
  }).error(function() {
   a.showError("Oups, we could not communicate with our backend. Are you online?"), s.resolve()
  }), s.promise
 }
 var s = o.humanizeURL;
 return {
  prepareProducts: i,
  paramsForQrcode: r
 }
}]), angular.module("qrApp.ctrls").controller("MyCodesCtrl", ["$scope", "qrBackend", "auth", "$location", "$mdDialog", "analytics", "toolbarSpinner", function(e, t, n, o, a, r, i) {
 function s(e) {
  return a.show({
   controller: "ConfirmDialogCtrl",
   templateUrl: "views/deleteDialog.html",
   targetEvent: e
  })
 }
 var c = t.DynamicCode;
 e.codes = c.list(), e.delete = function(e, t) {
  t.stopPropagation(), s(t).then(function() {
   e.$delete()
  })
 }, e.viewStats = function(e) {
  o.path("/mycodes/" + e.qrid + "/stats")
 }, e.create = function() {
  i.show();
  var e = new c({
   title: "My Awesome Code",
   isVirgin: !0,
   qrcode: {
    type: "txt",
    content: ""
   }
  });
  e.$save(function() {
   i.hide(), r.trackEvent("MyCodes", "Create", "new"), o.path("/mycodes/" + e.qrid)
  })
 }
}]).controller("EditCodeCtrl", ["$scope", "$routeParams", "qrBackend", "autoSave", "$mdDialog", "$window", "$location", "analytics", "toolbarSpinner", function(e, t, n, o, a, r, i, s, c) {
 function l() {
  e.dirty = m.isDirty(), m.unlock(), c.hide()
 }

 function d() {
  c.hide(), e.code.qrcode.isDynamic = !0, e.$watch("code", function(t, n) {
   angular.equals(t, n) || (e.touched = !0, e.dirty = !0, t.isVirgin = !1, m.modelChanged())
  }, !0)
 }

 function u() {
  c.hide(), i.path("/mycodes")
 }

 function p() {
  return e.dirty ? "There are unsaved changes. If you leave this page you will loose your changes." : void 0
 }
 e.staticContent = null, e.settingsShown = t.hasOwnProperty("settings"), e.timezones = n.getTimezones();
 var m = o(function() {
   e.code.$save(l), c.show()
  }),
  h = n.DynamicCode,
  g = t.qrid;
 c.show(), e.code = h.getByKey(g, d, u), e.dirty = !1, e.touched = !1, e.showSettings = function(t) {
  return a.show({
   controller: "ConfirmDialogCtrl",
   templateUrl: "views/settingsDialog.html",
   scope: e.$new(),
   targetEvent: t
  }).then(function() {})
 }, e.rename = function(t) {
  return a.show({
   controller: "RenameDialogCtrl",
   templateUrl: "views/renameDialog.html",
   focusOnOpen: !1,
   targetEvent: t,
   locals: {
    title: e.code.title
   }
  }).then(function(t) {
   t && (e.code.title = t, s.trackEvent("MyCodes", "Edit", "rename"))
  })
 }, e.$watch("code.qrid", function(t) {
  e.staticContent = t ? "http://qr.w69b.com/g/" + t : null
 }), r.onbeforeunload = p, e.$on("$destroy", function() {
  m.flush(), e.code.isVirgin && !e.dirty && e.code.$delete(), r.onbeforeunload == p && (r.onbeforeunload = angular.noop)
 })
}]).controller("CodeStatsCtrl", ["$scope", "$routeParams", "qrBackend", "$location", "analytics", "toolbarSpinner", function(e, t, n, o, a, r) {
 function i() {
  var t = new Date,
   n = new Date(t);
  n.setDate(t.getDate() - 31), e.dateRange = {
   from: n,
   to: t
  }
 }

 function s() {
  r.show(), n.getStats(l, e.dateRange.from, e.dateRange.to).then(function(t) {
   e.views = t, r.hide()
  })
 }

 function c() {
  r.hide(), o.path("/mycodes")
 }
 var l = t.qrid;
 a.trackPageView("/mycodes/stats"), i(), e.code = n.DynamicCode.getByKey(l, null, c), e.views = null, e.$watch("dateRange", s, !0), e.$watch("code.title", function(t) {
  e.$root.pageTitle = t + " Statistics"
 })
}]).controller("SignInCtrl", ["$scope", "$routeParams", "auth", "$location", "toolbarSpinner", function(e, t, n, o, a) {
 function r() {
  o.search("next", null), o.path(i)
 }
 var i = "/mycodes";
 t.next && "/" != t.next && (i = t.next), e.$watch("auth.isSignedIn", function(e) {
  e && r()
 }), e.$watch("auth.checkPending", function(e) {
  e ? a.show() : a.hide()
 }), e.signIn = function() {
  n.withAuth(r)
 }
}]), angular.module("qrApp.directives").directive("qrDynamicPreview", ["strUtils", function(e) {
 return {
  restrict: "A",
  template: '<div class="qr-dynamic-preview"></div>',
  replace: !0,
  link: function(t, n, o) {
   t.$watch(o.qrDynamicPreview, function(t) {
    var o = "",
     a = t.content;
    switch (t.type) {
     case "url":
      o = e.humanizeURL(a);
      break;
     case "txt":
     case "phone":
      o = a;
      break;
     case "contact":
      var r = [a.firstname, a.name];
      r = [r.filter(_.identity).join(" ")], r.push(a.organization), r = r.filter(_.identity), o = r.join(", ");
      break;
     case "sms":
      o = ["To:", a.number, ",", a.message].join(" ")
    }
    n.text(o)
   }, !0)
  }
 }
}]).directive("qrViewsChart", ["scriptLoader", "$window", "throttle", function(e, t, n) {
 var o = e.loadVisualization(["corechart"]);
 return {
  restrict: "A",
  template: '<div class="qr-views-chart"></div>',
  replace: !0,
  link: function(e, a, r) {
   function i(e) {
    var t = new google.visualization.DataTable;
    return t.addColumn("date", "Date"), t.addColumn("number", "Views"), e.forEach(function(e) {
     t.addRow(e)
    }), t
   }

   function s() {
    l()
   }
   var c = {
     pointSize: 5,
     lineWidth: 3,
     legend: {
      position: "none"
     },
     vAxis: {
      viewWindowMode: "pretty",
      minValue: 1,
      maxValue: 4,
      gridlines: {
       count: 3
      },
      textPosition: "in"
     },
     hAxis: {
      gridlines: {
       count: 0,
       color: "transparent"
      },
      baselineColor: "transparent",
      viewWindowMode: "pretty",
      textPosition: "in"
     },
     chartArea: {
      top: 10,
      bottom: 20,
      width: "100%",
      height: "90%"
     }
    },
    l = n(function() {
     var t = new google.visualization.AreaChart(a[0]),
      n = e[r.qrViewsChart];
     n && (c.pointSize = n.length > 40 ? 0 : 5, t.draw(i(n), c))
    });
   o.then(function() {
    e.$watch(r.qrViewsChart, s)
   }, 200), t.addEventListener("resize", s), a.bind("$destroy", function() {
    t.removeEventListener("resize", s)
   })
  }
 }
}]), angular.module("qrApp.services").factory("qrBackend", ["resourceStore", "$q", "$http", "dateUtils", function(e, t, n, o) {
 function a(e, t, a) {
  function r(e) {
   var n = e.data.map(function(e) {
    var t = o.parseDate(e[0]),
     n = e[1];
    return [t, n]
   });
   if (t && a) {
    var r;
    r = n.length ? n[0][0] : o.addDay(a);
    var i = [],
     s = [];
    if (o.forEachDay(t, r, function(e) {
      i.push([e, 0])
     }), n.length) {
     var c = o.addDay(a);
     o.forEachDay(o.addDay(n[n.length - 1][0]), c, function(e) {
      s.push([e, 0])
     })
    }
    n = i.concat(n, s)
   }
   return n
  }
  var i = "/api/dynamic/" + e + "/stats";
  return t && a && (i += "?dateFrom=" + o.formatDate(t) + "&dateTo=" + o.formatDate(a)), n.get(i).then(r)
 }

 function r() {
  return null === s && (s = [], n.get("/api/timezones").success(function(e) {
   var t = e.zones;
   t.forEach(function(e) {
    s.push({
     name: e.replace("_", " "),
     id: e
    })
   })
  })), s
 }
 var i = e("/api/dynamic", "qrid"),
  s = null;
 return {
  DynamicCode: i,
  getStats: a,
  getTimezones: r
 }
}]), angular.module("qrApp.directives").directive("qrWhenScrolled", ["$timeout", "$window", "$document", function(e, t, n) {
 return {
  template: '<div layout="row" layout-align="space-around"><md-progress-circular md-mode="indeterminate" ng-if="loading"></md-progress-circular></div>',
  scope: {
   qrWhenScrolled: "&"
  },
  link: function(o, a, r) {
   function i() {
    var e = u.getBoundingClientRect();
    return e.top - p <= h.clientHeight
   }

   function s(t) {
    o.loading = !1, v = t, e(c, 0)
   }

   function c() {
    o.loading || v && i() && (o.loading = !0, g().then(s))
   }

   function l() {
    c(), o.$apply()
   }

   function d() {
    document.removeEventListener("scroll", l, !0), m.unbind("resize", c)
   }
   var u = a[0],
    p = r.scollSpace || 100,
    m = angular.element(t),
    h = n[0].documentElement,
    g = o.qrWhenScrolled,
    v = !0;
   o.loading = !1, document.addEventListener("scroll", l, !0), m.bind("resize", o.$apply.bind(o, c)), o.$on("$destroy", d), c()
  }
 }
}]), angular.module("qrApp.services").factory("autoSave", ["$timeout", function(e) {
 function t(t, n) {
  function o() {
   return c ? (l = !0, void 0) : (s && e.cancel(s), s = e(function() {
    return s = null, c = !0, t()
   }, n), void 0)
  }

  function a() {
   c = !1, l && t(), l = !1
  }

  function r() {
   s && (e.cancel(s), s = null, c = !0, t())
  }

  function i() {
   return l || s ? !0 : !1
  }
  var s = null,
   c = !1,
   l = !1;
  return n || (n = 1e3), {
   modelChanged: o,
   unlock: a,
   flush: r,
   isDirty: i
  }
 }
 return t
}]), angular.module("qrApp.services").factory("auth", ["$window", "$http", "$rootScope", "$q", "$timeout", "$location", "analytics", function(e, t, n, o, a, r, i) {
 function s() {
  v.checkPending = !0, t.get("/api/check_auth", {
   notifyErrors: !1
  }).success(function(e) {
   l(e), v.checkPending = !1
  }).error(function() {
   v.checkPending = !1
  })
 }

 function c() {
  g && (g.reject(), g = null), i.trackEvent("Auth", "Popup", "open");
  var t = o.defer();
  if (h = e.open("/api/signin", "signin_popup", "height=500,width=900")) {
   var n = function() {
    a(function() {
     !h || h.closed ? v.isSignedIn || (t.reject(), i.trackEvent("Auth", "Popup", "cancel")) : n()
    }, 500)
   };
   n(), g = t
  } else t.reject();
  return t.promise
 }

 function l(e) {
  e && angular.isObject(e) ? (v.isSignedIn = !0, v.nick = e.nick, m = e, g && (g.resolve(), g = null)) : (m = null, v.isSignedIn = !1, v.nick = "")
 }

 function d() {
  t.post("/api/signout").success(function() {
   l(null), r.path("/")
  })
 }

 function u(e) {
  v.isSignedIn ? e() : c().then(e)
 }

 function p() {
  return v.isSignedIn ? !1 : (r.search("next", r.path()), r.path("/signin"), !0)
 }
 var m, h = null,
  g = null;
 e.w69b_signed_in = function(e) {
  i.trackEvent("Auth", "Popup", "success"), l(e), n.$digest()
 };
 var v = {
  isSignedIn: !1,
  nick: "",
  signIn: c,
  signOut: d,
  checkPending: !1
 };
 n.auth = v;
 var f = {
  isSignedIn: function() {
   return v.isSignedIn
  },
  setAuthData: l,
  withAuth: u,
  signInIfNeeded: p,
  signIn: c,
  signOut: d,
  checkAuth: s
 };
 return f
}]).provider("authRoutes", function() {
 var e = "/signin";
 this.setSignInPath = function(t) {
  e = t
 }, this.$get = ["$rootScope", "auth", "$location", function(e, t, n) {
  return e.$on("$routeChangeStart", function(e, o) {
   o.authRequired && !t.isSignedIn() && (o.controller = void 0, o.template = void 0, o.templateUrl = void 0, o.redirectTo = "/signin", o.params = {
    next: n.path()
   })
  }), {}
 }]
}), angular.module("qrApp.directives").directive("qrGenerateWidget", function() {
 return {
  templateUrl: "views/generateWidget.html",
  controller: "GenerateWidgetCtrl",
  scope: {
   qrcode: "=",
   staticContent: "="
  },
  replace: !0,
  restrict: "EA",
  link: function() {}
 }
}), angular.module("qrApp.ctrls").controller("GenerateCtrl", ["$scope", "auth", "qrBackend", "$location", "$routeParams", "analytics", "toolbarSpinner", function(e, t, n, o, a, r, i) {
 var s = n.DynamicCode;
 e.qrcode = {
  type: "txt",
  content: ""
 }, e.modified = !1;
 var c = a.d;
 c && (e.qrcode = /^https?:\/\//.test(c) ? {
  type: "url",
  content: c
 } : {
  type: "txt",
  content: c
 }), e.convertToDynamic = function() {
  t.withAuth(function() {
   r.trackEvent("MyCodes", "Create", "convert"), i.show();
   var t = new s({
    title: "Converted QR Code",
    isVirgin: !1,
    qrcode: e.qrcode
   });
   t.$save(function() {
    i.hide(), o.path("/mycodes/" + t.qrid)
   })
  })
 };
 var l = e.$watch("qrcode", function(t, n) {
  angular.equals(t, n) || (l(), e.modified = !0)
 }, !0)
}]), angular.module("qrApp.services").factory("strUtils", function() {
 function e(e) {
  var t = /^https?:\/\/(.*)/.exec(e);
  return t ? t[1] : e
 }
 return {
  humanizeURL: e
 }
}).factory("dateUtils", function() {
 function e(e, t) {
  return e.getFullYear() == t.getFullYear() && e.getMonth() == t.getMonth() && e.getDate() == t.getDate()
 }

 function t(t, o, a) {
  if (!(t > o))
   for (var r = new Date(t); !e(r, o); r = n(r)) a(r)
 }

 function n(e) {
  var t = new Date(e);
  return t.setDate(t.getDate() + 1), t
 }

 function o(e) {
  function t(e) {
   return 10 > e ? "0" + e : e
  }
  return [e.getFullYear(), t(e.getMonth() + 1), t(e.getDate())].join("-")
 }

 function a(e) {
  var t = new Date(Date.parse(e));
  return t.setSeconds(0), t.setMinutes(0), t.setHours(0), t.setMilliseconds(0), t
 }
 return {
  parseDate: a,
  addDay: n,
  formatDate: o,
  dateEquals: e,
  forEachDay: t
 }
}), angular.module("qrApp.services").factory("scriptLoader", ["$document", "$q", "$rootScope", function(e, t, n) {
 function o(e, t) {
  var n = s.createElement("script");
  n.type = "text/javascript", n.src = e;
  var o = s.getElementsByTagName("script")[0];
  n.onload = t, o.parentNode.insertBefore(n, o)
 }

 function a(e) {
  return s.querySelector('script[src="' + e + '"]')
 }

 function r(e) {
  function t() {
   google.load("visualization", "1", {
    packages: e,
    callback: function() {
     n.$apply(function() {
      i.resolve()
     })
    }
   })
  }
  var r = "https://www.google.com/jsapi";
  return a(r) ? t() : o(r, t), i.promise
 }
 var i = t.defer(),
  s = e[0];
 return {
  loadVisualization: r
 }
}]), angular.module("qrApp.directives").directive("dateRange", function() {
 return {
  templateUrl: "views/dateRange.html",
  restrict: "EA",
  replace: !0,
  scope: {
   from: "=",
   to: "="
  },
  controller: ["$scope", function(e) {
   e.pickerShown = !1, e.maxDate = new Date, e.maxDate.setDate(e.maxDate.getDate() + 1)
  }]
 }
}), angular.module("qrApp.services").factory("resourceStore", ["$q", "$http", function(e, t) {
 function n() {
  var e = {},
   t = [],
   n = {};
  return n.get = function(t) {
   return e.hasOwnProperty(t) ? e[t] : void 0
  }, n.put = function(n, o) {
   var a = !e.hasOwnProperty(n);
   e[n] = o, a && t.push(o)
  }, n.putFront = function(o, a) {
   n.delete(o), e[o] = a, t.unshift(a)
  }, n.delete = function(e) {
   var o = n.get(e);
   if (o) {
    var a = t.indexOf(o);
    t.splice(a, 1)
   }
  }, n.list = t, n
 }

 function o(o, a) {
  function r(e) {
   angular.copy(e || {}, this)
  }

  function i(e, t, n) {
   var o;
   t && (o = function(e) {
    t(e.data)
   }), e.then(o, n)
  }

  function s(e) {
   return e ? [o, e].join("/") : o
  }
  var c = n(),
   l = r.prototype;
  l.$save = function(e, n) {
   var o = this,
    a = t.post(s(this.getKey()), this).success(function(e) {
     e && angular.copy(e, o), c.putFront(o.getKey(), o)
    });
   i(a, e, n)
  }, l.$delete = function(e, n) {
   var o = this.getKey();
   c.delete(o);
   var a = t.delete(s(o));
   i(a, e, n)
  }, l.getKey = function() {
   return this[a]
  }, r.getByKey = function(n, o, a) {
   var l, d = c.get(n);
   return d ? l = e.when(d) : (d = new r, l = t.get(s(n)).success(function(e) {
    angular.copy(e, d)
   }).error(function() {
    c.delete(n)
   }), c.put(n, d)), i(l, o, a), d
  };
  var d = !0;
  return r.list = function() {
   var n = c.list;
   return n.loadNextPage = function() {
    var i = e.defer(),
     s = null;
    if (d) d = !1;
    else {
     if (!n.nextCursor) return i.resolve(!1), i.promise;
     s = {
      cursor: n.nextCursor
     }
    }
    return t.get(o, {
     params: s
    }).success(function(e) {
     e.items.forEach(function(e) {
      c.put(e[a], new r(e))
     }), n.nextCursor = e.cursor, n.firstPageLoaded = !0, i.resolve(e.cursor ? !0 : !1)
    }).error(i.reject), i.promise
   }, n
  }, r
 }
 return o.orderedMap = n, o
}]), angular.module("qrApp.services").provider("httpInterceptor", function() {
 var e = 3,
  t = "/signin";
 this.setMaxRetries = function(t) {
  e = t
 }, this.setSignInPath = function(e) {
  t = e
 }, this.$get = ["$q", "$injector", "$location", "$rootScope", "$timeout", function(n, o, a, r, i) {
  function s() {
   return u || (u = o.get("$http")), u
  }

  function c(e) {
   var t = Math.min(Math.pow(2, e.retryCount), 32),
    n = 1e3 * t + 1e3 * Math.random();
   return r.$broadcast("http:retryScheduled", e, n), i(function() {
    return s()(e)
   }, n)
  }

  function l(e, t) {
   var n = angular.copy(e.config);
   return n.retryCount ? n.retryCount++ : n.retryCount = 1, !t || t >= n.retryCount ? c(n) : null
  }

  function d(o) {
   var i = o.status;
   if (0 === i) return l(o);
   if (i >= 500 && 600 > i) {
    var s = l(o, e);
    if (s) return s;
    r.$broadcast("http:error", "server", o)
   } else 403 == i ? !r.auth || !r.auth.isSignedIn && a.path() != t ? (a.search("next", a.path()), a.path(t)) : r.$broadcast("http:error", "auth", o) : 404 == i ? r.$broadcast("http:error", "notfound", o) : r.$broadcast("http:error", "unknown", o);
   return n.reject(o)
  }
  var u;
  return {
   responseError: d
  }
 }]
}), angular.module("qrApp.services").factory("httpErrorNotifier", ["$rootScope", "statusbar", "$timeout", "analytics", function(e, t, n, o) {
 function a(e, n, a) {
  if (a.config.notifyErrors !== !1) {
   i(), "unknown" == n || "server" == n ? t.showError("Oups! An error occured during communication with our backend. Please try to reload the page.", null) : "auth" == n ? t.showMessage("You are not allowed to view this page.") : "notfound" == n && t.showMessage("The requested page does not exist.");
   var r = [a.status, a.config.url].join(" ");
   o.trackEvent("error", "http:" + n, r)
  }
 }

 function r(e) {
  var n = "Failed to communicate with backend. ",
   o = Math.floor(e / 1e3);
  n += 0 >= o ? "Retrying..." : "Retrying in " + o + " seconds.", t.showMessage(n, 3e3)
 }

 function i() {
  c && (n.cancel(c), c = null)
 }

 function s(e, t, o) {
  function a() {
   o -= 1e3, r(o), o > 0 && (c = n(a, 1e3))
  }
  t.notifyErrors !== !1 && (3e3 > o || (i(), r(o), c = n(a, 1e3)))
 }
 var c = null;
 return e.$on("http:error", a), e.$on("http:retryScheduled", s), {}
}]), angular.module("qrApp.directives").controller("HelpTourCtrl", ["$scope", "helpTourRegistry", function(e, t) {
 e.closed = !!t.isTourClosed(e.tourName);
 var n = this,
  o = [],
  a = 0;
 n.addStep = function(e) {
  o.push(e), 1 == o.length && n.showStep(0)
 }, n.isClosed = function() {
  return e.closed
 }, n.showStep = function(e) {
  e > 0 && o[e - 1].show(!1), o[e].show(!0), a = e
 }, e.next = function() {
  e.hasNextStep() && n.showStep(a + 1)
 }, e.hasNextStep = function() {
  return o.length > a + 1
 }, e.close = function() {
  t.closeTour(e.tourName), e.$destroy()
 }
}]).directive("helpTour", function() {
 return {
  templateUrl: "views/helpTour.html",
  controller: "HelpTourCtrl",
  transclude: !0,
  replace: !0,
  scope: {
   tourName: "@"
  },
  restrict: "EA",
  link: function(e, t) {
   e.$on("$destroy", function() {
    t.remove()
   }), e.closed && e.$destroy()
  }
 }
}).directive("helpTourStep", ["helpTourRegistry", function(e) {
 return {
  templateUrl: "views/helpTourStep.html",
  restrict: "EA",
  transclude: !0,
  replace: !0,
  scope: {},
  require: "^helpTour",
  link: function(t, n, o, a) {
   function r(t) {
    o.highlightId && e.highlight(o.highlightId, t)
   }
   t.shown = !1, a.isClosed() || (t.show = function(e) {
    t.shown = e, r(e)
   }, t.$on("$destroy", function() {
    r(!1)
   }), a.addStep(t))
  }
 }
}]).directive("helpTourHighlight", ["helpTourRegistry", function(e) {
 return {
  restrict: "A",
  link: function(t, n, o) {
   var a = o.helpTourHighlight;
   if (a) {
    var r = "help-tour-highlight",
     i = function(e) {
      e ? n.addClass(r) : n.removeClass(r)
     };
    e.add(a, i), t.$on("$destroy", function() {
     e.remove(a)
    })
   }
  }
 }
}]).service("helpTourRegistry", ["$window", function(e) {
 function t(e, t) {
  var n = r[e];
  n ? n(t) : i[e] = t
 }

 function n(e) {
  return "tour_" + e + "_closed"
 }

 function o(t) {
  return t ? e.localStorage[n(t)] : !1
 }

 function a(t) {
  t && (e.localStorage[n(t)] = "true")
 }
 var r = {},
  i = {};
 return {
  add: function(e, t) {
   r[e] = t;
   var n = i[e];
   angular.isDefined(n) && t(n)
  },
  isTourClosed: o,
  closeTour: a,
  get: function(e) {
   return r[e]
  },
  highlight: t,
  remove: function(e) {
   t(e, !1), delete r[e], delete i[e]
  }
 }
}]), angular.module("qr.toolbar", []).directive("qrToolbarContent", ["$document", function(e) {
 return {
  restrict: "E",
  transclude: !0,
  link: function(t, n, o, a, r) {
   var i = e.find("qr-toolbar"),
    s = i.controller("qrToolbar");
   r(function(e) {
    s.setToolbarContent(e)
   }), t.$on("$destroy", function() {
    s.reset()
   })
  }
 }
}]).directive("qrToolbar", function() {
 return {
  restrict: "E",
  transclude: !0,
  controller: ["$scope", "$element", "$transclude", function(e, t, n) {
   function o(e) {
    t.empty(), t.append(e)
   }
   this.setToolbarContent = function(e) {
    o(e)
   }, this.reset = function() {
    n(function(e) {
     o(e)
    })
   }, this.reset()
  }]
 }
}).factory("toolbarSpinner", function() {
 var e = {},
  t = 0;
 return e.show = function() {
  t++
 }, e.hide = function() {
  t--
 }, e.isShown = function() {
  return t > 0
 }, e
});
