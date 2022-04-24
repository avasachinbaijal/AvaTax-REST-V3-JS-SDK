"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ShippingVerifyResultLines = _interopRequireDefault(require("./ShippingVerifyResultLines"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ShippingVerifyResult model module.
 * @module model/Shipping/ShippingVerifyResult
 * @version 2.4.29
 */
var ShippingVerifyResult = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ShippingVerifyResult</code>.
   * The Response of the /shippingverify endpoint. Describes the result of checking all applicable shipping rules against each line in the transaction.
   * @alias module:model/Shipping/ShippingVerifyResult
   */
  function ShippingVerifyResult() {
    _classCallCheck(this, ShippingVerifyResult);

    ShippingVerifyResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ShippingVerifyResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ShippingVerifyResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Shipping/ShippingVerifyResult} obj Optional instance to populate.
     * @return {module:model/Shipping/ShippingVerifyResult} The populated <code>ShippingVerifyResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ShippingVerifyResult();

        if (data.hasOwnProperty('compliant')) {
          obj['compliant'] = _ApiClient["default"].convertToType(data['compliant'], 'Boolean');
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('successMessages')) {
          obj['successMessages'] = _ApiClient["default"].convertToType(data['successMessages'], 'String');
        }

        if (data.hasOwnProperty('failureMessages')) {
          obj['failureMessages'] = _ApiClient["default"].convertToType(data['failureMessages'], 'String');
        }

        if (data.hasOwnProperty('failureCodes')) {
          obj['failureCodes'] = _ApiClient["default"].convertToType(data['failureCodes'], ['String']);
        }

        if (data.hasOwnProperty('warningCodes')) {
          obj['warningCodes'] = _ApiClient["default"].convertToType(data['warningCodes'], ['String']);
        }

        if (data.hasOwnProperty('lines')) {
          obj['lines'] = _ApiClient["default"].convertToType(data['lines'], [_ShippingVerifyResultLines["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ShippingVerifyResult;
}();
/**
 * Whether every line in the transaction is compliant.
 * @member {Boolean} compliant
 */


ShippingVerifyResult.prototype['compliant'] = undefined;
/**
 * A short description of the result of the compliance check.
 * @member {String} message
 */

ShippingVerifyResult.prototype['message'] = undefined;
/**
 * A detailed description of the result of each of the passed checks made against this transaction, separated by line.
 * @member {String} successMessages
 */

ShippingVerifyResult.prototype['successMessages'] = undefined;
/**
 * A detailed description of the result of each of the failed checks made against this transaction, separated by line.
 * @member {String} failureMessages
 */

ShippingVerifyResult.prototype['failureMessages'] = undefined;
/**
 * An enumeration of all the failure codes received across all lines.
 * @member {Array.<module:model/Shipping/ShippingVerifyResult.FailureCodesEnum>} failureCodes
 */

ShippingVerifyResult.prototype['failureCodes'] = undefined;
/**
 * An enumeration of all the warning codes received across all lines that a determination could not be made for.
 * @member {Array.<module:model/Shipping/ShippingVerifyResult.WarningCodesEnum>} warningCodes
 */

ShippingVerifyResult.prototype['warningCodes'] = undefined;
/**
 * Describes the results of the checks made for each line in the transaction.
 * @member {Array.<module:model/Shipping/ShippingVerifyResultLines>} lines
 */

ShippingVerifyResult.prototype['lines'] = undefined;
/**
 * Allowed values for the <code>failureCodes</code> property.
 * @enum {String}
 * @readonly
 */

ShippingVerifyResult['FailureCodesEnum'] = {
  /**
   * value: "BelowLegalDrinkingAge"
   * @const
   */
  "BelowLegalDrinkingAge": "BelowLegalDrinkingAge",

  /**
   * value: "ShippingProhibitedToAddress"
   * @const
   */
  "ShippingProhibitedToAddress": "ShippingProhibitedToAddress",

  /**
   * value: "MissingRequiredLicense"
   * @const
   */
  "MissingRequiredLicense": "MissingRequiredLicense",

  /**
   * value: "VolumeLimitExceeded"
   * @const
   */
  "VolumeLimitExceeded": "VolumeLimitExceeded",

  /**
   * value: "InvalidFieldValue"
   * @const
   */
  "InvalidFieldValue": "InvalidFieldValue",

  /**
   * value: "MissingRequiredField"
   * @const
   */
  "MissingRequiredField": "MissingRequiredField",

  /**
   * value: "InvalidFieldType"
   * @const
   */
  "InvalidFieldType": "InvalidFieldType",

  /**
   * value: "InvalidFormat"
   * @const
   */
  "InvalidFormat": "InvalidFormat",

  /**
   * value: "InvalidDate"
   * @const
   */
  "InvalidDate": "InvalidDate"
};
/**
 * Allowed values for the <code>warningCodes</code> property.
 * @enum {String}
 * @readonly
 */

ShippingVerifyResult['WarningCodesEnum'] = {
  /**
   * value: "UnsupportedTaxCode"
   * @const
   */
  "UnsupportedTaxCode": "UnsupportedTaxCode",

  /**
   * value: "UnsupportedAddress"
   * @const
   */
  "UnsupportedAddress": "UnsupportedAddress"
};
var _default = ShippingVerifyResult;
exports["default"] = _default;