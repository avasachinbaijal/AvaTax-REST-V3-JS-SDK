"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The AgeVerifyRequestAddress model module.
 * @module model/AgeVerifyRequestAddress
 * @version 2.1.5
 */
var AgeVerifyRequestAddress = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AgeVerifyRequestAddress</code>.
   * @alias module:model/AgeVerifyRequestAddress
   */
  function AgeVerifyRequestAddress() {
    _classCallCheck(this, AgeVerifyRequestAddress);

    AgeVerifyRequestAddress.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AgeVerifyRequestAddress, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AgeVerifyRequestAddress</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AgeVerifyRequestAddress} obj Optional instance to populate.
     * @return {module:model/AgeVerifyRequestAddress} The populated <code>AgeVerifyRequestAddress</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AgeVerifyRequestAddress();

        if (data.hasOwnProperty('line1')) {
          obj['line1'] = _ApiClient["default"].convertToType(data['line1'], 'String');
        }

        if (data.hasOwnProperty('city')) {
          obj['city'] = _ApiClient["default"].convertToType(data['city'], 'String');
        }

        if (data.hasOwnProperty('region')) {
          obj['region'] = _ApiClient["default"].convertToType(data['region'], 'String');
        }

        if (data.hasOwnProperty('country')) {
          obj['country'] = _ApiClient["default"].convertToType(data['country'], 'String');
        }

        if (data.hasOwnProperty('postalCode')) {
          obj['postalCode'] = _ApiClient["default"].convertToType(data['postalCode'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AgeVerifyRequestAddress;
}();
/**
 * @member {String} line1
 */


AgeVerifyRequestAddress.prototype['line1'] = undefined;
/**
 * @member {String} city
 */

AgeVerifyRequestAddress.prototype['city'] = undefined;
/**
 * The state code of the address.
 * @member {String} region
 */

AgeVerifyRequestAddress.prototype['region'] = undefined;
/**
 * The country code of the address.
 * @member {module:model/AgeVerifyRequestAddress.CountryEnum} country
 */

AgeVerifyRequestAddress.prototype['country'] = undefined;
/**
 * @member {String} postalCode
 */

AgeVerifyRequestAddress.prototype['postalCode'] = undefined;
/**
 * Allowed values for the <code>country</code> property.
 * @enum {String}
 * @readonly
 */

AgeVerifyRequestAddress['CountryEnum'] = {
  /**
   * value: "US"
   * @const
   */
  "US": "US",

  /**
   * value: "USA"
   * @const
   */
  "USA": "USA"
};
var _default = AgeVerifyRequestAddress;
exports["default"] = _default;