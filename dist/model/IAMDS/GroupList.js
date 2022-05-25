"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _ApiClient = _interopRequireDefault(require("../../ApiClient"));

var _Group = _interopRequireDefault(require("./Group"));

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
 * The GroupList model module.
 * @module model/IAMDS/GroupList
 * @version 2.4.36
 */
var GroupList = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GroupList</code>.
   * @alias module:model/IAMDS/GroupList
   */
  function GroupList() {
    (0, _classCallCheck2["default"])(this, GroupList);
    GroupList.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(GroupList, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GroupList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IAMDS/GroupList} obj Optional instance to populate.
     * @return {module:model/IAMDS/GroupList} The populated <code>GroupList</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GroupList();

        if (data.hasOwnProperty('@recordsetCount')) {
          obj['@recordsetCount'] = _ApiClient["default"].convertToType(data['@recordsetCount'], 'Number');
        }

        if (data.hasOwnProperty('@nextLink')) {
          obj['@nextLink'] = _ApiClient["default"].convertToType(data['@nextLink'], 'String');
        }

        if (data.hasOwnProperty('pageKey')) {
          obj['pageKey'] = _ApiClient["default"].convertToType(data['pageKey'], 'String');
        }

        if (data.hasOwnProperty('items')) {
          obj['items'] = _ApiClient["default"].convertToType(data['items'], [_Group["default"]]);
        }
      }

      return obj;
    }
  }]);
  return GroupList;
}();
/**
 * @member {Number} @recordsetCount
 */


GroupList.prototype['@recordsetCount'] = undefined;
/**
 * @member {String} @nextLink
 */

GroupList.prototype['@nextLink'] = undefined;
/**
 * @member {String} pageKey
 */

GroupList.prototype['pageKey'] = undefined;
/**
 * @member {Array.<module:model/IAMDS/Group>} items
 */

GroupList.prototype['items'] = undefined;
var _default = GroupList;
exports["default"] = _default;