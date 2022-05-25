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
 * The Resource model module.
 * @module model/IAMDS/Resource
 * @version 2.4.36
 */
var Resource = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Resource</code>.
   * Representation of a Resource belonging to a System
   * @alias module:model/IAMDS/Resource
   * @implements module:model/IAMDS/Instance
   * @param id {String} Unique identifier for the Object
   */
  function Resource(id) {
    (0, _classCallCheck2["default"])(this, Resource);

    _Instance["default"].initialize(this, id);

    Resource.initialize(this, id);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(Resource, null, [{
    key: "initialize",
    value: function initialize(obj, id) {
      obj['namespace'] = namespace;
      obj['system'] = system;
      obj['id'] = id;
    }
    /**
     * Constructs a <code>Resource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IAMDS/Resource} obj Optional instance to populate.
     * @return {module:model/IAMDS/Resource} The populated <code>Resource</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Resource();

        _Instance["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('namespace')) {
          obj['namespace'] = _ApiClient["default"].convertToType(data['namespace'], 'String');
        }

        if (data.hasOwnProperty('displayName')) {
          obj['displayName'] = _ApiClient["default"].convertToType(data['displayName'], 'String');
        }

        if (data.hasOwnProperty('system')) {
          obj['system'] = _Reference["default"].constructFromObject(data['system']);
        }

        if (data.hasOwnProperty('properties')) {
          obj['properties'] = _ApiClient["default"].convertToType(data['properties'], ['String']);
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
  return Resource;
}();
/**
 * The resource name space used to organize permissions. Must be unique within the System
 * @member {String} namespace
 */


Resource.prototype['namespace'] = undefined;
/**
 * Name of the resource. Used for display purposes
 * @member {String} displayName
 */

Resource.prototype['displayName'] = undefined;
/**
 * @member {module:model/IAMDS/Reference} system
 */

Resource.prototype['system'] = undefined;
/**
 * Properties of the resource that are accessible to define conditions in Grants
 * @member {Array.<String>} properties
 */

Resource.prototype['properties'] = undefined;
/**
 * Unique identifier for the Object
 * @member {String} id
 */

Resource.prototype['id'] = undefined;
/**
 * @member {module:model/IAMDS/InstanceMeta} meta
 */

Resource.prototype['meta'] = undefined;
/**
 * Identifier of the Resource (if any) in other systems
 * @member {Array.<module:model/IAMDS/Aspect>} aspects
 */

Resource.prototype['aspects'] = undefined;
/**
 * User defined tags in the form of key:value pair
 * @member {Array.<module:model/IAMDS/Tag>} tags
 */

Resource.prototype['tags'] = undefined; // Implement Instance interface:

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
var _default = Resource;
exports["default"] = _default;