"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AgeVerifyRequestAddress = _interopRequireDefault(require("./AgeVerifyRequestAddress"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The AgeVerifyRequest model module.
 * @module model/AgeVerifyRequest
 * @version 22.1.0
 */
var AgeVerifyRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AgeVerifyRequest</code>.
   * The Request for the /ageVerification/verify endpoint. Describes information about the person whose age is being verified.
   * @alias module:model/AgeVerifyRequest
   */
  function AgeVerifyRequest() {
    _classCallCheck(this, AgeVerifyRequest);

    AgeVerifyRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AgeVerifyRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AgeVerifyRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AgeVerifyRequest} obj Optional instance to populate.
     * @return {module:model/AgeVerifyRequest} The populated <code>AgeVerifyRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AgeVerifyRequest();

        if (data.hasOwnProperty('firstName')) {
          obj['firstName'] = _ApiClient["default"].convertToType(data['firstName'], 'String');
        }

        if (data.hasOwnProperty('lastName')) {
          obj['lastName'] = _ApiClient["default"].convertToType(data['lastName'], 'String');
        }

        if (data.hasOwnProperty('address')) {
          obj['address'] = _AgeVerifyRequestAddress["default"].constructFromObject(data['address']);
        }

        if (data.hasOwnProperty('DOB')) {
          obj['DOB'] = _ApiClient["default"].convertToType(data['DOB'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AgeVerifyRequest;
}();
/**
 * @member {String} firstName
 */


AgeVerifyRequest.prototype['firstName'] = undefined;
/**
 * @member {String} lastName
 */

AgeVerifyRequest.prototype['lastName'] = undefined;
/**
 * @member {module:model/AgeVerifyRequestAddress} address
 */

AgeVerifyRequest.prototype['address'] = undefined;
/**
 * The value should be ISO-8601 compliant (e.g. 2020-07-21).
 * @member {String} DOB
 */

AgeVerifyRequest.prototype['DOB'] = undefined;
var _default = AgeVerifyRequest;
exports["default"] = _default;