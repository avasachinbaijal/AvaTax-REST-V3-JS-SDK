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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* Enum class AgeVerifyFailureCode.
* @enum {}
* @readonly
*/
var AgeVerifyFailureCode = /*#__PURE__*/function () {
  function AgeVerifyFailureCode() {
    _classCallCheck(this, AgeVerifyFailureCode);

    _defineProperty(this, "not_found", "not_found");

    _defineProperty(this, "dob_unverifiable", "dob_unverifiable");

    _defineProperty(this, "under_age", "under_age");

    _defineProperty(this, "suspected_fraud", "suspected_fraud");

    _defineProperty(this, "deceased", "deceased");

    _defineProperty(this, "unknown_error", "unknown_error");
  }

  _createClass(AgeVerifyFailureCode, null, [{
    key: "constructFromObject",
    value:
    /**
    * Returns a <code>AgeVerifyFailureCode</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/AgeVerifyFailureCode} The enum <code>AgeVerifyFailureCode</code> value.
    */
    function constructFromObject(object) {
      return object;
    }
  }]);

  return AgeVerifyFailureCode;
}();

exports["default"] = AgeVerifyFailureCode;