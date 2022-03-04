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
 * @version    2.4.29
 * @link       https://github.com/avadev/AvaTax-REST-V3-JS-SDK
 */

import ApiClient from '../ApiClient';

/**
 * The ErrorDetailsErrorDetails model module.
 * @module model/ErrorDetailsErrorDetails
 * @version 2.4.29
 */
class ErrorDetailsErrorDetails {
    /**
     * Constructs a new <code>ErrorDetailsErrorDetails</code>.
     * Message Details Object
     * @alias module:model/ErrorDetailsErrorDetails
     */
    constructor() { 
        
        ErrorDetailsErrorDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ErrorDetailsErrorDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ErrorDetailsErrorDetails} obj Optional instance to populate.
     * @return {module:model/ErrorDetailsErrorDetails} The populated <code>ErrorDetailsErrorDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ErrorDetailsErrorDetails();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('faultCode')) {
                obj['faultCode'] = ApiClient.convertToType(data['faultCode'], 'String');
            }
            if (data.hasOwnProperty('helpLink')) {
                obj['helpLink'] = ApiClient.convertToType(data['helpLink'], 'String');
            }
            if (data.hasOwnProperty('severity')) {
                obj['severity'] = ApiClient.convertToType(data['severity'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Name of the error or message.
 * @member {module:model/ErrorDetailsErrorDetails.CodeEnum} code
 */
ErrorDetailsErrorDetails.prototype['code'] = undefined;

/**
 * Concise summary of the message, suitable for display in the caption of an alert box.
 * @member {String} message
 */
ErrorDetailsErrorDetails.prototype['message'] = undefined;

/**
 * Unique ID number referring to this error or message.
 * @member {Number} number
 */
ErrorDetailsErrorDetails.prototype['number'] = undefined;

/**
 * A more detailed description of the problem referenced by this error message, suitable for display in the contents area of an alert box.
 * @member {String} description
 */
ErrorDetailsErrorDetails.prototype['description'] = undefined;

/**
 * Indicates the SOAP Fault code, if this was related to an error that corresponded to AvaTax SOAP v1 behavior.
 * @member {String} faultCode
 */
ErrorDetailsErrorDetails.prototype['faultCode'] = undefined;

/**
 * URL to help for this message
 * @member {String} helpLink
 */
ErrorDetailsErrorDetails.prototype['helpLink'] = undefined;

/**
 * Severity of the message
 * @member {module:model/ErrorDetailsErrorDetails.SeverityEnum} severity
 */
ErrorDetailsErrorDetails.prototype['severity'] = undefined;





/**
 * Allowed values for the <code>code</code> property.
 * @enum {String}
 * @readonly
 */
ErrorDetailsErrorDetails['CodeEnum'] = {

    /**
     * value: "AuthenticationException"
     * @const
     */
    "AuthenticationException": "AuthenticationException",

    /**
     * value: "SubscriptionRequired"
     * @const
     */
    "SubscriptionRequired": "SubscriptionRequired",

    /**
     * value: "UnhandledException"
     * @const
     */
    "UnhandledException": "UnhandledException",

    /**
     * value: "InvalidAddress"
     * @const
     */
    "InvalidAddress": "InvalidAddress",

    /**
     * value: "EntityNotFoundError"
     * @const
     */
    "EntityNotFoundError": "EntityNotFoundError"
};


/**
 * Allowed values for the <code>severity</code> property.
 * @enum {String}
 * @readonly
 */
ErrorDetailsErrorDetails['SeverityEnum'] = {

    /**
     * value: "Error"
     * @const
     */
    "Error": "Error"
};



export default ErrorDetailsErrorDetails;

