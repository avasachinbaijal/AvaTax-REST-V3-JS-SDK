# AvalaraSdk.ShippingVerifyResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compliant** | **Boolean** | Whether every line in the transaction is compliant. | [optional] 
**message** | **String** | A short description of the result of the compliance check. | [optional] 
**successMessages** | **String** | A detailed description of the result of each of the passed checks made against this transaction, separated by line. | [optional] 
**failureMessages** | **String** | A detailed description of the result of each of the failed checks made against this transaction, separated by line. | [optional] 
**failureCodes** | **[String]** | An enumeration of all the failure codes received across all lines. | [optional] 
**warningCodes** | **[String]** | An enumeration of all the warning codes received across all lines that a determination could not be made for. | [optional] 
**lines** | [**[ShippingVerifyResultLines]**](ShippingVerifyResultLines.md) | Describes the results of the checks made for each line in the transaction. | [optional] 



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





## Enum: [WarningCodesEnum]


* `UnsupportedTaxCode` (value: `"UnsupportedTaxCode"`)

* `UnsupportedAddress` (value: `"UnsupportedAddress"`)




