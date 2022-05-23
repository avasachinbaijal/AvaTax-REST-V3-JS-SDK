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


import Feature from '../../model/IAMDS/Feature';
import FeatureList from '../../model/IAMDS/FeatureList';
import GrantList from '../../model/IAMDS/GrantList';
import VersionError from '../../model/IAMDS/VersionError';

/**
* Feature service.
* @module api/IAMDS/FeatureApi
* @version 2.4.36
*/
export default class FeatureApi {

    /**
    * Constructs a new FeatureApi. 
    * @alias module:api/IAMDS/FeatureApi
    * @class
    * @param {module:ApiClient} [apiClient] API client implementation to use
    */
    constructor(apiClient) {
        if (!apiClient) {
            throw new Error('apiClient is a required parameter.');
        }
        this.apiClient = apiClient;
    }


    /**
     * Callback function to receive the result of the createFeature operation.
     * @callback module:api/IAMDS/FeatureApi~createFeatureCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IAMDS/Feature} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a feature.
     * The response contains the same object as posted and fills in the newly assigned feature ID.
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {module:model/IAMDS/Feature} opts.feature 
     * @param {module:api/IAMDS/FeatureApi~createFeatureCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IAMDS/Feature}
     */
    createFeature(opts, callback) {
      opts = opts || {};
      let postBody = opts['feature'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'avalara-version': opts['avalaraVersion'],
        'X-Correlation-Id': opts['xCorrelationId']
      };
      let formParams = {
      };

      let authNames = ['OAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json', 'text/plain'];
      let returnType = Feature;
      return this.apiClient.callApi(
        '/features', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteFeature operation.
     * @callback module:api/IAMDS/FeatureApi~deleteFeatureCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a feature.
     * Deletes the feature by ID.
     * @param {String} featureId 
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {String} opts.ifMatch Only execute the operation if the ETag for the current version of the resource matches the ETag in this header.
     * @param {module:api/IAMDS/FeatureApi~deleteFeatureCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteFeature(featureId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'featureId' is set
      if (featureId === undefined || featureId === null) {
        throw new Error("Missing the required parameter 'featureId' when calling deleteFeature");
      }

      let pathParams = {
        'feature-id': featureId
      };
      let queryParams = {
      };
      let headerParams = {
        'avalara-version': opts['avalaraVersion'],
        'X-Correlation-Id': opts['xCorrelationId'],
        'If-Match': opts['ifMatch']
      };
      let formParams = {
      };

      let authNames = ['OAuth'];
      let contentTypes = [];
      let accepts = ['text/plain'];
      let returnType = null;
      return this.apiClient.callApi(
        '/features/{feature-id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getFeature operation.
     * @callback module:api/IAMDS/FeatureApi~getFeatureCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IAMDS/Feature} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a feature.
     * Retrieves the specified feature.
     * @param {String} featureId 
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {String} opts.ifNoneMatch Only return the resource if the ETag is different from the ETag passed in.
     * @param {module:api/IAMDS/FeatureApi~getFeatureCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IAMDS/Feature}
     */
    getFeature(featureId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'featureId' is set
      if (featureId === undefined || featureId === null) {
        throw new Error("Missing the required parameter 'featureId' when calling getFeature");
      }

      let pathParams = {
        'feature-id': featureId
      };
      let queryParams = {
      };
      let headerParams = {
        'avalara-version': opts['avalaraVersion'],
        'X-Correlation-Id': opts['xCorrelationId'],
        'If-None-Match': opts['ifNoneMatch']
      };
      let formParams = {
      };

      let authNames = ['OAuth'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/plain'];
      let returnType = Feature;
      return this.apiClient.callApi(
        '/features/{feature-id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listFeatureGrants operation.
     * @callback module:api/IAMDS/FeatureApi~listFeatureGrantsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IAMDS/GrantList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all grants on a feature.
     * Retrieve a list of all grants a feature belongs to which the authenticated user has access to. This list is paged, returning no more than 1000 items at a time.  Filterable properties:  * displayName * role/identifier
     * @param {String} featureId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter A filter statement to identify specific records to retrieve.
     * @param {String} opts.top If nonzero, return no more than this number of results.  Used with `$skip` to provide pagination for large datasets.  Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {String} opts.skip If nonzero, skip this number of results before returning data.  Used with `$top` to provide pagination for large datasets.
     * @param {String} opts.orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
     * @param {Boolean} opts.count If set to 'true', requests the count of items as part of the response. Default: 'false'. If the value cannot be
     * @param {Boolean} opts.countOnly If set to 'true', requests the count of items as part of the response. No values are returned. Default: 'false'.
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {module:api/IAMDS/FeatureApi~listFeatureGrantsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IAMDS/GrantList}
     */
    listFeatureGrants(featureId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'featureId' is set
      if (featureId === undefined || featureId === null) {
        throw new Error("Missing the required parameter 'featureId' when calling listFeatureGrants");
      }

      let pathParams = {
        'feature-id': featureId
      };
      let queryParams = {
        '$filter': opts['filter'],
        '$top': opts['top'],
        '$skip': opts['skip'],
        '$orderBy': opts['orderBy'],
        'count': opts['count'],
        'countOnly': opts['countOnly']
      };
      let headerParams = {
        'avalara-version': opts['avalaraVersion'],
        'X-Correlation-Id': opts['xCorrelationId']
      };
      let formParams = {
      };

      let authNames = ['OAuth'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/plain'];
      let returnType = GrantList;
      return this.apiClient.callApi(
        '/features/{feature-id}/grants', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listFeatures operation.
     * @callback module:api/IAMDS/FeatureApi~listFeaturesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IAMDS/FeatureList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all features which the user has access to.
     * Retrieve a list of all features the authenticated user has access to. This list is paged, returning no more than 1000 items at a time.  Filterable properties:  * displayName * system/identifier * grants/identifier
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter A filter statement to identify specific records to retrieve.
     * @param {String} opts.top If nonzero, return no more than this number of results.  Used with `$skip` to provide pagination for large datasets.  Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {String} opts.skip If nonzero, skip this number of results before returning data.  Used with `$top` to provide pagination for large datasets.
     * @param {String} opts.orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
     * @param {Boolean} opts.count If set to 'true', requests the count of items as part of the response. Default: 'false'. If the value cannot be
     * @param {Boolean} opts.countOnly If set to 'true', requests the count of items as part of the response. No values are returned. Default: 'false'.
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {module:api/IAMDS/FeatureApi~listFeaturesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IAMDS/FeatureList}
     */
    listFeatures(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        '$filter': opts['filter'],
        '$top': opts['top'],
        '$skip': opts['skip'],
        '$orderBy': opts['orderBy'],
        'count': opts['count'],
        'countOnly': opts['countOnly']
      };
      let headerParams = {
        'avalara-version': opts['avalaraVersion'],
        'X-Correlation-Id': opts['xCorrelationId']
      };
      let formParams = {
      };

      let authNames = ['OAuth'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/plain'];
      let returnType = FeatureList;
      return this.apiClient.callApi(
        '/features', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the patchFeature operation.
     * @callback module:api/IAMDS/FeatureApi~patchFeatureCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the fields within the body on the feature.
     * Updates only the fields passed in for the specified feature.
     * @param {String} featureId 
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {String} opts.ifMatch Only execute the operation if the ETag for the current version of the resource matches the ETag in this header.
     * @param {module:model/IAMDS/Feature} opts.feature 
     * @param {module:api/IAMDS/FeatureApi~patchFeatureCallback} callback The callback function, accepting three arguments: error, data, response
     */
    patchFeature(featureId, opts, callback) {
      opts = opts || {};
      let postBody = opts['feature'];
      // verify the required parameter 'featureId' is set
      if (featureId === undefined || featureId === null) {
        throw new Error("Missing the required parameter 'featureId' when calling patchFeature");
      }

      let pathParams = {
        'feature-id': featureId
      };
      let queryParams = {
      };
      let headerParams = {
        'avalara-version': opts['avalaraVersion'],
        'X-Correlation-Id': opts['xCorrelationId'],
        'If-Match': opts['ifMatch']
      };
      let formParams = {
      };

      let authNames = ['OAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['text/plain'];
      let returnType = null;
      return this.apiClient.callApi(
        '/features/{feature-id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the replaceFeature operation.
     * @callback module:api/IAMDS/FeatureApi~replaceFeatureCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update all fields on a feature.
     * Replaces the specified feature with the feature in the body.
     * @param {String} featureId 
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {String} opts.ifMatch Only execute the operation if the ETag for the current version of the resource matches the ETag in this header.
     * @param {module:model/IAMDS/Feature} opts.feature 
     * @param {module:api/IAMDS/FeatureApi~replaceFeatureCallback} callback The callback function, accepting three arguments: error, data, response
     */
    replaceFeature(featureId, opts, callback) {
      opts = opts || {};
      let postBody = opts['feature'];
      // verify the required parameter 'featureId' is set
      if (featureId === undefined || featureId === null) {
        throw new Error("Missing the required parameter 'featureId' when calling replaceFeature");
      }

      let pathParams = {
        'feature-id': featureId
      };
      let queryParams = {
      };
      let headerParams = {
        'avalara-version': opts['avalaraVersion'],
        'X-Correlation-Id': opts['xCorrelationId'],
        'If-Match': opts['ifMatch']
      };
      let formParams = {
      };

      let authNames = ['OAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['text/plain'];
      let returnType = null;
      return this.apiClient.callApi(
        '/features/{feature-id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
