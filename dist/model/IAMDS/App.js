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
 * The App model module.
 * @module model/IAMDS/App
 * @version 2.4.36
 */
var App = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>App</code>.
   * An App represents any software package that intends to interact with Avalara Compliance Cloud
   * @alias module:model/IAMDS/App
   * @implements module:model/IAMDS/Instance
   * @param id {String} Unique identifier for the Object
   */
  function App(id) {
    (0, _classCallCheck2["default"])(this, App);

    _Instance["default"].initialize(this, id);

    App.initialize(this, id);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(App, null, [{
    key: "initialize",
    value: function initialize(obj, id) {
      obj['displayName'] = displayName;
      obj['type'] = type;
      obj['organization'] = organization;
      obj['id'] = id;
    }
    /**
     * Constructs a <code>App</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IAMDS/App} obj Optional instance to populate.
     * @return {module:model/IAMDS/App} The populated <code>App</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new App();

        _Instance["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('displayName')) {
          obj['displayName'] = _ApiClient["default"].convertToType(data['displayName'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('organization')) {
          obj['organization'] = _Reference["default"].constructFromObject(data['organization']);
        }

        if (data.hasOwnProperty('isTenantAgnostic')) {
          obj['isTenantAgnostic'] = _ApiClient["default"].convertToType(data['isTenantAgnostic'], 'Boolean');
        }

        if (data.hasOwnProperty('isOrgAgnostic')) {
          obj['isOrgAgnostic'] = _ApiClient["default"].convertToType(data['isOrgAgnostic'], 'Boolean');
        }

        if (data.hasOwnProperty('tenants')) {
          obj['tenants'] = _ApiClient["default"].convertToType(data['tenants'], [Object]);
        }

        if (data.hasOwnProperty('clientId')) {
          obj['clientId'] = _ApiClient["default"].convertToType(data['clientId'], 'String');
        }

        if (data.hasOwnProperty('redirectUris')) {
          obj['redirectUris'] = _ApiClient["default"].convertToType(data['redirectUris'], ['String']);
        }

        if (data.hasOwnProperty('grants')) {
          obj['grants'] = _ApiClient["default"].convertToType(data['grants'], [_Reference["default"]]);
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
  return App;
}();
/**
 * Name of the App/Service
 * @member {String} displayName
 */


App.prototype['displayName'] = undefined;
/**
 * Type of application
 * @member {module:model/IAMDS/App.TypeEnum} type
 */

App.prototype['type'] = undefined;
/**
 * @member {module:model/IAMDS/Reference} organization
 */

App.prototype['organization'] = undefined;
/**
 * Whether the App is allowed to access information across all Tenants within its Organization
 * @member {Boolean} isTenantAgnostic
 * @default false
 */

App.prototype['isTenantAgnostic'] = false;
/**
 * Whether the App is allowed to access information across all Organizations and Tenants
 * @member {Boolean} isOrgAgnostic
 * @default false
 */

App.prototype['isOrgAgnostic'] = false;
/**
 * @member {Array.<Object>} tenants
 */

App.prototype['tenants'] = undefined;
/**
 * The clientId used for OAuth flows
 * @member {String} clientId
 */

App.prototype['clientId'] = undefined;
/**
 * Defines the registered redirect URIs for the app - determines where tokens are sent after authentication
 * @member {Array.<String>} redirectUris
 */

App.prototype['redirectUris'] = undefined;
/**
 * List of grants associated with the App
 * @member {Array.<module:model/IAMDS/Reference>} grants
 */

App.prototype['grants'] = undefined;
/**
 * Unique identifier for the Object
 * @member {String} id
 */

App.prototype['id'] = undefined;
/**
 * @member {module:model/IAMDS/InstanceMeta} meta
 */

App.prototype['meta'] = undefined;
/**
 * Identifier of the Resource (if any) in other systems
 * @member {Array.<module:model/IAMDS/Aspect>} aspects
 */

App.prototype['aspects'] = undefined;
/**
 * User defined tags in the form of key:value pair
 * @member {Array.<module:model/IAMDS/Tag>} tags
 */

App.prototype['tags'] = undefined; // Implement Instance interface:

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

App['TypeEnum'] = {
  /**
   * value: "spa"
   * @const
   */
  "spa": "spa",

  /**
   * value: "web"
   * @const
   */
  "web": "web",

  /**
   * value: "native"
   * @const
   */
  "native": "native"
};
var _default = App;
exports["default"] = _default;