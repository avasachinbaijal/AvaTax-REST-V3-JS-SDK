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
import ContactEmails from './ContactEmails';
import ContactName from './ContactName';
import ContactPhoneNumbers from './ContactPhoneNumbers';
import Reference from './Reference';

/**
 * The Contact model module.
 * @module model/IAMDS/Contact
 * @version 2.4.36
 */
class Contact {
    /**
     * Constructs a new <code>Contact</code>.
     * Representation of a contact within the Avalara Compliance Cloud platform
     * @alias module:model/IAMDS/Contact
     * @param source {module:model/IAMDS/Contact.SourceEnum} Source of truth for the contact
     * @param name {module:model/IAMDS/ContactName} 
     * @param emails {Array.<module:model/IAMDS/ContactEmails>} 
     */
    constructor(source, name, emails) { 
        
        Contact.initialize(this, source, name, emails);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, source, name, emails) { 
        obj['source'] = source;
        obj['name'] = name;
        obj['emails'] = emails;
    }

    /**
     * Constructs a <code>Contact</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IAMDS/Contact} obj Optional instance to populate.
     * @return {module:model/IAMDS/Contact} The populated <code>Contact</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Contact();

            if (data.hasOwnProperty('source')) {
                obj['source'] = ApiClient.convertToType(data['source'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = Reference.constructFromObject(data['user']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ContactName.constructFromObject(data['name']);
            }
            if (data.hasOwnProperty('contactType')) {
                obj['contactType'] = ApiClient.convertToType(data['contactType'], 'String');
            }
            if (data.hasOwnProperty('emails')) {
                obj['emails'] = ApiClient.convertToType(data['emails'], [ContactEmails]);
            }
            if (data.hasOwnProperty('phoneNumbers')) {
                obj['phoneNumbers'] = ApiClient.convertToType(data['phoneNumbers'], [ContactPhoneNumbers]);
            }
        }
        return obj;
    }


}

/**
 * Source of truth for the contact
 * @member {module:model/IAMDS/Contact.SourceEnum} source
 */
Contact.prototype['source'] = undefined;

/**
 * @member {module:model/IAMDS/Reference} user
 */
Contact.prototype['user'] = undefined;

/**
 * @member {module:model/IAMDS/ContactName} name
 */
Contact.prototype['name'] = undefined;

/**
 * Type of contact
 * @member {String} contactType
 */
Contact.prototype['contactType'] = undefined;

/**
 * @member {Array.<module:model/IAMDS/ContactEmails>} emails
 */
Contact.prototype['emails'] = undefined;

/**
 * @member {Array.<module:model/IAMDS/ContactPhoneNumbers>} phoneNumbers
 */
Contact.prototype['phoneNumbers'] = undefined;





/**
 * Allowed values for the <code>source</code> property.
 * @enum {String}
 * @readonly
 */
Contact['SourceEnum'] = {

    /**
     * value: "referenced"
     * @const
     */
    "referenced": "referenced",

    /**
     * value: "managed"
     * @const
     */
    "managed": "managed"
};



export default Contact;
