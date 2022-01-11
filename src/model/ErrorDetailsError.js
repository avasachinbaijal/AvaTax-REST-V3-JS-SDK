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
 * @version    22.1.0
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */
import ApiClient from '../ApiClient';
import ErrorDetailsErrorDetails from './ErrorDetailsErrorDetails';

/**
 * The ErrorDetailsError model module.
 * @module model/ErrorDetailsError
 * @version 22.1.0
 */
class ErrorDetailsError {
    /**
     * Constructs a new <code>ErrorDetailsError</code>.
     * An object holding details about the error.
     * @alias module:model/ErrorDetailsError
     */
    constructor() { 
        
        ErrorDetailsError.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ErrorDetailsError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ErrorDetailsError} obj Optional instance to populate.
     * @return {module:model/ErrorDetailsError} The populated <code>ErrorDetailsError</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ErrorDetailsError();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('details')) {
                obj['details'] = ErrorDetailsErrorDetails.constructFromObject(data['details']);
            }
        }
        return obj;
    }


}

/**
 * Name of the error or message.
 * @member {module:model/ErrorDetailsError.CodeEnum} code
 */
ErrorDetailsError.prototype['code'] = undefined;

/**
 * Concise summary of the message, suitable for display in the caption of an alert box.
 * @member {String} message
 */
ErrorDetailsError.prototype['message'] = undefined;

/**
 * @member {module:model/ErrorDetailsErrorDetails} details
 */
ErrorDetailsError.prototype['details'] = undefined;





/**
 * Allowed values for the <code>code</code> property.
 * @enum {String}
 * @readonly
 */
ErrorDetailsError['CodeEnum'] = {

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
     * value: "ServerConfiguration"
     * @const
     */
    "ServerConfiguration": "ServerConfiguration",

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



export default ErrorDetailsError;

