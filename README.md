# What is uCookieConsent Package?
The uCookieConsent is Umbraco Package for adding GDPR Cookie Consent & Compliance Notice for Umbraco solution. The package helps you comply with the GDPR (https://gdpr.eu/what-is-gdpr/) (General data protection regulation)/EU Cookie law by making it easy to follow their requirements on your website. In addition to GDPR, you can also ensure compliance with the CCPA (https://oag.ca.gov/privacy/ccpa) (California Consumer Privacy Act) or both using the plugin.

# Installation
## Install the package using Nuget

``` Install-Package uCookieConsent ```

Once installed:
1. Open you master page and add `@Html.Action("Body", "CookieBanner")` before end of your </body> -tag.
2. Login to the backoffice and open `https://YOURSERVER/umbraco#/settings/cookiesAlias/overview`. You will see a 

# Contributors & Developers
uCookieConsent Package is open source software. To contribute to the project create pull request in Github. https://github.com/jpkeisala/uCookieConsent/
