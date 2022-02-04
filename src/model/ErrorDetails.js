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
 * @version    2.4.16
 * @link       https://github.com/avadev/AvaTax-REST-V3-JS-SDK
 */

import ApiClient from '../ApiClient';
import ErrorDetailsError from './ErrorDetailsError';

/**
 * The ErrorDetails model module.
 * @module model/ErrorDetails
 * @version 2.4.16
 */
class ErrorDetails {
    /**
     * Constructs a new <code>ErrorDetails</code>.
     * Message Object
     * @alias module:model/ErrorDetails
     */
    constructor() { 
        
        ErrorDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ErrorDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ErrorDetails} obj Optional instance to populate.
     * @return {module:model/ErrorDetails} The populated <code>ErrorDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ErrorDetails();

            if (data.hasOwnProperty('error')) {
                obj['error'] = ErrorDetailsError.constructFromObject(data['error']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ErrorDetailsError} error
 */
ErrorDetails.prototype['error'] = undefined;






export default ErrorDetails;

