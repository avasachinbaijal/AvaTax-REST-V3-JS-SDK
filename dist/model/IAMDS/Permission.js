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

var _Instance = _interopRequireDefault(require("./Instance"));

var _InstanceMeta = _interopRequireDefault(require("./InstanceMeta"));

var _Reference = _interopRequireDefault(require("./Reference"));

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
 * The Permission model module.
 * @module model/IAMDS/Permission
 * @version 2.4.36
 */
var Permission = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Permission</code>.
   * Representation of a Permission belonging to a System
   * @alias module:model/IAMDS/Permission
   * @implements module:model/IAMDS/Instance
   * @param id {String} Unique identifier for the Object
   */
  function Permission(id) {
    (0, _classCallCheck2["default"])(this, Permission);

    _Instance["default"].initialize(this, id);

    Permission.initialize(this, id);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(Permission, null, [{
    key: "initialize",
    value: function initialize(obj, id) {
      obj['resource'] = resource;
      obj['access'] = access;
      obj['id'] = id;
    }
    /**
     * Constructs a <code>Permission</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IAMDS/Permission} obj Optional instance to populate.
     * @return {module:model/IAMDS/Permission} The populated <code>Permission</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Permission();

        _Instance["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('resource')) {
          obj['resource'] = _Reference["default"].constructFromObject(data['resource']);
        }

        if (data.hasOwnProperty('access')) {
          obj['access'] = _ApiClient["default"].convertToType(data['access'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

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
  return Permission;
}();
/**
 * @member {module:model/IAMDS/Reference} resource
 */


Permission.prototype['resource'] = undefined;
/**
 * Access permission type
 * @member {String} access
 */

Permission.prototype['access'] = undefined;
/**
 * Name of the permission, used in roles and grants
 * @member {String} name
 */

Permission.prototype['name'] = undefined;
/**
 * Unique identifier for the Object
 * @member {String} id
 */

Permission.prototype['id'] = undefined;
/**
 * @member {module:model/IAMDS/InstanceMeta} meta
 */

Permission.prototype['meta'] = undefined;
/**
 * Identifier of the Resource (if any) in other systems
 * @member {Array.<module:model/IAMDS/Aspect>} aspects
 */

Permission.prototype['aspects'] = undefined;
/**
 * User defined tags in the form of key:value pair
 * @member {Array.<module:model/IAMDS/Tag>} tags
 */

Permission.prototype['tags'] = undefined; // Implement Instance interface:

/**
 * Unique identifier for the Object
 * @member {String} id
 */

_Instance["default"].prototype['id'] = undefined;
/**
 * @member {module:model/IAMDS/InstanceMeta} meta
 */

_Instance["default"].prototype['meta'] = undefined;
/**
 * Identifier of the Resource (if any) in other systems
 * @member {Array.<module:model/IAMDS/Aspect>} aspects
 */

_Instance["default"].prototype['aspects'] = undefined;
/**
 * User defined tags in the form of key:value pair
 * @member {Array.<module:model/IAMDS/Tag>} tags
 */

_Instance["default"].prototype['tags'] = undefined;
var _default = Permission;
exports["default"] = _default;