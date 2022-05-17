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
import Entitlement from './Entitlement';

/**
 * The EntitlementList model module.
 * @module model/IAMDS/EntitlementList
 * @version 2.4.33
 */
class EntitlementList {
    /**
     * Constructs a new <code>EntitlementList</code>.
     * @alias module:model/IAMDS/EntitlementList
     */
    constructor() { 
        
        EntitlementList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EntitlementList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IAMDS/EntitlementList} obj Optional instance to populate.
     * @return {module:model/IAMDS/EntitlementList} The populated <code>EntitlementList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EntitlementList();

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
                obj['items'] = ApiClient.convertToType(data['items'], [Entitlement]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} @recordsetCount
 */
EntitlementList.prototype['@recordsetCount'] = undefined;

/**
 * @member {String} @nextLink
 */
EntitlementList.prototype['@nextLink'] = undefined;

/**
 * @member {String} pageKey
 */
EntitlementList.prototype['pageKey'] = undefined;

/**
 * @member {Array.<module:model/IAMDS/Entitlement>} items
 */
EntitlementList.prototype['items'] = undefined;






export default EntitlementList;
