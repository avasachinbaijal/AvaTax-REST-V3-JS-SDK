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


import Role from '../../model/IAMDS/Role';
import RoleList from '../../model/IAMDS/RoleList';
import VersionError from '../../model/IAMDS/VersionError';

/**
* Role service.
* @module api/IAMDS/RoleApi
* @version 2.4.36
*/
export default class RoleApi {

    /**
    * Constructs a new RoleApi. 
    * @alias module:api/IAMDS/RoleApi
    * @class
    * @param {module:ApiClient} [apiClient] API client implementation to use
    */
    constructor(apiClient) {
        if (!apiClient) {
            throw new Error('apiClient is a required parameter.');
        }
        this.apiClient = apiClient;
        this.apiClient.sdkVersion = '2.4.36';
    }


    /**
     * Callback function to receive the result of the createRole operation.
     * @callback module:api/IAMDS/RoleApi~createRoleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IAMDS/Role} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a role.
     * The response contains the same object as posted and fills in the newly assigned role ID.
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {module:model/IAMDS/Role} opts.role 
     * @param {module:api/IAMDS/RoleApi~createRoleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IAMDS/Role}
     */
    createRole(opts, callback) {
      opts = opts || {};
      let postBody = opts['role'];

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
      //OAuth2 Scopes
      let requiredScopes = "iam TestScope TestScope1";
      let authNames = ['OAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json', 'text/plain'];
      let returnType = Role;
      return this.apiClient.callApi(
        '/roles', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback, requiredScopes
      );
    }

    /**
     * Callback function to receive the result of the deleteRole operation.
     * @callback module:api/IAMDS/RoleApi~deleteRoleCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a role.
     * Deletes the specified role.
     * @param {String} roleId 
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {String} opts.ifMatch Only execute the operation if the ETag for the current version of the resource matches the ETag in this header.
     * @param {module:api/IAMDS/RoleApi~deleteRoleCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteRole(roleId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'roleId' is set
      if (roleId === undefined || roleId === null) {
        throw new Error("Missing the required parameter 'roleId' when calling deleteRole");
      }

      let pathParams = {
        'role-id': roleId
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
      //OAuth2 Scopes
      let requiredScopes = "iam TestScope TestScope1";
      let authNames = ['OAuth'];
      let contentTypes = [];
      let accepts = ['text/plain'];
      let returnType = null;
      return this.apiClient.callApi(
        '/roles/{role-id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback, requiredScopes
      );
    }

    /**
     * Callback function to receive the result of the getRole operation.
     * @callback module:api/IAMDS/RoleApi~getRoleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IAMDS/Role} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a role.
     * Retrieves a role based on its ID.
     * @param {String} roleId 
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {String} opts.ifNoneMatch Only return the resource if the ETag is different from the ETag passed in.
     * @param {module:api/IAMDS/RoleApi~getRoleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IAMDS/Role}
     */
    getRole(roleId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'roleId' is set
      if (roleId === undefined || roleId === null) {
        throw new Error("Missing the required parameter 'roleId' when calling getRole");
      }

      let pathParams = {
        'role-id': roleId
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
      //OAuth2 Scopes
      let requiredScopes = "iam TestScope TestScope1";
      let authNames = ['OAuth'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/plain'];
      let returnType = Role;
      return this.apiClient.callApi(
        '/roles/{role-id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback, requiredScopes
      );
    }

    /**
     * Callback function to receive the result of the listRoles operation.
     * @callback module:api/IAMDS/RoleApi~listRolesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IAMDS/RoleList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all roles which the user has access to.
     * Retrieve a list of all roles the authenticated user has access to. This list is paged, returning no more than 1000 items at a time.  Filterable properties:  * displayName * system/identifier * type * permissions
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter A filter statement to identify specific records to retrieve.
     * @param {String} opts.top If nonzero, return no more than this number of results.  Used with `$skip` to provide pagination for large datasets.  Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {String} opts.skip If nonzero, skip this number of results before returning data.  Used with `$top` to provide pagination for large datasets.
     * @param {String} opts.orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
     * @param {Boolean} opts.count If set to 'true', requests the count of items as part of the response. Default: 'false'. If the value cannot be
     * @param {Boolean} opts.countOnly If set to 'true', requests the count of items as part of the response. No values are returned. Default: 'false'.
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {module:api/IAMDS/RoleApi~listRolesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IAMDS/RoleList}
     */
    listRoles(opts, callback) {
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
      //OAuth2 Scopes
      let requiredScopes = "iam TestScope TestScope1";
      let authNames = ['OAuth'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/plain'];
      let returnType = RoleList;
      return this.apiClient.callApi(
        '/roles', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback, requiredScopes
      );
    }

    /**
     * Callback function to receive the result of the patchRole operation.
     * @callback module:api/IAMDS/RoleApi~patchRoleCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the fields present in the message body on the role.
     * Update only the fields passed into the patch operation.
     * @param {String} roleId 
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {String} opts.ifMatch Only execute the operation if the ETag for the current version of the resource matches the ETag in this header.
     * @param {module:api/IAMDS/RoleApi~patchRoleCallback} callback The callback function, accepting three arguments: error, data, response
     */
    patchRole(roleId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'roleId' is set
      if (roleId === undefined || roleId === null) {
        throw new Error("Missing the required parameter 'roleId' when calling patchRole");
      }

      let pathParams = {
        'role-id': roleId
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
      //OAuth2 Scopes
      let requiredScopes = "iam TestScope TestScope1";
      let authNames = ['OAuth'];
      let contentTypes = [];
      let accepts = ['text/plain'];
      let returnType = null;
      return this.apiClient.callApi(
        '/roles/{role-id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback, requiredScopes
      );
    }

    /**
     * Callback function to receive the result of the replaceRole operation.
     * @callback module:api/IAMDS/RoleApi~replaceRoleCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update all fields on a role.
     * Replaces the specified role with the role in the body.
     * @param {String} roleId 
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {String} opts.ifMatch Only execute the operation if the ETag for the current version of the resource matches the ETag in this header.
     * @param {module:model/IAMDS/Role} opts.role 
     * @param {module:api/IAMDS/RoleApi~replaceRoleCallback} callback The callback function, accepting three arguments: error, data, response
     */
    replaceRole(roleId, opts, callback) {
      opts = opts || {};
      let postBody = opts['role'];
      // verify the required parameter 'roleId' is set
      if (roleId === undefined || roleId === null) {
        throw new Error("Missing the required parameter 'roleId' when calling replaceRole");
      }

      let pathParams = {
        'role-id': roleId
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
      //OAuth2 Scopes
      let requiredScopes = "iam TestScope TestScope1";
      let authNames = ['OAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['text/plain'];
      let returnType = null;
      return this.apiClient.callApi(
        '/roles/{role-id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback, requiredScopes
      );
    }


}
