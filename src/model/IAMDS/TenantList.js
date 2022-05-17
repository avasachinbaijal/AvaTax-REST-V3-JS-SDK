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
import Tenant from './Tenant';

/**
 * The TenantList model module.
 * @module model/IAMDS/TenantList
 * @version 2.4.33
 */
class TenantList {
    /**
     * Constructs a new <code>TenantList</code>.
     * @alias module:model/IAMDS/TenantList
     */
    constructor() { 
        
        TenantList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TenantList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IAMDS/TenantList} obj Optional instance to populate.
     * @return {module:model/IAMDS/TenantList} The populated <code>TenantList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TenantList();

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
                obj['items'] = ApiClient.convertToType(data['items'], [Tenant]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} @recordsetCount
 */
TenantList.prototype['@recordsetCount'] = undefined;

/**
 * @member {String} @nextLink
 */
TenantList.prototype['@nextLink'] = undefined;

/**
 * @member {String} pageKey
 */
TenantList.prototype['pageKey'] = undefined;

/**
 * @member {Array.<module:model/IAMDS/Tenant>} items
 */
TenantList.prototype['items'] = undefined;






export default TenantList;
