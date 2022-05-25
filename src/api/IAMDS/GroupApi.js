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


import DeviceList from '../../model/IAMDS/DeviceList';
import GrantList from '../../model/IAMDS/GrantList';
import Group from '../../model/IAMDS/Group';
import GroupList from '../../model/IAMDS/GroupList';
import UserList from '../../model/IAMDS/UserList';
import VersionError from '../../model/IAMDS/VersionError';

/**
* Group service.
* @module api/IAMDS/GroupApi
* @version 2.4.36
*/
export default class GroupApi {

    /**
    * Constructs a new GroupApi. 
    * @alias module:api/IAMDS/GroupApi
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
     * Callback function to receive the result of the addDeviceToGroup operation.
     * @callback module:api/IAMDS/GroupApi~addDeviceToGroupCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a device to a group.
     * Adds a device to a group.
     * @param {String} groupId 
     * @param {String} deviceId 
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {module:api/IAMDS/GroupApi~addDeviceToGroupCallback} callback The callback function, accepting three arguments: error, data, response
     */
    addDeviceToGroup(groupId, deviceId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling addDeviceToGroup");
      }
      // verify the required parameter 'deviceId' is set
      if (deviceId === undefined || deviceId === null) {
        throw new Error("Missing the required parameter 'deviceId' when calling addDeviceToGroup");
      }

      let pathParams = {
        'group-id': groupId,
        'device-id': deviceId
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
      let contentTypes = [];
      let accepts = ['text/plain'];
      let returnType = null;
      return this.apiClient.callApi(
        '/groups/{group-id}/devices/{device-id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback, requiredScopes
      );
    }

    /**
     * Callback function to receive the result of the addGrantToGroup operation.
     * @callback module:api/IAMDS/GroupApi~addGrantToGroupCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a grant to a group.
     * Adds a grant to a group.
     * @param {String} groupId 
     * @param {String} grantId 
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {module:api/IAMDS/GroupApi~addGrantToGroupCallback} callback The callback function, accepting three arguments: error, data, response
     */
    addGrantToGroup(groupId, grantId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling addGrantToGroup");
      }
      // verify the required parameter 'grantId' is set
      if (grantId === undefined || grantId === null) {
        throw new Error("Missing the required parameter 'grantId' when calling addGrantToGroup");
      }

      let pathParams = {
        'group-id': groupId,
        'grant-id': grantId
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
      let contentTypes = [];
      let accepts = ['text/plain'];
      let returnType = null;
      return this.apiClient.callApi(
        '/groups/{group-id}/grants/{grant-id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback, requiredScopes
      );
    }

