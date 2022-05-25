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
 * The Entitlement model module.
 * @module model/IAMDS/Entitlement
 * @version 2.4.36
 */
var Entitlement = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Entitlement</code>.
   * Representation of an Entitlement between an Tenant and a System
   * @alias module:model/IAMDS/Entitlement
   * @implements module:model/IAMDS/Instance
   * @param id {String} Unique identifier for the Object
   */
  function Entitlement(id) {
    (0, _classCallCheck2["default"])(this, Entitlement);

    _Instance["default"].initialize(this, id);

    Entitlement.initialize(this, id);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(Entitlement, null, [{
    key: "initialize",
    value: function initialize(obj, id) {
      obj['system'] = system;
      obj['tenant'] = tenant;
      obj['id'] = id;
    }
    /**
     * Constructs a <code>Entitlement</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IAMDS/Entitlement} obj Optional instance to populate.
     * @return {module:model/IAMDS/Entitlement} The populated <code>Entitlement</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Entitlement();

        _Instance["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('displayName')) {
          obj['displayName'] = _ApiClient["default"].convertToType(data['displayName'], 'String');
        }

        if (data.hasOwnProperty('system')) {
          obj['system'] = _Reference["default"].constructFromObject(data['system']);
        }

        if (data.hasOwnProperty('tenant')) {
          obj['tenant'] = _Reference["default"].constructFromObject(data['tenant']);
        }

        if (data.hasOwnProperty('active')) {
          obj['active'] = _ApiClient["default"].convertToType(data['active'], 'Boolean');
        }

        if (data.hasOwnProperty('features')) {
          obj['features'] = _ApiClient["default"].convertToType(data['features'], [_Reference["default"]]);
        }

        if (data.hasOwnProperty('customGrants')) {
          obj['customGrants'] = _ApiClient["default"].convertToType(data['customGrants'], [_Reference["default"]]);
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
  return Entitlement;
}();
/**
 * Name of the entitlement, used for display purposes
 * @member {String} displayName
 */


Entitlement.prototype['displayName'] = undefined;
/**
 * @member {module:model/IAMDS/Reference} system
 */

Entitlement.prototype['system'] = undefined;
/**
 * @member {module:model/IAMDS/Reference} tenant
 */

Entitlement.prototype['tenant'] = undefined;
/**
 * Status of the entitlement - active or inactive
 * @member {Boolean} active
 * @default true
 */

Entitlement.prototype['active'] = true;
/**
 * List of features associated with the entitlement
 * @member {Array.<module:model/IAMDS/Reference>} features
 */

Entitlement.prototype['features'] = undefined;
/**
 * List of custom grants applicable for the entitlement
 * @member {Array.<module:model/IAMDS/Reference>} customGrants
 */

Entitlement.prototype['customGrants'] = undefined;
/**
 * Unique identifier for the Object
 * @member {String} id
 */

Entitlement.prototype['id'] = undefined;
/**
 * @member {module:model/IAMDS/InstanceMeta} meta
 */

Entitlement.prototype['meta'] = undefined;
/**
 * Identifier of the Resource (if any) in other systems
 * @member {Array.<module:model/IAMDS/Aspect>} aspects
 */

Entitlement.prototype['aspects'] = undefined;
/**
 * User defined tags in the form of key:value pair
 * @member {Array.<module:model/IAMDS/Tag>} tags
 */

Entitlement.prototype['tags'] = undefined; // Implement Instance interface:

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
var _default = Entitlement;
exports["default"] = _default;