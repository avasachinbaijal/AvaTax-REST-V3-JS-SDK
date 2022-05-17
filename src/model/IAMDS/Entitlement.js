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
import Instance from './Instance';
import InstanceMeta from './InstanceMeta';
import Reference from './Reference';
import Tag from './Tag';

/**
 * The Entitlement model module.
 * @module model/IAMDS/Entitlement
 * @version 2.4.33
 */
class Entitlement {
    /**
     * Constructs a new <code>Entitlement</code>.
     * Representation of an Entitlement between an Tenant and a System
     * @alias module:model/IAMDS/Entitlement
     * @implements module:model/IAMDS/Instance
     * @param id {String} Unique identifier for the Object
     */
    constructor(id) { 
        Instance.initialize(this, id);
        Entitlement.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['system'] = system;
        obj['tenant'] = tenant;
        obj['id'] = id;
    }

    /**
     * Constructs a <code>Entitlement</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IAMDS/Entitlement} obj Optional instance to populate.
     * @return {module:model/IAMDS/Entitlement} The populated <code>Entitlement</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Entitlement();
            Instance.constructFromObject(data, obj);

            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('system')) {
                obj['system'] = Reference.constructFromObject(data['system']);
            }
            if (data.hasOwnProperty('tenant')) {
                obj['tenant'] = Reference.constructFromObject(data['tenant']);
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('features')) {
                obj['features'] = ApiClient.convertToType(data['features'], [Reference]);
            }
            if (data.hasOwnProperty('customGrants')) {
                obj['customGrants'] = ApiClient.convertToType(data['customGrants'], [Reference]);
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
 * Name of the entitlement, used for display purposes
 * @member {String} displayName
 */
Entitlement.prototype['displayName'] = undefined;

/**
 * @member {module:model/IAMDS/Reference} system
 */
Entitlement.prototype['system'] = undefined;

/**
 * @member {module:model/IAMDS/Reference} tenant
 */
Entitlement.prototype['tenant'] = undefined;

/**
 * Status of the entitlement - active or inactive
 * @member {Boolean} active
 * @default true
 */
Entitlement.prototype['active'] = true;

/**
 * List of features associated with the entitlement
 * @member {Array.<module:model/IAMDS/Reference>} features
 */
Entitlement.prototype['features'] = undefined;

/**
 * List of custom grants applicable for the entitlement
 * @member {Array.<module:model/IAMDS/Reference>} customGrants
 */
Entitlement.prototype['customGrants'] = undefined;

/**
 * Unique identifier for the Object
 * @member {String} id
 */
Entitlement.prototype['id'] = undefined;

/**
 * @member {module:model/IAMDS/InstanceMeta} meta
 */
Entitlement.prototype['meta'] = undefined;

/**
 * Identifier of the Resource (if any) in other systems
 * @member {Array.<module:model/IAMDS/Aspect>} aspects
 */
Entitlement.prototype['aspects'] = undefined;

/**
 * User defined tags in the form of key:value pair
 * @member {Array.<module:model/IAMDS/Tag>} tags
 */
Entitlement.prototype['tags'] = undefined;


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




export default Entitlement;
