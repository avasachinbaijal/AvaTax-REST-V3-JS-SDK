# AvalaraSdk.ShippingVerifyResultLines

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resultCode** | **String** | Describes whether the line is compliant or not. In cases where a determination could not be made, resultCode will provide the reason why. | [optional] 
**lineNumber** | **String** | The lineNumber of the line evaluated. | [optional] 
**message** | **String** | A short description of the result of the checks made against this line. | [optional] 
**successMessages** | **String** | A detailed description of the result of each of the passed checks made against this line. | [optional] 
**failureMessages** | **String** | A detailed description of the result of each of the failed checks made against this line. | [optional] 
**failureCodes** | **[String]** | An enumeration of all the failure codes received for this line. | [optional] 



## Enum: ResultCodeEnum


* `Compliant` (value: `"Compliant"`)

* `NotCompliant` (value: `"NotCompliant"`)

* `UnsupportedTaxCode` (value: `"UnsupportedTaxCode"`)

* `UnsupportedAddress` (value: `"UnsupportedAddress"`)

* `InvalidLine` (value: `"InvalidLine"`)





## Enum: [FailureCodesEnum]


* `BelowLegalDrinkingAge` (value: `"BelowLegalDrinkingAge"`)

* `ShippingProhibitedToAddress` (value: `"ShippingProhibitedToAddress"`)

* `MissingRequiredLicense` (value: `"MissingRequiredLicense"`)

* `VolumeLimitExceeded` (value: `"VolumeLimitExceeded"`)

* `InvalidFieldValue` (value: `"InvalidFieldValue"`)

* `MissingRequiredField` (value: `"MissingRequiredField"`)

* `InvalidFieldType` (value: `"InvalidFieldType"`)

* `InvalidFormat` (value: `"InvalidFormat"`)

* `InvalidDate` (value: `"InvalidDate"`)




