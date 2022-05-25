"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _ApiClient = _interopRequireDefault(require("../../ApiClient"));

var _Aspect = _interopRequireDefault(require("./Aspect"));

var _InstanceMeta = _interopRequireDefault(require("./InstanceMeta"));

var _Tag = _interopRequireDefault(require("./Tag"));

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
 * The Instance model module.
 * @module model/IAMDS/Instance
 * @version 2.4.36
 */
var Instance = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Instance</code>.
   * Representation of an Object Instance
   * @alias module:model/IAMDS/Instance
   * @param id {String} Unique identifier for the Object
   */
  function Instance(id) {
    (0, _classCallCheck2["default"])(this, Instance);
    Instance.initialize(this, id);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(Instance, null, [{
    key: "initialize",
    value: function initialize(obj, id) {
      obj['id'] = id;
    }
    /**
     * Constructs a <code>Instance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IAMDS/Instance} obj Optional instance to populate.
     * @return {module:model/IAMDS/Instance} The populated <code>Instance</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Instance();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('meta')) {
          obj['meta'] = _InstanceMeta["default"].constructFromObject(data['meta']);
        }

        if (data.hasOwnProperty('aspects')) {
          obj['aspects'] = _ApiClient["default"].convertToType(data['aspects'], [_Aspect["default"]]);
        }

        if (data.hasOwnProperty('tags')) {
          obj['tags'] = _ApiClient["default"].convertToType(data['tags'], [_Tag["default"]]);
        }
      }

      return obj;
    }
  }]);
  return Instance;
}();
/**
 * Unique identifier for the Object
 * @member {String} id
 */


Instance.prototype['id'] = undefined;
/**
 * @member {module:model/IAMDS/InstanceMeta} meta
 */

Instance.prototype['meta'] = undefined;
/**
 * Identifier of the Resource (if any) in other systems
 * @member {Array.<module:model/IAMDS/Aspect>} aspects
 */

Instance.prototype['aspects'] = undefined;
/**
 * User defined tags in the form of key:value pair
 * @member {Array.<module:model/IAMDS/Tag>} tags
 */

Instance.prototype['tags'] = undefined;
var _default = Instance;
exports["default"] = _default;