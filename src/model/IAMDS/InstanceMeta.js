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
 * The InstanceMeta model module.
 * @module model/IAMDS/InstanceMeta
 * @version 2.4.33
 */
class InstanceMeta {
    /**
     * Constructs a new <code>InstanceMeta</code>.
     * Meta data associated with this object. This information is automatically inserted by the service.
     * @alias module:model/IAMDS/InstanceMeta
     */
    constructor() { 
        
        InstanceMeta.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InstanceMeta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IAMDS/InstanceMeta} obj Optional instance to populate.
     * @return {module:model/IAMDS/InstanceMeta} The populated <code>InstanceMeta</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InstanceMeta();

            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('createdBy')) {
                obj['createdBy'] = ApiClient.convertToType(data['createdBy'], 'String');
            }
            if (data.hasOwnProperty('lastModified')) {
                obj['lastModified'] = ApiClient.convertToType(data['lastModified'], 'Date');
            }
            if (data.hasOwnProperty('modifiedBy')) {
                obj['modifiedBy'] = ApiClient.convertToType(data['modifiedBy'], 'String');
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = ApiClient.convertToType(data['location'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Date and time information when this object was created
 * @member {Date} created
 */
InstanceMeta.prototype['created'] = undefined;

/**
 * Id of the user/app that created this object
 * @member {String} createdBy
 */
InstanceMeta.prototype['createdBy'] = undefined;

/**
 * Date and time information when this object was last modified
 * @member {Date} lastModified
 */
InstanceMeta.prototype['lastModified'] = undefined;

/**
 * Id of the user/app that last modified this object
 * @member {String} modifiedBy
 */
InstanceMeta.prototype['modifiedBy'] = undefined;

/**
 * The URI of the Resource being returned
 * @member {String} location
 */
InstanceMeta.prototype['location'] = undefined;

/**
 * The version of the resource being returned in Etag format
 * @member {String} version
 */
InstanceMeta.prototype['version'] = undefined;






export default InstanceMeta;
