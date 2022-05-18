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
import Aspect from './Aspect';
import Instance from './Instance';
import InstanceMeta from './InstanceMeta';
import Reference from './Reference';
import Tag from './Tag';

/**
 * The Grant model module.
 * @module model/IAMDS/Grant
 * @version 2.4.34
 */
class Grant {
    /**
     * Constructs a new <code>Grant</code>.
     * Representation of a Grant
     * @alias module:model/IAMDS/Grant
     * @implements module:model/IAMDS/Instance
     * @param id {String} Unique identifier for the Object
     */
    constructor(id) { 
        Instance.initialize(this, id);
        Grant.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['displayName'] = displayName;
        obj['system'] = system;
        obj['type'] = type;
        obj['role'] = role;
        obj['id'] = id;
    }

    /**
     * Constructs a <code>Grant</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IAMDS/Grant} obj Optional instance to populate.
     * @return {module:model/IAMDS/Grant} The populated <code>Grant</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Grant();
            Instance.constructFromObject(data, obj);

            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('system')) {
                obj['system'] = Reference.constructFromObject(data['system']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('role')) {
                obj['role'] = Reference.constructFromObject(data['role']);
            }
            if (data.hasOwnProperty('rules')) {
                obj['rules'] = ApiClient.convertToType(data['rules'], [Object]);
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
 * Name of the Grant
 * @member {String} displayName
 */
Grant.prototype['displayName'] = undefined;

/**
 * Description of the grant, used for display purposes
 * @member {String} description
 */
Grant.prototype['description'] = undefined;

/**
 * @member {module:model/IAMDS/Reference} system
 */
Grant.prototype['system'] = undefined;

/**
 * Determines the grant ownership
 * @member {module:model/IAMDS/Grant.TypeEnum} type
 */
Grant.prototype['type'] = undefined;

/**
 * @member {module:model/IAMDS/Reference} role
 */
Grant.prototype['role'] = undefined;

/**
 * Defines the conditions associated with permissions in the role
 * @member {Array.<Object>} rules
 */
Grant.prototype['rules'] = undefined;

/**
 * Unique identifier for the Object
 * @member {String} id
 */
Grant.prototype['id'] = undefined;

/**
 * @member {module:model/IAMDS/InstanceMeta} meta
 */
Grant.prototype['meta'] = undefined;

/**
 * Identifier of the Resource (if any) in other systems
 * @member {Array.<module:model/IAMDS/Aspect>} aspects
 */
Grant.prototype['aspects'] = undefined;

/**
 * User defined tags in the form of key:value pair
 * @member {Array.<module:model/IAMDS/Tag>} tags
 */
Grant.prototype['tags'] = undefined;


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



/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
Grant['TypeEnum'] = {

    /**
     * value: "System"
     * @const
     */
    "System": "System",

    /**
     * value: "Custom"
     * @const
     */
    "Custom": "Custom"
};



export default Grant;
