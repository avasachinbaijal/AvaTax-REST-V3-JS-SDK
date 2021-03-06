"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _FeatureList = _interopRequireDefault(require("../../model/IAMDS/FeatureList"));

var _GrantList = _interopRequireDefault(require("../../model/IAMDS/GrantList"));

var _ResourceList = _interopRequireDefault(require("../../model/IAMDS/ResourceList"));

var _RoleList = _interopRequireDefault(require("../../model/IAMDS/RoleList"));

var _System = _interopRequireDefault(require("../../model/IAMDS/System"));

var _SystemList = _interopRequireDefault(require("../../model/IAMDS/SystemList"));

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
* System service.
* @module api/IAMDS/SystemApi
* @version 2.4.36
*/
var SystemApi = /*#__PURE__*/function () {
  /**
  * Constructs a new SystemApi. 
  * @alias module:api/IAMDS/SystemApi
  * @class
  * @param {module:ApiClient} [apiClient] API client implementation to use
  */
  function SystemApi(apiClient) {
    (0, _classCallCheck2["default"])(this, SystemApi);

    if (!apiClient) {
      throw new Error('apiClient is a required parameter.');
    }

    this.apiClient = apiClient;
    this.apiClient.sdkVersion = '2.4.36';
  }
  /**
   * Callback function to receive the result of the createSystem operation.
   * @callback module:api/IAMDS/SystemApi~createSystemCallback
   * @param {String} error Error message, if any.
   * @param {module:model/IAMDS/System} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create a system.
   * The response contains the same object as posted and fills in the newly assigned system ID.
   * @param {Object} opts Optional parameters
   * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
   * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
   * @param {module:model/IAMDS/System} opts.system 
   * @param {module:api/IAMDS/SystemApi~createSystemCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/IAMDS/System}
   */


  (0, _createClass2["default"])(SystemApi, [{
    key: "createSystem",
    value: function createSystem(opts, callback) {
      opts = opts || {};
      var postBody = opts['system'];
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
      var returnType = _System["default"];
      return this.apiClient.callApi('/systems', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
    /**
     * Callback function to receive the result of the deleteSystem operation.
     * @callback module:api/IAMDS/SystemApi~deleteSystemCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a system.
     * Deletes the specified system as well as related features, resources, and resource permissions.
     * @param {String} systemId 
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {String} opts.ifMatch Only execute the operation if the ETag for the current version of the resource matches the ETag in this header.
     * @param {module:api/IAMDS/SystemApi~deleteSystemCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteSystem",
    value: function deleteSystem(systemId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'systemId' is set

      if (systemId === undefined || systemId === null) {
        throw new Error("Missing the required parameter 'systemId' when calling deleteSystem");
      }

      var pathParams = {
        'system-id': systemId
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
      return this.apiClient.callApi('/systems/{system-id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
    /**
     * Callback function to receive the result of the getSystem operation.
     * @callback module:api/IAMDS/SystemApi~getSystemCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IAMDS/System} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a system.
     * Retrieves a system based on its ID.
     * @param {String} systemId 
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {String} opts.ifNoneMatch Only return the resource if the ETag is different from the ETag passed in.
     * @param {module:api/IAMDS/SystemApi~getSystemCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IAMDS/System}
     */

  }, {
    key: "getSystem",
    value: function getSystem(systemId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'systemId' is set

      if (systemId === undefined || systemId === null) {
        throw new Error("Missing the required parameter 'systemId' when calling getSystem");
      }

      var pathParams = {
        'system-id': systemId
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
      var returnType = _System["default"];
      return this.apiClient.callApi('/systems/{system-id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
    /**
     * Callback function to receive the result of the listSystemFeatures operation.
     * @callback module:api/IAMDS/SystemApi~listSystemFeaturesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IAMDS/FeatureList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all features on a system.
     * Retrieve a list of all features associated with the system and which the authenticated user has access to. This list is paged, returning no more than 1000 items at a time.  Filterable properties:  * displayName * grants/identifier
     * @param {String} systemId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter A filter statement to identify specific records to retrieve.
     * @param {String} opts.top If nonzero, return no more than this number of results.  Used with `$skip` to provide pagination for large datasets.  Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {String} opts.skip If nonzero, skip this number of results before returning data.  Used with `$top` to provide pagination for large datasets.
     * @param {String} opts.orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
     * @param {Boolean} opts.count If set to 'true', requests the count of items as part of the response. Default: 'false'. If the value cannot be
     * @param {Boolean} opts.countOnly If set to 'true', requests the count of items as part of the response. No values are returned. Default: 'false'.
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {module:api/IAMDS/SystemApi~listSystemFeaturesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IAMDS/FeatureList}
     */

  }, {
    key: "listSystemFeatures",
    value: function listSystemFeatures(systemId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'systemId' is set

      if (systemId === undefined || systemId === null) {
        throw new Error("Missing the required parameter 'systemId' when calling listSystemFeatures");
      }

      var pathParams = {
        'system-id': systemId
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
      var returnType = _FeatureList["default"];
      return this.apiClient.callApi('/systems/{system-id}/features', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
    /**
     * Callback function to receive the result of the listSystemGrants operation.
     * @callback module:api/IAMDS/SystemApi~listSystemGrantsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IAMDS/GrantList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all grants associated with a system.
     * Retrieve a list of all grants associated with the selected system and which the authenticated user has access to. This list is paged, returning no more than 1000 items at a time.  Filterable properties:  * displayName * type * role/identifier
     * @param {String} systemId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter A filter statement to identify specific records to retrieve.
     * @param {String} opts.top If nonzero, return no more than this number of results.  Used with `$skip` to provide pagination for large datasets.  Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {String} opts.skip If nonzero, skip this number of results before returning data.  Used with `$top` to provide pagination for large datasets.
     * @param {String} opts.orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
     * @param {Boolean} opts.count If set to 'true', requests the count of items as part of the response. Default: 'false'. If the value cannot be
     * @param {Boolean} opts.countOnly If set to 'true', requests the count of items as part of the response. No values are returned. Default: 'false'.
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {module:api/IAMDS/SystemApi~listSystemGrantsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IAMDS/GrantList}
     */

  }, {
    key: "listSystemGrants",
    value: function listSystemGrants(systemId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'systemId' is set

      if (systemId === undefined || systemId === null) {
        throw new Error("Missing the required parameter 'systemId' when calling listSystemGrants");
      }

      var pathParams = {
        'system-id': systemId
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
      var returnType = _GrantList["default"];
      return this.apiClient.callApi('/systems/{system-id}/grants', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
    /**
     * Callback function to receive the result of the listSystemResources operation.
     * @callback module:api/IAMDS/SystemApi~listSystemResourcesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IAMDS/ResourceList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all resources associated with a system.
     * Retrieve a list of all features associated with the selected system and which the authenticated user has access to. This list is paged, returning no more than 1000 items at a time.  Filterable properties:  * displayName * namespace
     * @param {String} systemId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter A filter statement to identify specific records to retrieve.
     * @param {String} opts.top If nonzero, return no more than this number of results.  Used with `$skip` to provide pagination for large datasets.  Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {String} opts.skip If nonzero, skip this number of results before returning data.  Used with `$top` to provide pagination for large datasets.
     * @param {String} opts.orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
     * @param {Boolean} opts.count If set to 'true', requests the count of items as part of the response. Default: 'false'. If the value cannot be
     * @param {Boolean} opts.countOnly If set to 'true', requests the count of items as part of the response. No values are returned. Default: 'false'.
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {module:api/IAMDS/SystemApi~listSystemResourcesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IAMDS/ResourceList}
     */

  }, {
    key: "listSystemResources",
    value: function listSystemResources(systemId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'systemId' is set

      if (systemId === undefined || systemId === null) {
        throw new Error("Missing the required parameter 'systemId' when calling listSystemResources");
      }

      var pathParams = {
        'system-id': systemId
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
      var returnType = _ResourceList["default"];
      return this.apiClient.callApi('/systems/{system-id}/resources', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
    /**
     * Callback function to receive the result of the listSystemRoles operation.
     * @callback module:api/IAMDS/SystemApi~listSystemRolesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IAMDS/RoleList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all roles associated with a system.
     * Retrieve a list of all roles associated with the selected system and which the authenticated user has access to. This list is paged, returning no more than 1000 items at a time.  Filterable properties:  * displayName * type * permissions
     * @param {String} systemId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter A filter statement to identify specific records to retrieve.
     * @param {String} opts.top If nonzero, return no more than this number of results.  Used with `$skip` to provide pagination for large datasets.  Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {String} opts.skip If nonzero, skip this number of results before returning data.  Used with `$top` to provide pagination for large datasets.
     * @param {String} opts.orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
     * @param {Boolean} opts.count If set to 'true', requests the count of items as part of the response. Default: 'false'. If the value cannot be
     * @param {Boolean} opts.countOnly If set to 'true', requests the count of items as part of the response. No values are returned. Default: 'false'.
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {module:api/IAMDS/SystemApi~listSystemRolesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IAMDS/RoleList}
     */

  }, {
    key: "listSystemRoles",
    value: function listSystemRoles(systemId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'systemId' is set

      if (systemId === undefined || systemId === null) {
        throw new Error("Missing the required parameter 'systemId' when calling listSystemRoles");
      }

      var pathParams = {
        'system-id': systemId
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
      var returnType = _RoleList["default"];
      return this.apiClient.callApi('/systems/{system-id}/roles', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
    /**
     * Callback function to receive the result of the listSystems operation.
     * @callback module:api/IAMDS/SystemApi~listSystemsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IAMDS/SystemList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all systems which the user has access to.
     * Retrieve a list of all systems the authenticated user has access to. This list is paged, returning no more than 1000 items at a time.  Filterable properties:  * displayName * namespace * scopes/scope
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter A filter statement to identify specific records to retrieve.
     * @param {String} opts.top If nonzero, return no more than this number of results.  Used with `$skip` to provide pagination for large datasets.  Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {String} opts.skip If nonzero, skip this number of results before returning data.  Used with `$top` to provide pagination for large datasets.
     * @param {String} opts.orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
     * @param {Boolean} opts.count If set to 'true', requests the count of items as part of the response. Default: 'false'. If the value cannot be
     * @param {Boolean} opts.countOnly If set to 'true', requests the count of items as part of the response. No values are returned. Default: 'false'.
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {module:api/IAMDS/SystemApi~listSystemsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IAMDS/SystemList}
     */

  }, {
    key: "listSystems",
    value: function listSystems(opts, callback) {
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
      var returnType = _SystemList["default"];
      return this.apiClient.callApi('/systems', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
    /**
     * Callback function to receive the result of the patchSystem operation.
     * @callback module:api/IAMDS/SystemApi~patchSystemCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update fields present in the message body on the system.
     * Updates the fields in the payload.
     * @param {String} systemId 
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {String} opts.ifMatch Only execute the operation if the ETag for the current version of the resource matches the ETag in this header.
     * @param {module:model/IAMDS/System} opts.system 
     * @param {module:api/IAMDS/SystemApi~patchSystemCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "patchSystem",
    value: function patchSystem(systemId, opts, callback) {
      opts = opts || {};
      var postBody = opts['system']; // verify the required parameter 'systemId' is set

      if (systemId === undefined || systemId === null) {
        throw new Error("Missing the required parameter 'systemId' when calling patchSystem");
      }

      var pathParams = {
        'system-id': systemId
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
      return this.apiClient.callApi('/systems/{system-id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
    /**
     * Callback function to receive the result of the replaceSystem operation.
     * @callback module:api/IAMDS/SystemApi~replaceSystemCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update all fields on a system.
     * Replaces the specified system with the system in the body.
     * @param {String} systemId 
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {String} opts.ifMatch Only execute the operation if the ETag for the current version of the resource matches the ETag in this header.
     * @param {module:model/IAMDS/System} opts.system 
     * @param {module:api/IAMDS/SystemApi~replaceSystemCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "replaceSystem",
    value: function replaceSystem(systemId, opts, callback) {
      opts = opts || {};
      var postBody = opts['system']; // verify the required parameter 'systemId' is set

      if (systemId === undefined || systemId === null) {
        throw new Error("Missing the required parameter 'systemId' when calling replaceSystem");
      }

      var pathParams = {
        'system-id': systemId
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
      return this.apiClient.callApi('/systems/{system-id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
  }]);
  return SystemApi;
}();

exports["default"] = SystemApi;