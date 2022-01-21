/**
 * AvaTax Software Development Kit for JavaScript
 *
 * (c) 2004-2022 Avalara, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Sachin Baijal <sachin.baijal@avalara.com>
 * @author     Jonathan Wenger <jonathan.wenger@avalara.com>
 * @copyright  2004-2022 Avalara, Inc.
 * @license    https://www.apache.org/licenses/LICENSE-2.0
 * @version    2.1.7
 * @link       https://github.com/avadev/AvaTax-REST-V3-JS-SDK
 */

import ApiClient from '../ApiClient';

/**
 * The ShippingVerifyResultLines model module.
 * @module model/ShippingVerifyResultLines
 * @version 2.1.7
 */
class ShippingVerifyResultLines {
    /**
     * Constructs a new <code>ShippingVerifyResultLines</code>.
     * @alias module:model/ShippingVerifyResultLines
     */
    constructor() { 
        
        ShippingVerifyResultLines.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ShippingVerifyResultLines</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ShippingVerifyResultLines} obj Optional instance to populate.
     * @return {module:model/ShippingVerifyResultLines} The populated <code>ShippingVerifyResultLines</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ShippingVerifyResultLines();

            if (data.hasOwnProperty('resultCode')) {
                obj['resultCode'] = ApiClient.convertToType(data['resultCode'], 'String');
            }
            if (data.hasOwnProperty('lineNumber')) {
                obj['lineNumber'] = ApiClient.convertToType(data['lineNumber'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('successMessages')) {
                obj['successMessages'] = ApiClient.convertToType(data['successMessages'], 'String');
            }
            if (data.hasOwnProperty('failureMessages')) {
                obj['failureMessages'] = ApiClient.convertToType(data['failureMessages'], 'String');
            }
            if (data.hasOwnProperty('failureCodes')) {
                obj['failureCodes'] = ApiClient.convertToType(data['failureCodes'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * Describes whether the line is compliant or not. In cases where a determination could not be made, resultCode will provide the reason why.
 * @member {module:model/ShippingVerifyResultLines.ResultCodeEnum} resultCode
 */
ShippingVerifyResultLines.prototype['resultCode'] = undefined;

/**
 * The lineNumber of the line evaluated.
 * @member {String} lineNumber
 */
ShippingVerifyResultLines.prototype['lineNumber'] = undefined;

/**
 * A short description of the result of the checks made against this line.
 * @member {String} message
 */
ShippingVerifyResultLines.prototype['message'] = undefined;

/**
 * A detailed description of the result of each of the passed checks made against this line.
 * @member {String} successMessages
 */
ShippingVerifyResultLines.prototype['successMessages'] = undefined;

/**
 * A detailed description of the result of each of the failed checks made against this line.
 * @member {String} failureMessages
 */
ShippingVerifyResultLines.prototype['failureMessages'] = undefined;

/**
 * An enumeration of all the failure codes received for this line.
 * @member {Array.<module:model/ShippingVerifyResultLines.FailureCodesEnum>} failureCodes
 */
ShippingVerifyResultLines.prototype['failureCodes'] = undefined;





/**
 * Allowed values for the <code>resultCode</code> property.
 * @enum {String}
 * @readonly
 */
ShippingVerifyResultLines['ResultCodeEnum'] = {

    /**
     * value: "Compliant"
     * @const
     */
    "Compliant": "Compliant",

    /**
     * value: "NotCompliant"
     * @const
     */
    "NotCompliant": "NotCompliant",

    /**
     * value: "UnsupportedTaxCode"
     * @const
     */
    "UnsupportedTaxCode": "UnsupportedTaxCode",

    /**
     * value: "UnsupportedAddress"
     * @const
     */
    "UnsupportedAddress": "UnsupportedAddress",

    /**
     * value: "InvalidLine"
     * @const
     */
    "InvalidLine": "InvalidLine"
};


/**
 * Allowed values for the <code>failureCodes</code> property.
 * @enum {String}
 * @readonly
 */
ShippingVerifyResultLines['FailureCodesEnum'] = {

    /**
     * value: "BelowLegalDrinkingAge"
     * @const
     */
    "BelowLegalDrinkingAge": "BelowLegalDrinkingAge",

    /**
     * value: "ShippingProhibitedToAddress"
     * @const
     */
    "ShippingProhibitedToAddress": "ShippingProhibitedToAddress",

    /**
     * value: "MissingRequiredLicense"
     * @const
     */
    "MissingRequiredLicense": "MissingRequiredLicense",

    /**
     * value: "VolumeLimitExceeded"
     * @const
     */
    "VolumeLimitExceeded": "VolumeLimitExceeded",

    /**
     * value: "InvalidFieldValue"
     * @const
     */
    "InvalidFieldValue": "InvalidFieldValue",

    /**
     * value: "MissingRequiredField"
     * @const
     */
    "MissingRequiredField": "MissingRequiredField",

    /**
     * value: "InvalidFieldType"
     * @const
     */
    "InvalidFieldType": "InvalidFieldType",

    /**
     * value: "InvalidFormat"
     * @const
     */
    "InvalidFormat": "InvalidFormat",

    /**
     * value: "InvalidDate"
     * @const
     */
    "InvalidDate": "InvalidDate"
};



export default ShippingVerifyResultLines;

