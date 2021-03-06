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

 import superagent from "superagent";
 import querystring from "querystring";
 
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
 class ApiClient {
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
     constructor(configuration) {
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
             'BasicAuth': {type: 'basic'},
             'Bearer': {type: 'apiKey', 'in': 'header', name: 'Authorization'}
         }
 
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
           this.agent = new superagent.agent();
         }
 
         /*
          * Allow user to override superagent agent
          */
          this.requestAgent = null;
 
         /*
          * Allow user to add superagent plugins
          */
         this.plugins = null;

         this.accessTokenMap = new Map();
 
         // Setup configuration options for the ApiClient.
         const { appName, appVersion, bearerToken, clientId, clientSecret, machineName, environment, timeout, username, password, testBasePath, testTokenUrl } = configuration;
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

     setBasePath(environment, testBasePath) {
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

     setTokenUrl(environment, testTokenUrl) {
         const prodTokenUrl = 'https://TO-BE-SET';
         const sandboxTokenUrl = 'https://TO-BE-SET';
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
     paramToString(param) {
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
     static canBeJsonified(str) {
         if (typeof str !== 'string' && typeof str !== 'object') return false;
         try {
             const type = str.toString();
             return type === '[object Object]'
                 || type === '[object Array]';
         } catch (err) {
             return false;
         }
     };
 
    /**
     * Builds full URL by appending the given path to the base URL and replacing path parameter place-holders with parameter values.
     * NOTE: query parameters are not handled here.
     * @param {String} path The path to append to the base URL.
     * @param {Object} pathParams The parameter values to append.
     * @param {String} apiBasePath Base path defined in the path, operation level to override the default one
     * @returns {String} The encoded path with parameter values substituted.
     */
     buildUrl(path, pathParams, apiBasePath) {
         if (!path.match(/^\//)) {
             path = '/' + path;
         }
 
         var url = this.baseUrl + path;
 
         // use API (operation, path) base path if defined
         if (apiBasePath !== null && apiBasePath !== undefined) {
             url = apiBasePath + path;
         }
 
         url = url.replace(/\{([\w-\.]+)\}/g, (fullMatch, key) => {
             var value;
             if (pathParams.hasOwnProperty(key)) {
                 value = this.paramToString(pathParams[key]);
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
     isJsonMime(contentType) {
         return Boolean(contentType != null && contentType.match(/^application\/json(;.*)?$/i));
     }
 
     /**
     * Chooses a content type from the given array, with JSON preferred; i.e. return JSON if included, otherwise return the first.
     * @param {Array.<String>} contentTypes
     * @returns {String} The chosen content type, preferring JSON.
     */
     jsonPreferredMime(contentTypes) {
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
     isFileParam(param) {
         // fs.ReadStream in Node.js and Electron (but not in runtime like browserify)
         if (typeof require === 'function') {
             let fs;
             try {
                 fs = require('fs');
             } catch (err) {}
             if (fs && fs.ReadStream && param instanceof fs.ReadStream) {
                 return true;
             }
         }
 
         // Buffer in Node.js
         if (typeof Buffer === 'function' && param instanceof Buffer) {
             return true;
         }
 
         // Blob in browser
         if (typeof Blob === 'function' && param instanceof Blob) {
             return true;
         }
 
         // File in browser (it seems File object is also instance of Blob, but keep this for safe)
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
     normalizeParams(params) {
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
     buildCollectionParam(param, collectionFormat) {
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
    async applyAuthToRequest(request, authNames, requiredScopes) {
        // for now, only support basic and oauth types.
       if (this.bearerToken != null) {
           request.set({ 'Authorization': `Bearer ${this.bearerToken}` });
       } else if (authNames.indexOf('OAuth') >= 0 && this.clientId && this.clientSecret) {
           let scopes = this.standardizeScopes(requiredScopes);
           let accessToken = this.getOAuthAccessToken(scopes);
           if (!accessToken) {
               await this.updateOAuthAccessToken(scopes);
               accessToken = this.getOAuthAccessToken(scopes);
           }
           request.set({ 'Authorization': `Bearer ${accessToken}` });
       } else if (this.username != null && this.password != null) {
           request.set({ 'Authorization': this.createBasicAuthHeader(this.username, this.password) });
       }
    }

     getOAuthAccessToken(scopes) {
        const tokenMetadata = this.accessTokenMap.get(scopes);
        if (tokenMetadata) {
            const { accessToken, expiry } = tokenMetadata;
            const expirationTime = Math.floor(Date.now() / 1000) + 300;
            if (expirationTime < expiry) {
                return accessToken;
            }
        }
        return null;
     }

     async updateOAuthAccessToken(scopes, accessToken) {
        const currentAccessToken = this.getOAuthAccessToken(scopes);
        // If the current access token is not set, or the cached token equals the token passed in 
        // (which will only be passed in, in the event the token failed due to being invalid or some other failure scenario)
        if (!currentAccessToken || currentAccessToken === accessToken) {
            try {
                const res = await this.buildOAuthRequest(scopes);
                const data = JSON.parse(res.text);
                let timestamp = Math.floor(Date.now() / 1000) + data['expires_in'];
                this.accessTokenMap.set(scopes, { accessToken: data['access_token'], expiry: timestamp });
            } catch (err) {
                console.log(`OAuth2 Token retrieval failed. Error: ${err}`);
                throw new Error(`OAuth2 Token retrieval failed. Error: ${err}`);
            }
        }
     }

     buildOAuthRequest(scopes) {
        var request = superagent('POST', this.tokenUrl);
        request.query({
            'grant_type': 'client_credentials',
            scope: scopes
        });
        request.set('Authorization', this.createBasicAuthHeader(this.clientId, this.clientSecret));
        request.type('application/x-www-form-urlencoded');
        request.accept('application/json');
        return request;
     }

     standardizeScopes(requiredScopes) {
         const strArr = requiredScopes.split(' ');
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
     deserialize(response, returnType) {
         if (response == null || returnType == null || response.status == 204) {
             return null;
         }
 
         // Rely on SuperAgent for parsing response body.
         // See http://visionmedia.github.io/superagent/#parsing-response-bodies
         var data = response.body;
         if (data == null || (typeof data === 'object' && typeof data.length === 'undefined' && !Object.keys(data).length)) {
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
     async callApi(path, httpMethod, pathParams,
         queryParams, headerParams, formParams, bodyParam, authNames, contentTypes, accepts,
         returnType, apiBasePath, callback, requiredScopes, isRetry) {
 
         var url = this.buildUrl(path, pathParams, apiBasePath);
         var request = superagent(httpMethod, url);
 
         if (this.plugins !== null) {
             for (var index in this.plugins) {
                 if (this.plugins.hasOwnProperty(index)) {
                     request.use(this.plugins[index])
                 }
             }
         }
         
         await this.applyAuthToRequest(request, authNames, requiredScopes);
 
         // set query parameters
         if (httpMethod.toUpperCase() === 'GET' && this.cache === false) {
             queryParams['_'] = new Date().getTime();
         }
 
         request.query(this.normalizeParams(queryParams));
 
         // set header parameters
         request.set({'X-Avalara-Client': `${this.appName}; ${this.appVersion}; JavascriptSdk; ${this.sdkVersion}; ${this.machineName}`});
         request.set(this.defaultHeaders).set(this.normalizeParams(headerParams));
 
         // set requestAgent if it is set by user
         if (this.requestAgent) {
           request.agent(this.requestAgent);
         }
 
         // set request timeout
         request.timeout(this.timeout);
 
         var contentType = this.jsonPreferredMime(contentTypes);
         if (contentType) {
             // Issue with superagent and multipart/form-data (https://github.com/visionmedia/superagent/issues/746)
             if(contentType != 'multipart/form-data') {
                 request.type(contentType);
             }
         }
 
         if (contentType === 'application/x-www-form-urlencoded') {
             request.send(querystring.stringify(this.normalizeParams(formParams)));
         } else if (contentType == 'multipart/form-data') {
             var _formParams = this.normalizeParams(formParams);
             for (var key in _formParams) {
                 if (_formParams.hasOwnProperty(key)) {
                     let _formParamsValue = _formParams[key];
                     if (this.isFileParam(_formParamsValue)) {
                         // file field
                         request.attach(key, _formParamsValue);
                     } else if (Array.isArray(_formParamsValue) && _formParamsValue.length
                         && this.isFileParam(_formParamsValue[0])) {
                         // multiple files
                         _formParamsValue.forEach(file => request.attach(key, file));
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
 
         var accept = this.jsonPreferredMime(accepts);
         if (accept) {
             request.accept(accept);
         }
 
         if (returnType === 'Blob') {
           request.responseType('blob');
         } else if (returnType === 'String') {
           request.responseType('string');
         }
 
         // Attach previously saved cookies, if enabled
         if (this.enableCookies){
             if (typeof window === 'undefined') {
                 this.agent._attachCookies(request);
             }
             else {
                 request.withCredentials();
             }
         }
 
         request.end(async (error, response) => {
             const { headers, statusCode } = response;
             // Retry logic for OAuth token failure, if we receive 401 or 403 back, try to fetch a new token and make the API call a second time. If that fails again, return error as normal to the caller.
             if (response != null && (statusCode === 401 || statusCode === 403) && this.clientId && this.clientSecret) {
                const authHeader = headers.Authorization;
                const authHeaderValues = authHeader && authHeader.split(' ');
                if (authHeaderValues && authHeaderValues.length === 2) {
                    if (!isRetry) {
                        await this.updateOAuthAccessToken(requiredScopes, authHeaderValues[1]);
                        this.callApi(path, httpMethod, pathParams, queryParams, headerParams, formParams, bodyParam, authNames, contentType, accepts, returnType, apiBasePath, callback, requiredScopes, true);
                        return;
                    }
                }
             }
             if (callback) {
                 var data = null;
                 if (!error) {
                     try {
                         data = this.deserialize(response, returnType);
                         if (this.enableCookies && typeof window === 'undefined'){
                             this.agent._saveCookies(response);
                         }
                     } catch (err) {
                         error = err;
                     }
                 }
 
                 callback(error, data, response);
             }
         });
         return request;
     }
 
     /**
     * Parses an ISO-8601 string representation or epoch representation of a date value.
     * @param {String} str The date value as a string.
     * @returns {Date} The parsed date object.
     */
     static parseDate(str) {
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
     static convertToType(data, type) {
         if (data === null || data === undefined)
             return data
 
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
 
                     return data.map((item) => {
                         return ApiClient.convertToType(item, itemType);
                     });
                 } else if (typeof type === 'object') {
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
 
   /**
     * Gets an array of host settings
     * @returns An array of host settings
     */
     hostSettings() {
         return [
             {
               'url': "",
               'description': "No description provided",
             }
       ];
     }
 
     getBasePathFromSettings(index, variables={}) {
         var servers = this.hostSettings();
 
         // check array index out of bound
         if (index < 0 || index >= servers.length) {
             throw new Error("Invalid index " + index + " when selecting the host settings. Must be less than " + servers.length);
         }
 
         var server = servers[index];
         var url = server['url'];
 
         // go through variable and assign a value
         for (var variable_name in server['variables']) {
             if (variable_name in variables) {
                 let variable = server['variables'][variable_name];
                 if ( !('enum_values' in variable) || variable['enum_values'].includes(variables[variable_name]) ) {
                     url = url.replace("{" + variable_name + "}", variables[variable_name]);
                 } else {
                     throw new Error("The variable `" + variable_name + "` in the host URL has invalid value " + variables[variable_name] + ". Must be " + server['variables'][variable_name]['enum_values'] + ".");
                 }
             } else {
                 // use default value
                 url = url.replace("{" + variable_name + "}", server['variables'][variable_name]['default_value'])
             }
         }
         return url;
     }
 
     /**
     * Constructs a new map or array model from REST data.
     * @param data {Object|Array} The REST data.
     * @param obj {Object|Array} The target object or array.
     */
     static constructFromObject(data, obj, itemType) {
         if (Array.isArray(data)) {
             for (var i = 0; i < data.length; i++) {
                 if (data.hasOwnProperty(i))
                     obj[i] = ApiClient.convertToType(data[i], itemType);
             }
         } else {
             for (var k in data) {
                 if (data.hasOwnProperty(k))
                     obj[k] = ApiClient.convertToType(data[k], itemType);
             }
         }
     };
 
     createBasicAuthHeader(account, licenseKey) {
         const base64Encoded = Buffer.from(`${account}:${licenseKey}`).toString(
             'base64'
         );
         return `Basic ${base64Encoded}`;
     };
 
     withTimeout(msecs, promise) {
         return new Promise((resolve, reject) => {
           const timer = setTimeout(() => {
             reject(new Error('timeout'))
           }, msecs)
       
           promise
             .then(value => {
               clearTimeout(timer);
               resolve(value);
             })
             .catch(reason => {
               clearTimeout(timer);
               reject(reason);
             })
         })
     };
 }
 
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
 export default ApiClient;