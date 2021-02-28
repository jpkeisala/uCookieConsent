# What is uCookieConsent Package?
The uCookieConsent is Umbraco Package for adding GDPR Cookie Consent & Compliance Notice for Umbraco solution. The package helps you comply with the GDPR (https://gdpr.eu/what-is-gdpr/) (General data protection regulation)/EU Cookie law by making it easy to follow their requirements on your website. In addition to GDPR, you can also ensure compliance with the CCPA (https://oag.ca.gov/privacy/ccpa) (California Consumer Privacy Act) or both using the plugin.

# Installation
## Install the package using Nuget

``` Install-Package uCookieConsent ```

Once installed:
1. Open you master page and add following partial views. You need these for adding cookie dialog and scripts that needs to pass cookie consent:
   a)  `@Html.Action("Header", "CookieBanner")` before end of your </header> -tag.
   b) `@Html.Action("Body", "CookieBanner")` after your <body> -tag.
   c) `@Html.Action("Footer", "CookieBanner")` before end of your </body> -tag.
2. Login to the backoffice and open `https://YOURSERVER/umbraco#/settings/cookiesAlias/overview`. Review settings and texts
3. Click tab Third Party Cookies and in insert scripts that use cookies for example Google Analytics as instructed.  

# Contributors & Developers
uCookieConsent Package is open source software. To contribute to the project create pull request in Github. https://github.com/jpkeisala/uCookieConsent/
