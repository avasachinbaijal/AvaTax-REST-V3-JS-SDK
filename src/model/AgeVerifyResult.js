/**
 * Avalara Shipping Verification for Beverage Alcohol
 * API for evaluating transactions against direct-to-consumer Beverage Alcohol shipping regulations.  This API is currently in beta. 
 *
 * The version of the OpenAPI document: 2.1.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The AgeVerifyResult model module.
 * @module model/AgeVerifyResult
 * @version 2.1.3
 */
class AgeVerifyResult {
    /**
     * Constructs a new <code>AgeVerifyResult</code>.
     * The Result of a call to the /ageVerification/verify endpoint.
     * @alias module:model/AgeVerifyResult
     */
    constructor() { 
        
        AgeVerifyResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AgeVerifyResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AgeVerifyResult} obj Optional instance to populate.
     * @return {module:model/AgeVerifyResult} The populated <code>AgeVerifyResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AgeVerifyResult();

            if (data.hasOwnProperty('isOfAge')) {
                obj['isOfAge'] = ApiClient.convertToType(data['isOfAge'], 'Boolean');
            }
            if (data.hasOwnProperty('failureCodes')) {
                obj['failureCodes'] = ApiClient.convertToType(data['failureCodes'], [AgeVerifyResult]);
            }
        }
        return obj;
    }


}

/**
 * Describes whether the individual meets or exceeds the minimum legal drinking age.
 * @member {Boolean} isOfAge
 */
AgeVerifyResult.prototype['isOfAge'] = undefined;

/**
 * A list of failure codes describing why a *false* age determination was made.
 * @member {Array.<module:model/AgeVerifyResult>} failureCodes
 */
AgeVerifyResult.prototype['failureCodes'] = undefined;






export default AgeVerifyResult;

