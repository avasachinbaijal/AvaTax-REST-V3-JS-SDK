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
 * The Reference model module.
 * @module model/IAMDS/Reference
 * @version 2.4.36
 */
var Reference = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Reference</code>.
   * Reference to an instance of an Object
   * @alias module:model/IAMDS/Reference
   * @param identifier {String} Unique Identifier of the object
   */
  function Reference(identifier) {
    (0, _classCallCheck2["default"])(this, Reference);
    Reference.initialize(this, identifier);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(Reference, null, [{
    key: "initialize",
    value: function initialize(obj, identifier) {
      obj['identifier'] = identifier;
    }
    /**
     * Constructs a <code>Reference</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IAMDS/Reference} obj Optional instance to populate.
     * @return {module:model/IAMDS/Reference} The populated <code>Reference</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Reference();

        if (data.hasOwnProperty('identifier')) {
          obj['identifier'] = _ApiClient["default"].convertToType(data['identifier'], 'String');
        }

        if (data.hasOwnProperty('displayName')) {
          obj['displayName'] = _ApiClient["default"].convertToType(data['displayName'], 'String');
        }

        if (data.hasOwnProperty('location')) {
          obj['location'] = _ApiClient["default"].convertToType(data['location'], 'String');
        }
      }

      return obj;
    }
  }]);
  return Reference;
}();
/**
 * Unique Identifier of the object
 * @member {String} identifier
 */


Reference.prototype['identifier'] = undefined;
/**
 * Name of the object, used for display purposes
 * @member {String} displayName
 */

Reference.prototype['displayName'] = undefined;
/**
 * URL to access the object
 * @member {String} location
 */

Reference.prototype['location'] = undefined;
var _default = Reference;
exports["default"] = _default;