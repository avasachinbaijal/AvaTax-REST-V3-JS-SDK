"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _ApiClient = _interopRequireDefault(require("../../ApiClient"));

var _AgeVerifyRequestAddress = _interopRequireDefault(require("./AgeVerifyRequestAddress"));

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
 * The AgeVerifyRequest model module.
 * @module model/AgeVerification/AgeVerifyRequest
 * @version 2.4.36
 */
var AgeVerifyRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AgeVerifyRequest</code>.
   * The Request for the /ageVerification/verify endpoint. Describes information about the person whose age is being verified.
   * @alias module:model/AgeVerification/AgeVerifyRequest
   */
  function AgeVerifyRequest() {
    (0, _classCallCheck2["default"])(this, AgeVerifyRequest);
    AgeVerifyRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(AgeVerifyRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AgeVerifyRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AgeVerification/AgeVerifyRequest} obj Optional instance to populate.
     * @return {module:model/AgeVerification/AgeVerifyRequest} The populated <code>AgeVerifyRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AgeVerifyRequest();

        if (data.hasOwnProperty('firstName')) {
          obj['firstName'] = _ApiClient["default"].convertToType(data['firstName'], 'String');
        }

        if (data.hasOwnProperty('lastName')) {
          obj['lastName'] = _ApiClient["default"].convertToType(data['lastName'], 'String');
        }

        if (data.hasOwnProperty('address')) {
          obj['address'] = _AgeVerifyRequestAddress["default"].constructFromObject(data['address']);
        }

        if (data.hasOwnProperty('DOB')) {
          obj['DOB'] = _ApiClient["default"].convertToType(data['DOB'], 'String');
        }
      }

      return obj;
    }
  }]);
  return AgeVerifyRequest;
}();
/**
 * @member {String} firstName
 */


AgeVerifyRequest.prototype['firstName'] = undefined;
/**
 * @member {String} lastName
 */

AgeVerifyRequest.prototype['lastName'] = undefined;
/**
 * @member {module:model/AgeVerification/AgeVerifyRequestAddress} address
 */

AgeVerifyRequest.prototype['address'] = undefined;
/**
 * The value should be ISO-8601 compliant (e.g. 2020-07-21).
 * @member {String} DOB
 */

AgeVerifyRequest.prototype['DOB'] = undefined;
var _default = AgeVerifyRequest;
exports["default"] = _default;