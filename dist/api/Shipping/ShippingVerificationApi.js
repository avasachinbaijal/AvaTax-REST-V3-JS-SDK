"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _ErrorDetails = _interopRequireDefault(require("../../model/Shipping/ErrorDetails"));

var _ShippingVerifyResult = _interopRequireDefault(require("../../model/Shipping/ShippingVerifyResult"));

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
* ShippingVerification service.
* @module api/Shipping/ShippingVerificationApi
* @version 2.4.36
*/
var ShippingVerificationApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ShippingVerificationApi. 
  * @alias module:api/Shipping/ShippingVerificationApi
  * @class
  * @param {module:ApiClient} [apiClient] API client implementation to use
  */
  function ShippingVerificationApi(apiClient) {
    (0, _classCallCheck2["default"])(this, ShippingVerificationApi);

    if (!apiClient) {
      throw new Error('apiClient is a required parameter.');
    }

    this.apiClient = apiClient;
    this.apiClient.sdkVersion = '2.4.36';
  }
  /**
   * Callback function to receive the result of the deregisterShipment operation.
   * @callback module:api/Shipping/ShippingVerificationApi~deregisterShipmentCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Removes the transaction from consideration when evaluating regulations that span multiple transactions.
   * @param {String} companyCode The company code of the company that recorded the transaction
   * @param {String} transactionCode The transaction code to retrieve
   * @param {Object} opts Optional parameters
   * @param {module:model/Shipping/String} opts.documentType (Optional): The document type of the transaction to operate on. If omitted, defaults to \"SalesInvoice\"
   * @param {module:api/Shipping/ShippingVerificationApi~deregisterShipmentCallback} callback The callback function, accepting three arguments: error, data, response
   */


  (0, _createClass2["default"])(ShippingVerificationApi, [{
    key: "deregisterShipment",
    value: function deregisterShipment(companyCode, transactionCode, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'companyCode' is set

      if (companyCode === undefined || companyCode === null) {
        throw new Error("Missing the required parameter 'companyCode' when calling deregisterShipment");
      } // verify the required parameter 'transactionCode' is set


      if (transactionCode === undefined || transactionCode === null) {
        throw new Error("Missing the required parameter 'transactionCode' when calling deregisterShipment");
      }

      var pathParams = {
        'companyCode': companyCode,
        'transactionCode': transactionCode
      };
      var queryParams = {
        'documentType': opts['documentType']
      };
      var headerParams = {};
      var formParams = {}; //OAuth2 Scopes

      var requiredScopes = "";
      var authNames = ['BasicAuth', 'Bearer'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/api/v2/companies/{companyCode}/transactions/{transactionCode}/shipment/registration', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
    /**
     * Callback function to receive the result of the registerShipment operation.
     * @callback module:api/Shipping/ShippingVerificationApi~registerShipmentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Registers the transaction so that it may be included when evaluating regulations that span multiple transactions.
     * @param {String} companyCode The company code of the company that recorded the transaction
     * @param {String} transactionCode The transaction code to retrieve
     * @param {Object} opts Optional parameters
     * @param {module:model/Shipping/String} opts.documentType (Optional): The document type of the transaction to operate on. If omitted, defaults to \"SalesInvoice\"
     * @param {module:api/Shipping/ShippingVerificationApi~registerShipmentCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "registerShipment",
    value: function registerShipment(companyCode, transactionCode, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'companyCode' is set

      if (companyCode === undefined || companyCode === null) {
        throw new Error("Missing the required parameter 'companyCode' when calling registerShipment");
      } // verify the required parameter 'transactionCode' is set


      if (transactionCode === undefined || transactionCode === null) {
        throw new Error("Missing the required parameter 'transactionCode' when calling registerShipment");
      }

      var pathParams = {
        'companyCode': companyCode,
        'transactionCode': transactionCode
      };
      var queryParams = {
        'documentType': opts['documentType']
      };
      var headerParams = {};
      var formParams = {}; //OAuth2 Scopes

      var requiredScopes = "";
      var authNames = ['BasicAuth', 'Bearer'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/api/v2/companies/{companyCode}/transactions/{transactionCode}/shipment/registration', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
    /**
     * Callback function to receive the result of the registerShipmentIfCompliant operation.
     * @callback module:api/Shipping/ShippingVerificationApi~registerShipmentIfCompliantCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Shipping/ShippingVerifyResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Evaluates a transaction against a set of direct-to-consumer shipping regulations and, if compliant, registers the transaction so that it may be included when evaluating regulations that span multiple transactions.
     * @param {String} companyCode The company code of the company that recorded the transaction
     * @param {String} transactionCode The transaction code to retrieve
     * @param {Object} opts Optional parameters
     * @param {module:model/Shipping/String} opts.documentType (Optional): The document type of the transaction to operate on. If omitted, defaults to \"SalesInvoice\"
     * @param {module:api/Shipping/ShippingVerificationApi~registerShipmentIfCompliantCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Shipping/ShippingVerifyResult}
     */

  }, {
    key: "registerShipmentIfCompliant",
    value: function registerShipmentIfCompliant(companyCode, transactionCode, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'companyCode' is set

      if (companyCode === undefined || companyCode === null) {
        throw new Error("Missing the required parameter 'companyCode' when calling registerShipmentIfCompliant");
      } // verify the required parameter 'transactionCode' is set


      if (transactionCode === undefined || transactionCode === null) {
        throw new Error("Missing the required parameter 'transactionCode' when calling registerShipmentIfCompliant");
      }

      var pathParams = {
        'companyCode': companyCode,
        'transactionCode': transactionCode
      };
      var queryParams = {
        'documentType': opts['documentType']
      };
      var headerParams = {};
      var formParams = {}; //OAuth2 Scopes

      var requiredScopes = "";
      var authNames = ['BasicAuth', 'Bearer'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ShippingVerifyResult["default"];
      return this.apiClient.callApi('/api/v2/companies/{companyCode}/transactions/{transactionCode}/shipment/registerIfCompliant', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
    /**
     * Callback function to receive the result of the verifyShipment operation.
     * @callback module:api/Shipping/ShippingVerificationApi~verifyShipmentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Shipping/ShippingVerifyResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Evaluates a transaction against a set of direct-to-consumer shipping regulations.
     * The transaction and its lines must meet the following criteria in order to be evaluated: * The transaction must be recorded. Using a type of *SalesInvoice* is recommended. * A parameter with the name *AlcoholRouteType* must be specified and the value must be one of the following: '*DTC*', '*Retailer DTC*' * A parameter with the name *RecipientName* must be specified and the value must be the name of the recipient. * Each alcohol line must include a *ContainerSize* parameter that describes the volume of a single container. Use the *unit* field to specify one of the following units: '*Litre*', '*Millilitre*', '*gallon (US fluid)*', '*quart (US fluid)*', '*ounce (fluid US customary)*' * Each alcohol line must include a *PackSize* parameter that describes the number of containers in a pack. Specify *Count* in the *unit* field.  Optionally, the transaction and its lines may use the following parameters: * The *ShipDate* parameter may be used if the date of shipment is different than the date of the transaction. The value should be ISO-8601 compliant (e.g. 2020-07-21). * The *RecipientDOB* parameter may be used to evaluate age restrictions. The value should be ISO-8601 compliant (e.g. 2020-07-21). * The *PurchaserDOB* parameter may be used to evaluate age restrictions. The value should be ISO-8601 compliant (e.g. 2020-07-21). * The *SalesLocation* parameter may be used to describe whether the sale was made *OnSite* or *OffSite*. *OffSite* is the default value. * The *AlcoholContent* parameter may be used to describe the alcohol percentage by volume of the item. Specify *Percentage* in the *unit* field.  **Security Policies** This API depends on all of the following active subscriptions: *AvaAlcohol, AutoAddress, AvaTaxPro*
     * @param {String} companyCode The company code of the company that recorded the transaction
     * @param {String} transactionCode The transaction code to retrieve
     * @param {Object} opts Optional parameters
     * @param {module:model/Shipping/String} opts.documentType (Optional): The document type of the transaction to operate on. If omitted, defaults to \"SalesInvoice\"
     * @param {module:api/Shipping/ShippingVerificationApi~verifyShipmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Shipping/ShippingVerifyResult}
     */

  }, {
    key: "verifyShipment",
    value: function verifyShipment(companyCode, transactionCode, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'companyCode' is set

      if (companyCode === undefined || companyCode === null) {
        throw new Error("Missing the required parameter 'companyCode' when calling verifyShipment");
      } // verify the required parameter 'transactionCode' is set


      if (transactionCode === undefined || transactionCode === null) {
        throw new Error("Missing the required parameter 'transactionCode' when calling verifyShipment");
      }

      var pathParams = {
        'companyCode': companyCode,
        'transactionCode': transactionCode
      };
      var queryParams = {
        'documentType': opts['documentType']
      };
      var headerParams = {};
      var formParams = {}; //OAuth2 Scopes

      var requiredScopes = "";
      var authNames = ['BasicAuth', 'Bearer'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ShippingVerifyResult["default"];
      return this.apiClient.callApi('/api/v2/companies/{companyCode}/transactions/{transactionCode}/shipment/verify', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback, requiredScopes);
    }
  }]);
  return ShippingVerificationApi;
}();

exports["default"] = ShippingVerificationApi;