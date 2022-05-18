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
 * @version    2.4.34
 * @link       https://github.com/avadev/AvaTax-REST-V3-JS-SDK
 */

import ApiClient from '../../ApiClient';
/**
* Enum class VersionError.
* @enum {}
* @readonly
*/
export default class VersionError {
    
        /**
         * value: "version-too-new"
         * @const
         */
        "too-new" = "version-too-new";

    
        /**
         * value: "version-too-old"
         * @const
         */
        "too-old" = "version-too-old";

    
        /**
         * value: "version-not-valid"
         * @const
         */
        "not-valid" = "version-not-valid";

    

    /**
    * Returns a <code>VersionError</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/IAMDS/VersionError} The enum <code>VersionError</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
