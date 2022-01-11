# AvalaraNodeAsv.AgeVerificationApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**verifyAge**](AgeVerificationApi.md#verifyAge) | **POST** /api/v2/ageverification/verify | Determines whether an individual meets or exceeds the minimum legal drinking age.



## verifyAge

> AgeVerifyResult verifyAge(ageVerifyRequest, opts)

Determines whether an individual meets or exceeds the minimum legal drinking age.

The request must meet the following criteria in order to be evaluated: * *firstName*, *lastName*, and *address* are required fields. * One of the following sets of attributes are required for the *address*:   * *line1, city, region*   * *line1, postalCode*  Optionally, the transaction and its lines may use the following parameters: * A *DOB* (Date of Birth) field. The value should be ISO-8601 compliant (e.g. 2020-07-21). * Beyond the required *address* fields above, a *country* field is permitted   * The valid values for this attribute are [*US, USA*]  **Security Policies** This API depends on the active subscription *AgeVerification*

### Example

```javascript
import AvalaraNodeAsv from 'Avalara-Node-ASV';
let defaultClient = AvalaraNodeAsv.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new AvalaraNodeAsv.AgeVerificationApi();
let ageVerifyRequest = new AvalaraNodeAsv.AgeVerifyRequest(); // AgeVerifyRequest | Information about the individual whose age is being verified.
let opts = {
  'simulatedFailureCode': new AvalaraNodeAsv.AgeVerifyFailureCode() // AgeVerifyFailureCode | (Optional) The failure code included in the simulated response of the endpoint. Note that this endpoint is only available in Sandbox for testing purposes.
};
apiInstance.verifyAge(ageVerifyRequest, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ageVerifyRequest** | [**AgeVerifyRequest**](AgeVerifyRequest.md)| Information about the individual whose age is being verified. | 
 **simulatedFailureCode** | [**AgeVerifyFailureCode**](.md)| (Optional) The failure code included in the simulated response of the endpoint. Note that this endpoint is only available in Sandbox for testing purposes. | [optional] 

### Return type

[**AgeVerifyResult**](AgeVerifyResult.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

