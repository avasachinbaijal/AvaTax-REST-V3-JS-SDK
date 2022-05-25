"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _TenantList = _interopRequireDefault(require("../../model/IAMDS/TenantList"));

var _User = _interopRequireDefault(require("../../model/IAMDS/User"));

var _UserList = _interopRequireDefault(require("../../model/IAMDS/UserList"));

var _VersionError = _interopRequireDefault(require("../../model/IAMDS/VersionError"));

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

/**
* User service.
* @module api/IAMDS/UserApi
* @version 2.4.36
*/
var UserApi = /*#__PURE__*/function () {
  /**
  * Constructs a new UserApi. 
  * @alias module:api/IAMDS/UserApi
  * @class
  * @param {module:ApiClient} [apiClient] API client implementation to use
  */
  function UserApi(apiClient) {
    (0, _classCallCheck2["default"])(this, UserApi);

    if (!apiClient) {
      throw new Error('apiClient is a required parameter.');
    }

    this.apiClient = apiClient;
    this.apiClient.sdkVersion = '2.4.36';
  }
  /**
   * Callback function to receive the result of the createUser operation.
   * @callback module:api/IAMDS/UserApi~createUserCallback
   * @param {String} error Error message, if any.
   * @param {module:model/IAMDS/User} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create a user.
   * The response contains the same object as posted and fills in the newly assigned user ID.
   * @param {Object} opts Optional parameters
   * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
   * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
   * @param {module:model/IAMDS/User} opts.user 
   * @param {module:api/IAMDS/UserApi~createUserCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/IAMDS/User}
   */


  (0, _createClass2["default"])(UserApi, [{
    key: "createUser",
    value: function createUser(opts, callback) {
      opts = opts || {};
      var postBody = opts['user'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'avalara-version': opts['avalaraVersion'],
        'X-Correlation-Id': opts['xCorrelationId']
      };
      var formParams = {}; //OAuth2 Scopes

      var requiredScopes = "TestScope1";
      var authNames = ['OAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json', 'text/plain'];
      var returnType = _User["default"];
      return this.apiClient.callApi('/users', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
    /**
     * Callback function to receive the result of the deleteUser operation.
     * @callback module:api/IAMDS/UserApi~deleteUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a user.
     * Deletes the specified user.
     * @param {String} userId Id for the user to get
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {String} opts.ifMatch Only execute the operation if the ETag for the current version of the resource matches the ETag in this header.
     * @param {module:api/IAMDS/UserApi~deleteUserCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteUser",
    value: function deleteUser(userId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling deleteUser");
      }

      var pathParams = {
        'user-id': userId
      };
      var queryParams = {};
      var headerParams = {
        'avalara-version': opts['avalaraVersion'],
        'X-Correlation-Id': opts['xCorrelationId'],
        'If-Match': opts['ifMatch']
      };
      var formParams = {}; //OAuth2 Scopes

      var requiredScopes = "iam TestScope TestScope1";
      var authNames = ['OAuth'];
      var contentTypes = [];
      var accepts = ['text/plain'];
      var returnType = null;
      return this.apiClient.callApi('/users/{user-id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
    /**
     * Callback function to receive the result of the getUser operation.
     * @callback module:api/IAMDS/UserApi~getUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IAMDS/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a user.
     * Retrieves a specific user which the current ID has access to.
     * @param {String} userId Id for the user to get
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {String} opts.ifNoneMatch Only return the resource if the ETag is different from the ETag passed in.
     * @param {module:api/IAMDS/UserApi~getUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IAMDS/User}
     */

  }, {
    key: "getUser",
    value: function getUser(userId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getUser");
      }

      var pathParams = {
        'user-id': userId
      };
      var queryParams = {};
      var headerParams = {
        'avalara-version': opts['avalaraVersion'],
        'X-Correlation-Id': opts['xCorrelationId'],
        'If-None-Match': opts['ifNoneMatch']
      };
      var formParams = {}; //OAuth2 Scopes

      var requiredScopes = "iam";
      var authNames = ['OAuth'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/plain'];
      var returnType = _User["default"];
      return this.apiClient.callApi('/users/{user-id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
    /**
     * Callback function to receive the result of the getUserTenants operation.
     * @callback module:api/IAMDS/UserApi~getUserTenantsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IAMDS/TenantList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Your GET endpoint
     * Retrieve a list of acconts that the user is associated with.  Filterable properties:   * displayName * organization/identifier
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter A filter statement to identify specific records to retrieve.
     * @param {String} opts.top If nonzero, return no more than this number of results.  Used with `$skip` to provide pagination for large datasets.  Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {String} opts.skip If nonzero, skip this number of results before returning data.  Used with `$top` to provide pagination for large datasets.
     * @param {String} opts.orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
     * @param {Boolean} opts.count If set to 'true', requests the count of items as part of the response. Default: 'false'. If the value cannot be
     * @param {Boolean} opts.countOnly If set to 'true', requests the count of items as part of the response. No values are returned. Default: 'false'.
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {module:api/IAMDS/UserApi~getUserTenantsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IAMDS/TenantList}
     */

  }, {
    key: "getUserTenants",
    value: function getUserTenants(userId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getUserTenants");
      }

      var pathParams = {
        'user-id': userId
      };
      var queryParams = {
        '$filter': opts['filter'],
        '$top': opts['top'],
        '$skip': opts['skip'],
        '$orderBy': opts['orderBy'],
        'count': opts['count'],
        'countOnly': opts['countOnly']
      };
      var headerParams = {
        'avalara-version': opts['avalaraVersion'],
        'X-Correlation-Id': opts['xCorrelationId']
      };
      var formParams = {}; //OAuth2 Scopes

      var requiredScopes = "iam TestScope TestScope1";
      var authNames = ['OAuth'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/plain'];
      var returnType = _TenantList["default"];
      return this.apiClient.callApi('/users/{user-id}/tenants', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
    /**
     * Callback function to receive the result of the listUsers operation.
     * @callback module:api/IAMDS/UserApi~listUsersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IAMDS/UserList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all users which the current user has access to.
     * Retrieve a list of all users the authenticated user has access to. This list is paged, returning no more than 1000 items at a time.  Filterable properties:   * displayName * emails/value * active * userName
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter A filter statement to identify specific records to retrieve.
     * @param {String} opts.top If nonzero, return no more than this number of results.  Used with `$skip` to provide pagination for large datasets.  Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {String} opts.skip If nonzero, skip this number of results before returning data.  Used with `$top` to provide pagination for large datasets.
     * @param {String} opts.orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
     * @param {Boolean} opts.count If set to 'true', requests the count of items as part of the response. Default: 'false'. If the value cannot be
     * @param {Boolean} opts.countOnly If set to 'true', requests the count of items as part of the response. No values are returned. Default: 'false'.
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {module:api/IAMDS/UserApi~listUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IAMDS/UserList}
     */

  }, {
    key: "listUsers",
    value: function listUsers(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        '$filter': opts['filter'],
        '$top': opts['top'],
        '$skip': opts['skip'],
        '$orderBy': opts['orderBy'],
        'count': opts['count'],
        'countOnly': opts['countOnly']
      };
      var headerParams = {
        'avalara-version': opts['avalaraVersion'],
        'X-Correlation-Id': opts['xCorrelationId']
      };
      var formParams = {}; //OAuth2 Scopes

      var requiredScopes = "TestScope TestScope1";
      var authNames = ['OAuth'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/plain'];
      var returnType = _UserList["default"];
      return this.apiClient.callApi('/users', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
    /**
     * Callback function to receive the result of the patchUser operation.
     * @callback module:api/IAMDS/UserApi~patchUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the fields within the message body on the user.
     * Updates a user, only applying the changes delivered in the payload. 
     * @param {String} userId Id for the user to get
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {String} opts.ifMatch Only execute the operation if the ETag for the current version of the resource matches the ETag in this header.
     * @param {module:model/IAMDS/User} opts.user 
     * @param {module:api/IAMDS/UserApi~patchUserCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "patchUser",
    value: function patchUser(userId, opts, callback) {
      opts = opts || {};
      var postBody = opts['user']; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling patchUser");
      }

      var pathParams = {
        'user-id': userId
      };
      var queryParams = {};
      var headerParams = {
        'avalara-version': opts['avalaraVersion'],
        'X-Correlation-Id': opts['xCorrelationId'],
        'If-Match': opts['ifMatch']
      };
      var formParams = {}; //OAuth2 Scopes

      var requiredScopes = "iam TestScope TestScope1";
      var authNames = ['OAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['text/plain'];
      var returnType = null;
      return this.apiClient.callApi('/users/{user-id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
    /**
     * Callback function to receive the result of the replaceUser operation.
     * @callback module:api/IAMDS/UserApi~replaceUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update all fields on a user.
     * Replaces the specified user with the user in the body.
     * @param {String} userId Id for the user to get
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {String} opts.ifMatch Only execute the operation if the ETag for the current version of the resource matches the ETag in this header.
     * @param {module:model/IAMDS/User} opts.user 
     * @param {module:api/IAMDS/UserApi~replaceUserCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "replaceUser",
    value: function replaceUser(userId, opts, callback) {
      opts = opts || {};
      var postBody = opts['user']; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling replaceUser");
      }

      var pathParams = {
        'user-id': userId
      };
      var queryParams = {};
      var headerParams = {
        'avalara-version': opts['avalaraVersion'],
        'X-Correlation-Id': opts['xCorrelationId'],
        'If-Match': opts['ifMatch']
      };
      var formParams = {}; //OAuth2 Scopes

      var requiredScopes = "TestScope TestScope1 iam";
      var authNames = ['OAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['text/plain'];
      var returnType = null;
      return this.apiClient.callApi('/users/{user-id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
  }]);
  return UserApi;
}();

exports["default"] = UserApi;