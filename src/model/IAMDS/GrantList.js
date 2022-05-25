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
import Grant from './Grant';

/**
 * The GrantList model module.
 * @module model/IAMDS/GrantList
 * @version 2.4.36
 */
class GrantList {
    /**
     * Constructs a new <code>GrantList</code>.
     * @alias module:model/IAMDS/GrantList
     */
    constructor() { 
        
        GrantList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GrantList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IAMDS/GrantList} obj Optional instance to populate.
     * @return {module:model/IAMDS/GrantList} The populated <code>GrantList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GrantList();

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
                obj['items'] = ApiClient.convertToType(data['items'], [Grant]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} @recordsetCount
 */
GrantList.prototype['@recordsetCount'] = undefined;

/**
 * @member {String} @nextLink
 */
GrantList.prototype['@nextLink'] = undefined;

/**
 * @member {String} pageKey
 */
GrantList.prototype['pageKey'] = undefined;

/**
 * @member {Array.<module:model/IAMDS/Grant>} items
 */
GrantList.prototype['items'] = undefined;






export default GrantList;
