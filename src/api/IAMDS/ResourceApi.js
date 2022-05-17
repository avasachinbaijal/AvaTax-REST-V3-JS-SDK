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


import PermissionList from '../../model/IAMDS/PermissionList';
import Resource from '../../model/IAMDS/Resource';
import ResourceList from '../../model/IAMDS/ResourceList';
import VersionError from '../../model/IAMDS/VersionError';

/**
* Resource service.
* @module api/IAMDS/ResourceApi
* @version 2.4.33
*/
export default class ResourceApi {

    /**
    * Constructs a new ResourceApi. 
    * @alias module:api/IAMDS/ResourceApi
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
     * Callback function to receive the result of the createResource operation.
     * @callback module:api/IAMDS/ResourceApi~createResourceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IAMDS/Resource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a resource.
     * The response contains the same object as posted and fills in the newly assigned resource ID.
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {module:model/IAMDS/Resource} opts.resource 
     * @param {module:api/IAMDS/ResourceApi~createResourceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IAMDS/Resource}
     */
    createResource(opts, callback) {
      opts = opts || {};
      let postBody = opts['resource'];

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
      let returnType = Resource;
      return this.apiClient.callApi(
        '/resources', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteResource operation.
     * @callback module:api/IAMDS/ResourceApi~deleteResourceCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a resource.
     * Deletes the resource by ID.
     * @param {String} resourceId 
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {module:api/IAMDS/ResourceApi~deleteResourceCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteResource(resourceId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'resourceId' is set
      if (resourceId === undefined || resourceId === null) {
        throw new Error("Missing the required parameter 'resourceId' when calling deleteResource");
      }

      let pathParams = {
        'resource-id': resourceId
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
      let contentTypes = [];
      let accepts = ['text/plain'];
      let returnType = null;
      return this.apiClient.callApi(
        '/resources/{resource-id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getResource operation.
     * @callback module:api/IAMDS/ResourceApi~getResourceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IAMDS/Resource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a resource.
     * Retrieves the specified resource.
     * @param {String} resourceId 
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {String} opts.ifNoneMatch Only return the resource if the ETag is different from the ETag passed in.
     * @param {String} opts.ifMatch Only execute the operation if the ETag for the current version of the resource matches the ETag in this header.
     * @param {module:api/IAMDS/ResourceApi~getResourceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IAMDS/Resource}
     */
    getResource(resourceId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'resourceId' is set
      if (resourceId === undefined || resourceId === null) {
        throw new Error("Missing the required parameter 'resourceId' when calling getResource");
      }

      let pathParams = {
        'resource-id': resourceId
      };
      let queryParams = {
      };
      let headerParams = {
        'avalara-version': opts['avalaraVersion'],
        'X-Correlation-Id': opts['xCorrelationId'],
        'If-None-Match': opts['ifNoneMatch'],
        'If-Match': opts['ifMatch']
      };
      let formParams = {
      };

      let authNames = ['OAuth'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/plain'];
      let returnType = Resource;
      return this.apiClient.callApi(
        '/resources/{resource-id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listResourcePermissions operation.
     * @callback module:api/IAMDS/ResourceApi~listResourcePermissionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IAMDS/PermissionList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of all permissions on a resource.
     * Retrieve a list of all permissions a resource belongs to which the authenticated user has access to. This list is paged, returning no more than 1000 items at a time.  Filterable properties:  * name
     * @param {String} resourceId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter A filter statement to identify specific records to retrieve.
     * @param {String} opts.top If nonzero, return no more than this number of results.  Used with `$skip` to provide pagination for large datasets.  Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {String} opts.skip If nonzero, skip this number of results before returning data.  Used with `$top` to provide pagination for large datasets.
     * @param {String} opts.orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
     * @param {Boolean} opts.count If set to 'true', requests the count of items as part of the response. Default: 'false'. If the value cannot be
     * @param {Boolean} opts.countOnly If set to 'true', requests the count of items as part of the response. No values are returned. Default: 'false'.
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {module:api/IAMDS/ResourceApi~listResourcePermissionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IAMDS/PermissionList}
     */
    listResourcePermissions(resourceId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'resourceId' is set
      if (resourceId === undefined || resourceId === null) {
        throw new Error("Missing the required parameter 'resourceId' when calling listResourcePermissions");
      }

      let pathParams = {
        'resource-id': resourceId
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
      let returnType = PermissionList;
      return this.apiClient.callApi(
        '/resources/{resource-id}/permissions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listResources operation.
     * @callback module:api/IAMDS/ResourceApi~listResourcesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IAMDS/ResourceList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all resources which the user has access to.
     * Retrieve a list of all resources the authenticated user has access to. This list is paged, returning no more than 1000 items at a time.  Filterable properties: * displayName * namespace * system/identifier
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter A filter statement to identify specific records to retrieve.
     * @param {String} opts.top If nonzero, return no more than this number of results.  Used with `$skip` to provide pagination for large datasets.  Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {String} opts.skip If nonzero, skip this number of results before returning data.  Used with `$top` to provide pagination for large datasets.
     * @param {String} opts.orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
     * @param {Boolean} opts.count If set to 'true', requests the count of items as part of the response. Default: 'false'. If the value cannot be
     * @param {Boolean} opts.countOnly If set to 'true', requests the count of items as part of the response. No values are returned. Default: 'false'.
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {module:api/IAMDS/ResourceApi~listResourcesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IAMDS/ResourceList}
     */
    listResources(opts, callback) {
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
      let returnType = ResourceList;
      return this.apiClient.callApi(
        '/resources', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the patchResource operation.
     * @callback module:api/IAMDS/ResourceApi~patchResourceCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the passed in fields from the message on the resource.
     * Updates only the fields passed in for the specified resource.
     * @param {String} resourceId 
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {String} opts.ifMatch Only execute the operation if the ETag for the current version of the resource matches the ETag in this header.
     * @param {module:model/IAMDS/Resource} opts.resource 
     * @param {module:api/IAMDS/ResourceApi~patchResourceCallback} callback The callback function, accepting three arguments: error, data, response
     */
    patchResource(resourceId, opts, callback) {
      opts = opts || {};
      let postBody = opts['resource'];
      // verify the required parameter 'resourceId' is set
      if (resourceId === undefined || resourceId === null) {
        throw new Error("Missing the required parameter 'resourceId' when calling patchResource");
      }

      let pathParams = {
        'resource-id': resourceId
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
        '/resources/{resource-id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the replaceResource operation.
     * @callback module:api/IAMDS/ResourceApi~replaceResourceCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update all fields on a resource.
     * Replaces the specified resource with the resource in the body.
     * @param {String} resourceId 
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {String} opts.ifMatch Only execute the operation if the ETag for the current version of the resource matches the ETag in this header.
     * @param {module:model/IAMDS/Resource} opts.resource 
     * @param {module:api/IAMDS/ResourceApi~replaceResourceCallback} callback The callback function, accepting three arguments: error, data, response
     */
    replaceResource(resourceId, opts, callback) {
      opts = opts || {};
      let postBody = opts['resource'];
      // verify the required parameter 'resourceId' is set
      if (resourceId === undefined || resourceId === null) {
        throw new Error("Missing the required parameter 'resourceId' when calling replaceResource");
      }

      let pathParams = {
        'resource-id': resourceId
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
        '/resources/{resource-id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
