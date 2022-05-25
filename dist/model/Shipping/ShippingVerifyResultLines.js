"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _ApiClient = _interopRequireDefault(require("../../ApiClient"));

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
 * The ShippingVerifyResultLines model module.
 * @module model/Shipping/ShippingVerifyResultLines
 * @version 2.4.36
 */
var ShippingVerifyResultLines = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ShippingVerifyResultLines</code>.
   * @alias module:model/Shipping/ShippingVerifyResultLines
   */
  function ShippingVerifyResultLines() {
    (0, _classCallCheck2["default"])(this, ShippingVerifyResultLines);
    ShippingVerifyResultLines.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(ShippingVerifyResultLines, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ShippingVerifyResultLines</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Shipping/ShippingVerifyResultLines} obj Optional instance to populate.
     * @return {module:model/Shipping/ShippingVerifyResultLines} The populated <code>ShippingVerifyResultLines</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ShippingVerifyResultLines();

        if (data.hasOwnProperty('resultCode')) {
          obj['resultCode'] = _ApiClient["default"].convertToType(data['resultCode'], 'String');
        }

        if (data.hasOwnProperty('lineNumber')) {
          obj['lineNumber'] = _ApiClient["default"].convertToType(data['lineNumber'], 'String');
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
      }

      return obj;
    }
  }]);
  return ShippingVerifyResultLines;
}();
/**
 * Describes whether the line is compliant or not. In cases where a determination could not be made, resultCode will provide the reason why.
 * @member {module:model/Shipping/ShippingVerifyResultLines.ResultCodeEnum} resultCode
 */


ShippingVerifyResultLines.prototype['resultCode'] = undefined;
/**
 * The lineNumber of the line evaluated.
 * @member {String} lineNumber
 */

ShippingVerifyResultLines.prototype['lineNumber'] = undefined;
/**
 * A short description of the result of the checks made against this line.
 * @member {String} message
 */

ShippingVerifyResultLines.prototype['message'] = undefined;
/**
 * A detailed description of the result of each of the passed checks made against this line.
 * @member {String} successMessages
 */

ShippingVerifyResultLines.prototype['successMessages'] = undefined;
/**
 * A detailed description of the result of each of the failed checks made against this line.
 * @member {String} failureMessages
 */

ShippingVerifyResultLines.prototype['failureMessages'] = undefined;
/**
 * An enumeration of all the failure codes received for this line.
 * @member {Array.<module:model/Shipping/ShippingVerifyResultLines.FailureCodesEnum>} failureCodes
 */

ShippingVerifyResultLines.prototype['failureCodes'] = undefined;
/**
 * Allowed values for the <code>resultCode</code> property.
 * @enum {String}
 * @readonly
 */

ShippingVerifyResultLines['ResultCodeEnum'] = {
  /**
   * value: "Compliant"
   * @const
   */
  "Compliant": "Compliant",

  /**
   * value: "NotCompliant"
   * @const
   */
  "NotCompliant": "NotCompliant",

  /**
   * value: "UnsupportedTaxCode"
   * @const
   */
  "UnsupportedTaxCode": "UnsupportedTaxCode",

  /**
   * value: "UnsupportedAddress"
   * @const
   */
  "UnsupportedAddress": "UnsupportedAddress",

  /**
   * value: "InvalidLine"
   * @const
   */
  "InvalidLine": "InvalidLine"
};
/**
 * Allowed values for the <code>failureCodes</code> property.
 * @enum {String}
 * @readonly
 */

ShippingVerifyResultLines['FailureCodesEnum'] = {
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
var _default = ShippingVerifyResultLines;
exports["default"] = _default;