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

/**
 * The Reference model module.
 * @module model/IAMDS/Reference
 * @version 2.4.33
 */
class Reference {
    /**
     * Constructs a new <code>Reference</code>.
     * Reference to an instance of an Object
     * @alias module:model/IAMDS/Reference
     * @param identifier {String} Unique Identifier of the object
     */
    constructor(identifier) { 
        
        Reference.initialize(this, identifier);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, identifier) { 
        obj['identifier'] = identifier;
    }

    /**
     * Constructs a <code>Reference</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IAMDS/Reference} obj Optional instance to populate.
     * @return {module:model/IAMDS/Reference} The populated <code>Reference</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Reference();

            if (data.hasOwnProperty('identifier')) {
                obj['identifier'] = ApiClient.convertToType(data['identifier'], 'String');
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = ApiClient.convertToType(data['location'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Unique Identifier of the object
 * @member {String} identifier
 */
Reference.prototype['identifier'] = undefined;

/**
 * Name of the object, used for display purposes
 * @member {String} displayName
 */
Reference.prototype['displayName'] = undefined;

/**
 * URL to access the object
 * @member {String} location
 */
Reference.prototype['location'] = undefined;






export default Reference;
