var AvalaraSdk = require('avalara-sdk');
var assert = require('assert');
var password = process.env.npm_config_password;

const config = {
    appName: 'asv-sdk-test-app',
    appVersion: '1.0',
    environment: 'sandbox',
    machineName: 'test-machine',
    timeout:200000000,
    username: 'demo.compliance-verification',
    password
};

describe('Integration Test Shipping Verification API: ', () => {
    var client = new AvalaraSdk.ApiClient(config);
    var api;

    beforeEach(() => {
        api = new AvalaraSdk.ShippingVerificationApi(client);
    });

    it('should be able to call Verify Shipment endpoint', (done) => {
        const callback = (error, data, res) => {
            assert.equal(data.compliant, false);
            assert.equal(data.message.toLowerCase(), 'transaction is not compliant');
            assert.equal(data.failureCodes[0], 'InvalidDate');
            assert.equal(data.warningCodes[0], 'UnsupportedTaxCode');
            done();
        };
        
        var opts = {
          'simulatedFailureCode': new AvalaraSdk.AgeVerifyFailureCode() // {AgeVerifyFailureCode} (Optional) The failure code included in the simulated response of the endpoint. Note that this endpoint is only available in Sandbox for testing purposes.
        };
        api.verifyShipment("DEFAULT", "063e1af4-11d3-4489-b8ba-ae1149758df4", opts, callback);
    });
});
    
    
    
    
   