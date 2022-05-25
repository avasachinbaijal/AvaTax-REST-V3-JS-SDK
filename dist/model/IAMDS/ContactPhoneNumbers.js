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
 * The ContactPhoneNumbers model module.
 * @module model/IAMDS/ContactPhoneNumbers
 * @version 2.4.36
 */
var ContactPhoneNumbers = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ContactPhoneNumbers</code>.
   * @alias module:model/IAMDS/ContactPhoneNumbers
   */
  function ContactPhoneNumbers() {
    (0, _classCallCheck2["default"])(this, ContactPhoneNumbers);
    ContactPhoneNumbers.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(ContactPhoneNumbers, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ContactPhoneNumbers</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IAMDS/ContactPhoneNumbers} obj Optional instance to populate.
     * @return {module:model/IAMDS/ContactPhoneNumbers} The populated <code>ContactPhoneNumbers</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ContactPhoneNumbers();

        if (data.hasOwnProperty('number')) {
          obj['number'] = _ApiClient["default"].convertToType(data['number'], 'String');
        }

        if (data.hasOwnProperty('phoneType')) {
          obj['phoneType'] = _ApiClient["default"].convertToType(data['phoneType'], 'String');
        }

        if (data.hasOwnProperty('isPrimary')) {
          obj['isPrimary'] = _ApiClient["default"].convertToType(data['isPrimary'], 'Boolean');
        }
      }

      return obj;
    }
  }]);
  return ContactPhoneNumbers;
}();
/**
 * Phone number of the contact
 * @member {String} number
 */


ContactPhoneNumbers.prototype['number'] = undefined;
/**
 * Type of phone number
 * @member {module:model/IAMDS/ContactPhoneNumbers.PhoneTypeEnum} phoneType
 */

ContactPhoneNumbers.prototype['phoneType'] = undefined;
/**
 * Is this the primary phone number for the contact
 * @member {Boolean} isPrimary
 */

ContactPhoneNumbers.prototype['isPrimary'] = undefined;
/**
 * Allowed values for the <code>phoneType</code> property.
 * @enum {String}
 * @readonly
 */

ContactPhoneNumbers['PhoneTypeEnum'] = {
  /**
   * value: "work"
   * @const
   */
  "work": "work",

  /**
   * value: "home"
   * @const
   */
  "home": "home",

  /**
   * value: "mobile"
   * @const
   */
  "mobile": "mobile",

  /**
   * value: "fax"
   * @const
   */
  "fax": "fax",

  /**
   * value: "other"
   * @const
   */
  "other": "other"
};
var _default = ContactPhoneNumbers;
exports["default"] = _default;