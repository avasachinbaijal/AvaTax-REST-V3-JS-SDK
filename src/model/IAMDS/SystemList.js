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
import System from './System';

/**
 * The SystemList model module.
 * @module model/IAMDS/SystemList
 * @version 2.4.34
 */
class SystemList {
    /**
     * Constructs a new <code>SystemList</code>.
     * @alias module:model/IAMDS/SystemList
     */
    constructor() { 
        
        SystemList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SystemList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IAMDS/SystemList} obj Optional instance to populate.
     * @return {module:model/IAMDS/SystemList} The populated <code>SystemList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SystemList();

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
                obj['items'] = ApiClient.convertToType(data['items'], [System]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} @recordsetCount
 */
SystemList.prototype['@recordsetCount'] = undefined;

/**
 * @member {String} @nextLink
 */
SystemList.prototype['@nextLink'] = undefined;

/**
 * @member {String} pageKey
 */
SystemList.prototype['pageKey'] = undefined;

/**
 * @member {Array.<module:model/IAMDS/System>} items
 */
SystemList.prototype['items'] = undefined;






export default SystemList;
