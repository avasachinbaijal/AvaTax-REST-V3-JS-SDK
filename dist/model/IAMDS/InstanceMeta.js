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
 * The InstanceMeta model module.
 * @module model/IAMDS/InstanceMeta
 * @version 2.4.36
 */
var InstanceMeta = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InstanceMeta</code>.
   * Meta data associated with this object. This information is automatically inserted by the service.
   * @alias module:model/IAMDS/InstanceMeta
   */
  function InstanceMeta() {
    (0, _classCallCheck2["default"])(this, InstanceMeta);
    InstanceMeta.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(InstanceMeta, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InstanceMeta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IAMDS/InstanceMeta} obj Optional instance to populate.
     * @return {module:model/IAMDS/InstanceMeta} The populated <code>InstanceMeta</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InstanceMeta();

        if (data.hasOwnProperty('created')) {
          obj['created'] = _ApiClient["default"].convertToType(data['created'], 'Date');
        }

        if (data.hasOwnProperty('createdBy')) {
          obj['createdBy'] = _ApiClient["default"].convertToType(data['createdBy'], 'String');
        }

        if (data.hasOwnProperty('lastModified')) {
          obj['lastModified'] = _ApiClient["default"].convertToType(data['lastModified'], 'Date');
        }

        if (data.hasOwnProperty('modifiedBy')) {
          obj['modifiedBy'] = _ApiClient["default"].convertToType(data['modifiedBy'], 'String');
        }

        if (data.hasOwnProperty('location')) {
          obj['location'] = _ApiClient["default"].convertToType(data['location'], 'String');
        }

        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'String');
        }
      }

      return obj;
    }
  }]);
  return InstanceMeta;
}();
/**
 * Date and time information when this object was created
 * @member {Date} created
 */


InstanceMeta.prototype['created'] = undefined;
/**
 * Id of the user/app that created this object
 * @member {String} createdBy
 */

InstanceMeta.prototype['createdBy'] = undefined;
/**
 * Date and time information when this object was last modified
 * @member {Date} lastModified
 */

InstanceMeta.prototype['lastModified'] = undefined;
/**
 * Id of the user/app that last modified this object
 * @member {String} modifiedBy
 */

InstanceMeta.prototype['modifiedBy'] = undefined;
/**
 * The URI of the Resource being returned
 * @member {String} location
 */

InstanceMeta.prototype['location'] = undefined;
/**
 * The version of the resource being returned in Etag format
 * @member {String} version
 */

InstanceMeta.prototype['version'] = undefined;
var _default = InstanceMeta;
exports["default"] = _default;