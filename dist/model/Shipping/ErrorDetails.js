"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ErrorDetailsError = _interopRequireDefault(require("./ErrorDetailsError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ErrorDetails model module.
 * @module model/Shipping/ErrorDetails
 * @version 2.4.29
 */
var ErrorDetails = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ErrorDetails</code>.
   * Message Object
   * @alias module:model/Shipping/ErrorDetails
   */
  function ErrorDetails() {
    _classCallCheck(this, ErrorDetails);

    ErrorDetails.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ErrorDetails, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ErrorDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Shipping/ErrorDetails} obj Optional instance to populate.
     * @return {module:model/Shipping/ErrorDetails} The populated <code>ErrorDetails</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ErrorDetails();

        if (data.hasOwnProperty('error')) {
          obj['error'] = _ErrorDetailsError["default"].constructFromObject(data['error']);
        }
      }

      return obj;
    }
  }]);

  return ErrorDetails;
}();
/**
 * @member {module:model/Shipping/ErrorDetailsError} error
 */


ErrorDetails.prototype['error'] = undefined;
var _default = ErrorDetails;
exports["default"] = _default;