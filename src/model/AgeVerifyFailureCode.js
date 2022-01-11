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
 * @version    22.1.0
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */
import ApiClient from '../ApiClient';
/**
* Enum class AgeVerifyFailureCode.
* @enum {}
* @readonly
*/
export default class AgeVerifyFailureCode {
    
        /**
         * value: "not_found"
         * @const
         */
        "not_found" = "not_found";

    
        /**
         * value: "dob_unverifiable"
         * @const
         */
        "dob_unverifiable" = "dob_unverifiable";

    
        /**
         * value: "under_age"
         * @const
         */
        "under_age" = "under_age";

    
        /**
         * value: "suspected_fraud"
         * @const
         */
        "suspected_fraud" = "suspected_fraud";

    
        /**
         * value: "deceased"
         * @const
         */
        "deceased" = "deceased";

    
        /**
         * value: "unknown_error"
         * @const
         */
        "unknown_error" = "unknown_error";

    

    /**
    * Returns a <code>AgeVerifyFailureCode</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/AgeVerifyFailureCode} The enum <code>AgeVerifyFailureCode</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

