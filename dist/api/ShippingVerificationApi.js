"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ErrorDetails = _interopRequireDefault(require("../model/ErrorDetails"));

var _ShippingVerifyResult = _interopRequireDefault(require("../model/ShippingVerifyResult"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* ShippingVerification service.
* @module api/ShippingVerificationApi
* @version 22.1.0
*/
var ShippingVerificationApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ShippingVerificationApi. 
  * @alias module:api/ShippingVerificationApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ShippingVerificationApi(apiClient) {
    _classCallCheck(this, ShippingVerificationApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the deregisterShipment operation.
   * @callback module:api/ShippingVerificationApi~deregisterShipmentCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Removes the transaction from consideration when evaluating regulations that span multiple transactions.
   * @param {String} companyCode The company code of the company that recorded the transaction
   * @param {String} transactionCode The transaction code to retrieve
   * @param {Object} opts Optional parameters
   * @param {module:model/String} opts.documentType (Optional): The document type of the transaction to operate on. If omitted, defaults to \"SalesInvoice\"
   * @param {module:api/ShippingVerificationApi~deregisterShipmentCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(ShippingVerificationApi, [{
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
      var formParams = {};
      var authNames = ['BasicAuth', 'Bearer'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/api/v2/companies/{companyCode}/transactions/{transactionCode}/shipment/registration', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the registerShipment operation.
     * @callback module:api/ShippingVerificationApi~registerShipmentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Registers the transaction so that it may be included when evaluating regulations that span multiple transactions.
     * @param {String} companyCode The company code of the company that recorded the transaction
     * @param {String} transactionCode The transaction code to retrieve
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.documentType (Optional): The document type of the transaction to operate on. If omitted, defaults to \"SalesInvoice\"
     * @param {module:api/ShippingVerificationApi~registerShipmentCallback} callback The callback function, accepting three arguments: error, data, response
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
      var formParams = {};
      var authNames = ['BasicAuth', 'Bearer'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/api/v2/companies/{companyCode}/transactions/{transactionCode}/shipment/registration', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the registerShipmentIfCompliant operation.
     * @callback module:api/ShippingVerificationApi~registerShipmentIfCompliantCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ShippingVerifyResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Evaluates a transaction against a set of direct-to-consumer shipping regulations and, if compliant, registers the transaction so that it may be included when evaluating regulations that span multiple transactions.
     * @param {String} companyCode The company code of the company that recorded the transaction
     * @param {String} transactionCode The transaction code to retrieve
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.documentType (Optional): The document type of the transaction to operate on. If omitted, defaults to \"SalesInvoice\"
     * @param {module:api/ShippingVerificationApi~registerShipmentIfCompliantCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ShippingVerifyResult}
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
      var formParams = {};
      var authNames = ['BasicAuth', 'Bearer'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ShippingVerifyResult["default"];
      return this.apiClient.callApi('/api/v2/companies/{companyCode}/transactions/{transactionCode}/shipment/registerIfCompliant', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the verifyShipment operation.
     * @callback module:api/ShippingVerificationApi~verifyShipmentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ShippingVerifyResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Evaluates a transaction against a set of direct-to-consumer shipping regulations.
     * The transaction and its lines must meet the following criteria in order to be evaluated: * The transaction must be recorded. Using a type of *SalesInvoice* is recommended. * A parameter with the name *AlcoholRouteType* must be specified and the value must be one of the following: '*DTC*', '*Retailer DTC*' * A parameter with the name *RecipientName* must be specified and the value must be the name of the recipient. * Each alcohol line must include a *ContainerSize* parameter that describes the volume of a single container. Use the *unit* field to specify one of the following units: '*Litre*', '*Millilitre*', '*gallon (US fluid)*', '*quart (US fluid)*', '*ounce (fluid US customary)*' * Each alcohol line must include a *PackSize* parameter that describes the number of containers in a pack. Specify *Count* in the *unit* field.  Optionally, the transaction and its lines may use the following parameters: * The *ShipDate* parameter may be used if the date of shipment is different than the date of the transaction. The value should be ISO-8601 compliant (e.g. 2020-07-21). * The *RecipientDOB* parameter may be used to evaluate age restrictions. The value should be ISO-8601 compliant (e.g. 2020-07-21). * The *PurchaserDOB* parameter may be used to evaluate age restrictions. The value should be ISO-8601 compliant (e.g. 2020-07-21). * The *SalesLocation* parameter may be used to describe whether the sale was made *OnSite* or *OffSite*. *OffSite* is the default value. * The *AlcoholContent* parameter may be used to describe the alcohol percentage by volume of the item. Specify *Percentage* in the *unit* field.  **Security Policies** This API depends on all of the following active subscriptions: *AvaAlcohol, AutoAddress, AvaTaxPro*
     * @param {String} companyCode The company code of the company that recorded the transaction
     * @param {String} transactionCode The transaction code to retrieve
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.documentType (Optional): The document type of the transaction to operate on. If omitted, defaults to \"SalesInvoice\"
     * @param {module:api/ShippingVerificationApi~verifyShipmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ShippingVerifyResult}
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
      var formParams = {};
      var authNames = ['BasicAuth', 'Bearer'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ShippingVerifyResult["default"];
      return this.apiClient.callApi('/api/v2/companies/{companyCode}/transactions/{transactionCode}/shipment/verify', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ShippingVerificationApi;
}();

exports["default"] = ShippingVerificationApi;