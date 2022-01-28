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
 * @version    2.3.8
 * @link       https://github.com/avadev/AvaTax-REST-V3-JS-SDK
 */

import ApiClient from '../ApiClient';
import AgeVerifyRequestAddress from './AgeVerifyRequestAddress';

/**
 * The AgeVerifyRequest model module.
 * @module model/AgeVerifyRequest
 * @version 2.3.8
 */
class AgeVerifyRequest {
    /**
     * Constructs a new <code>AgeVerifyRequest</code>.
     * The Request for the /ageVerification/verify endpoint. Describes information about the person whose age is being verified.
     * @alias module:model/AgeVerifyRequest
     */
    constructor() { 
        
        AgeVerifyRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AgeVerifyRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AgeVerifyRequest} obj Optional instance to populate.
     * @return {module:model/AgeVerifyRequest} The populated <code>AgeVerifyRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AgeVerifyRequest();

            if (data.hasOwnProperty('firstName')) {
                obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
            }
            if (data.hasOwnProperty('lastName')) {
                obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = AgeVerifyRequestAddress.constructFromObject(data['address']);
            }
            if (data.hasOwnProperty('DOB')) {
                obj['DOB'] = ApiClient.convertToType(data['DOB'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} firstName
 */
AgeVerifyRequest.prototype['firstName'] = undefined;

/**
 * @member {String} lastName
 */
AgeVerifyRequest.prototype['lastName'] = undefined;

/**
 * @member {module:model/AgeVerifyRequestAddress} address
 */
AgeVerifyRequest.prototype['address'] = undefined;

/**
 * The value should be ISO-8601 compliant (e.g. 2020-07-21).
 * @member {String} DOB
 */
AgeVerifyRequest.prototype['DOB'] = undefined;






export default AgeVerifyRequest;

