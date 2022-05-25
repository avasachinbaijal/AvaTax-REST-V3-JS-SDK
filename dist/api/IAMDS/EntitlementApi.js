"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Entitlement = _interopRequireDefault(require("../../model/IAMDS/Entitlement"));

var _EntitlementList = _interopRequireDefault(require("../../model/IAMDS/EntitlementList"));

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
* Entitlement service.
* @module api/IAMDS/EntitlementApi
* @version 2.4.36
*/
var EntitlementApi = /*#__PURE__*/function () {
  /**
  * Constructs a new EntitlementApi. 
  * @alias module:api/IAMDS/EntitlementApi
  * @class
  * @param {module:ApiClient} [apiClient] API client implementation to use
  */
  function EntitlementApi(apiClient) {
    (0, _classCallCheck2["default"])(this, EntitlementApi);

    if (!apiClient) {
      throw new Error('apiClient is a required parameter.');
    }

    this.apiClient = apiClient;
    this.apiClient.sdkVersion = '2.4.36';
  }
  /**
   * Callback function to receive the result of the createEntitlement operation.
   * @callback module:api/IAMDS/EntitlementApi~createEntitlementCallback
   * @param {String} error Error message, if any.
   * @param {module:model/IAMDS/Entitlement} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create an entitlement.
   * The response contains the same object as posted and fills in the newly assigned entitlement ID.
   * @param {Object} opts Optional parameters
   * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
   * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
   * @param {module:model/IAMDS/Entitlement} opts.entitlement 
   * @param {module:api/IAMDS/EntitlementApi~createEntitlementCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/IAMDS/Entitlement}
   */


  (0, _createClass2["default"])(EntitlementApi, [{
    key: "createEntitlement",
    value: function createEntitlement(opts, callback) {
      opts = opts || {};
      var postBody = opts['entitlement'];
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
      var returnType = _Entitlement["default"];
      return this.apiClient.callApi('/entitlements', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
    /**
     * Callback function to receive the result of the deleteEntitlement operation.
     * @callback module:api/IAMDS/EntitlementApi~deleteEntitlementCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an entitlement.
     * Deletes the specified entitlement.
     * @param {String} entitlementId 
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {String} opts.ifMatch Only execute the operation if the ETag for the current version of the resource matches the ETag in this header.
     * @param {module:api/IAMDS/EntitlementApi~deleteEntitlementCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteEntitlement",
    value: function deleteEntitlement(entitlementId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'entitlementId' is set

      if (entitlementId === undefined || entitlementId === null) {
        throw new Error("Missing the required parameter 'entitlementId' when calling deleteEntitlement");
      }

      var pathParams = {
        'entitlement-id': entitlementId
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
      return this.apiClient.callApi('/entitlements/{entitlement-id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
    /**
     * Callback function to receive the result of the getEntitlement operation.
     * @callback module:api/IAMDS/EntitlementApi~getEntitlementCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IAMDS/Entitlement} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an entitlement.
     * Retrieves an entitlement based on its ID.
     * @param {String} entitlementId 
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {String} opts.ifNoneMatch Only return the resource if the ETag is different from the ETag passed in.
     * @param {module:api/IAMDS/EntitlementApi~getEntitlementCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IAMDS/Entitlement}
     */

  }, {
    key: "getEntitlement",
    value: function getEntitlement(entitlementId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'entitlementId' is set

      if (entitlementId === undefined || entitlementId === null) {
        throw new Error("Missing the required parameter 'entitlementId' when calling getEntitlement");
      }

      var pathParams = {
        'entitlement-id': entitlementId
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
      var returnType = _Entitlement["default"];
      return this.apiClient.callApi('/entitlements/{entitlement-id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
    /**
     * Callback function to receive the result of the listEntitlements operation.
     * @callback module:api/IAMDS/EntitlementApi~listEntitlementsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IAMDS/EntitlementList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all entitlements.
     * Retrieve a list of all entitlements the authenticated user has access to. This list is paged, returning no more than 1000 items at a time.  Filterable properties:  * displayName * system/identifier * tenant/identifier * active * features/identifier * customGrants/identifier
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter A filter statement to identify specific records to retrieve.
     * @param {String} opts.top If nonzero, return no more than this number of results.  Used with `$skip` to provide pagination for large datasets.  Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {String} opts.skip If nonzero, skip this number of results before returning data.  Used with `$top` to provide pagination for large datasets.
     * @param {String} opts.orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
     * @param {Boolean} opts.count If set to 'true', requests the count of items as part of the response. Default: 'false'. If the value cannot be
     * @param {Boolean} opts.countOnly If set to 'true', requests the count of items as part of the response. No values are returned. Default: 'false'.
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {module:api/IAMDS/EntitlementApi~listEntitlementsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IAMDS/EntitlementList}
     */

  }, {
    key: "listEntitlements",
    value: function listEntitlements(opts, callback) {
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
      var returnType = _EntitlementList["default"];
      return this.apiClient.callApi('/entitlements', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
    /**
     * Callback function to receive the result of the patchEntitlement operation.
     * @callback module:api/IAMDS/EntitlementApi~patchEntitlementCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update selected fields in an entitlement.
     * Updates only the fields in the body of the request.
     * @param {String} entitlementId 
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {String} opts.ifMatch Only execute the operation if the ETag for the current version of the resource matches the ETag in this header.
     * @param {module:model/IAMDS/Entitlement} opts.entitlement 
     * @param {module:api/IAMDS/EntitlementApi~patchEntitlementCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "patchEntitlement",
    value: function patchEntitlement(entitlementId, opts, callback) {
      opts = opts || {};
      var postBody = opts['entitlement']; // verify the required parameter 'entitlementId' is set

      if (entitlementId === undefined || entitlementId === null) {
        throw new Error("Missing the required parameter 'entitlementId' when calling patchEntitlement");
      }

      var pathParams = {
        'entitlement-id': entitlementId
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
      return this.apiClient.callApi('/entitlements/{entitlement-id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
    /**
     * Callback function to receive the result of the replaceEntitlement operation.
     * @callback module:api/IAMDS/EntitlementApi~replaceEntitlementCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update all fields in an entitlement.
     * Replaces the specified entitlement with the entitlement in the body.
     * @param {String} entitlementId 
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {String} opts.ifMatch Only execute the operation if the ETag for the current version of the resource matches the ETag in this header.
     * @param {module:model/IAMDS/Entitlement} opts.entitlement 
     * @param {module:api/IAMDS/EntitlementApi~replaceEntitlementCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "replaceEntitlement",
    value: function replaceEntitlement(entitlementId, opts, callback) {
      opts = opts || {};
      var postBody = opts['entitlement']; // verify the required parameter 'entitlementId' is set

      if (entitlementId === undefined || entitlementId === null) {
        throw new Error("Missing the required parameter 'entitlementId' when calling replaceEntitlement");
      }

      var pathParams = {
        'entitlement-id': entitlementId
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
      return this.apiClient.callApi('/entitlements/{entitlement-id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
  }]);
  return EntitlementApi;
}();

exports["default"] = EntitlementApi;