# avalara-sdk

AvalaraSdk - JavaScript client for avalara-sdk
API for evaluating transactions against direct-to-consumer Beverage Alcohol shipping regulations.

This API is currently in beta.

This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 3.1.0
- Package version: 2.4.29
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install avalara-sdk --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your avalara-sdk from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('avalara-sdk')` in javascript files from the directory you ran the last command above from.

### git

If the library is hosted at a git repository, e.g. https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following the above steps with Node.js and installing browserify with `npm install -g browserify`, perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var AvalaraSdk = require('avalara-sdk');

var configuration = {
    appName: 'asv-sdk-test-app',
    appVersion: '1.0',
    environment: 'sandbox',
    machineName: 'test-machine',
    timeout: 200000000,
    username: 'foo',
    password: 'bar'
};
var defaultClient = new AvalaraSdk.ApiClient(configuration);
var api = new AvalaraSdk.AgeVerificationApi(defaultClient);
var ageVerifyRequest = new AvalaraSdk.AgeVerifyRequest(); // {AgeVerifyRequest} Information about the individual whose age is being verified.
var opts = {
  'simulatedFailureCode': new AvalaraSdk.AgeVerifyFailureCode() // {AgeVerifyFailureCode} (Optional) The failure code included in the simulated response of the endpoint. Note that this endpoint is only available in Sandbox for testing purposes.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.verifyAge(ageVerifyRequest, opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AvalaraSdk.AgeVerificationApi* | [**verifyAge**](docs/AgeVerificationApi.md#verifyAge) | **POST** /api/v2/ageverification/verify | Determines whether an individual meets or exceeds the minimum legal drinking age.
*AvalaraSdk.ShippingVerificationApi* | [**deregisterShipment**](docs/ShippingVerificationApi.md#deregisterShipment) | **DELETE** /api/v2/companies/{companyCode}/transactions/{transactionCode}/shipment/registration | Removes the transaction from consideration when evaluating regulations that span multiple transactions.
*AvalaraSdk.ShippingVerificationApi* | [**registerShipment**](docs/ShippingVerificationApi.md#registerShipment) | **PUT** /api/v2/companies/{companyCode}/transactions/{transactionCode}/shipment/registration | Registers the transaction so that it may be included when evaluating regulations that span multiple transactions.
*AvalaraSdk.ShippingVerificationApi* | [**registerShipmentIfCompliant**](docs/ShippingVerificationApi.md#registerShipmentIfCompliant) | **PUT** /api/v2/companies/{companyCode}/transactions/{transactionCode}/shipment/registerIfCompliant | Evaluates a transaction against a set of direct-to-consumer shipping regulations and, if compliant, registers the transaction so that it may be included when evaluating regulations that span multiple transactions.
*AvalaraSdk.ShippingVerificationApi* | [**verifyShipment**](docs/ShippingVerificationApi.md#verifyShipment) | **GET** /api/v2/companies/{companyCode}/transactions/{transactionCode}/shipment/verify | Evaluates a transaction against a set of direct-to-consumer shipping regulations.


## Documentation for Models

 - [AvalaraSdk.AgeVerifyFailureCode](docs/AgeVerifyFailureCode.md)
 - [AvalaraSdk.AgeVerifyRequest](docs/AgeVerifyRequest.md)
 - [AvalaraSdk.AgeVerifyRequestAddress](docs/AgeVerifyRequestAddress.md)
 - [AvalaraSdk.AgeVerifyResult](docs/AgeVerifyResult.md)
 - [AvalaraSdk.ErrorDetails](docs/ErrorDetails.md)
 - [AvalaraSdk.ErrorDetailsError](docs/ErrorDetailsError.md)
 - [AvalaraSdk.ErrorDetailsErrorDetails](docs/ErrorDetailsErrorDetails.md)
 - [AvalaraSdk.ShippingVerifyResult](docs/ShippingVerifyResult.md)
 - [AvalaraSdk.ShippingVerifyResultLines](docs/ShippingVerifyResultLines.md)


## Documentation for Authorization



### BasicAuth


- **Type**: HTTP basic authentication



### Bearer


- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