    /**
     * Callback function to receive the result of the addUserToGroup operation.
     * @callback module:api/IAMDS/GroupApi~addUserToGroupCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a user to a group.
     * Adds a user to a group.
     * @param {String} groupId 
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {module:api/IAMDS/GroupApi~addUserToGroupCallback} callback The callback function, accepting three arguments: error, data, response
     */
    addUserToGroup(groupId, userId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling addUserToGroup");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling addUserToGroup");
      }

      let pathParams = {
        'group-id': groupId,
        'user-id': userId
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
      let contentTypes = [];
      let accepts = ['text/plain'];
      let returnType = null;
      return this.apiClient.callApi(
        '/groups/{group-id}/users/{user-id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback, requiredScopes
      );
    }

    /**
     * Callback function to receive the result of the createGroup operation.
     * @callback module:api/IAMDS/GroupApi~createGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IAMDS/Group} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a group.
     * On a post, the group ID will not be known since it is assigned by the system. The response contains the group, including ID.
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {module:model/IAMDS/Group} opts.group 
     * @param {module:api/IAMDS/GroupApi~createGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IAMDS/Group}
     */
    createGroup(opts, callback) {
      opts = opts || {};
      let postBody = opts['group'];

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
      let returnType = Group;
      return this.apiClient.callApi(
        '/groups', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback, requiredScopes
      );
    }

    /**
     * Callback function to receive the result of the deleteGroup operation.
     * @callback module:api/IAMDS/GroupApi~deleteGroupCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a group.
     * Deletes the specified group.
     * @param {String} groupId 
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {String} opts.ifMatch Only execute the operation if the ETag for the current version of the resource matches the ETag in this header.
     * @param {module:api/IAMDS/GroupApi~deleteGroupCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteGroup(groupId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling deleteGroup");
      }

      let pathParams = {
        'group-id': groupId
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
        '/groups/{group-id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback, requiredScopes
      );
    }

    /**
     * Callback function to receive the result of the getGroup operation.
     * @callback module:api/IAMDS/GroupApi~getGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IAMDS/Group} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a group by ID.
     * Retrieves the specified group.
     * @param {String} groupId 
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {String} opts.ifNoneMatch Only return the resource if the ETag is different from the ETag passed in.
     * @param {module:api/IAMDS/GroupApi~getGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IAMDS/Group}
     */
    getGroup(groupId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling getGroup");
      }

      let pathParams = {
        'group-id': groupId
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
      let returnType = Group;
      return this.apiClient.callApi(
        '/groups/{group-id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback, requiredScopes
      );
    }

    /**
     * Callback function to receive the result of the listGroupDevices operation.
     * @callback module:api/IAMDS/GroupApi~listGroupDevicesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IAMDS/DeviceList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all devices in a group.
     * Retrieve a list of all devices within a group which the authenticated user has access to. This list is paged, returning no more than 1000 items at a time.  Filterable properties:  * displayName * tenant/identifier * active * grants/identifier
     * @param {String} groupId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter A filter statement to identify specific records to retrieve.
     * @param {String} opts.top If nonzero, return no more than this number of results.  Used with `$skip` to provide pagination for large datasets.  Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {String} opts.skip If nonzero, skip this number of results before returning data.  Used with `$top` to provide pagination for large datasets.
     * @param {String} opts.orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
     * @param {Boolean} opts.count If set to 'true', requests the count of items as part of the response. Default: 'false'. If the value cannot be
     * @param {Boolean} opts.countOnly If set to 'true', requests the count of items as part of the response. No values are returned. Default: 'false'.
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {module:api/IAMDS/GroupApi~listGroupDevicesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IAMDS/DeviceList}
     */
    listGroupDevices(groupId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling listGroupDevices");
      }

      let pathParams = {
        'group-id': groupId
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
      let returnType = DeviceList;
      return this.apiClient.callApi(
        '/groups/{group-id}/devices', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback, requiredScopes
      );
    }

    /**
     * Callback function to receive the result of the listGroupGrants operation.
     * @callback module:api/IAMDS/GroupApi~listGroupGrantsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IAMDS/GrantList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all grants in a group.
     * Retrieve a list of all grants within a group which the authenticated user has access to. This list is paged, returning no more than 1000 items at a time.  Filterable properties:  * displayName * system/identifier * type * role/identifier
     * @param {String} groupId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter A filter statement to identify specific records to retrieve.
     * @param {String} opts.top If nonzero, return no more than this number of results.  Used with `$skip` to provide pagination for large datasets.  Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {String} opts.skip If nonzero, skip this number of results before returning data.  Used with `$top` to provide pagination for large datasets.
     * @param {String} opts.orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
     * @param {Boolean} opts.count If set to 'true', requests the count of items as part of the response. Default: 'false'. If the value cannot be
     * @param {Boolean} opts.countOnly If set to 'true', requests the count of items as part of the response. No values are returned. Default: 'false'.
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {module:api/IAMDS/GroupApi~listGroupGrantsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IAMDS/GrantList}
     */
    listGroupGrants(groupId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling listGroupGrants");
      }

      let pathParams = {
        'group-id': groupId
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
      let returnType = GrantList;
      return this.apiClient.callApi(
        '/groups/{group-id}/grants', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback, requiredScopes
      );
    }

    /**
     * Callback function to receive the result of the listGroupUsers operation.
     * @callback module:api/IAMDS/GroupApi~listGroupUsersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IAMDS/UserList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all users in a group.
     * Retrieve a list of all users within a group which the authenticated user has access to. This list is paged, returning no more than 1000 items at a time.  Filterable properties:  * displayName * emails/value * active * userName * grants/identifier
     * @param {String} groupId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter A filter statement to identify specific records to retrieve.
     * @param {String} opts.top If nonzero, return no more than this number of results.  Used with `$skip` to provide pagination for large datasets.  Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {String} opts.skip If nonzero, skip this number of results before returning data.  Used with `$top` to provide pagination for large datasets.
     * @param {String} opts.orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
     * @param {Boolean} opts.count If set to 'true', requests the count of items as part of the response. Default: 'false'. If the value cannot be
     * @param {Boolean} opts.countOnly If set to 'true', requests the count of items as part of the response. No values are returned. Default: 'false'.
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {module:api/IAMDS/GroupApi~listGroupUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IAMDS/UserList}
     */
    listGroupUsers(groupId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling listGroupUsers");
      }

      let pathParams = {
        'group-id': groupId
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
      let returnType = UserList;
      return this.apiClient.callApi(
        '/groups/{group-id}/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback, requiredScopes
      );
    }

    /**
     * Callback function to receive the result of the listGroups operation.
     * @callback module:api/IAMDS/GroupApi~listGroupsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IAMDS/GroupList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all groups.
     * Retrieve a list of all groups the authenticated user has access to. This list is paged, returning no more than 1000 items at a time.  Filterable properties:   * displayName * tenants/identifier * grants/identifier
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter A filter statement to identify specific records to retrieve.
     * @param {String} opts.top If nonzero, return no more than this number of results.  Used with `$skip` to provide pagination for large datasets.  Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {String} opts.skip If nonzero, skip this number of results before returning data.  Used with `$top` to provide pagination for large datasets.
     * @param {Boolean} opts.count If set to 'true', requests the count of items as part of the response. Default: 'false'. If the value cannot be
     * @param {Boolean} opts.countOnly If set to 'true', requests the count of items as part of the response. No values are returned. Default: 'false'.
     * @param {String} opts.orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {module:api/IAMDS/GroupApi~listGroupsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IAMDS/GroupList}
     */
    listGroups(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        '$filter': opts['filter'],
        '$top': opts['top'],
        '$skip': opts['skip'],
        'count': opts['count'],
        'countOnly': opts['countOnly'],
        '$orderBy': opts['orderBy']
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
      let returnType = GroupList;
      return this.apiClient.callApi(
        '/groups', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback, requiredScopes
      );
    }

    /**
     * Callback function to receive the result of the patchGroup operation.
     * @callback module:api/IAMDS/GroupApi~patchGroupCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the fields in the message body on the group.
     * Updates the fields on a group which should change.
     * @param {String} groupId 
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {String} opts.ifMatch Only execute the operation if the ETag for the current version of the resource matches the ETag in this header.
     * @param {module:model/IAMDS/Group} opts.group 
     * @param {module:api/IAMDS/GroupApi~patchGroupCallback} callback The callback function, accepting three arguments: error, data, response
     */
    patchGroup(groupId, opts, callback) {
      opts = opts || {};
      let postBody = opts['group'];
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling patchGroup");
      }

      let pathParams = {
        'group-id': groupId
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
        '/groups/{group-id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback, requiredScopes
      );
    }

    /**
     * Callback function to receive the result of the removeDeviceFromGroup operation.
     * @callback module:api/IAMDS/GroupApi~removeDeviceFromGroupCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove a device from a group.
     * Removes a device from a group.
     * @param {String} groupId 
     * @param {String} deviceId 
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {module:api/IAMDS/GroupApi~removeDeviceFromGroupCallback} callback The callback function, accepting three arguments: error, data, response
     */
    removeDeviceFromGroup(groupId, deviceId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling removeDeviceFromGroup");
      }
      // verify the required parameter 'deviceId' is set
      if (deviceId === undefined || deviceId === null) {
        throw new Error("Missing the required parameter 'deviceId' when calling removeDeviceFromGroup");
      }

      let pathParams = {
        'group-id': groupId,
        'device-id': deviceId
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
      let contentTypes = [];
      let accepts = ['text/plain'];
      let returnType = null;
      return this.apiClient.callApi(
        '/groups/{group-id}/devices/{device-id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback, requiredScopes
      );
    }

    /**
     * Callback function to receive the result of the removeGrantFromGroup operation.
     * @callback module:api/IAMDS/GroupApi~removeGrantFromGroupCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a grant from a group.
     * Removes a grant from a group.
     * @param {String} groupId 
     * @param {String} grantId 
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {module:api/IAMDS/GroupApi~removeGrantFromGroupCallback} callback The callback function, accepting three arguments: error, data, response
     */
    removeGrantFromGroup(groupId, grantId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling removeGrantFromGroup");
      }
      // verify the required parameter 'grantId' is set
      if (grantId === undefined || grantId === null) {
        throw new Error("Missing the required parameter 'grantId' when calling removeGrantFromGroup");
      }

      let pathParams = {
        'group-id': groupId,
        'grant-id': grantId
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
      let contentTypes = [];
      let accepts = ['text/plain'];
      let returnType = null;
      return this.apiClient.callApi(
        '/groups/{group-id}/grants/{grant-id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback, requiredScopes
      );
    }

    /**
     * Callback function to receive the result of the removeUserFromGroup operation.
     * @callback module:api/IAMDS/GroupApi~removeUserFromGroupCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a user from a group.
     * Removes a user from a group.
     * @param {String} groupId 
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {module:api/IAMDS/GroupApi~removeUserFromGroupCallback} callback The callback function, accepting three arguments: error, data, response
     */
    removeUserFromGroup(groupId, userId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling removeUserFromGroup");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling removeUserFromGroup");
      }

      let pathParams = {
        'group-id': groupId,
        'user-id': userId
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
      let contentTypes = [];
      let accepts = ['text/plain'];
      let returnType = null;
      return this.apiClient.callApi(
        '/groups/{group-id}/users/{user-id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback, requiredScopes
      );
    }

    /**
     * Callback function to receive the result of the replaceGroup operation.
     * @callback module:api/IAMDS/GroupApi~replaceGroupCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update all fields on a group.
     * Updates the group with the data in the request body.
     * @param {String} groupId 
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {String} opts.ifMatch Only execute the operation if the ETag for the current version of the resource matches the ETag in this header.
     * @param {module:model/IAMDS/Group} opts.group 
     * @param {module:api/IAMDS/GroupApi~replaceGroupCallback} callback The callback function, accepting three arguments: error, data, response
     */
    replaceGroup(groupId, opts, callback) {
      opts = opts || {};
      let postBody = opts['group'];
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling replaceGroup");
      }

      let pathParams = {
        'group-id': groupId
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
        '/groups/{group-id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback, requiredScopes
      );
    }


}
