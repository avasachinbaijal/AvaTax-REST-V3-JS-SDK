"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _superagent = _interopRequireDefault(require("superagent"));

var _querystring = _interopRequireDefault(require("querystring"));

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
 * @version    22.1.0
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

/**
* @module ApiClient
* @version 22.1.0
*/

/**
* Manages low level client-server communications, parameter marshalling, etc. There should not be any need for an
* application to use this class directly - the *Api and model classes provide the public API for the service. The
* contents of this file should be regarded as internal but are documented for completeness.
* @alias module:ApiClient
* @class
*/
var ApiClient = /*#__PURE__*/function () {
  /**
   * Construct a new ApiClient 
   * 
   * @constructor
   * @param {Object} configuration Object with various configuration options required by the ApiClient.
   * @param {string} configuration.appName      Specify the name of your application here.  Should not contain any semicolons.
   * @param {string} configuration.appVersion   Specify the version number of your application here.  Should not contain any semicolons.
   * @param {string} configuration.machineName  Specify the machine name of the machine on which this code is executing here.  Should not contain any semicolons.
   * @param {string} configuration.environment  Indicates which server to use; acceptable values are "sandbox" or "production", or the full URL of your AvaTax instance.
   * @param {number} configuration.timeout      Specify the timeout for AvaTax requests; default value 20 minutes.
   * @param {string} configuration.username        The username for your AvaTax user account
   * @param {string} configuration.password        The password for your AvaTax user account
   * @param {string} configuration.bearerToken     The OAuth 2.0 token provided by Avalara Identity
   * @param {string} configuration.clientId        The ClientId used for the OAuth2 Client Credentials flow
   * @param {string} configuration.clientSecret    The ClientSecret used for the OAuth2 Client Credentials flow
   * @param {string} configuration.testBasePath    The Test Base Path to be used for local development for calling the Avalara APIs 
   * @param {string} configuration.testTokenUrl    The Test Token URL to be used for local development to invoke the OAuth2 flow
   */
  function ApiClient(configuration) {
    (0, _classCallCheck2["default"])(this, ApiClient);

    if (!configuration) {
      throw new Error('Configuration object is required.');
    }
    /**
    * The base URL against which to resolve every API call's (relative) path.
    * @type {String}
    */


    this.baseUrl = '';
    /**
     * The authentication methods to be included for all API calls.
     * @type {Array.<String>}
     */

    this.authentications = {
      'BasicAuth': {
        type: 'basic'
      },
      'Bearer': {
        type: 'apiKey',
        'in': 'header',
        name: 'Authorization'
      }
    };
    /**
     * The default HTTP headers to be included for all API calls.
     * @type {Array.<String>}
     * @default {}
     */

    this.defaultHeaders = {};
    /**
     * The default HTTP timeout for all API calls.
     * @type {Number}
     * @default 60000
     */

    this.timeout = 60000;
    /**
     * If set to false an additional timestamp parameter is added to all API GET calls to
     * prevent browser caching
     * @type {Boolean}
     * @default true
     */

    this.cache = true;
    /**
     * If set to true, the client will save the cookies from each server
     * response, and return them in the next request.
     * @default false
     */

    this.enableCookies = false;
    /*
     * Used to save and return cookies in a node.js (non-browser) setting,
     * if this.enableCookies is set to true.
     */

    if (typeof window === 'undefined') {
      this.agent = new _superagent["default"].agent();
    }
    /*
     * Allow user to override superagent agent
     */


    this.requestAgent = null;
    /*
     * Allow user to add superagent plugins
     */

    this.plugins = null;
    this.accessTokenMap = new Map(); // Setup configuration options for the ApiClient.

    var appName = configuration.appName,
        appVersion = configuration.appVersion,
        bearerToken = configuration.bearerToken,
        clientId = configuration.clientId,
        clientSecret = configuration.clientSecret,
        machineName = configuration.machineName,
        environment = configuration.environment,
        timeout = configuration.timeout,
        username = configuration.username,
        password = configuration.password,
        testBasePath = configuration.testBasePath,
        testTokenUrl = configuration.testTokenUrl;
    this.appName = appName;
    this.appVersion = appVersion;
    this.machineName = machineName;
    this.timeout = timeout;
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.username = username;
    this.password = password;
    this.bearerToken = bearerToken;
    this.setBasePath(environment, testBasePath);
    this.setTokenUrl(environment, testTokenUrl);
  }

  (0, _createClass2["default"])(ApiClient, [{
    key: "setBasePath",
    value: function setBasePath(environment, testBasePath) {
      if (environment === 'sandbox') {
        this.baseUrl = 'https://sandbox-rest.avatax.com';
      } else if (environment === 'production') {
        this.baseUrl = 'https://rest.avatax.com';
      } else if (environment === 'test') {
        if (!testBasePath) {
          throw new Error('TestBasePath must be configured to run in test environment mode.');
        }

        this.baseUrl = testBasePath;
      } else {
        throw new Error('Environment not configured correctly, Acceptable values are "production", "sandbox", and "test".');
      }
    }
  }, {
    key: "setTokenUrl",
    value: function setTokenUrl(environment, testTokenUrl) {
      var prodTokenUrl = 'https://TO-BE-SET';
      var sandboxTokenUrl = 'https://TO-BE-SET';

      switch (environment) {
        case 'production':
          this.tokenUrl = prodTokenUrl;
          break;

        case 'sandbox':
          this.tokenUrl = sandboxTokenUrl;
          break;

        case 'test':
          this.tokenUrl = testTokenUrl ? testTokenUrl : prodTokenUrl;
          break;
      }
    }
    /**
    * Returns a string representation for an actual parameter.
    * @param param The actual parameter.
    * @returns {String} The string representation of <code>param</code>.
    */

  }, {
    key: "paramToString",
    value: function paramToString(param) {
      if (param == undefined || param == null) {
        return '';
      }

      if (param instanceof Date) {
        return param.toJSON();
      }

      if (ApiClient.canBeJsonified(param)) {
        return JSON.stringify(param);
      }

      return param.toString();
    }
    /**
    * Returns a boolean indicating if the parameter could be JSON.stringified
    * @param param The actual parameter
    * @returns {Boolean} Flag indicating if <code>param</code> can be JSON.stringified
    */

  }, {
    key: "buildUrl",
    value:
    /**
     * Builds full URL by appending the given path to the base URL and replacing path parameter place-holders with parameter values.
     * NOTE: query parameters are not handled here.
     * @param {String} path The path to append to the base URL.
     * @param {Object} pathParams The parameter values to append.
     * @param {String} apiBasePath Base path defined in the path, operation level to override the default one
     * @returns {String} The encoded path with parameter values substituted.
     */
    function buildUrl(path, pathParams, apiBasePath) {
      var _this = this;

      if (!path.match(/^\//)) {
        path = '/' + path;
      }

      var url = this.baseUrl + path; // use API (operation, path) base path if defined

      if (apiBasePath !== null && apiBasePath !== undefined) {
        url = apiBasePath + path;
      }

      url = url.replace(/\{([\w-\.]+)\}/g, function (fullMatch, key) {
        var value;

        if (pathParams.hasOwnProperty(key)) {
          value = _this.paramToString(pathParams[key]);
        } else {
          value = fullMatch;
        }

        return encodeURIComponent(value);
      });
      return url;
    }
    /**
    * Checks whether the given content type represents JSON.<br>
    * JSON content type examples:<br>
    * <ul>
    * <li>application/json</li>
    * <li>application/json; charset=UTF8</li>
    * <li>APPLICATION/JSON</li>
    * </ul>
    * @param {String} contentType The MIME content type to check.
    * @returns {Boolean} <code>true</code> if <code>contentType</code> represents JSON, otherwise <code>false</code>.
    */

  }, {
    key: "isJsonMime",
    value: function isJsonMime(contentType) {
      return Boolean(contentType != null && contentType.match(/^application\/json(;.*)?$/i));
    }
    /**
    * Chooses a content type from the given array, with JSON preferred; i.e. return JSON if included, otherwise return the first.
    * @param {Array.<String>} contentTypes
    * @returns {String} The chosen content type, preferring JSON.
    */

  }, {
    key: "jsonPreferredMime",
    value: function jsonPreferredMime(contentTypes) {
      for (var i = 0; i < contentTypes.length; i++) {
        if (this.isJsonMime(contentTypes[i])) {
          return contentTypes[i];
        }
      }

      return contentTypes[0];
    }
    /**
    * Checks whether the given parameter value represents file-like content.
    * @param param The parameter to check.
    * @returns {Boolean} <code>true</code> if <code>param</code> represents a file.
    */

  }, {
    key: "isFileParam",
    value: function isFileParam(param) {
      // fs.ReadStream in Node.js and Electron (but not in runtime like browserify)
      if (typeof require === 'function') {
        var fs;

        try {
          fs = require('fs');
        } catch (err) {}

        if (fs && fs.ReadStream && param instanceof fs.ReadStream) {
          return true;
        }
      } // Buffer in Node.js


      if (typeof Buffer === 'function' && param instanceof Buffer) {
        return true;
      } // Blob in browser


      if (typeof Blob === 'function' && param instanceof Blob) {
        return true;
      } // File in browser (it seems File object is also instance of Blob, but keep this for safe)


      if (typeof File === 'function' && param instanceof File) {
        return true;
      }

      return false;
    }
    /**
    * Normalizes parameter values:
    * <ul>
    * <li>remove nils</li>
    * <li>keep files and arrays</li>
    * <li>format to string with `paramToString` for other cases</li>
    * </ul>
    * @param {Object.<String, Object>} params The parameters as object properties.
    * @returns {Object.<String, Object>} normalized parameters.
    */

  }, {
    key: "normalizeParams",
    value: function normalizeParams(params) {
      var newParams = {};

      for (var key in params) {
        if (params.hasOwnProperty(key) && params[key] != undefined && params[key] != null) {
          var value = params[key];

          if (this.isFileParam(value) || Array.isArray(value)) {
            newParams[key] = value;
          } else {
            newParams[key] = this.paramToString(value);
          }
        }
      }

      return newParams;
    }
    /**
    * Builds a string representation of an array-type actual parameter, according to the given collection format.
    * @param {Array} param An array parameter.
    * @param {module:ApiClient.CollectionFormatEnum} collectionFormat The array element separator strategy.
    * @returns {String|Array} A string representation of the supplied collection, using the specified delimiter. Returns
    * <code>param</code> as is if <code>collectionFormat</code> is <code>multi</code>.
    */

  }, {
    key: "buildCollectionParam",
    value: function buildCollectionParam(param, collectionFormat) {
      if (param == null) {
        return null;
      }

      switch (collectionFormat) {
        case 'csv':
          return param.map(this.paramToString, this).join(',');

        case 'ssv':
          return param.map(this.paramToString, this).join(' ');

        case 'tsv':
          return param.map(this.paramToString, this).join('\t');

        case 'pipes':
          return param.map(this.paramToString, this).join('|');

        case 'multi':
          //return the array directly as SuperAgent will handle it as expected
          return param.map(this.paramToString, this);

        case 'passthrough':
          return param;

        default:
          throw new Error('Unknown collection format: ' + collectionFormat);
      }
    }
    /**
    * Applies authentication headers to the request.
    * @param {Object} request The request object created by a <code>superagent()</code> call.
    * @param {Array.<String>} authNames An array of authentication method names.
    * @param {String} requiredScopes A space delimited string of all the required OAuth2 scopes for a given API call.
    */

  }, {
    key: "applyAuthToRequest",
    value: function () {
      var _applyAuthToRequest = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(request, authNames, requiredScopes) {
        var scopes, accessToken;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(authNames.indexOf('OAuth') >= 0 && this.clientId && this.clientSecret)) {
                  _context.next = 10;
                  break;
                }

                scopes = this.standardizeScopes(requiredScopes);
                accessToken = this.getOAuthAccessToken(scopes);

                if (accessToken) {
                  _context.next = 7;
                  break;
                }

                _context.next = 6;
                return this.updateOAuthAccessToken(scopes);

              case 6:
                accessToken = this.getOAuthAccessToken(scopes);

              case 7:
                request.set({
                  'Authorization': "Bearer ".concat(accessToken)
                });
                _context.next = 11;
                break;

              case 10:
                if (this.username != null && this.password != null) {
                  request.set({
                    'Authorization': this.createBasicAuthHeader(this.username, this.password)
                  });
                } else if (this.bearerToken != null) {
                  request.set({
                    'Authorization': "Bearer ".concat(this.bearerToken)
                  });
                }

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function applyAuthToRequest(_x, _x2, _x3) {
        return _applyAuthToRequest.apply(this, arguments);
      }

      return applyAuthToRequest;
    }()
  }, {
    key: "getOAuthAccessToken",
    value: function getOAuthAccessToken(scopes) {
      return this.accessTokenMap.get(scopes);
    }
  }, {
    key: "updateOAuthAccessToken",
    value: function () {
      var _updateOAuthAccessToken = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(scopes, accessToken) {
        var currentAccessToken, res, data;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                currentAccessToken = this.getOAuthAccessToken(scopes); // If the current access token is not set, or the cached token equals the token passed in 
                // (which will only be passed in, in the event the token failed due to being invalid or some other failure scenario)

                if (!(!currentAccessToken || currentAccessToken === accessToken)) {
                  _context2.next = 13;
                  break;
                }

                _context2.prev = 2;
                _context2.next = 5;
                return this.buildOAuthRequest(scopes);

              case 5:
                res = _context2.sent;
                data = JSON.parse(res.text);
                this.accessTokenMap.set(scopes, data['access_token']);
                _context2.next = 13;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](2);
                throw new Error("OAuth2 Token retrieval failed. Error: ".concat(_context2.t0));

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[2, 10]]);
      }));

      function updateOAuthAccessToken(_x4, _x5) {
        return _updateOAuthAccessToken.apply(this, arguments);
      }

      return updateOAuthAccessToken;
    }()
  }, {
    key: "buildOAuthRequest",
    value: function buildOAuthRequest(scopes) {
      var request = (0, _superagent["default"])('POST', this.tokenUrl);
      request.query({
        'grant_type': 'client_credentials',
        scope: scopes
      });
      request.set('Authorization', this.createBasicAuthHeader(this.clientId, this.clientSecret));
      request.type('application/x-www-form-urlencoded');
      request.accept('application/json');
      return request;
    }
  }, {
    key: "standardizeScopes",
    value: function standardizeScopes(requiredScopes) {
      var strArr = requiredScopes.split(' ');
      strArr.sort();
      return strArr.join(' ');
    }
    /**
     * Deserializes an HTTP response body into a value of the specified type.
     * @param {Object} response A SuperAgent response object.
     * @param {(String|Array.<String>|Object.<String, Object>|Function)} returnType The type to return. Pass a string for simple types
     * or the constructor function for a complex type. Pass an array containing the type name to return an array of that type. To
     * return an object, pass an object with one property whose name is the key type and whose value is the corresponding value type:
     * all properties on <code>data<code> will be converted to this type.
     * @returns A value of the specified type.
     */

  }, {
    key: "deserialize",
    value: function deserialize(response, returnType) {
      if (response == null || returnType == null || response.status == 204) {
        return null;
      } // Rely on SuperAgent for parsing response body.
      // See http://visionmedia.github.io/superagent/#parsing-response-bodies


      var data = response.body;

      if (data == null || (0, _typeof2["default"])(data) === 'object' && typeof data.length === 'undefined' && !Object.keys(data).length) {
        // SuperAgent does not always produce a body; use the unparsed response as a fallback
        data = response.text;
      }

      return ApiClient.convertToType(data, returnType);
    }
    /**
     * Callback function to receive the result of the operation.
     * @callback module:ApiClient~callApiCallback
     * @param {String} error Error message, if any.
     * @param data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Invokes the REST service using the supplied settings and parameters.
     * @param {String} path The base URL to invoke.
     * @param {String} httpMethod The HTTP method to use.
     * @param {Object.<String, String>} pathParams A map of path parameters and their values.
     * @param {Object.<String, Object>} queryParams A map of query parameters and their values.
     * @param {Object.<String, Object>} headerParams A map of header parameters and their values.
     * @param {Object.<String, Object>} formParams A map of form parameters and their values.
     * @param {Object} bodyParam The value to pass as the request body.
     * @param {Array.<String>} authNames An array of authentication type names.
     * @param {Array.<String>} contentTypes An array of request MIME types.
     * @param {Array.<String>} accepts An array of acceptable response MIME types.
     * @param {(String|Array|ObjectFunction)} returnType The required type to return; can be a string for simple types or the
     * constructor for a complex type.
     * @param {String} apiBasePath base path defined in the operation/path level to override the default one
     * @param {module:ApiClient~callApiCallback} callback The callback function.
     * @returns {Object} The SuperAgent request object.
     */

  }, {
    key: "callApi",
    value: function () {
      var _callApi = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(path, httpMethod, pathParams, queryParams, headerParams, formParams, bodyParam, authNames, contentTypes, accepts, returnType, apiBasePath, callback, requiredScopes) {
        var _this2 = this;

        var url, request, index, contentType, _formParams, key, _formParamsValue, accept;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                url = this.buildUrl(path, pathParams, apiBasePath);
                request = (0, _superagent["default"])(httpMethod, url);

                if (this.plugins !== null) {
                  for (index in this.plugins) {
                    if (this.plugins.hasOwnProperty(index)) {
                      request.use(this.plugins[index]);
                    }
                  }
                }

                _context3.next = 5;
                return this.applyAuthToRequest(request, authNames, requiredScopes);

              case 5:
                // set query parameters
                if (httpMethod.toUpperCase() === 'GET' && this.cache === false) {
                  queryParams['_'] = new Date().getTime();
                }

                request.query(this.normalizeParams(queryParams)); // set header parameters

                request.set({
                  'X-Avalara-Client': "".concat(this.appName, "; ").concat(this.appVersion, "; JavascriptSdk; ").concat(this.sdkVersion, "; ").concat(this.machineName)
                });
                request.set(this.defaultHeaders).set(this.normalizeParams(headerParams)); // set requestAgent if it is set by user

                if (this.requestAgent) {
                  request.agent(this.requestAgent);
                } // set request timeout


                request.timeout(this.timeout);
                contentType = this.jsonPreferredMime(contentTypes);

                if (contentType) {
                  // Issue with superagent and multipart/form-data (https://github.com/visionmedia/superagent/issues/746)
                  if (contentType != 'multipart/form-data') {
                    request.type(contentType);
                  }
                }

                if (contentType === 'application/x-www-form-urlencoded') {
                  request.send(_querystring["default"].stringify(this.normalizeParams(formParams)));
                } else if (contentType == 'multipart/form-data') {
                  _formParams = this.normalizeParams(formParams);

                  for (key in _formParams) {
                    if (_formParams.hasOwnProperty(key)) {
                      _formParamsValue = _formParams[key];

                      if (this.isFileParam(_formParamsValue)) {
                        // file field
                        request.attach(key, _formParamsValue);
                      } else if (Array.isArray(_formParamsValue) && _formParamsValue.length && this.isFileParam(_formParamsValue[0])) {
                        // multiple files
                        _formParamsValue.forEach(function (file) {
                          return request.attach(key, file);
                        });
                      } else {
                        request.field(key, _formParamsValue);
                      }
                    }
                  }
                } else if (bodyParam !== null && bodyParam !== undefined) {
                  if (!request.header['Content-Type']) {
                    request.type('application/json');
                  }

                  request.send(bodyParam);
                }

                accept = this.jsonPreferredMime(accepts);

                if (accept) {
                  request.accept(accept);
                }

                if (returnType === 'Blob') {
                  request.responseType('blob');
                } else if (returnType === 'String') {
                  request.responseType('string');
                } // Attach previously saved cookies, if enabled


                if (this.enableCookies) {
                  if (typeof window === 'undefined') {
                    this.agent._attachCookies(request);
                  } else {
                    request.withCredentials();
                  }
                }

                request.end(function (error, response) {
                  if (callback) {
                    var data = null;

                    if (!error) {
                      try {
                        data = _this2.deserialize(response, returnType);

                        if (_this2.enableCookies && typeof window === 'undefined') {
                          _this2.agent._saveCookies(response);
                        }
                      } catch (err) {
                        error = err;
                      }
                    }

                    callback(error, data, response);
                  }
                });
                return _context3.abrupt("return", request);

              case 20:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function callApi(_x6, _x7, _x8, _x9, _x10, _x11, _x12, _x13, _x14, _x15, _x16, _x17, _x18, _x19) {
        return _callApi.apply(this, arguments);
      }

      return callApi;
    }()
    /**
    * Parses an ISO-8601 string representation or epoch representation of a date value.
    * @param {String} str The date value as a string.
    * @returns {Date} The parsed date object.
    */

  }, {
    key: "hostSettings",
    value:
    /**
      * Gets an array of host settings
      * @returns An array of host settings
      */
    function hostSettings() {
      return [{
        'url': "",
        'description': "No description provided"
      }];
    }
  }, {
    key: "getBasePathFromSettings",
    value: function getBasePathFromSettings(index) {
      var variables = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var servers = this.hostSettings(); // check array index out of bound

      if (index < 0 || index >= servers.length) {
        throw new Error("Invalid index " + index + " when selecting the host settings. Must be less than " + servers.length);
      }

      var server = servers[index];
      var url = server['url']; // go through variable and assign a value

      for (var variable_name in server['variables']) {
        if (variable_name in variables) {
          var variable = server['variables'][variable_name];

          if (!('enum_values' in variable) || variable['enum_values'].includes(variables[variable_name])) {
            url = url.replace("{" + variable_name + "}", variables[variable_name]);
          } else {
            throw new Error("The variable `" + variable_name + "` in the host URL has invalid value " + variables[variable_name] + ". Must be " + server['variables'][variable_name]['enum_values'] + ".");
          }
        } else {
          // use default value
          url = url.replace("{" + variable_name + "}", server['variables'][variable_name]['default_value']);
        }
      }

      return url;
    }
    /**
    * Constructs a new map or array model from REST data.
    * @param data {Object|Array} The REST data.
    * @param obj {Object|Array} The target object or array.
    */

  }, {
    key: "createBasicAuthHeader",
    value: function createBasicAuthHeader(account, licenseKey) {
      var base64Encoded = Buffer.from("".concat(account, ":").concat(licenseKey)).toString('base64');
      return "Basic ".concat(base64Encoded);
    }
  }, {
    key: "withTimeout",
    value: function withTimeout(msecs, promise) {
      return new Promise(function (resolve, reject) {
        var timer = setTimeout(function () {
          reject(new Error('timeout'));
        }, msecs);
        promise.then(function (value) {
          clearTimeout(timer);
          resolve(value);
        })["catch"](function (reason) {
          clearTimeout(timer);
          reject(reason);
        });
      });
    }
  }], [{
    key: "canBeJsonified",
    value: function canBeJsonified(str) {
      if (typeof str !== 'string' && (0, _typeof2["default"])(str) !== 'object') return false;

      try {
        var type = str.toString();
        return type === '[object Object]' || type === '[object Array]';
      } catch (err) {
        return false;
      }
    }
  }, {
    key: "parseDate",
    value: function parseDate(str) {
      if (isNaN(str)) {
        return new Date(str.replace(/(\d)(T)(\d)/i, '$1 $3'));
      }

      return new Date(+str);
    }
    /**
    * Converts a value to the specified type.
    * @param {(String|Object)} data The data to convert, as a string or object.
    * @param {(String|Array.<String>|Object.<String, Object>|Function)} type The type to return. Pass a string for simple types
    * or the constructor function for a complex type. Pass an array containing the type name to return an array of that type. To
    * return an object, pass an object with one property whose name is the key type and whose value is the corresponding value type:
    * all properties on <code>data<code> will be converted to this type.
    * @returns An instance of the specified type or null or undefined if data is null or undefined.
    */

  }, {
    key: "convertToType",
    value: function convertToType(data, type) {
      if (data === null || data === undefined) return data;

      switch (type) {
        case 'Boolean':
          return Boolean(data);

        case 'Integer':
          return parseInt(data, 10);

        case 'Number':
          return parseFloat(data);

        case 'String':
          return String(data);

        case 'Date':
          return ApiClient.parseDate(String(data));

        case 'Blob':
          return data;

        default:
          if (type === Object) {
            // generic object, return directly
            return data;
          } else if (typeof type.constructFromObject === 'function') {
            // for model type like User and enum class
            return type.constructFromObject(data);
          } else if (Array.isArray(type)) {
            // for array type like: ['String']
            var itemType = type[0];
            return data.map(function (item) {
              return ApiClient.convertToType(item, itemType);
            });
          } else if ((0, _typeof2["default"])(type) === 'object') {
            // for plain object type like: {'String': 'Integer'}
            var keyType, valueType;

            for (var k in type) {
              if (type.hasOwnProperty(k)) {
                keyType = k;
                valueType = type[k];
                break;
              }
            }

            var result = {};

            for (var k in data) {
              if (data.hasOwnProperty(k)) {
                var key = ApiClient.convertToType(k, keyType);
                var value = ApiClient.convertToType(data[k], valueType);
                result[key] = value;
              }
            }

            return result;
          } else {
            // for unknown type, return the data directly
            return data;
          }

      }
    }
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj, itemType) {
      if (Array.isArray(data)) {
        for (var i = 0; i < data.length; i++) {
          if (data.hasOwnProperty(i)) obj[i] = ApiClient.convertToType(data[i], itemType);
        }
      } else {
        for (var k in data) {
          if (data.hasOwnProperty(k)) obj[k] = ApiClient.convertToType(data[k], itemType);
        }
      }
    }
  }]);
  return ApiClient;
}();
/**
 * Enumeration of collection format separator strategies.
 * @enum {String}
 * @readonly
 */


ApiClient.CollectionFormatEnum = {
  /**
   * Comma-separated values. Value: <code>csv</code>
   * @const
   */
  CSV: ',',

  /**
   * Space-separated values. Value: <code>ssv</code>
   * @const
   */
  SSV: ' ',

  /**
   * Tab-separated values. Value: <code>tsv</code>
   * @const
   */
  TSV: '\t',

  /**
   * Pipe(|)-separated values. Value: <code>pipes</code>
   * @const
   */
  PIPES: '|',

  /**
   * Native array. Value: <code>multi</code>
   * @const
   */
  MULTI: 'multi'
};
var _default = ApiClient;
exports["default"] = _default;