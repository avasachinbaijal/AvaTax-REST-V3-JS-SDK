"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ErrorDetailsErrorDetails = _interopRequireDefault(require("./ErrorDetailsErrorDetails"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ErrorDetailsError model module.
 * @module model/ErrorDetailsError
 * @version 2.1.5
 */
var ErrorDetailsError = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ErrorDetailsError</code>.
   * An object holding details about the error.
   * @alias module:model/ErrorDetailsError
   */
  function ErrorDetailsError() {
    _classCallCheck(this, ErrorDetailsError);

    ErrorDetailsError.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ErrorDetailsError, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ErrorDetailsError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ErrorDetailsError} obj Optional instance to populate.
     * @return {module:model/ErrorDetailsError} The populated <code>ErrorDetailsError</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ErrorDetailsError();

        if (data.hasOwnProperty('code')) {
          obj['code'] = _ApiClient["default"].convertToType(data['code'], 'String');
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('details')) {
          obj['details'] = _ErrorDetailsErrorDetails["default"].constructFromObject(data['details']);
        }
      }

      return obj;
    }
  }]);

  return ErrorDetailsError;
}();
/**
 * Name of the error or message.
 * @member {module:model/ErrorDetailsError.CodeEnum} code
 */


ErrorDetailsError.prototype['code'] = undefined;
/**
 * Concise summary of the message, suitable for display in the caption of an alert box.
 * @member {String} message
 */

ErrorDetailsError.prototype['message'] = undefined;
/**
 * @member {module:model/ErrorDetailsErrorDetails} details
 */

ErrorDetailsError.prototype['details'] = undefined;
/**
 * Allowed values for the <code>code</code> property.
 * @enum {String}
 * @readonly
 */

ErrorDetailsError['CodeEnum'] = {
  /**
   * value: "AuthenticationException"
   * @const
   */
  "AuthenticationException": "AuthenticationException",

  /**
   * value: "SubscriptionRequired"
   * @const
   */
  "SubscriptionRequired": "SubscriptionRequired",

  /**
   * value: "ServerConfiguration"
   * @const
   */
  "ServerConfiguration": "ServerConfiguration",

  /**
   * value: "InvalidAddress"
   * @const
   */
  "InvalidAddress": "InvalidAddress",

  /**
   * value: "EntityNotFoundError"
   * @const
   */
  "EntityNotFoundError": "EntityNotFoundError"
};
var _default = ErrorDetailsError;
exports["default"] = _default;