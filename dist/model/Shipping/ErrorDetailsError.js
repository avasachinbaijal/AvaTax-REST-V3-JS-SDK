"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _ApiClient = _interopRequireDefault(require("../../ApiClient"));

var _ErrorDetailsErrorDetails = _interopRequireDefault(require("./ErrorDetailsErrorDetails"));

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
 * The ErrorDetailsError model module.
 * @module model/Shipping/ErrorDetailsError
 * @version 2.4.36
 */
var ErrorDetailsError = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ErrorDetailsError</code>.
   * An object holding details about the error.
   * @alias module:model/Shipping/ErrorDetailsError
   */
  function ErrorDetailsError() {
    (0, _classCallCheck2["default"])(this, ErrorDetailsError);
    ErrorDetailsError.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(ErrorDetailsError, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ErrorDetailsError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Shipping/ErrorDetailsError} obj Optional instance to populate.
     * @return {module:model/Shipping/ErrorDetailsError} The populated <code>ErrorDetailsError</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ErrorDetailsError();

        if (data.hasOwnProperty('code')) {
          obj['code'] = _ApiClient["default"].convertToType(data['code'], 'String');
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('details')) {
          obj['details'] = _ErrorDetailsErrorDetails["default"].constructFromObject(data['details']);
        }
      }

      return obj;
    }
  }]);
  return ErrorDetailsError;
}();
/**
 * Name of the error or message.
 * @member {module:model/Shipping/ErrorDetailsError.CodeEnum} code
 */


ErrorDetailsError.prototype['code'] = undefined;
/**
 * Concise summary of the message, suitable for display in the caption of an alert box.
 * @member {String} message
 */

ErrorDetailsError.prototype['message'] = undefined;
/**
 * @member {module:model/Shipping/ErrorDetailsErrorDetails} details
 */

ErrorDetailsError.prototype['details'] = undefined;
/**
 * Allowed values for the <code>code</code> property.
 * @enum {String}
 * @readonly
 */

ErrorDetailsError['CodeEnum'] = {
  /**
   * value: "AuthenticationException"
   * @const
   */
  "AuthenticationException": "AuthenticationException",

  /**
   * value: "SubscriptionRequired"
   * @const
   */
  "SubscriptionRequired": "SubscriptionRequired",

  /**
   * value: "ServerConfiguration"
   * @const
   */
  "ServerConfiguration": "ServerConfiguration",

  /**
   * value: "InvalidAddress"
   * @const
   */
  "InvalidAddress": "InvalidAddress",

  /**
   * value: "EntityNotFoundError"
   * @const
   */
  "EntityNotFoundError": "EntityNotFoundError"
};
var _default = ErrorDetailsError;
exports["default"] = _default;