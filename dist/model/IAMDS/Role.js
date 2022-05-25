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
 * The Role model module.
 * @module model/IAMDS/Role
 * @version 2.4.36
 */
var Role = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Role</code>.
   * Representation of a Role
   * @alias module:model/IAMDS/Role
   * @implements module:model/IAMDS/Instance
   * @param id {String} Unique identifier for the Object
   */
  function Role(id) {
    (0, _classCallCheck2["default"])(this, Role);

    _Instance["default"].initialize(this, id);

    Role.initialize(this, id);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(Role, null, [{
    key: "initialize",
    value: function initialize(obj, id) {
      obj['displayName'] = displayName;
      obj['system'] = system;
      obj['type'] = type;
      obj['permissions'] = permissions;
      obj['id'] = id;
    }
    /**
     * Constructs a <code>Role</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IAMDS/Role} obj Optional instance to populate.
     * @return {module:model/IAMDS/Role} The populated <code>Role</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Role();

        _Instance["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('displayName')) {
          obj['displayName'] = _ApiClient["default"].convertToType(data['displayName'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('system')) {
          obj['system'] = _Reference["default"].constructFromObject(data['system']);
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('permissions')) {
          obj['permissions'] = _ApiClient["default"].convertToType(data['permissions'], ['String']);
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
  return Role;
}();
/**
 * Name of the Role
 * @member {String} displayName
 */


Role.prototype['displayName'] = undefined;
/**
 * Description of the Role
 * @member {String} description
 */

Role.prototype['description'] = undefined;
/**
 * @member {module:model/IAMDS/Reference} system
 */

Role.prototype['system'] = undefined;
/**
 * Determines the role ownership
 * @member {module:model/IAMDS/Role.TypeEnum} type
 */

Role.prototype['type'] = undefined;
/**
 * List of associated permissions, identified by the permission name
 * @member {Array.<String>} permissions
 */

Role.prototype['permissions'] = undefined;
/**
 * Unique identifier for the Object
 * @member {String} id
 */

Role.prototype['id'] = undefined;
/**
 * @member {module:model/IAMDS/InstanceMeta} meta
 */

Role.prototype['meta'] = undefined;
/**
 * Identifier of the Resource (if any) in other systems
 * @member {Array.<module:model/IAMDS/Aspect>} aspects
 */

Role.prototype['aspects'] = undefined;
/**
 * User defined tags in the form of key:value pair
 * @member {Array.<module:model/IAMDS/Tag>} tags
 */

Role.prototype['tags'] = undefined; // Implement Instance interface:

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
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

Role['TypeEnum'] = {
  /**
   * value: "System"
   * @const
   */
  "System": "System",

  /**
   * value: "Custom"
   * @const
   */
  "Custom": "Custom"
};
var _default = Role;
exports["default"] = _default;