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
 * @version    2.2.5
 * @link       https://github.com/avadev/AvaTax-REST-V3-JS-SDK
 */

 (function(root, factory) {
    if (typeof define === 'function' && define.amd) {
      // AMD.
      define(['expect.js', process.cwd()+'/src/index'], factory);
    } else if (typeof module === 'object' && module.exports) {
      // CommonJS-like environments that support module.exports, like Node.
      factory(require('expect.js'), require(process.cwd()+'/src/index'));
    } else {
      // Browser globals (root is window)
      factory(root.expect, root.AvalaraSdk);
    }
  }(this, function(expect, AvalaraSdk) {
    'use strict';
    require('dotenv').config();
    var instance;
    var config = {
        appName: 'asv-sdk-test-app',
        appVersion: '1.0',
        environment: 'test',
        machineName: 'test-machine',
        timeout: 5000,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        testBasePath: 'https://localhost:3000',
        testTokenUrl: 'https://dev-75323271.okta.com/oauth2/default/v1/token'
    };
    var apiClient = new AvalaraSdk.ApiClient(config);
  
    beforeEach(function() {
      instance = new AvalaraSdk.IAMDS.UserApi(apiClient);
    });
  
    describe('UserAPI', function() {
      describe('createUser', function() {
        it('should call createUser successfully', async function(done) {
            const callback = (error, data, res) => {
                if (error) {
                    console.log(error);
                    instance.createUser({}, baseCallback);
                } else {
                    console.log("Result of createUser:");
                    console.log(data);
                    instance.createUser({}, baseCallback);
                }
            };
            const baseCallback = (error, data, res) => {
              if (error) {
                  console.log(error);

              } else {
                  console.log("Result of createUser:");
                  console.log(data);

              }
          };
            instance.createUser({}, callback);
            instance.listUsers({}, callback);
            done();
        });
      });
    });
  
  }));