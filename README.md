# Choosify Links

This repository contains a Chrome-compatible userscript that
intercepts click events and opens any non-SSL, non-Google links via
[Choosy](http://www.choosyosx.com).

Isolating sensitive web applications like Gmail in their own browser
sessions is one of the best ways to defend against security
vulnerabilities like CSRF. But every time you click on a link to an
external domain, then you contaminate the "safe" session. This
userscript addresses that problem by automatically forwarding links to
Choosy, a special application launcher.


## Usage

Download `choosify-links.user.js` and open in Google Chrome.
