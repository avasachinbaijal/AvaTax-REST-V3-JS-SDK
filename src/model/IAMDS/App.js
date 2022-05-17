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
 * The App model module.
 * @module model/IAMDS/App
 * @version 2.4.33
 */
class App {
    /**
     * Constructs a new <code>App</code>.
     * An App represents any software package that intends to interact with Avalara Compliance Cloud
     * @alias module:model/IAMDS/App
     * @implements module:model/IAMDS/Instance
     * @param id {String} Unique identifier for the Object
     */
    constructor(id) { 
        Instance.initialize(this, id);
        App.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['displayName'] = displayName;
        obj['type'] = type;
        obj['organization'] = organization;
        obj['id'] = id;
    }

    /**
     * Constructs a <code>App</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IAMDS/App} obj Optional instance to populate.
     * @return {module:model/IAMDS/App} The populated <code>App</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new App();
            Instance.constructFromObject(data, obj);

            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('organization')) {
                obj['organization'] = Reference.constructFromObject(data['organization']);
            }
            if (data.hasOwnProperty('isTenantAgnostic')) {
                obj['isTenantAgnostic'] = ApiClient.convertToType(data['isTenantAgnostic'], 'Boolean');
            }
            if (data.hasOwnProperty('isOrgAgnostic')) {
                obj['isOrgAgnostic'] = ApiClient.convertToType(data['isOrgAgnostic'], 'Boolean');
            }
            if (data.hasOwnProperty('tenants')) {
                obj['tenants'] = ApiClient.convertToType(data['tenants'], [Object]);
            }
            if (data.hasOwnProperty('clientId')) {
                obj['clientId'] = ApiClient.convertToType(data['clientId'], 'String');
            }
            if (data.hasOwnProperty('redirectUris')) {
                obj['redirectUris'] = ApiClient.convertToType(data['redirectUris'], ['String']);
            }
            if (data.hasOwnProperty('grants')) {
                obj['grants'] = ApiClient.convertToType(data['grants'], [Reference]);
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
 * Name of the App/Service
 * @member {String} displayName
 */
App.prototype['displayName'] = undefined;

/**
 * Type of application
 * @member {module:model/IAMDS/App.TypeEnum} type
 */
App.prototype['type'] = undefined;

/**
 * @member {module:model/IAMDS/Reference} organization
 */
App.prototype['organization'] = undefined;

/**
 * Whether the App is allowed to access information across all Tenants within its Organization
 * @member {Boolean} isTenantAgnostic
 * @default false
 */
App.prototype['isTenantAgnostic'] = false;

/**
 * Whether the App is allowed to access information across all Organizations and Tenants
 * @member {Boolean} isOrgAgnostic
 * @default false
 */
App.prototype['isOrgAgnostic'] = false;

/**
 * @member {Array.<Object>} tenants
 */
App.prototype['tenants'] = undefined;

/**
 * The clientId used for OAuth flows
 * @member {String} clientId
 */
App.prototype['clientId'] = undefined;

/**
 * Defines the registered redirect URIs for the app - determines where tokens are sent after authentication
 * @member {Array.<String>} redirectUris
 */
App.prototype['redirectUris'] = undefined;

/**
 * List of grants associated with the App
 * @member {Array.<module:model/IAMDS/Reference>} grants
 */
App.prototype['grants'] = undefined;

/**
 * Unique identifier for the Object
 * @member {String} id
 */
App.prototype['id'] = undefined;

/**
 * @member {module:model/IAMDS/InstanceMeta} meta
 */
App.prototype['meta'] = undefined;

/**
 * Identifier of the Resource (if any) in other systems
 * @member {Array.<module:model/IAMDS/Aspect>} aspects
 */
App.prototype['aspects'] = undefined;

/**
 * User defined tags in the form of key:value pair
 * @member {Array.<module:model/IAMDS/Tag>} tags
 */
App.prototype['tags'] = undefined;


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
App['TypeEnum'] = {

    /**
     * value: "spa"
     * @const
     */
    "spa": "spa",

    /**
     * value: "web"
     * @const
     */
    "web": "web",

    /**
     * value: "native"
     * @const
     */
    "native": "native"
};



export default App;
