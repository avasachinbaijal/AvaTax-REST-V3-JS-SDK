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
import Aspect from './Aspect';
import InstanceMeta from './InstanceMeta';
import Tag from './Tag';

/**
 * The Instance model module.
 * @module model/IAMDS/Instance
 * @version 2.4.33
 */
class Instance {
    /**
     * Constructs a new <code>Instance</code>.
     * Representation of an Object Instance
     * @alias module:model/IAMDS/Instance
     * @param id {String} Unique identifier for the Object
     */
    constructor(id) { 
        
        Instance.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['id'] = id;
    }

    /**
     * Constructs a <code>Instance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IAMDS/Instance} obj Optional instance to populate.
     * @return {module:model/IAMDS/Instance} The populated <code>Instance</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Instance();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = InstanceMeta.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('aspects')) {
                obj['aspects'] = ApiClient.convertToType(data['aspects'], [Aspect]);
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], [Tag]);
            }
        }
        return obj;
    }


}

/**
 * Unique identifier for the Object
 * @member {String} id
 */
Instance.prototype['id'] = undefined;

/**
 * @member {module:model/IAMDS/InstanceMeta} meta
 */
Instance.prototype['meta'] = undefined;

/**
 * Identifier of the Resource (if any) in other systems
 * @member {Array.<module:model/IAMDS/Aspect>} aspects
 */
Instance.prototype['aspects'] = undefined;

/**
 * User defined tags in the form of key:value pair
 * @member {Array.<module:model/IAMDS/Tag>} tags
 */
Instance.prototype['tags'] = undefined;






export default Instance;
