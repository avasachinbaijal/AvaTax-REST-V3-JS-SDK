"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _App = _interopRequireDefault(require("../../model/IAMDS/App"));

var _AppList = _interopRequireDefault(require("../../model/IAMDS/AppList"));

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
* App service.
* @module api/IAMDS/AppApi
* @version 2.4.36
*/
var AppApi = /*#__PURE__*/function () {
  /**
  * Constructs a new AppApi. 
  * @alias module:api/IAMDS/AppApi
  * @class
  * @param {module:ApiClient} [apiClient] API client implementation to use
  */
  function AppApi(apiClient) {
    (0, _classCallCheck2["default"])(this, AppApi);

    if (!apiClient) {
      throw new Error('apiClient is a required parameter.');
    }

    this.apiClient = apiClient;
    this.apiClient.sdkVersion = '2.4.36';
  }
  /**
   * Callback function to receive the result of the addGrantToApp operation.
   * @callback module:api/IAMDS/AppApi~addGrantToAppCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Add a grant to an app.
   * Adds a grant to an app.
   * @param {String} appId 
   * @param {String} grantId 
   * @param {Object} opts Optional parameters
   * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
   * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
   * @param {module:api/IAMDS/AppApi~addGrantToAppCallback} callback The callback function, accepting three arguments: error, data, response
   */


  (0, _createClass2["default"])(AppApi, [{
    key: "addGrantToApp",
    value: function addGrantToApp(appId, grantId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'appId' is set

      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling addGrantToApp");
      } // verify the required parameter 'grantId' is set


      if (grantId === undefined || grantId === null) {
        throw new Error("Missing the required parameter 'grantId' when calling addGrantToApp");
      }

      var pathParams = {
        'app-id': appId,
        'grant-id': grantId
      };
      var queryParams = {};
      var headerParams = {
        'avalara-version': opts['avalaraVersion'],
        'X-Correlation-Id': opts['xCorrelationId']
      };
      var formParams = {}; //OAuth2 Scopes

      var requiredScopes = "iam TestScope TestScope1";
      var authNames = ['OAuth'];
      var contentTypes = [];
      var accepts = ['text/plain'];
      var returnType = null;
      return this.apiClient.callApi('/apps/{app-id}/grants/{grant-id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
    /**
     * Callback function to receive the result of the createApp operation.
     * @callback module:api/IAMDS/AppApi~createAppCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IAMDS/App} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add an app.
     * The response contains the same object as posted and fills in the newly assigned app ID.
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {module:model/IAMDS/App} opts.app 
     * @param {module:api/IAMDS/AppApi~createAppCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IAMDS/App}
     */

  }, {
    key: "createApp",
    value: function createApp(opts, callback) {
      opts = opts || {};
      var postBody = opts['app'];
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
      var returnType = _App["default"];
      return this.apiClient.callApi('/apps', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
    /**
     * Callback function to receive the result of the createAppSecret operation.
     * @callback module:api/IAMDS/AppApi~createAppSecretCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new secret for the app.
     * Creates or recreates the secret for an app. The new value is returned as a string. 
     * @param {String} appId 
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {module:api/IAMDS/AppApi~createAppSecretCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */

  }, {
    key: "createAppSecret",
    value: function createAppSecret(appId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'appId' is set

      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling createAppSecret");
      }

      var pathParams = {
        'app-id': appId
      };
      var queryParams = {};
      var headerParams = {
        'avalara-version': opts['avalaraVersion'],
        'X-Correlation-Id': opts['xCorrelationId']
      };
      var formParams = {}; //OAuth2 Scopes

      var requiredScopes = "iam TestScope TestScope1";
      var authNames = ['OAuth'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/plain'];
      var returnType = 'String';
      return this.apiClient.callApi('/apps/{app-id}/secret', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
    /**
     * Callback function to receive the result of the deleteApp operation.
     * @callback module:api/IAMDS/AppApi~deleteAppCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an app by ID.
     * Deletes the specified app.
     * @param {String} appId 
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {String} opts.ifMatch Only execute the operation if the ETag for the current version of the resource matches the ETag in this header.
     * @param {module:api/IAMDS/AppApi~deleteAppCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteApp",
    value: function deleteApp(appId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'appId' is set

      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling deleteApp");
      }

      var pathParams = {
        'app-id': appId
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
      return this.apiClient.callApi('/apps/{app-id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
    /**
     * Callback function to receive the result of the getApp operation.
     * @callback module:api/IAMDS/AppApi~getAppCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IAMDS/App} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an app by ID.
     * Retrives an app by its ID.
     * @param {String} appId 
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {String} opts.ifNoneMatch Only return the resource if the ETag is different from the ETag passed in.
     * @param {module:api/IAMDS/AppApi~getAppCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IAMDS/App}
     */

  }, {
    key: "getApp",
    value: function getApp(appId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'appId' is set

      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getApp");
      }

      var pathParams = {
        'app-id': appId
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
      var returnType = _App["default"];
      return this.apiClient.callApi('/apps/{app-id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
    /**
     * Callback function to receive the result of the listAppGrants operation.
     * @callback module:api/IAMDS/AppApi~listAppGrantsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IAMDS/AppList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all grants for a given app.
     * Retrieve a list of all grants an app belongs to which the authenticated user has access to. This list is paged, returning no more than 1000 items at a time.  Filterable properties:   * displayName * system/identifier * type * role/identifier
     * @param {String} appId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter A filter statement to identify specific records to retrieve.
     * @param {String} opts.top If nonzero, return no more than this number of results.  Used with `$skip` to provide pagination for large datasets.  Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {String} opts.skip If nonzero, skip this number of results before returning data.  Used with `$top` to provide pagination for large datasets.
     * @param {String} opts.orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
     * @param {Boolean} opts.count If set to 'true', requests the count of items as part of the response. Default: 'false'. If the value cannot be
     * @param {Boolean} opts.countOnly If set to 'true', requests the count of items as part of the response. No values are returned. Default: 'false'.
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {module:api/IAMDS/AppApi~listAppGrantsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IAMDS/AppList}
     */

  }, {
    key: "listAppGrants",
    value: function listAppGrants(appId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'appId' is set

      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling listAppGrants");
      }

      var pathParams = {
        'app-id': appId
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
      var returnType = _AppList["default"];
      return this.apiClient.callApi('/apps/{app-id}/grants', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
    /**
     * Callback function to receive the result of the listApps operation.
     * @callback module:api/IAMDS/AppApi~listAppsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IAMDS/AppList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List apps which the user has access to.
     * Retrieve a list of all apps the authenticated user has access to. This list is paged, returning no more than 1000 items at a time.  Filterable properties:   * displayName * type * organization/identifier * tenants/identifier * grants/identifier 
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter A filter statement to identify specific records to retrieve.
     * @param {String} opts.top If nonzero, return no more than this number of results.  Used with `$skip` to provide pagination for large datasets.  Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {String} opts.skip If nonzero, skip this number of results before returning data.  Used with `$top` to provide pagination for large datasets.
     * @param {String} opts.orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
     * @param {Boolean} opts.count If set to 'true', requests the count of items as part of the response. Default: 'false'. If the value cannot be
     * @param {Boolean} opts.countOnly If set to 'true', requests the count of items as part of the response. No values are returned. Default: 'false'.
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {module:api/IAMDS/AppApi~listAppsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IAMDS/AppList}
     */

  }, {
    key: "listApps",
    value: function listApps(opts, callback) {
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
      var returnType = _AppList["default"];
      return this.apiClient.callApi('/apps', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
    /**
     * Callback function to receive the result of the patchApp operation.
     * @callback module:api/IAMDS/AppApi~patchAppCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update only fields in the body for the app.
     * Updates a set of fields on the app.
     * @param {String} appId 
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {String} opts.ifMatch Only execute the operation if the ETag for the current version of the resource matches the ETag in this header.
     * @param {module:model/IAMDS/App} opts.app 
     * @param {module:api/IAMDS/AppApi~patchAppCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "patchApp",
    value: function patchApp(appId, opts, callback) {
      opts = opts || {};
      var postBody = opts['app']; // verify the required parameter 'appId' is set

      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling patchApp");
      }

      var pathParams = {
        'app-id': appId
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
      return this.apiClient.callApi('/apps/{app-id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
    /**
     * Callback function to receive the result of the removeGrantFromApp operation.
     * @callback module:api/IAMDS/AppApi~removeGrantFromAppCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove a grant from an app.
     * Removes a grant from an app.
     * @param {String} appId 
     * @param {String} grantId 
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {module:api/IAMDS/AppApi~removeGrantFromAppCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "removeGrantFromApp",
    value: function removeGrantFromApp(appId, grantId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'appId' is set

      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling removeGrantFromApp");
      } // verify the required parameter 'grantId' is set


      if (grantId === undefined || grantId === null) {
        throw new Error("Missing the required parameter 'grantId' when calling removeGrantFromApp");
      }

      var pathParams = {
        'app-id': appId,
        'grant-id': grantId
      };
      var queryParams = {};
      var headerParams = {
        'avalara-version': opts['avalaraVersion'],
        'X-Correlation-Id': opts['xCorrelationId']
      };
      var formParams = {}; //OAuth2 Scopes

      var requiredScopes = "iam TestScope TestScope1";
      var authNames = ['OAuth'];
      var contentTypes = [];
      var accepts = ['text/plain'];
      var returnType = null;
      return this.apiClient.callApi('/apps/{app-id}/grants/{grant-id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
    /**
     * Callback function to receive the result of the replaceApp operation.
     * @callback module:api/IAMDS/AppApi~replaceAppCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update all fields in an app by ID.
     * Replaces the specified app with the app in the body. 
     * @param {String} appId 
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {String} opts.ifMatch Only execute the operation if the ETag for the current version of the resource matches the ETag in this header.
     * @param {module:model/IAMDS/App} opts.app 
     * @param {module:api/IAMDS/AppApi~replaceAppCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "replaceApp",
    value: function replaceApp(appId, opts, callback) {
      opts = opts || {};
      var postBody = opts['app']; // verify the required parameter 'appId' is set

      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling replaceApp");
      }

      var pathParams = {
        'app-id': appId
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
      return this.apiClient.callApi('/apps/{app-id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
  }]);
  return AppApi;
}();

exports["default"] = AppApi;