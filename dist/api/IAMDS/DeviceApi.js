"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Device = _interopRequireDefault(require("../../model/IAMDS/Device"));

var _DeviceList = _interopRequireDefault(require("../../model/IAMDS/DeviceList"));

var _GroupList = _interopRequireDefault(require("../../model/IAMDS/GroupList"));

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
* Device service.
* @module api/IAMDS/DeviceApi
* @version 2.4.36
*/
var DeviceApi = /*#__PURE__*/function () {
  /**
  * Constructs a new DeviceApi. 
  * @alias module:api/IAMDS/DeviceApi
  * @class
  * @param {module:ApiClient} [apiClient] API client implementation to use
  */
  function DeviceApi(apiClient) {
    (0, _classCallCheck2["default"])(this, DeviceApi);

    if (!apiClient) {
      throw new Error('apiClient is a required parameter.');
    }

    this.apiClient = apiClient;
    this.apiClient.sdkVersion = '2.4.36';
  }
  /**
   * Callback function to receive the result of the addGrantToDevice operation.
   * @callback module:api/IAMDS/DeviceApi~addGrantToDeviceCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Add a grant to a device.
   * Adds a grant to a device.
   * @param {String} deviceId 
   * @param {String} grantId 
   * @param {Object} opts Optional parameters
   * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
   * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
   * @param {module:api/IAMDS/DeviceApi~addGrantToDeviceCallback} callback The callback function, accepting three arguments: error, data, response
   */


  (0, _createClass2["default"])(DeviceApi, [{
    key: "addGrantToDevice",
    value: function addGrantToDevice(deviceId, grantId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'deviceId' is set

      if (deviceId === undefined || deviceId === null) {
        throw new Error("Missing the required parameter 'deviceId' when calling addGrantToDevice");
      } // verify the required parameter 'grantId' is set


      if (grantId === undefined || grantId === null) {
        throw new Error("Missing the required parameter 'grantId' when calling addGrantToDevice");
      }

      var pathParams = {
        'device-id': deviceId,
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
      return this.apiClient.callApi('/devices/{device-id}/grants/{grant-id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
    /**
     * Callback function to receive the result of the createDevice operation.
     * @callback module:api/IAMDS/DeviceApi~createDeviceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IAMDS/Device} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a device.
     * The response contains the same object as posted and fills in the newly assigned device ID.
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {module:model/IAMDS/Device} opts.device 
     * @param {module:api/IAMDS/DeviceApi~createDeviceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IAMDS/Device}
     */

  }, {
    key: "createDevice",
    value: function createDevice(opts, callback) {
      opts = opts || {};
      var postBody = opts['device'];
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
      var returnType = _Device["default"];
      return this.apiClient.callApi('/devices', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
    /**
     * Callback function to receive the result of the deleteDevice operation.
     * @callback module:api/IAMDS/DeviceApi~deleteDeviceCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete the device.
     * Deletes the device by ID.
     * @param {String} deviceId 
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {String} opts.ifMatch Only execute the operation if the ETag for the current version of the resource matches the ETag in this header.
     * @param {module:api/IAMDS/DeviceApi~deleteDeviceCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteDevice",
    value: function deleteDevice(deviceId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'deviceId' is set

      if (deviceId === undefined || deviceId === null) {
        throw new Error("Missing the required parameter 'deviceId' when calling deleteDevice");
      }

      var pathParams = {
        'device-id': deviceId
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
      return this.apiClient.callApi('/devices/{device-id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
    /**
     * Callback function to receive the result of the getDevice operation.
     * @callback module:api/IAMDS/DeviceApi~getDeviceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IAMDS/Device} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a device.
     * Retrieves the specified device.
     * @param {String} deviceId 
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {String} opts.ifNoneMatch Only return the resource if the ETag is different from the ETag passed in.
     * @param {module:api/IAMDS/DeviceApi~getDeviceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IAMDS/Device}
     */

  }, {
    key: "getDevice",
    value: function getDevice(deviceId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'deviceId' is set

      if (deviceId === undefined || deviceId === null) {
        throw new Error("Missing the required parameter 'deviceId' when calling getDevice");
      }

      var pathParams = {
        'device-id': deviceId
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
      var returnType = _Device["default"];
      return this.apiClient.callApi('/devices/{device-id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
    /**
     * Callback function to receive the result of the getDeviceGroups operation.
     * @callback module:api/IAMDS/DeviceApi~getDeviceGroupsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IAMDS/GroupList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all groups for the device.
     * Retrieve a list of all groups a device belongs to which the authenticated user has access to. This list is paged, returning no more than 1000 items at a time.  Filterable properties:   * displayName * grants/identifier 
     * @param {String} deviceId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter A filter statement to identify specific records to retrieve.
     * @param {String} opts.top If nonzero, return no more than this number of results.  Used with `$skip` to provide pagination for large datasets.  Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {String} opts.skip If nonzero, skip this number of results before returning data.  Used with `$top` to provide pagination for large datasets.
     * @param {String} opts.orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
     * @param {Boolean} opts.count If set to 'true', requests the count of items as part of the response. Default: 'false'. If the value cannot be
     * @param {Boolean} opts.countOnly If set to 'true', requests the count of items as part of the response. No values are returned. Default: 'false'.
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {module:api/IAMDS/DeviceApi~getDeviceGroupsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IAMDS/GroupList}
     */

  }, {
    key: "getDeviceGroups",
    value: function getDeviceGroups(deviceId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'deviceId' is set

      if (deviceId === undefined || deviceId === null) {
        throw new Error("Missing the required parameter 'deviceId' when calling getDeviceGroups");
      }

      var pathParams = {
        'device-id': deviceId
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
      var returnType = _GroupList["default"];
      return this.apiClient.callApi('/devices/{device-id}/groups', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
    /**
     * Callback function to receive the result of the listDeviceGrants operation.
     * @callback module:api/IAMDS/DeviceApi~listDeviceGrantsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IAMDS/DeviceList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all grants for the device.
     * Retrieve a list of all grants a device belongs to which the authenticated user has access to. This list is paged, returning no more than 1000 items at a time.  Filterable properties:   * displayName * system/identifier * type * role/identifier
     * @param {String} deviceId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter A filter statement to identify specific records to retrieve.
     * @param {String} opts.top If nonzero, return no more than this number of results.  Used with `$skip` to provide pagination for large datasets.  Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {String} opts.skip If nonzero, skip this number of results before returning data.  Used with `$top` to provide pagination for large datasets.
     * @param {String} opts.orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
     * @param {Boolean} opts.count If set to 'true', requests the count of items as part of the response. Default: 'false'. If the value cannot be
     * @param {Boolean} opts.countOnly If set to 'true', requests the count of items as part of the response. No values are returned. Default: 'false'.
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {module:api/IAMDS/DeviceApi~listDeviceGrantsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IAMDS/DeviceList}
     */

  }, {
    key: "listDeviceGrants",
    value: function listDeviceGrants(deviceId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'deviceId' is set

      if (deviceId === undefined || deviceId === null) {
        throw new Error("Missing the required parameter 'deviceId' when calling listDeviceGrants");
      }

      var pathParams = {
        'device-id': deviceId
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
      var returnType = _DeviceList["default"];
      return this.apiClient.callApi('/devices/{device-id}/grants', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
    /**
     * Callback function to receive the result of the listDevices operation.
     * @callback module:api/IAMDS/DeviceApi~listDevicesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IAMDS/DeviceList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all devices which the user has access to.
     * Retrieve a list of all devices the authenticated user has access to. This list is paged, returning no more than 1000 items at a time.  Filterable properties:   * displayName * tenant/identifier * active * grants/identifier * groups/identifier
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter A filter statement to identify specific records to retrieve.
     * @param {String} opts.top If nonzero, return no more than this number of results.  Used with `$skip` to provide pagination for large datasets.  Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {String} opts.skip If nonzero, skip this number of results before returning data.  Used with `$top` to provide pagination for large datasets.
     * @param {String} opts.orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
     * @param {Boolean} opts.count If set to 'true', requests the count of items as part of the response. Default: 'false'. If the value cannot be
     * @param {Boolean} opts.countOnly If set to 'true', requests the count of items as part of the response. No values are returned. Default: 'false'.
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {module:api/IAMDS/DeviceApi~listDevicesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IAMDS/DeviceList}
     */

  }, {
    key: "listDevices",
    value: function listDevices(opts, callback) {
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
      var returnType = _DeviceList["default"];
      return this.apiClient.callApi('/devices', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
    /**
     * Callback function to receive the result of the patchDevice operation.
     * @callback module:api/IAMDS/DeviceApi~patchDeviceCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update only the fields in the body for the device.
     * Updates only the fields passed in for the specified device.
     * @param {String} deviceId 
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {String} opts.ifMatch Only execute the operation if the ETag for the current version of the resource matches the ETag in this header.
     * @param {module:model/IAMDS/Device} opts.device 
     * @param {module:api/IAMDS/DeviceApi~patchDeviceCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "patchDevice",
    value: function patchDevice(deviceId, opts, callback) {
      opts = opts || {};
      var postBody = opts['device']; // verify the required parameter 'deviceId' is set

      if (deviceId === undefined || deviceId === null) {
        throw new Error("Missing the required parameter 'deviceId' when calling patchDevice");
      }

      var pathParams = {
        'device-id': deviceId
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
      return this.apiClient.callApi('/devices/{device-id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
    /**
     * Callback function to receive the result of the removeGrantFromDevice operation.
     * @callback module:api/IAMDS/DeviceApi~removeGrantFromDeviceCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove a grant from a device.
     * Removes a grant from a device.
     * @param {String} deviceId 
     * @param {String} grantId 
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {module:api/IAMDS/DeviceApi~removeGrantFromDeviceCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "removeGrantFromDevice",
    value: function removeGrantFromDevice(deviceId, grantId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'deviceId' is set

      if (deviceId === undefined || deviceId === null) {
        throw new Error("Missing the required parameter 'deviceId' when calling removeGrantFromDevice");
      } // verify the required parameter 'grantId' is set


      if (grantId === undefined || grantId === null) {
        throw new Error("Missing the required parameter 'grantId' when calling removeGrantFromDevice");
      }

      var pathParams = {
        'device-id': deviceId,
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
      return this.apiClient.callApi('/devices/{device-id}/grants/{grant-id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
    /**
     * Callback function to receive the result of the replaceDevice operation.
     * @callback module:api/IAMDS/DeviceApi~replaceDeviceCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update all fields on a device.
     * Replaces the specified device with the device in the body.
     * @param {String} deviceId 
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {String} opts.ifMatch Only execute the operation if the ETag for the current version of the resource matches the ETag in this header.
     * @param {module:model/IAMDS/Device} opts.device 
     * @param {module:api/IAMDS/DeviceApi~replaceDeviceCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "replaceDevice",
    value: function replaceDevice(deviceId, opts, callback) {
      opts = opts || {};
      var postBody = opts['device']; // verify the required parameter 'deviceId' is set

      if (deviceId === undefined || deviceId === null) {
        throw new Error("Missing the required parameter 'deviceId' when calling replaceDevice");
      }

      var pathParams = {
        'device-id': deviceId
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
      return this.apiClient.callApi('/devices/{device-id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
  }]);
  return DeviceApi;
}();

exports["default"] = DeviceApi;