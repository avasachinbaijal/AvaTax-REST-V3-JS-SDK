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
 * @version    2.4.36
 * @link       https://github.com/avadev/AvaTax-REST-V3-JS-SDK
 */

import ApiClient from '../../ApiClient';

/**
 * The AgeVerifyRequestAddress model module.
 * @module model/AgeVerification/AgeVerifyRequestAddress
 * @version 2.4.36
 */
class AgeVerifyRequestAddress {
    /**
     * Constructs a new <code>AgeVerifyRequestAddress</code>.
     * @alias module:model/AgeVerification/AgeVerifyRequestAddress
     */
    constructor() { 
        
        AgeVerifyRequestAddress.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AgeVerifyRequestAddress</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AgeVerification/AgeVerifyRequestAddress} obj Optional instance to populate.
     * @return {module:model/AgeVerification/AgeVerifyRequestAddress} The populated <code>AgeVerifyRequestAddress</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AgeVerifyRequestAddress();

            if (data.hasOwnProperty('line1')) {
                obj['line1'] = ApiClient.convertToType(data['line1'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('region')) {
                obj['region'] = ApiClient.convertToType(data['region'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
            if (data.hasOwnProperty('postalCode')) {
                obj['postalCode'] = ApiClient.convertToType(data['postalCode'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} line1
 */
AgeVerifyRequestAddress.prototype['line1'] = undefined;

/**
 * @member {String} city
 */
AgeVerifyRequestAddress.prototype['city'] = undefined;

/**
 * The state code of the address.
 * @member {String} region
 */
AgeVerifyRequestAddress.prototype['region'] = undefined;

/**
 * The country code of the address.
 * @member {module:model/AgeVerification/AgeVerifyRequestAddress.CountryEnum} country
 */
AgeVerifyRequestAddress.prototype['country'] = undefined;

/**
 * @member {String} postalCode
 */
AgeVerifyRequestAddress.prototype['postalCode'] = undefined;





/**
 * Allowed values for the <code>country</code> property.
 * @enum {String}
 * @readonly
 */
AgeVerifyRequestAddress['CountryEnum'] = {

    /**
     * value: "US"
     * @const
     */
    "US": "US",

    /**
     * value: "USA"
     * @const
     */
    "USA": "USA"
};



export default AgeVerifyRequestAddress;
