"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AgeVerifyFailureCode = _interopRequireDefault(require("../model/AgeVerifyFailureCode"));

var _AgeVerifyRequest = _interopRequireDefault(require("../model/AgeVerifyRequest"));

var _AgeVerifyResult = _interopRequireDefault(require("../model/AgeVerifyResult"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* AgeVerification service.
* @module api/AgeVerificationApi
* @version 22.1.0
*/
var AgeVerificationApi = /*#__PURE__*/function () {
  /**
  * Constructs a new AgeVerificationApi. 
  * @alias module:api/AgeVerificationApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function AgeVerificationApi(apiClient) {
    _classCallCheck(this, AgeVerificationApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the verifyAge operation.
   * @callback module:api/AgeVerificationApi~verifyAgeCallback
   * @param {String} error Error message, if any.
   * @param {module:model/AgeVerifyResult} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Determines whether an individual meets or exceeds the minimum legal drinking age.
   * The request must meet the following criteria in order to be evaluated: * *firstName*, *lastName*, and *address* are required fields. * One of the following sets of attributes are required for the *address*:   * *line1, city, region*   * *line1, postalCode*  Optionally, the transaction and its lines may use the following parameters: * A *DOB* (Date of Birth) field. The value should be ISO-8601 compliant (e.g. 2020-07-21). * Beyond the required *address* fields above, a *country* field is permitted   * The valid values for this attribute are [*US, USA*]  **Security Policies** This API depends on the active subscription *AgeVerification*
   * @param {module:model/AgeVerifyRequest} ageVerifyRequest Information about the individual whose age is being verified.
   * @param {Object} opts Optional parameters
   * @param {module:model/AgeVerifyFailureCode} opts.simulatedFailureCode (Optional) The failure code included in the simulated response of the endpoint. Note that this endpoint is only available in Sandbox for testing purposes.
   * @param {module:api/AgeVerificationApi~verifyAgeCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/AgeVerifyResult}
   */


  _createClass(AgeVerificationApi, [{
    key: "verifyAge",
    value: function verifyAge(ageVerifyRequest, opts, callback) {
      opts = opts || {};
      var postBody = ageVerifyRequest; // verify the required parameter 'ageVerifyRequest' is set

      if (ageVerifyRequest === undefined || ageVerifyRequest === null) {
        throw new Error("Missing the required parameter 'ageVerifyRequest' when calling verifyAge");
      }

      var pathParams = {};
      var queryParams = {
        'simulatedFailureCode': opts['simulatedFailureCode']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['BasicAuth', 'Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _AgeVerifyResult["default"];
      return this.apiClient.callApi('/api/v2/ageverification/verify', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return AgeVerificationApi;
}();

exports["default"] = AgeVerificationApi;