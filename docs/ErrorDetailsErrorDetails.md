# AvaTaxRestV3JsSdk.ErrorDetailsErrorDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **String** | Name of the error or message. | [optional] 
**message** | **String** | Concise summary of the message, suitable for display in the caption of an alert box. | [optional] 
**number** | **Number** | Unique ID number referring to this error or message. | [optional] 
**description** | **String** | A more detailed description of the problem referenced by this error message, suitable for display in the contents area of an alert box. | [optional] 
**faultCode** | **String** | Indicates the SOAP Fault code, if this was related to an error that corresponded to AvaTax SOAP v1 behavior. | [optional] 
**helpLink** | **String** | URL to help for this message | [optional] 
**severity** | **String** | Severity of the message | [optional] 



## Enum: CodeEnum


* `AuthenticationException` (value: `"AuthenticationException"`)

* `SubscriptionRequired` (value: `"SubscriptionRequired"`)

* `UnhandledException` (value: `"UnhandledException"`)

* `InvalidAddress` (value: `"InvalidAddress"`)

* `EntityNotFoundError` (value: `"EntityNotFoundError"`)





## Enum: SeverityEnum


* `Error` (value: `"Error"`)




