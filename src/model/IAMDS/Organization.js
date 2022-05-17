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
import Contact from './Contact';
import Instance from './Instance';
import InstanceMeta from './InstanceMeta';
import Tag from './Tag';

/**
 * The Organization model module.
 * @module model/IAMDS/Organization
 * @version 2.4.33
 */
class Organization {
    /**
     * Constructs a new <code>Organization</code>.
     * An IAM Organization defines a logical context in which Users and Tenants are managed
     * @alias module:model/IAMDS/Organization
     * @implements module:model/IAMDS/Instance
     * @param id {String} Unique identifier for the Object
     */
    constructor(id) { 
        Instance.initialize(this, id);
        Organization.initialize(this, id);
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
     * Constructs a <code>Organization</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IAMDS/Organization} obj Optional instance to populate.
     * @return {module:model/IAMDS/Organization} The populated <code>Organization</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Organization();
            Instance.constructFromObject(data, obj);

            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('contacts')) {
                obj['contacts'] = ApiClient.convertToType(data['contacts'], [Contact]);
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], Object);
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
 * Human-readable name of the Organization
 * @member {String} displayName
 */
Organization.prototype['displayName'] = undefined;

/**
 * Organization contacts
 * @member {Array.<module:model/IAMDS/Contact>} contacts
 */
Organization.prototype['contacts'] = undefined;

/**
 * Address of the Organization
 * @member {Object} address
 */
Organization.prototype['address'] = undefined;

/**
 * Unique identifier for the Object
 * @member {String} id
 */
Organization.prototype['id'] = undefined;

/**
 * @member {module:model/IAMDS/InstanceMeta} meta
 */
Organization.prototype['meta'] = undefined;

/**
 * Identifier of the Resource (if any) in other systems
 * @member {Array.<module:model/IAMDS/Aspect>} aspects
 */
Organization.prototype['aspects'] = undefined;

/**
 * User defined tags in the form of key:value pair
 * @member {Array.<module:model/IAMDS/Tag>} tags
 */
Organization.prototype['tags'] = undefined;


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




export default Organization;
