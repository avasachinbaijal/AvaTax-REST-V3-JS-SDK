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
 * The ContactName model module.
 * @module model/IAMDS/ContactName
 * @version 2.4.34
 */
class ContactName {
    /**
     * Constructs a new <code>ContactName</code>.
     * Name of the contact
     * @alias module:model/IAMDS/ContactName
     */
    constructor() { 
        
        ContactName.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ContactName</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IAMDS/ContactName} obj Optional instance to populate.
     * @return {module:model/IAMDS/ContactName} The populated <code>ContactName</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContactName();

            if (data.hasOwnProperty('firstName')) {
                obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
            }
            if (data.hasOwnProperty('lastName')) {
                obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * First Name
 * @member {String} firstName
 */
ContactName.prototype['firstName'] = undefined;

/**
 * Last Name
 * @member {String} lastName
 */
ContactName.prototype['lastName'] = undefined;






export default ContactName;
