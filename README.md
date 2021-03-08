https://img.shields.io/badge/Umbraco-v8%20package-brightgreen
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

# What is uCookieConsent Package?
The uCookieConsent is Umbraco Package for adding GDPR Cookie Consent & Compliance Notice for Umbraco solution. The package helps you comply with the GDPR (https://gdpr.eu/what-is-gdpr/) (General data protection regulation)/EU Cookie law by making it easy to follow their requirements on your website. In addition to GDPR, you can also ensure compliance with the CCPA (https://oag.ca.gov/privacy/ccpa) (California Consumer Privacy Act) or both using the plugin.

# Installation
## Install the package using Nuget

``` Install-Package uCookieConsent ```

Once installed:
1. Login to the backoffice and open `https://YOURSERVER/umbraco#/settings/cookiesAlias/overview`. Review settings and texts

2. Click tab Third Party Cookies and in insert scripts that use cookies for example Google Analytics as instructed.  

3. Open you master page and add following partial views. You need these for adding cookie dialog and scripts that needs to pass cookie consent:
  ---Code: `@Html.Action("Body", "CookieBanner")` after your <body> -tag. 


# How is this working?
The Cookie law is actually quite simple. You need to ask permission from the visitor if you want to track the visitor. Just letting know you are tracking is not enough. However, strictly necessary cookies are fine to be on by default. These are cookies that your website or app needs to use in order to perform its basic functions. For example, strictly necessary cookies may be used to remember items placed in a virtual shopping cart or to remember which page a user is on.
The package will not execute any of the third party scripts before the user approves cookies. 

# Contributors & Developers
uCookieConsent Package is open source software. To contribute to the project create pull request in Github. https://github.com/jpkeisala/uCookieConsent/
