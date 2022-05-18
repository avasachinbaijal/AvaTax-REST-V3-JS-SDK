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
 * @version    2.4.34
 * @link       https://github.com/avadev/AvaTax-REST-V3-JS-SDK
 */


import Grant from '../../model/IAMDS/Grant';
import GrantList from '../../model/IAMDS/GrantList';
import VersionError from '../../model/IAMDS/VersionError';

/**
* Grant service.
* @module api/IAMDS/GrantApi
* @version 2.4.34
*/
export default class GrantApi {

    /**
    * Constructs a new GrantApi. 
    * @alias module:api/IAMDS/GrantApi
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
     * Callback function to receive the result of the createGrant operation.
     * @callback module:api/IAMDS/GrantApi~createGrantCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IAMDS/Grant} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a grant.
     * The response contains the same object as posted and fills in the newly assigned grant ID.
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {module:model/IAMDS/Grant} opts.grant 
     * @param {module:api/IAMDS/GrantApi~createGrantCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IAMDS/Grant}
     */
    createGrant(opts, callback) {
      opts = opts || {};
      let postBody = opts['grant'];

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
      let returnType = Grant;
      return this.apiClient.callApi(
        '/grants', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteGrant operation.
     * @callback module:api/IAMDS/GrantApi~deleteGrantCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a grant.
     * Deletes the specified grant.
     * @param {String} grantId 
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {String} opts.ifMatch Only execute the operation if the ETag for the current version of the resource matches the ETag in this header.
     * @param {module:api/IAMDS/GrantApi~deleteGrantCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteGrant(grantId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'grantId' is set
      if (grantId === undefined || grantId === null) {
        throw new Error("Missing the required parameter 'grantId' when calling deleteGrant");
      }

      let pathParams = {
        'grant-id': grantId
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
        '/grants/{grant-id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getGrant operation.
     * @callback module:api/IAMDS/GrantApi~getGrantCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IAMDS/Grant} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a grant.
     * Retrieves a grant based on its ID.
     * @param {String} grantId 
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {String} opts.ifNoneMatch Only return the resource if the ETag is different from the ETag passed in.
     * @param {module:api/IAMDS/GrantApi~getGrantCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IAMDS/Grant}
     */
    getGrant(grantId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'grantId' is set
      if (grantId === undefined || grantId === null) {
        throw new Error("Missing the required parameter 'grantId' when calling getGrant");
      }

      let pathParams = {
        'grant-id': grantId
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
      let returnType = Grant;
      return this.apiClient.callApi(
        '/grants/{grant-id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listGrants operation.
     * @callback module:api/IAMDS/GrantApi~listGrantsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IAMDS/GrantList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve all grants the current user has access to.
     * Retrieve a list of all grants the authenticated user has access to. This list is paged, returning no more than 1000 items at a time.  Filterable properties:  * displayName * system/identifier * type * role/identifier
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter A filter statement to identify specific records to retrieve.
     * @param {String} opts.top If nonzero, return no more than this number of results.  Used with `$skip` to provide pagination for large datasets.  Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {String} opts.skip If nonzero, skip this number of results before returning data.  Used with `$top` to provide pagination for large datasets.
     * @param {String} opts.orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
     * @param {Boolean} opts.count If set to 'true', requests the count of items as part of the response. Default: 'false'. If the value cannot be
     * @param {Boolean} opts.countOnly If set to 'true', requests the count of items as part of the response. No values are returned. Default: 'false'.
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {module:api/IAMDS/GrantApi~listGrantsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IAMDS/GrantList}
     */
    listGrants(opts, callback) {
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
      let returnType = GrantList;
      return this.apiClient.callApi(
        '/grants', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the patchGrant operation.
     * @callback module:api/IAMDS/GrantApi~patchGrantCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update only the fields within the body on the grant.
     * Updates only the fields passed in the body.
     * @param {String} grantId 
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {String} opts.ifMatch Only execute the operation if the ETag for the current version of the resource matches the ETag in this header.
     * @param {module:model/IAMDS/Grant} opts.grant 
     * @param {module:api/IAMDS/GrantApi~patchGrantCallback} callback The callback function, accepting three arguments: error, data, response
     */
    patchGrant(grantId, opts, callback) {
      opts = opts || {};
      let postBody = opts['grant'];
      // verify the required parameter 'grantId' is set
      if (grantId === undefined || grantId === null) {
        throw new Error("Missing the required parameter 'grantId' when calling patchGrant");
      }

      let pathParams = {
        'grant-id': grantId
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
        '/grants/{grant-id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the replaceGrant operation.
     * @callback module:api/IAMDS/GrantApi~replaceGrantCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update all fields on a grant.
     * Replaces the specified grant with the grant in the body.
     * @param {String} grantId 
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {String} opts.ifMatch Only execute the operation if the ETag for the current version of the resource matches the ETag in this header.
     * @param {module:model/IAMDS/Grant} opts.grant 
     * @param {module:api/IAMDS/GrantApi~replaceGrantCallback} callback The callback function, accepting three arguments: error, data, response
     */
    replaceGrant(grantId, opts, callback) {
      opts = opts || {};
      let postBody = opts['grant'];
      // verify the required parameter 'grantId' is set
      if (grantId === undefined || grantId === null) {
        throw new Error("Missing the required parameter 'grantId' when calling replaceGrant");
      }

      let pathParams = {
        'grant-id': grantId
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
        '/grants/{grant-id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
