"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _ApiClient = _interopRequireDefault(require("../../ApiClient"));

var _ErrorDetailsError = _interopRequireDefault(require("./ErrorDetailsError"));

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
 * The ErrorDetails model module.
 * @module model/Shipping/ErrorDetails
 * @version 2.4.36
 */
var ErrorDetails = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ErrorDetails</code>.
   * Message Object
   * @alias module:model/Shipping/ErrorDetails
   */
  function ErrorDetails() {
    (0, _classCallCheck2["default"])(this, ErrorDetails);
    ErrorDetails.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(ErrorDetails, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ErrorDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Shipping/ErrorDetails} obj Optional instance to populate.
     * @return {module:model/Shipping/ErrorDetails} The populated <code>ErrorDetails</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ErrorDetails();

        if (data.hasOwnProperty('error')) {
          obj['error'] = _ErrorDetailsError["default"].constructFromObject(data['error']);
        }
      }

      return obj;
    }
  }]);
  return ErrorDetails;
}();
/**
 * @member {module:model/Shipping/ErrorDetailsError} error
 */


ErrorDetails.prototype['error'] = undefined;
var _default = ErrorDetails;
exports["default"] = _default;