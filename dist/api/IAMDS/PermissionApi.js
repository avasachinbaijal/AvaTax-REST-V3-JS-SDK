"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Permission = _interopRequireDefault(require("../../model/IAMDS/Permission"));

var _PermissionList = _interopRequireDefault(require("../../model/IAMDS/PermissionList"));

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
* Permission service.
* @module api/IAMDS/PermissionApi
* @version 2.4.36
*/
var PermissionApi = /*#__PURE__*/function () {
  /**
  * Constructs a new PermissionApi. 
  * @alias module:api/IAMDS/PermissionApi
  * @class
  * @param {module:ApiClient} [apiClient] API client implementation to use
  */
  function PermissionApi(apiClient) {
    (0, _classCallCheck2["default"])(this, PermissionApi);

    if (!apiClient) {
      throw new Error('apiClient is a required parameter.');
    }

    this.apiClient = apiClient;
    this.apiClient.sdkVersion = '2.4.36';
  }
  /**
   * Callback function to receive the result of the createPermission operation.
   * @callback module:api/IAMDS/PermissionApi~createPermissionCallback
   * @param {String} error Error message, if any.
   * @param {module:model/IAMDS/Permission} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create a permission.
   * The response contains the same object as posted and fills in the newly assigned permission ID.
   * @param {Object} opts Optional parameters
   * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
   * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
   * @param {module:model/IAMDS/Permission} opts.permission 
   * @param {module:api/IAMDS/PermissionApi~createPermissionCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/IAMDS/Permission}
   */


  (0, _createClass2["default"])(PermissionApi, [{
    key: "createPermission",
    value: function createPermission(opts, callback) {
      opts = opts || {};
      var postBody = opts['permission'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'avalara-version': opts['avalaraVersion'],
        'X-Correlation-Id': opts['xCorrelationId']
      };
      var formParams = {}; //OAuth2 Scopes

      var requiredScopes = "iam TestScope TestScope1";
      var authNames = ['OAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json', 'text/plain'];
      var returnType = _Permission["default"];
      return this.apiClient.callApi('/permissions', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
    /**
     * Callback function to receive the result of the deletePermission operation.
     * @callback module:api/IAMDS/PermissionApi~deletePermissionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a permission.
     * Deletes the permission by ID.
     * @param {String} permissionId 
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {String} opts.ifMatch Only execute the operation if the ETag for the current version of the resource matches the ETag in this header.
     * @param {module:api/IAMDS/PermissionApi~deletePermissionCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deletePermission",
    value: function deletePermission(permissionId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'permissionId' is set

      if (permissionId === undefined || permissionId === null) {
        throw new Error("Missing the required parameter 'permissionId' when calling deletePermission");
      }

      var pathParams = {
        'permission-id': permissionId
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
      return this.apiClient.callApi('/permissions/{permission-id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
    /**
     * Callback function to receive the result of the getPermission operation.
     * @callback module:api/IAMDS/PermissionApi~getPermissionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IAMDS/Permission} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a permission.
     * Retrieves the specified permission.
     * @param {String} permissionId 
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {String} opts.ifNoneMatch Only return the resource if the ETag is different from the ETag passed in.
     * @param {module:api/IAMDS/PermissionApi~getPermissionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IAMDS/Permission}
     */

  }, {
    key: "getPermission",
    value: function getPermission(permissionId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'permissionId' is set

      if (permissionId === undefined || permissionId === null) {
        throw new Error("Missing the required parameter 'permissionId' when calling getPermission");
      }

      var pathParams = {
        'permission-id': permissionId
      };
      var queryParams = {};
      var headerParams = {
        'avalara-version': opts['avalaraVersion'],
        'X-Correlation-Id': opts['xCorrelationId'],
        'If-None-Match': opts['ifNoneMatch']
      };
      var formParams = {}; //OAuth2 Scopes

      var requiredScopes = "iam TestScope TestScope1";
      var authNames = ['OAuth'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/plain'];
      var returnType = _Permission["default"];
      return this.apiClient.callApi('/permissions/{permission-id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
    /**
     * Callback function to receive the result of the listPermissions operation.
     * @callback module:api/IAMDS/PermissionApi~listPermissionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IAMDS/PermissionList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all permissions which the user has access to.
     * Retrieve a list of all permissions the authenticated user has access to. This list is paged, returning no more than 1000 items at a time.  Filterable properties:  * resource/identifier * name
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter A filter statement to identify specific records to retrieve.
     * @param {String} opts.top If nonzero, return no more than this number of results.  Used with `$skip` to provide pagination for large datasets.  Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {String} opts.skip If nonzero, skip this number of results before returning data.  Used with `$top` to provide pagination for large datasets.
     * @param {String} opts.orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
     * @param {Boolean} opts.count If set to 'true', requests the count of items as part of the response. Default: 'false'. If the value cannot be
     * @param {Boolean} opts.countOnly If set to 'true', requests the count of items as part of the response. No values are returned. Default: 'false'.
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {module:api/IAMDS/PermissionApi~listPermissionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IAMDS/PermissionList}
     */

  }, {
    key: "listPermissions",
    value: function listPermissions(opts, callback) {
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

      var requiredScopes = "iam TestScope TestScope1";
      var authNames = ['OAuth'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/plain'];
      var returnType = _PermissionList["default"];
      return this.apiClient.callApi('/permissions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
    /**
     * Callback function to receive the result of the patchPermission operation.
     * @callback module:api/IAMDS/PermissionApi~patchPermissionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the fields present in the message body on the permission.
     * Updates only the fields passed in for the specified permission.
     * @param {String} permissionId 
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {String} opts.ifMatch Only execute the operation if the ETag for the current version of the resource matches the ETag in this header.
     * @param {module:model/IAMDS/Permission} opts.permission 
     * @param {module:api/IAMDS/PermissionApi~patchPermissionCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "patchPermission",
    value: function patchPermission(permissionId, opts, callback) {
      opts = opts || {};
      var postBody = opts['permission']; // verify the required parameter 'permissionId' is set

      if (permissionId === undefined || permissionId === null) {
        throw new Error("Missing the required parameter 'permissionId' when calling patchPermission");
      }

      var pathParams = {
        'permission-id': permissionId
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
      return this.apiClient.callApi('/permissions/{permission-id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
    /**
     * Callback function to receive the result of the replacePermission operation.
     * @callback module:api/IAMDS/PermissionApi~replacePermissionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update all fields on a permission.
     * Replaces the specified permission with the permission in the body.
     * @param {String} permissionId 
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {String} opts.ifMatch Only execute the operation if the ETag for the current version of the resource matches the ETag in this header.
     * @param {module:model/IAMDS/Permission} opts.permission 
     * @param {module:api/IAMDS/PermissionApi~replacePermissionCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "replacePermission",
    value: function replacePermission(permissionId, opts, callback) {
      opts = opts || {};
      var postBody = opts['permission']; // verify the required parameter 'permissionId' is set

      if (permissionId === undefined || permissionId === null) {
        throw new Error("Missing the required parameter 'permissionId' when calling replacePermission");
      }

      var pathParams = {
        'permission-id': permissionId
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
      return this.apiClient.callApi('/permissions/{permission-id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
  }]);
  return PermissionApi;
}();

exports["default"] = PermissionApi;