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
 * The User model module.
 * @module model/IAMDS/User
 * @version 2.4.36
 */
class User {
    /**
     * Constructs a new <code>User</code>.
     * Representation of an User
     * @alias module:model/IAMDS/User
     * @implements module:model/IAMDS/Instance
     * @param id {String} Unique identifier for the Object
     */
    constructor(id) { 
        Instance.initialize(this, id);
        User.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['userName'] = userName;
        obj['organization'] = organization;
        obj['emails'] = emails;
        obj['id'] = id;
    }

    /**
     * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IAMDS/User} obj Optional instance to populate.
     * @return {module:model/IAMDS/User} The populated <code>User</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new User();
            Instance.constructFromObject(data, obj);

            if (data.hasOwnProperty('externalId')) {
                obj['externalId'] = ApiClient.convertToType(data['externalId'], 'String');
            }
            if (data.hasOwnProperty('userName')) {
                obj['userName'] = ApiClient.convertToType(data['userName'], 'String');
            }
            if (data.hasOwnProperty('organization')) {
                obj['organization'] = Reference.constructFromObject(data['organization']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], Object);
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('nickName')) {
                obj['nickName'] = ApiClient.convertToType(data['nickName'], 'String');
            }
            if (data.hasOwnProperty('profileUrl')) {
                obj['profileUrl'] = ApiClient.convertToType(data['profileUrl'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('userType')) {
                obj['userType'] = ApiClient.convertToType(data['userType'], 'String');
            }
            if (data.hasOwnProperty('preferredLanguage')) {
                obj['preferredLanguage'] = ApiClient.convertToType(data['preferredLanguage'], 'String');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('timezone')) {
                obj['timezone'] = ApiClient.convertToType(data['timezone'], 'String');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('emails')) {
                obj['emails'] = ApiClient.convertToType(data['emails'], [Object]);
            }
            if (data.hasOwnProperty('phoneNumbers')) {
                obj['phoneNumbers'] = ApiClient.convertToType(data['phoneNumbers'], [Object]);
            }
            if (data.hasOwnProperty('addresses')) {
                obj['addresses'] = ApiClient.convertToType(data['addresses'], [Object]);
            }
            if (data.hasOwnProperty('defaultTenant')) {
                obj['defaultTenant'] = Reference.constructFromObject(data['defaultTenant']);
            }
            if (data.hasOwnProperty('customClaims')) {
                obj['customClaims'] = ApiClient.convertToType(data['customClaims'], [Object]);
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
 * Identifier for the user in external systems (clients). The external systems manage this
 * @member {String} externalId
 */
User.prototype['externalId'] = undefined;

/**
 * Human readable unique identifier of the user, typically used to authenticate with an identity provider
 * @member {String} userName
 */
User.prototype['userName'] = undefined;

/**
 * @member {module:model/IAMDS/Reference} organization
 */
User.prototype['organization'] = undefined;

/**
 * The components of the user's real name.  Providers MAY return just the full name as a single string in the formatted sub-attribute, or they MAY return just the individual component attributes using the other sub-attributes, or they MAY return both.  If both variants are returned, they SHOULD be describing the same name, with the formatted name indicating how the component attributes should be combined.
 * @member {Object} name
 */
User.prototype['name'] = undefined;

/**
 * The name of the User, suitable for display to end-users.  The name SHOULD be the full name of the User being described, if known
 * @member {String} displayName
 */
User.prototype['displayName'] = undefined;

/**
 * The casual way to address the user in real life, e.g., 'Bob' or 'Bobby' instead of 'Robert'.  This attribute SHOULD NOT be used to represent a User's username (e.g., 'bjensen' or 'mpepperidge')
 * @member {String} nickName
 */
User.prototype['nickName'] = undefined;

/**
 * A fully qualified URL pointing to a page representing the User's online profile
 * @member {String} profileUrl
 */
User.prototype['profileUrl'] = undefined;

/**
 * The user's title, such as \"Vice President.\"
 * @member {String} title
 */
User.prototype['title'] = undefined;

/**
 * Used to identify the relationship between the organization and the user.  Typical values used might be 'Contractor', 'Employee', 'Intern', 'Temp', 'External', and 'Unknown', but any value may be used
 * @member {String} userType
 */
User.prototype['userType'] = undefined;

/**
 * Indicates the User's preferred written or spoken language.  Generally used for selecting a localized user interface; e.g., 'en_US' specifies the language English and country US
 * @member {String} preferredLanguage
 */
User.prototype['preferredLanguage'] = undefined;

/**
 * Used to indicate the User's default location for purposes of localizing items such as currency, date time format, or numerical representations
 * @member {String} locale
 */
User.prototype['locale'] = undefined;

/**
 * The User's time zone in the 'Olson' time zone database format, e.g., 'America/Los_Angeles'
 * @member {String} timezone
 */
User.prototype['timezone'] = undefined;

/**
 * A Boolean value indicating the User's administrative status
 * @member {Boolean} active
 */
User.prototype['active'] = undefined;

/**
 * The User's cleartext password.  This attribute is intended to be used as a means to specify an initial password when creating a new User or to reset an existing User's password
 * @member {String} password
 */
User.prototype['password'] = undefined;

/**
 * A List of email addresses associated with the user
 * @member {Array.<Object>} emails
 */
User.prototype['emails'] = undefined;

/**
 * A List of phone numbers associated with the user
 * @member {Array.<Object>} phoneNumbers
 */
User.prototype['phoneNumbers'] = undefined;

/**
 * A physical mailing address for this User, as described in (address Element). Canonical Type Values of work, home, and other. The value attribute is a complex type with the following sub-attributes
 * @member {Array.<Object>} addresses
 */
User.prototype['addresses'] = undefined;

/**
 * @member {module:model/IAMDS/Reference} defaultTenant
 */
User.prototype['defaultTenant'] = undefined;

/**
 * Custom claims that are returned along with a requested scope during authentication
 * @member {Array.<Object>} customClaims
 */
User.prototype['customClaims'] = undefined;

/**
 * Unique identifier for the Object
 * @member {String} id
 */
User.prototype['id'] = undefined;

/**
 * @member {module:model/IAMDS/InstanceMeta} meta
 */
User.prototype['meta'] = undefined;

/**
 * Identifier of the Resource (if any) in other systems
 * @member {Array.<module:model/IAMDS/Aspect>} aspects
 */
User.prototype['aspects'] = undefined;

/**
 * User defined tags in the form of key:value pair
 * @member {Array.<module:model/IAMDS/Tag>} tags
 */
User.prototype['tags'] = undefined;


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




export default User;
