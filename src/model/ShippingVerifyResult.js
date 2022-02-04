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
 * @version    2.4.9
 * @link       https://github.com/avadev/AvaTax-REST-V3-JS-SDK
 */

import ApiClient from '../ApiClient';
import ShippingVerifyResultLines from './ShippingVerifyResultLines';

/**
 * The ShippingVerifyResult model module.
 * @module model/ShippingVerifyResult
 * @version 2.4.9
 */
class ShippingVerifyResult {
    /**
     * Constructs a new <code>ShippingVerifyResult</code>.
     * The Response of the /shippingverify endpoint. Describes the result of checking all applicable shipping rules against each line in the transaction.
     * @alias module:model/ShippingVerifyResult
     */
    constructor() { 
        
        ShippingVerifyResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ShippingVerifyResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ShippingVerifyResult} obj Optional instance to populate.
     * @return {module:model/ShippingVerifyResult} The populated <code>ShippingVerifyResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ShippingVerifyResult();

            if (data.hasOwnProperty('compliant')) {
                obj['compliant'] = ApiClient.convertToType(data['compliant'], 'Boolean');
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
            if (data.hasOwnProperty('warningCodes')) {
                obj['warningCodes'] = ApiClient.convertToType(data['warningCodes'], ['String']);
            }
            if (data.hasOwnProperty('lines')) {
                obj['lines'] = ApiClient.convertToType(data['lines'], [ShippingVerifyResultLines]);
            }
        }
        return obj;
    }


}

/**
 * Whether every line in the transaction is compliant.
 * @member {Boolean} compliant
 */
ShippingVerifyResult.prototype['compliant'] = undefined;

/**
 * A short description of the result of the compliance check.
 * @member {String} message
 */
ShippingVerifyResult.prototype['message'] = undefined;

/**
 * A detailed description of the result of each of the passed checks made against this transaction, separated by line.
 * @member {String} successMessages
 */
ShippingVerifyResult.prototype['successMessages'] = undefined;

/**
 * A detailed description of the result of each of the failed checks made against this transaction, separated by line.
 * @member {String} failureMessages
 */
ShippingVerifyResult.prototype['failureMessages'] = undefined;

/**
 * An enumeration of all the failure codes received across all lines.
 * @member {Array.<module:model/ShippingVerifyResult.FailureCodesEnum>} failureCodes
 */
ShippingVerifyResult.prototype['failureCodes'] = undefined;

/**
 * An enumeration of all the warning codes received across all lines that a determination could not be made for.
 * @member {Array.<module:model/ShippingVerifyResult.WarningCodesEnum>} warningCodes
 */
ShippingVerifyResult.prototype['warningCodes'] = undefined;

/**
 * Describes the results of the checks made for each line in the transaction.
 * @member {Array.<module:model/ShippingVerifyResultLines>} lines
 */
ShippingVerifyResult.prototype['lines'] = undefined;





/**
 * Allowed values for the <code>failureCodes</code> property.
 * @enum {String}
 * @readonly
 */
ShippingVerifyResult['FailureCodesEnum'] = {

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


/**
 * Allowed values for the <code>warningCodes</code> property.
 * @enum {String}
 * @readonly
 */
ShippingVerifyResult['WarningCodesEnum'] = {

    /**
     * value: "UnsupportedTaxCode"
     * @const
     */
    "UnsupportedTaxCode": "UnsupportedTaxCode",

    /**
     * value: "UnsupportedAddress"
     * @const
     */
    "UnsupportedAddress": "UnsupportedAddress"
};



export default ShippingVerifyResult;

