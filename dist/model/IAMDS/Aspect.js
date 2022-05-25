"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _ApiClient = _interopRequireDefault(require("../../ApiClient"));

var _Reference = _interopRequireDefault(require("./Reference"));

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
 * The Aspect model module.
 * @module model/IAMDS/Aspect
 * @version 2.4.36
 */
var Aspect = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Aspect</code>.
   * Representation of an Aspect
   * @alias module:model/IAMDS/Aspect
   * @implements module:model/IAMDS/Reference
   * @param identifier {String} Unique Identifier of the object
   */
  function Aspect(identifier) {
    (0, _classCallCheck2["default"])(this, Aspect);

    _Reference["default"].initialize(this, identifier);

    Aspect.initialize(this, identifier);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(Aspect, null, [{
    key: "initialize",
    value: function initialize(obj, identifier) {
      obj['namespace'] = namespace;
      obj['identifier'] = identifier;
    }
    /**
     * Constructs a <code>Aspect</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IAMDS/Aspect} obj Optional instance to populate.
     * @return {module:model/IAMDS/Aspect} The populated <code>Aspect</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Aspect();

        _Reference["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('namespace')) {
          obj['namespace'] = _ApiClient["default"].convertToType(data['namespace'], 'String');
        }

        if (data.hasOwnProperty('identifier')) {
          obj['identifier'] = _ApiClient["default"].convertToType(data['identifier'], 'String');
        }

        if (data.hasOwnProperty('displayName')) {
          obj['displayName'] = _ApiClient["default"].convertToType(data['displayName'], 'String');
        }

        if (data.hasOwnProperty('location')) {
          obj['location'] = _ApiClient["default"].convertToType(data['location'], 'String');
        }
      }

      return obj;
    }
  }]);
  return Aspect;
}();
/**
 * Unique namespace that identifies the System
 * @member {String} namespace
 */


Aspect.prototype['namespace'] = undefined;
/**
 * Unique Identifier of the object
 * @member {String} identifier
 */

Aspect.prototype['identifier'] = undefined;
/**
 * Name of the object, used for display purposes
 * @member {String} displayName
 */

Aspect.prototype['displayName'] = undefined;
/**
 * URL to access the object
 * @member {String} location
 */

Aspect.prototype['location'] = undefined; // Implement Reference interface:

/**
 * Unique Identifier of the object
 * @member {String} identifier
 */

_Reference["default"].prototype['identifier'] = undefined;
/**
 * Name of the object, used for display purposes
 * @member {String} displayName
 */

_Reference["default"].prototype['displayName'] = undefined;
/**
 * URL to access the object
 * @member {String} location
 */

_Reference["default"].prototype['location'] = undefined;
var _default = Aspect;
exports["default"] = _default;