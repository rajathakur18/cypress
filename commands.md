###Cypress Framework which have support of below utilities
```Fixture```
```X-path```
```Session Storage```
```Rest API Calls```
```Dynamic Environment```
```Video recording```
```Screen Recording```

http://blog.geveo.com/Allure-Report-Integration-with-Cypress

npm cypress run --env allure=true,allureResultsPath=someFolder/results

npm cypress run --env allure=true,allureResultsPath=target/results

allure generate allure-results --clean -o allure-report && allure open  allure-report

cypress run --spec **/*.feature

https://dev.to/bushraalam/using-mochawesome-reporter-with-cypress-54pf

Browsers
When Cypress is initially run from the Test Runner, you can choose to run Cypress in a select number of browsers including:

Chrome
Chrome Beta
Chrome Canary
Chromium
Edge
Edge Beta
Edge Canary
Edge Dev
Electron
Firefox
Firefox Developer Edition
Firefox Nightly


Browser versions supported
Cypress supports the browser versions below:

Chrome 64 and above.
Edge 79 and above.
Firefox 86 and above.