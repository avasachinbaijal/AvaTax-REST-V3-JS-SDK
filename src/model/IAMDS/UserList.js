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
 * @version    2.4.33
 * @link       https://github.com/avadev/AvaTax-REST-V3-JS-SDK
 */

import ApiClient from '../../ApiClient';
import User from './User';

/**
 * The UserList model module.
 * @module model/IAMDS/UserList
 * @version 2.4.33
 */
class UserList {
    /**
     * Constructs a new <code>UserList</code>.
     * @alias module:model/IAMDS/UserList
     */
    constructor() { 
        
        UserList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IAMDS/UserList} obj Optional instance to populate.
     * @return {module:model/IAMDS/UserList} The populated <code>UserList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserList();

            if (data.hasOwnProperty('@recordsetCount')) {
                obj['@recordsetCount'] = ApiClient.convertToType(data['@recordsetCount'], 'Number');
            }
            if (data.hasOwnProperty('@nextLink')) {
                obj['@nextLink'] = ApiClient.convertToType(data['@nextLink'], 'String');
            }
            if (data.hasOwnProperty('pageKey')) {
                obj['pageKey'] = ApiClient.convertToType(data['pageKey'], 'String');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [User]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} @recordsetCount
 */
UserList.prototype['@recordsetCount'] = undefined;

/**
 * @member {String} @nextLink
 */
UserList.prototype['@nextLink'] = undefined;

/**
 * @member {String} pageKey
 */
UserList.prototype['pageKey'] = undefined;

/**
 * @member {Array.<module:model/IAMDS/User>} items
 */
UserList.prototype['items'] = undefined;






export default UserList;
