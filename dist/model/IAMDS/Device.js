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
 * The Device model module.
 * @module model/IAMDS/Device
 * @version 2.4.36
 */
var Device = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Device</code>.
   * Representation of a Device
   * @alias module:model/IAMDS/Device
   * @implements module:model/IAMDS/Instance
   * @param id {String} Unique identifier for the Object
   */
  function Device(id) {
    (0, _classCallCheck2["default"])(this, Device);

    _Instance["default"].initialize(this, id);

    Device.initialize(this, id);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(Device, null, [{
    key: "initialize",
    value: function initialize(obj, id) {
      obj['displayName'] = displayName;
      obj['tenant'] = tenant;
      obj['identity'] = identity;
      obj['id'] = id;
    }
    /**
     * Constructs a <code>Device</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IAMDS/Device} obj Optional instance to populate.
     * @return {module:model/IAMDS/Device} The populated <code>Device</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Device();

        _Instance["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('displayName')) {
          obj['displayName'] = _ApiClient["default"].convertToType(data['displayName'], 'String');
        }

        if (data.hasOwnProperty('tenant')) {
          obj['tenant'] = _Reference["default"].constructFromObject(data['tenant']);
        }

        if (data.hasOwnProperty('identity')) {
          obj['identity'] = _ApiClient["default"].convertToType(data['identity'], 'String');
        }

        if (data.hasOwnProperty('active')) {
          obj['active'] = _ApiClient["default"].convertToType(data['active'], 'Boolean');
        }

        if (data.hasOwnProperty('grants')) {
          obj['grants'] = _ApiClient["default"].convertToType(data['grants'], [_Reference["default"]]);
        }

        if (data.hasOwnProperty('groups')) {
          obj['groups'] = _ApiClient["default"].convertToType(data['groups'], [_Reference["default"]]);
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
  return Device;
}();
/**
 * Name of the Device, used for display purposes
 * @member {String} displayName
 */


Device.prototype['displayName'] = undefined;
/**
 * @member {module:model/IAMDS/Reference} tenant
 */

Device.prototype['tenant'] = undefined;
/**
 * Identity of the device, for example, a public X.509 certificate
 * @member {String} identity
 */

Device.prototype['identity'] = undefined;
/**
 * A Boolean value indicating the Device's administrative status
 * @member {Boolean} active
 */

Device.prototype['active'] = undefined;
/**
 * List of grants associated with the Device
 * @member {Array.<module:model/IAMDS/Reference>} grants
 */

Device.prototype['grants'] = undefined;
/**
 * List of groups to which the Device belongs
 * @member {Array.<module:model/IAMDS/Reference>} groups
 */

Device.prototype['groups'] = undefined;
/**
 * Unique identifier for the Object
 * @member {String} id
 */

Device.prototype['id'] = undefined;
/**
 * @member {module:model/IAMDS/InstanceMeta} meta
 */

Device.prototype['meta'] = undefined;
/**
 * Identifier of the Resource (if any) in other systems
 * @member {Array.<module:model/IAMDS/Aspect>} aspects
 */

Device.prototype['aspects'] = undefined;
/**
 * User defined tags in the form of key:value pair
 * @member {Array.<module:model/IAMDS/Tag>} tags
 */

Device.prototype['tags'] = undefined; // Implement Instance interface:

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
var _default = Device;
exports["default"] = _default;