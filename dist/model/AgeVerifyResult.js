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
 * The AgeVerifyResult model module.
 * @module model/AgeVerifyResult
 * @version 22.1.0
 */
var AgeVerifyResult = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AgeVerifyResult</code>.
   * The Result of a call to the /ageVerification/verify endpoint.
   * @alias module:model/AgeVerifyResult
   */
  function AgeVerifyResult() {
    _classCallCheck(this, AgeVerifyResult);

    AgeVerifyResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AgeVerifyResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AgeVerifyResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AgeVerifyResult} obj Optional instance to populate.
     * @return {module:model/AgeVerifyResult} The populated <code>AgeVerifyResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AgeVerifyResult();

        if (data.hasOwnProperty('isOfAge')) {
          obj['isOfAge'] = _ApiClient["default"].convertToType(data['isOfAge'], 'Boolean');
        }

        if (data.hasOwnProperty('failureCodes')) {
          obj['failureCodes'] = _ApiClient["default"].convertToType(data['failureCodes'], [AgeVerifyResult]);
        }
      }

      return obj;
    }
  }]);

  return AgeVerifyResult;
}();
/**
 * Describes whether the individual meets or exceeds the minimum legal drinking age.
 * @member {Boolean} isOfAge
 */


AgeVerifyResult.prototype['isOfAge'] = undefined;
/**
 * A list of failure codes describing why a *false* age determination was made.
 * @member {Array.<module:model/AgeVerifyResult>} failureCodes
 */

AgeVerifyResult.prototype['failureCodes'] = undefined;
var _default = AgeVerifyResult;
exports["default"] = _default;