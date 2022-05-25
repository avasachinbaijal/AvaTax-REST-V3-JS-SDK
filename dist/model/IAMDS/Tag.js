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
 * The Tag model module.
 * @module model/IAMDS/Tag
 * @version 2.4.36
 */
var Tag = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Tag</code>.
   * Tags that can hold additional information about a resource
   * @alias module:model/IAMDS/Tag
   */
  function Tag() {
    (0, _classCallCheck2["default"])(this, Tag);
    Tag.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(Tag, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Tag</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IAMDS/Tag} obj Optional instance to populate.
     * @return {module:model/IAMDS/Tag} The populated <code>Tag</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Tag();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);
  return Tag;
}();
/**
 * Name of the tag
 * @member {String} name
 */


Tag.prototype['name'] = undefined;
/**
 * User defined value
 * @member {String} value
 */

Tag.prototype['value'] = undefined;
var _default = Tag;
exports["default"] = _default;