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
import Aspect from './Aspect';
import Instance from './Instance';
import InstanceMeta from './InstanceMeta';
import Reference from './Reference';
import Tag from './Tag';

/**
 * The Device model module.
 * @module model/IAMDS/Device
 * @version 2.4.36
 */
class Device {
    /**
     * Constructs a new <code>Device</code>.
     * Representation of a Device
     * @alias module:model/IAMDS/Device
     * @implements module:model/IAMDS/Instance
     * @param id {String} Unique identifier for the Object
     */
    constructor(id) { 
        Instance.initialize(this, id);
        Device.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['displayName'] = displayName;
        obj['tenant'] = tenant;
        obj['identity'] = identity;
        obj['id'] = id;
    }

    /**
     * Constructs a <code>Device</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IAMDS/Device} obj Optional instance to populate.
     * @return {module:model/IAMDS/Device} The populated <code>Device</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Device();
            Instance.constructFromObject(data, obj);

            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('tenant')) {
                obj['tenant'] = Reference.constructFromObject(data['tenant']);
            }
            if (data.hasOwnProperty('identity')) {
                obj['identity'] = ApiClient.convertToType(data['identity'], 'String');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('grants')) {
                obj['grants'] = ApiClient.convertToType(data['grants'], [Reference]);
            }
            if (data.hasOwnProperty('groups')) {
                obj['groups'] = ApiClient.convertToType(data['groups'], [Reference]);
            }
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
 * Name of the Device, used for display purposes
 * @member {String} displayName
 */
Device.prototype['displayName'] = undefined;

/**
 * @member {module:model/IAMDS/Reference} tenant
 */
Device.prototype['tenant'] = undefined;

/**
 * Identity of the device, for example, a public X.509 certificate
 * @member {String} identity
 */
Device.prototype['identity'] = undefined;

/**
 * A Boolean value indicating the Device's administrative status
 * @member {Boolean} active
 */
Device.prototype['active'] = undefined;

/**
 * List of grants associated with the Device
 * @member {Array.<module:model/IAMDS/Reference>} grants
 */
Device.prototype['grants'] = undefined;

/**
 * List of groups to which the Device belongs
 * @member {Array.<module:model/IAMDS/Reference>} groups
 */
Device.prototype['groups'] = undefined;

/**
 * Unique identifier for the Object
 * @member {String} id
 */
Device.prototype['id'] = undefined;

/**
 * @member {module:model/IAMDS/InstanceMeta} meta
 */
Device.prototype['meta'] = undefined;

/**
 * Identifier of the Resource (if any) in other systems
 * @member {Array.<module:model/IAMDS/Aspect>} aspects
 */
Device.prototype['aspects'] = undefined;

/**
 * User defined tags in the form of key:value pair
 * @member {Array.<module:model/IAMDS/Tag>} tags
 */
Device.prototype['tags'] = undefined;


// Implement Instance interface:
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




export default Device;
