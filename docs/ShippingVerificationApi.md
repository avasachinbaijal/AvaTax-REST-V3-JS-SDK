# AvalaraSdk.ShippingVerificationApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deregisterShipment**](ShippingVerificationApi.md#deregisterShipment) | **DELETE** /api/v2/companies/{companyCode}/transactions/{transactionCode}/shipment/registration | Removes the transaction from consideration when evaluating regulations that span multiple transactions.
[**registerShipment**](ShippingVerificationApi.md#registerShipment) | **PUT** /api/v2/companies/{companyCode}/transactions/{transactionCode}/shipment/registration | Registers the transaction so that it may be included when evaluating regulations that span multiple transactions.
[**registerShipmentIfCompliant**](ShippingVerificationApi.md#registerShipmentIfCompliant) | **PUT** /api/v2/companies/{companyCode}/transactions/{transactionCode}/shipment/registerIfCompliant | Evaluates a transaction against a set of direct-to-consumer shipping regulations and, if compliant, registers the transaction so that it may be included when evaluating regulations that span multiple transactions.
[**verifyShipment**](ShippingVerificationApi.md#verifyShipment) | **GET** /api/v2/companies/{companyCode}/transactions/{transactionCode}/shipment/verify | Evaluates a transaction against a set of direct-to-consumer shipping regulations.



## deregisterShipment

> deregisterShipment(companyCode, transactionCode, opts)

Removes the transaction from consideration when evaluating regulations that span multiple transactions.

### Example

```javascript
var configuration = {
    appName: 'asv-sdk-test-app',
    appVersion: '1.0',
    environment: 'sandbox',
    machineName: 'test-machine',
    timeout: 200000000,
    username: 'foo',
    password: 'bar'
};
var AvalaraSdk = require('avalara-sdk');
var defaultClient = new AvalaraSdk.ApiClient(configuration);

var apiInstance = new AvalaraSdk.ShippingVerificationApi(defaultClient);
var companyCode = "companyCode_example"; // String | The company code of the company that recorded the transaction
var transactionCode = "transactionCode_example"; // String | The transaction code to retrieve
var opts = {
  'documentType': "documentType_example" // String | (Optional): The document type of the transaction to operate on. If omitted, defaults to \"SalesInvoice\"
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deregisterShipment(companyCode, transactionCode, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyCode** | **String**| The company code of the company that recorded the transaction | 
 **transactionCode** | **String**| The transaction code to retrieve | 
 **documentType** | **String**| (Optional): The document type of the transaction to operate on. If omitted, defaults to \&quot;SalesInvoice\&quot; | [optional] 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## registerShipment

> registerShipment(companyCode, transactionCode, opts)

Registers the transaction so that it may be included when evaluating regulations that span multiple transactions.

### Example

```javascript
var configuration = {
    appName: 'asv-sdk-test-app',
    appVersion: '1.0',
    environment: 'sandbox',
    machineName: 'test-machine',
    timeout: 200000000,
    username: 'foo',
    password: 'bar'
};
var AvalaraSdk = require('avalara-sdk');
var defaultClient = new AvalaraSdk.ApiClient(configuration);

var apiInstance = new AvalaraSdk.ShippingVerificationApi(defaultClient);
var companyCode = "companyCode_example"; // String | The company code of the company that recorded the transaction
var transactionCode = "transactionCode_example"; // String | The transaction code to retrieve
var opts = {
  'documentType': "documentType_example" // String | (Optional): The document type of the transaction to operate on. If omitted, defaults to \"SalesInvoice\"
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.registerShipment(companyCode, transactionCode, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyCode** | **String**| The company code of the company that recorded the transaction | 
 **transactionCode** | **String**| The transaction code to retrieve | 
 **documentType** | **String**| (Optional): The document type of the transaction to operate on. If omitted, defaults to \&quot;SalesInvoice\&quot; | [optional] 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## registerShipmentIfCompliant

> ShippingVerifyResult registerShipmentIfCompliant(companyCode, transactionCode, opts)

Evaluates a transaction against a set of direct-to-consumer shipping regulations and, if compliant, registers the transaction so that it may be included when evaluating regulations that span multiple transactions.

### Example

```javascript
var configuration = {
    appName: 'asv-sdk-test-app',
    appVersion: '1.0',
    environment: 'sandbox',
    machineName: 'test-machine',
    timeout: 200000000,
    username: 'foo',
    password: 'bar'
};
var AvalaraSdk = require('avalara-sdk');
var defaultClient = new AvalaraSdk.ApiClient(configuration);

var apiInstance = new AvalaraSdk.ShippingVerificationApi(defaultClient);
var companyCode = "companyCode_example"; // String | The company code of the company that recorded the transaction
var transactionCode = "transactionCode_example"; // String | The transaction code to retrieve
var opts = {
  'documentType': "documentType_example" // String | (Optional): The document type of the transaction to operate on. If omitted, defaults to \"SalesInvoice\"
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.registerShipmentIfCompliant(companyCode, transactionCode, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyCode** | **String**| The company code of the company that recorded the transaction | 
 **transactionCode** | **String**| The transaction code to retrieve | 
 **documentType** | **String**| (Optional): The document type of the transaction to operate on. If omitted, defaults to \&quot;SalesInvoice\&quot; | [optional] 

### Return type

[**ShippingVerifyResult**](ShippingVerifyResult.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## verifyShipment

> ShippingVerifyResult verifyShipment(companyCode, transactionCode, opts)

Evaluates a transaction against a set of direct-to-consumer shipping regulations.

The transaction and its lines must meet the following criteria in order to be evaluated: * The transaction must be recorded. Using a type of *SalesInvoice* is recommended. * A parameter with the name *AlcoholRouteType* must be specified and the value must be one of the following: &#39;*DTC*&#39;, &#39;*Retailer DTC*&#39; * A parameter with the name *RecipientName* must be specified and the value must be the name of the recipient. * Each alcohol line must include a *ContainerSize* parameter that describes the volume of a single container. Use the *unit* field to specify one of the following units: &#39;*Litre*&#39;, &#39;*Millilitre*&#39;, &#39;*gallon (US fluid)*&#39;, &#39;*quart (US fluid)*&#39;, &#39;*ounce (fluid US customary)*&#39; * Each alcohol line must include a *PackSize* parameter that describes the number of containers in a pack. Specify *Count* in the *unit* field.  Optionally, the transaction and its lines may use the following parameters: * The *ShipDate* parameter may be used if the date of shipment is different than the date of the transaction. The value should be ISO-8601 compliant (e.g. 2020-07-21). * The *RecipientDOB* parameter may be used to evaluate age restrictions. The value should be ISO-8601 compliant (e.g. 2020-07-21). * The *PurchaserDOB* parameter may be used to evaluate age restrictions. The value should be ISO-8601 compliant (e.g. 2020-07-21). * The *SalesLocation* parameter may be used to describe whether the sale was made *OnSite* or *OffSite*. *OffSite* is the default value. * The *AlcoholContent* parameter may be used to describe the alcohol percentage by volume of the item. Specify *Percentage* in the *unit* field.  **Security Policies** This API depends on all of the following active subscriptions: *AvaAlcohol, AutoAddress, AvaTaxPro*

### Example

```javascript
var configuration = {
    appName: 'asv-sdk-test-app',
    appVersion: '1.0',
    environment: 'sandbox',
    machineName: 'test-machine',
    timeout: 200000000,
    username: 'foo',
    password: 'bar'
};
var AvalaraSdk = require('avalara-sdk');
var defaultClient = new AvalaraSdk.ApiClient(configuration);

var apiInstance = new AvalaraSdk.ShippingVerificationApi(defaultClient);
var companyCode = "companyCode_example"; // String | The company code of the company that recorded the transaction
var transactionCode = "transactionCode_example"; // String | The transaction code to retrieve
var opts = {
  'documentType': "documentType_example" // String | (Optional): The document type of the transaction to operate on. If omitted, defaults to \"SalesInvoice\"
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.verifyShipment(companyCode, transactionCode, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyCode** | **String**| The company code of the company that recorded the transaction | 
 **transactionCode** | **String**| The transaction code to retrieve | 
 **documentType** | **String**| (Optional): The document type of the transaction to operate on. If omitted, defaults to \&quot;SalesInvoice\&quot; | [optional] 

### Return type

[**ShippingVerifyResult**](ShippingVerifyResult.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

