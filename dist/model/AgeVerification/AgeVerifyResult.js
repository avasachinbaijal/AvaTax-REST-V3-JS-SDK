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
 * The AgeVerifyResult model module.
 * @module model/AgeVerification/AgeVerifyResult
 * @version 2.4.36
 */
var AgeVerifyResult = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AgeVerifyResult</code>.
   * The Result of a call to the /ageVerification/verify endpoint.
   * @alias module:model/AgeVerification/AgeVerifyResult
   */
  function AgeVerifyResult() {
    (0, _classCallCheck2["default"])(this, AgeVerifyResult);
    AgeVerifyResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(AgeVerifyResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AgeVerifyResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AgeVerification/AgeVerifyResult} obj Optional instance to populate.
     * @return {module:model/AgeVerification/AgeVerifyResult} The populated <code>AgeVerifyResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AgeVerifyResult();

        if (data.hasOwnProperty('isOfAge')) {
          obj['isOfAge'] = _ApiClient["default"].convertToType(data['isOfAge'], 'Boolean');
        }

        if (data.hasOwnProperty('failureCodes')) {
          obj['failureCodes'] = _ApiClient["default"].convertToType(data['failureCodes'], [AgeVerifyResult]);
        }
      }

      return obj;
    }
  }]);
  return AgeVerifyResult;
}();
/**
 * Describes whether the individual meets or exceeds the minimum legal drinking age.
 * @member {Boolean} isOfAge
 */


AgeVerifyResult.prototype['isOfAge'] = undefined;
/**
 * A list of failure codes describing why a *false* age determination was made.
 * @member {Array.<module:model/AgeVerification/AgeVerifyResult>} failureCodes
 */

AgeVerifyResult.prototype['failureCodes'] = undefined;
var _default = AgeVerifyResult;
exports["default"] = _default;