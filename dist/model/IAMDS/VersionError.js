"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

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
* Enum class VersionError.
* @enum {}
* @readonly
*/
var VersionError = /*#__PURE__*/function () {
  function VersionError() {
    (0, _classCallCheck2["default"])(this, VersionError);
    (0, _defineProperty2["default"])(this, "too-new", "version-too-new");
    (0, _defineProperty2["default"])(this, "too-old", "version-too-old");
    (0, _defineProperty2["default"])(this, "not-valid", "version-not-valid");
  }

  (0, _createClass2["default"])(VersionError, null, [{
    key: "constructFromObject",
    value:
    /**
    * Returns a <code>VersionError</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/IAMDS/VersionError} The enum <code>VersionError</code> value.
    */
    function constructFromObject(object) {
      return object;
    }
  }]);
  return VersionError;
}();

exports["default"] = VersionError;