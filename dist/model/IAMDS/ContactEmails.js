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
 * The ContactEmails model module.
 * @module model/IAMDS/ContactEmails
 * @version 2.4.36
 */
var ContactEmails = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ContactEmails</code>.
   * @alias module:model/IAMDS/ContactEmails
   */
  function ContactEmails() {
    (0, _classCallCheck2["default"])(this, ContactEmails);
    ContactEmails.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(ContactEmails, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ContactEmails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IAMDS/ContactEmails} obj Optional instance to populate.
     * @return {module:model/IAMDS/ContactEmails} The populated <code>ContactEmails</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ContactEmails();

        if (data.hasOwnProperty('emailId')) {
          obj['emailId'] = _ApiClient["default"].convertToType(data['emailId'], 'String');
        }

        if (data.hasOwnProperty('isPrimary')) {
          obj['isPrimary'] = _ApiClient["default"].convertToType(data['isPrimary'], 'Boolean');
        }
      }

      return obj;
    }
  }]);
  return ContactEmails;
}();
/**
 * Email address of the contact
 * @member {String} emailId
 */


ContactEmails.prototype['emailId'] = undefined;
/**
 * Is this the primary email Id for the contact
 * @member {Boolean} isPrimary
 */

ContactEmails.prototype['isPrimary'] = undefined;
var _default = ContactEmails;
exports["default"] = _default;