"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _AppList = _interopRequireDefault(require("../../model/IAMDS/AppList"));

var _Organization = _interopRequireDefault(require("../../model/IAMDS/Organization"));

var _OrganizationList = _interopRequireDefault(require("../../model/IAMDS/OrganizationList"));

var _TenantList = _interopRequireDefault(require("../../model/IAMDS/TenantList"));

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
* Organization service.
* @module api/IAMDS/OrganizationApi
* @version 2.4.36
*/
var OrganizationApi = /*#__PURE__*/function () {
  /**
  * Constructs a new OrganizationApi. 
  * @alias module:api/IAMDS/OrganizationApi
  * @class
  * @param {module:ApiClient} [apiClient] API client implementation to use
  */
  function OrganizationApi(apiClient) {
    (0, _classCallCheck2["default"])(this, OrganizationApi);

    if (!apiClient) {
      throw new Error('apiClient is a required parameter.');
    }

    this.apiClient = apiClient;
    this.apiClient.sdkVersion = '2.4.36';
  }
  /**
   * Callback function to receive the result of the createOrganizations operation.
   * @callback module:api/IAMDS/OrganizationApi~createOrganizationsCallback
   * @param {String} error Error message, if any.
   * @param {module:model/IAMDS/Organization} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create an organization.
   * The response contains the same object as posted and fills in the newly assigned organization ID.
   * @param {Object} opts Optional parameters
   * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
   * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
   * @param {module:model/IAMDS/Organization} opts.organization 
   * @param {module:api/IAMDS/OrganizationApi~createOrganizationsCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/IAMDS/Organization}
   */


  (0, _createClass2["default"])(OrganizationApi, [{
    key: "createOrganizations",
    value: function createOrganizations(opts, callback) {
      opts = opts || {};
      var postBody = opts['organization'];
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
      var returnType = _Organization["default"];
      return this.apiClient.callApi('/organizations', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
    /**
     * Callback function to receive the result of the deleteOrganization operation.
     * @callback module:api/IAMDS/OrganizationApi~deleteOrganizationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an organization.
     * Deletes the specified organization.
     * @param {String} organizationId Id for the organization to get
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {String} opts.ifMatch Only execute the operation if the ETag for the current version of the resource matches the ETag in this header.
     * @param {module:api/IAMDS/OrganizationApi~deleteOrganizationCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteOrganization",
    value: function deleteOrganization(organizationId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'organizationId' is set

      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling deleteOrganization");
      }

      var pathParams = {
        'organization-id': organizationId
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
      return this.apiClient.callApi('/organizations/{organization-id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
    /**
     * Callback function to receive the result of the getOrganization operation.
     * @callback module:api/IAMDS/OrganizationApi~getOrganizationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IAMDS/Organization} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an organization.
     * Retrieves a specific organization which the current ID has access to.
     * @param {String} organizationId Id for the organization to get
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {String} opts.ifNoneMatch Only return the resource if the ETag is different from the ETag passed in.
     * @param {module:api/IAMDS/OrganizationApi~getOrganizationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IAMDS/Organization}
     */

  }, {
    key: "getOrganization",
    value: function getOrganization(organizationId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'organizationId' is set

      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getOrganization");
      }

      var pathParams = {
        'organization-id': organizationId
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
      var returnType = _Organization["default"];
      return this.apiClient.callApi('/organizations/{organization-id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
    /**
     * Callback function to receive the result of the listOrganizationApps operation.
     * @callback module:api/IAMDS/OrganizationApi~listOrganizationAppsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IAMDS/AppList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all apps within an organization.
     * Retrieves a list of applications associated with an organization.  Filterable properties:   * displayName * type * tenants/identifier * grants/identifier
     * @param {String} organizationId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter A filter statement to identify specific records to retrieve.
     * @param {String} opts.top If nonzero, return no more than this number of results.  Used with `$skip` to provide pagination for large datasets.  Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {String} opts.skip If nonzero, skip this number of results before returning data.  Used with `$top` to provide pagination for large datasets.
     * @param {String} opts.orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
     * @param {Boolean} opts.count If set to 'true', requests the count of items as part of the response. Default: 'false'. If the value cannot be
     * @param {Boolean} opts.countOnly If set to 'true', requests the count of items as part of the response. No values are returned. Default: 'false'.
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {module:api/IAMDS/OrganizationApi~listOrganizationAppsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IAMDS/AppList}
     */

  }, {
    key: "listOrganizationApps",
    value: function listOrganizationApps(organizationId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'organizationId' is set

      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling listOrganizationApps");
      }

      var pathParams = {
        'organization-id': organizationId
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
      return this.apiClient.callApi('/organizations/{organization-id}/apps', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
    /**
     * Callback function to receive the result of the listOrganizationTenants operation.
     * @callback module:api/IAMDS/OrganizationApi~listOrganizationTenantsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IAMDS/TenantList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all tenants within an organization.
     * Retrieve a list of all tenants within the organization which the authenticated user has access to. This list is paged, returning no more than 1000 items at a time.  Filterable properties:   * displayName
     * @param {String} organizationId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter A filter statement to identify specific records to retrieve.
     * @param {String} opts.top If nonzero, return no more than this number of results.  Used with `$skip` to provide pagination for large datasets.  Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {String} opts.skip If nonzero, skip this number of results before returning data.  Used with `$top` to provide pagination for large datasets.
     * @param {String} opts.orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
     * @param {Boolean} opts.count If set to 'true', requests the count of items as part of the response. Default: 'false'. If the value cannot be
     * @param {Boolean} opts.countOnly If set to 'true', requests the count of items as part of the response. No values are returned. Default: 'false'.
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {module:api/IAMDS/OrganizationApi~listOrganizationTenantsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IAMDS/TenantList}
     */

  }, {
    key: "listOrganizationTenants",
    value: function listOrganizationTenants(organizationId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'organizationId' is set

      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling listOrganizationTenants");
      }

      var pathParams = {
        'organization-id': organizationId
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
      return this.apiClient.callApi('/organizations/{organization-id}/tenants', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
    /**
     * Callback function to receive the result of the listOrganizationUsers operation.
     * @callback module:api/IAMDS/OrganizationApi~listOrganizationUsersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IAMDS/UserList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all users within an organization.
     * Retrieve a list of all users within the organization which the authenticated user has access to. This list is paged, returning no more than 1000 items at a time.  Filterable properties:   * displayName * emails/value * active * userName
     * @param {String} organizationId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter A filter statement to identify specific records to retrieve.
     * @param {String} opts.top If nonzero, return no more than this number of results.  Used with `$skip` to provide pagination for large datasets.  Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {String} opts.skip If nonzero, skip this number of results before returning data.  Used with `$top` to provide pagination for large datasets.
     * @param {String} opts.orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
     * @param {Boolean} opts.count If set to 'true', requests the count of items as part of the response. Default: 'false'. If the value cannot be
     * @param {Boolean} opts.countOnly If set to 'true', requests the count of items as part of the response. No values are returned. Default: 'false'.
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {module:api/IAMDS/OrganizationApi~listOrganizationUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IAMDS/UserList}
     */

  }, {
    key: "listOrganizationUsers",
    value: function listOrganizationUsers(organizationId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'organizationId' is set

      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling listOrganizationUsers");
      }

      var pathParams = {
        'organization-id': organizationId
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
      var returnType = _UserList["default"];
      return this.apiClient.callApi('/organizations/{organization-id}/users', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
    /**
     * Callback function to receive the result of the listOrganizations operation.
     * @callback module:api/IAMDS/OrganizationApi~listOrganizationsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IAMDS/OrganizationList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all organizations which the user has access to.
     * Retrieve a list of all organizations the authenticated user has access to. This list is paged, returning no more than 1000 items at a time.  Filterable properties:   * displayName
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter A filter statement to identify specific records to retrieve.
     * @param {String} opts.top If nonzero, return no more than this number of results.  Used with `$skip` to provide pagination for large datasets.  Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {String} opts.skip If nonzero, skip this number of results before returning data.  Used with `$top` to provide pagination for large datasets.
     * @param {String} opts.orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
     * @param {Boolean} opts.count If set to 'true', requests the count of items as part of the response. Default: 'false'. If the value cannot be
     * @param {Boolean} opts.countOnly If set to 'true', requests the count of items as part of the response. No values are returned. Default: 'false'.
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {module:api/IAMDS/OrganizationApi~listOrganizationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IAMDS/OrganizationList}
     */

  }, {
    key: "listOrganizations",
    value: function listOrganizations(opts, callback) {
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
      var returnType = _OrganizationList["default"];
      return this.apiClient.callApi('/organizations', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
    /**
     * Callback function to receive the result of the patchOrganization operation.
     * @callback module:api/IAMDS/OrganizationApi~patchOrganizationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the fields present in the message body on the organization.
     * Updates an organization, only applying the changes delivered in the payload. 
     * @param {String} organizationId Id for the organization to get
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {String} opts.ifMatch Only execute the operation if the ETag for the current version of the resource matches the ETag in this header.
     * @param {module:model/IAMDS/Organization} opts.organization 
     * @param {module:api/IAMDS/OrganizationApi~patchOrganizationCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "patchOrganization",
    value: function patchOrganization(organizationId, opts, callback) {
      opts = opts || {};
      var postBody = opts['organization']; // verify the required parameter 'organizationId' is set

      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling patchOrganization");
      }

      var pathParams = {
        'organization-id': organizationId
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
      return this.apiClient.callApi('/organizations/{organization-id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
    /**
     * Callback function to receive the result of the replaceOrganization operation.
     * @callback module:api/IAMDS/OrganizationApi~replaceOrganizationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update all fields on an organization.
     * Replaces the specified organization with the organization in the body.
     * @param {String} organizationId Id for the organization to get
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {String} opts.ifMatch Only execute the operation if the ETag for the current version of the resource matches the ETag in this header.
     * @param {module:model/IAMDS/Organization} opts.organization 
     * @param {module:api/IAMDS/OrganizationApi~replaceOrganizationCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "replaceOrganization",
    value: function replaceOrganization(organizationId, opts, callback) {
      opts = opts || {};
      var postBody = opts['organization']; // verify the required parameter 'organizationId' is set

      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling replaceOrganization");
      }

      var pathParams = {
        'organization-id': organizationId
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
      return this.apiClient.callApi('/organizations/{organization-id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
  }]);
  return OrganizationApi;
}();

exports["default"] = OrganizationApi;