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
 * @version    2.4.34
 * @link       https://github.com/avadev/AvaTax-REST-V3-JS-SDK
 */


import DeviceList from '../../model/IAMDS/DeviceList';
import EntitlementList from '../../model/IAMDS/EntitlementList';
import GrantList from '../../model/IAMDS/GrantList';
import GroupList from '../../model/IAMDS/GroupList';
import Tenant from '../../model/IAMDS/Tenant';
import TenantList from '../../model/IAMDS/TenantList';
import UserList from '../../model/IAMDS/UserList';
import VersionError from '../../model/IAMDS/VersionError';

/**
* Tenant service.
* @module api/IAMDS/TenantApi
* @version 2.4.34
*/
export default class TenantApi {

    /**
    * Constructs a new TenantApi. 
    * @alias module:api/IAMDS/TenantApi
    * @class
    * @param {module:ApiClient} [apiClient] API client implementation to use
    */
    constructor(apiClient) {
        if (!apiClient) {
            throw new Error('apiClient is a required parameter.');
        }
        this.apiClient = apiClient;
    }


    /**
     * Callback function to receive the result of the addDeviceToTenant operation.
     * @callback module:api/IAMDS/TenantApi~addDeviceToTenantCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a device to a tenant.
     * Adds a device to a tenant.
     * @param {String} tenantId 
     * @param {String} deviceId 
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {module:api/IAMDS/TenantApi~addDeviceToTenantCallback} callback The callback function, accepting three arguments: error, data, response
     */
    addDeviceToTenant(tenantId, deviceId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling addDeviceToTenant");
      }
      // verify the required parameter 'deviceId' is set
      if (deviceId === undefined || deviceId === null) {
        throw new Error("Missing the required parameter 'deviceId' when calling addDeviceToTenant");
      }

      let pathParams = {
        'tenant-id': tenantId,
        'device-id': deviceId
      };
      let queryParams = {
      };
      let headerParams = {
        'avalara-version': opts['avalaraVersion'],
        'X-Correlation-Id': opts['xCorrelationId']
      };
      let formParams = {
      };

      let authNames = ['OAuth'];
      let contentTypes = [];
      let accepts = ['text/plain'];
      let returnType = null;
      return this.apiClient.callApi(
        '/tenants/{tenant-id}/devices/{device-id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the addGrantToTenantUser operation.
     * @callback module:api/IAMDS/TenantApi~addGrantToTenantUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a grant to a user within a tenant.
     * Adds a grant to a user within a tenant.
     * @param {String} tenantId 
     * @param {String} userId 
     * @param {String} grantId 
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {module:api/IAMDS/TenantApi~addGrantToTenantUserCallback} callback The callback function, accepting three arguments: error, data, response
     */
    addGrantToTenantUser(tenantId, userId, grantId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling addGrantToTenantUser");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling addGrantToTenantUser");
      }
      // verify the required parameter 'grantId' is set
      if (grantId === undefined || grantId === null) {
        throw new Error("Missing the required parameter 'grantId' when calling addGrantToTenantUser");
      }

      let pathParams = {
        'tenant-id': tenantId,
        'user-id': userId,
        'grant-id': grantId
      };
      let queryParams = {
      };
      let headerParams = {
        'avalara-version': opts['avalaraVersion'],
        'X-Correlation-Id': opts['xCorrelationId']
      };
      let formParams = {
      };

      let authNames = ['OAuth'];
      let contentTypes = [];
      let accepts = ['text/plain'];
      let returnType = null;
      return this.apiClient.callApi(
        '/tenants/{tenant-id}/users/{user-id}/grants/{grant-id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the addUserToTenant operation.
     * @callback module:api/IAMDS/TenantApi~addUserToTenantCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a user to a tenant.
     * Adds a user to a tenant.
     * @param {String} tenantId 
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {module:api/IAMDS/TenantApi~addUserToTenantCallback} callback The callback function, accepting three arguments: error, data, response
     */
    addUserToTenant(tenantId, userId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling addUserToTenant");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling addUserToTenant");
      }

      let pathParams = {
        'tenant-id': tenantId,
        'user-id': userId
      };
      let queryParams = {
      };
      let headerParams = {
        'avalara-version': opts['avalaraVersion'],
        'X-Correlation-Id': opts['xCorrelationId']
      };
      let formParams = {
      };

      let authNames = ['OAuth'];
      let contentTypes = [];
      let accepts = ['text/plain'];
      let returnType = null;
      return this.apiClient.callApi(
        '/tenants/{tenant-id}/users/{user-id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createTenant operation.
     * @callback module:api/IAMDS/TenantApi~createTenantCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IAMDS/Tenant} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a tenant to the list of tenants.
     * On a post, the tenant ID will not be known since it is assigned by the system. The response contains the tenant, including ID.
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {module:model/IAMDS/Tenant} opts.tenant 
     * @param {module:api/IAMDS/TenantApi~createTenantCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IAMDS/Tenant}
     */
    createTenant(opts, callback) {
      opts = opts || {};
      let postBody = opts['tenant'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'avalara-version': opts['avalaraVersion'],
        'X-Correlation-Id': opts['xCorrelationId']
      };
      let formParams = {
      };

      let authNames = ['OAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json', 'text/plain'];
      let returnType = Tenant;
      return this.apiClient.callApi(
        '/tenants', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteTenant operation.
     * @callback module:api/IAMDS/TenantApi~deleteTenantCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tenant.
     * Deletes the specified tenant.
     * @param {String} tenantId 
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {String} opts.ifMatch Only execute the operation if the ETag for the current version of the resource matches the ETag in this header.
     * @param {module:api/IAMDS/TenantApi~deleteTenantCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteTenant(tenantId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling deleteTenant");
      }

      let pathParams = {
        'tenant-id': tenantId
      };
      let queryParams = {
      };
      let headerParams = {
        'avalara-version': opts['avalaraVersion'],
        'X-Correlation-Id': opts['xCorrelationId'],
        'If-Match': opts['ifMatch']
      };
      let formParams = {
      };

      let authNames = ['OAuth'];
      let contentTypes = [];
      let accepts = ['text/plain'];
      let returnType = null;
      return this.apiClient.callApi(
        '/tenants/{tenant-id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getTenant operation.
     * @callback module:api/IAMDS/TenantApi~getTenantCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IAMDS/Tenant} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * GET a tenant by ID.
     * Retrieves the specified tenant.
     * @param {String} tenantId 
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {String} opts.ifNoneMatch Only return the resource if the ETag is different from the ETag passed in.
     * @param {module:api/IAMDS/TenantApi~getTenantCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IAMDS/Tenant}
     */
    getTenant(tenantId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling getTenant");
      }

      let pathParams = {
        'tenant-id': tenantId
      };
      let queryParams = {
      };
      let headerParams = {
        'avalara-version': opts['avalaraVersion'],
        'X-Correlation-Id': opts['xCorrelationId'],
        'If-None-Match': opts['ifNoneMatch']
      };
      let formParams = {
      };

      let authNames = ['OAuth'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/plain'];
      let returnType = Tenant;
      return this.apiClient.callApi(
        '/tenants/{tenant-id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listTenantDevices operation.
     * @callback module:api/IAMDS/TenantApi~listTenantDevicesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IAMDS/DeviceList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve all devices within a tenant.
     * Retrieve a list of all devices within a tenant which the authenticated user has access to. This list is paged, returning no more than 1000 items at a time.  Filterable properties:   * displayName * grants/identifier * active * groups/identifier
     * @param {String} tenantId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter A filter statement to identify specific records to retrieve.
     * @param {String} opts.top If nonzero, return no more than this number of results.  Used with `$skip` to provide pagination for large datasets.  Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {String} opts.skip If nonzero, skip this number of results before returning data.  Used with `$top` to provide pagination for large datasets.
     * @param {String} opts.orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
     * @param {Boolean} opts.count If set to 'true', requests the count of items as part of the response. Default: 'false'. If the value cannot be
     * @param {Boolean} opts.countOnly If set to 'true', requests the count of items as part of the response. No values are returned. Default: 'false'.
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {module:api/IAMDS/TenantApi~listTenantDevicesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IAMDS/DeviceList}
     */
    listTenantDevices(tenantId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling listTenantDevices");
      }

      let pathParams = {
        'tenant-id': tenantId
      };
      let queryParams = {
        '$filter': opts['filter'],
        '$top': opts['top'],
        '$skip': opts['skip'],
        '$orderBy': opts['orderBy'],
        'count': opts['count'],
        'countOnly': opts['countOnly']
      };
      let headerParams = {
        'avalara-version': opts['avalaraVersion'],
        'X-Correlation-Id': opts['xCorrelationId']
      };
      let formParams = {
      };

      let authNames = ['OAuth'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/plain'];
      let returnType = DeviceList;
      return this.apiClient.callApi(
        '/tenants/{tenant-id}/devices', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listTenantEntitlements operation.
     * @callback module:api/IAMDS/TenantApi~listTenantEntitlementsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IAMDS/EntitlementList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve all entitlements within a tenant.
     * Retrieve a list of all entitlements on the tenant. This list is paged, returning no more than 1000 items at a time.  Filterable properties:   * displayName * system/identifier * active * features/identifier * customGrants/identifier
     * @param {String} tenantId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter A filter statement to identify specific records to retrieve.
     * @param {String} opts.top If nonzero, return no more than this number of results.  Used with `$skip` to provide pagination for large datasets.  Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {String} opts.skip If nonzero, skip this number of results before returning data.  Used with `$top` to provide pagination for large datasets.
     * @param {String} opts.orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
     * @param {Boolean} opts.count If set to 'true', requests the count of items as part of the response. Default: 'false'. If the value cannot be
     * @param {Boolean} opts.countOnly If set to 'true', requests the count of items as part of the response. No values are returned. Default: 'false'.
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {module:api/IAMDS/TenantApi~listTenantEntitlementsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IAMDS/EntitlementList}
     */
    listTenantEntitlements(tenantId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling listTenantEntitlements");
      }

      let pathParams = {
        'tenant-id': tenantId
      };
      let queryParams = {
        '$filter': opts['filter'],
        '$top': opts['top'],
        '$skip': opts['skip'],
        '$orderBy': opts['orderBy'],
        'count': opts['count'],
        'countOnly': opts['countOnly']
      };
      let headerParams = {
        'avalara-version': opts['avalaraVersion'],
        'X-Correlation-Id': opts['xCorrelationId']
      };
      let formParams = {
      };

      let authNames = ['OAuth'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/plain'];
      let returnType = EntitlementList;
      return this.apiClient.callApi(
        '/tenants/{tenant-id}/entitlements', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listTenantGroups operation.
     * @callback module:api/IAMDS/TenantApi~listTenantGroupsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IAMDS/GroupList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve all groups within a tenant.
     * Retrieve a list of all groups on the tenant. This list is paged, returning no more than 1000 items at a time.  Filterable properties:   * displayName * grants/identifier
     * @param {String} tenantId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter A filter statement to identify specific records to retrieve.
     * @param {String} opts.top If nonzero, return no more than this number of results.  Used with `$skip` to provide pagination for large datasets.  Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {String} opts.skip If nonzero, skip this number of results before returning data.  Used with `$top` to provide pagination for large datasets.
     * @param {String} opts.orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
     * @param {Boolean} opts.count If set to 'true', requests the count of items as part of the response. Default: 'false'. If the value cannot be
     * @param {Boolean} opts.countOnly If set to 'true', requests the count of items as part of the response. No values are returned. Default: 'false'.
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {module:api/IAMDS/TenantApi~listTenantGroupsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IAMDS/GroupList}
     */
    listTenantGroups(tenantId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling listTenantGroups");
      }

      let pathParams = {
        'tenant-id': tenantId
      };
      let queryParams = {
        '$filter': opts['filter'],
        '$top': opts['top'],
        '$skip': opts['skip'],
        '$orderBy': opts['orderBy'],
        'count': opts['count'],
        'countOnly': opts['countOnly']
      };
      let headerParams = {
        'avalara-version': opts['avalaraVersion'],
        'X-Correlation-Id': opts['xCorrelationId']
      };
      let formParams = {
      };

      let authNames = ['OAuth'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/plain'];
      let returnType = GroupList;
      return this.apiClient.callApi(
        '/tenants/{tenant-id}/groups', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listTenantUserGrants operation.
     * @callback module:api/IAMDS/TenantApi~listTenantUserGrantsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IAMDS/GrantList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a grant to a user within a tenant.
     * Retrieve a list of all grants a user belongs to within the tenant which the authenticated user has access to. This list is paged, returning no more than 1000 items at a time.  Filterable properties:   * displayName * grants/identifier
     * @param {String} tenantId 
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter A filter statement to identify specific records to retrieve.
     * @param {String} opts.top If nonzero, return no more than this number of results.  Used with `$skip` to provide pagination for large datasets.  Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {String} opts.skip If nonzero, skip this number of results before returning data.  Used with `$top` to provide pagination for large datasets.
     * @param {String} opts.orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
     * @param {Boolean} opts.count If set to 'true', requests the count of items as part of the response. Default: 'false'. If the value cannot be
     * @param {Boolean} opts.countOnly If set to 'true', requests the count of items as part of the response. No values are returned. Default: 'false'.
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {module:api/IAMDS/TenantApi~listTenantUserGrantsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IAMDS/GrantList}
     */
    listTenantUserGrants(tenantId, userId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling listTenantUserGrants");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling listTenantUserGrants");
      }

      let pathParams = {
        'tenant-id': tenantId,
        'user-id': userId
      };
      let queryParams = {
        '$filter': opts['filter'],
        '$top': opts['top'],
        '$skip': opts['skip'],
        '$orderBy': opts['orderBy'],
        'count': opts['count'],
        'countOnly': opts['countOnly']
      };
      let headerParams = {
        'avalara-version': opts['avalaraVersion'],
        'X-Correlation-Id': opts['xCorrelationId']
      };
      let formParams = {
      };

      let authNames = ['OAuth'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/plain'];
      let returnType = GrantList;
      return this.apiClient.callApi(
        '/tenants/{tenant-id}/users/{user-id}/grants', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listTenantUserGroups operation.
     * @callback module:api/IAMDS/TenantApi~listTenantUserGroupsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IAMDS/GroupList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List the groups a user belongs to within a specific tenant.
     * Retrieve a list of all groups a user belongs to within the tenant which the authenticated user has access to. This list is paged, returning no more than 1000 items at a time.
     * @param {String} tenantId 
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter A filter statement to identify specific records to retrieve.
     * @param {String} opts.top If nonzero, return no more than this number of results.  Used with `$skip` to provide pagination for large datasets.  Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {String} opts.skip If nonzero, skip this number of results before returning data.  Used with `$top` to provide pagination for large datasets.
     * @param {String} opts.orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
     * @param {Boolean} opts.count If set to 'true', requests the count of items as part of the response. Default: 'false'. If the value cannot be
     * @param {Boolean} opts.countOnly If set to 'true', requests the count of items as part of the response. No values are returned. Default: 'false'.
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {module:api/IAMDS/TenantApi~listTenantUserGroupsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IAMDS/GroupList}
     */
    listTenantUserGroups(tenantId, userId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling listTenantUserGroups");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling listTenantUserGroups");
      }

      let pathParams = {
        'tenant-id': tenantId,
        'user-id': userId
      };
      let queryParams = {
        '$filter': opts['filter'],
        '$top': opts['top'],
        '$skip': opts['skip'],
        '$orderBy': opts['orderBy'],
        'count': opts['count'],
        'countOnly': opts['countOnly']
      };
      let headerParams = {
        'avalara-version': opts['avalaraVersion'],
        'X-Correlation-Id': opts['xCorrelationId']
      };
      let formParams = {
      };

      let authNames = ['OAuth'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/plain'];
      let returnType = GroupList;
      return this.apiClient.callApi(
        '/tenants/{tenant-id}/users/{user-id}/groups', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listTenantUsers operation.
     * @callback module:api/IAMDS/TenantApi~listTenantUsersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IAMDS/UserList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve all users within a tenant.
     * Retrieve a list of all users within the tenant which the authenticated user has access to. This list is paged, returning no more than 1000 items at a time.  Filterable properties:   * displayName * emails/value * active * userName * grants/identifier * groups/identifier
     * @param {String} tenantId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter A filter statement to identify specific records to retrieve.
     * @param {String} opts.top If nonzero, return no more than this number of results.  Used with `$skip` to provide pagination for large datasets.  Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {String} opts.skip If nonzero, skip this number of results before returning data.  Used with `$top` to provide pagination for large datasets.
     * @param {String} opts.orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
     * @param {Boolean} opts.count If set to 'true', requests the count of items as part of the response. Default: 'false'. If the value cannot be
     * @param {Boolean} opts.countOnly If set to 'true', requests the count of items as part of the response. No values are returned. Default: 'false'.
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {module:api/IAMDS/TenantApi~listTenantUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IAMDS/UserList}
     */
    listTenantUsers(tenantId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling listTenantUsers");
      }

      let pathParams = {
        'tenant-id': tenantId
      };
      let queryParams = {
        '$filter': opts['filter'],
        '$top': opts['top'],
        '$skip': opts['skip'],
        '$orderBy': opts['orderBy'],
        'count': opts['count'],
        'countOnly': opts['countOnly']
      };
      let headerParams = {
        'avalara-version': opts['avalaraVersion'],
        'X-Correlation-Id': opts['xCorrelationId']
      };
      let formParams = {
      };

      let authNames = ['OAuth'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/plain'];
      let returnType = UserList;
      return this.apiClient.callApi(
        '/tenants/{tenant-id}/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listTenants operation.
     * @callback module:api/IAMDS/TenantApi~listTenantsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IAMDS/TenantList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of all tenants.
     * Retrieve a list of all tenants the authenticated user has access to. This list is paged, returning no more than 1000 items at a time.  Filterable properties:   * displayName * organization/identifier
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter A filter statement to identify specific records to retrieve.
     * @param {String} opts.top If nonzero, return no more than this number of results.  Used with `$skip` to provide pagination for large datasets.  Unless otherwise specified, the maximum number of records that can be returned from an API call is 1,000 records.
     * @param {String} opts.skip If nonzero, skip this number of results before returning data.  Used with `$top` to provide pagination for large datasets.
     * @param {Boolean} opts.count If set to 'true', requests the count of items as part of the response. Default: 'false'. If the value cannot be
     * @param {Boolean} opts.countOnly If set to 'true', requests the count of items as part of the response. No values are returned. Default: 'false'.
     * @param {String} opts.orderBy A comma separated list of sort statements in the format `(fieldname) [ASC|DESC]`, for example `id ASC`.
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {module:api/IAMDS/TenantApi~listTenantsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IAMDS/TenantList}
     */
    listTenants(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        '$filter': opts['filter'],
        '$top': opts['top'],
        '$skip': opts['skip'],
        'count': opts['count'],
        'countOnly': opts['countOnly'],
        '$orderBy': opts['orderBy']
      };
      let headerParams = {
        'avalara-version': opts['avalaraVersion'],
        'X-Correlation-Id': opts['xCorrelationId']
      };
      let formParams = {
      };

      let authNames = ['OAuth'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/plain'];
      let returnType = TenantList;
      return this.apiClient.callApi(
        '/tenants', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the patchTenant operation.
     * @callback module:api/IAMDS/TenantApi~patchTenantCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update specific fields in a tenant.
     * Updates the fields on a tenant which should change.
     * @param {String} tenantId 
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {String} opts.ifMatch Only execute the operation if the ETag for the current version of the resource matches the ETag in this header.
     * @param {module:model/IAMDS/Tenant} opts.tenant 
     * @param {module:api/IAMDS/TenantApi~patchTenantCallback} callback The callback function, accepting three arguments: error, data, response
     */
    patchTenant(tenantId, opts, callback) {
      opts = opts || {};
      let postBody = opts['tenant'];
      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling patchTenant");
      }

      let pathParams = {
        'tenant-id': tenantId
      };
      let queryParams = {
      };
      let headerParams = {
        'avalara-version': opts['avalaraVersion'],
        'X-Correlation-Id': opts['xCorrelationId'],
        'If-Match': opts['ifMatch']
      };
      let formParams = {
      };

      let authNames = ['OAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['text/plain'];
      let returnType = null;
      return this.apiClient.callApi(
        '/tenants/{tenant-id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the removeDeviceFromTenant operation.
     * @callback module:api/IAMDS/TenantApi~removeDeviceFromTenantCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove a device from a tenant.
     * Removes a device from a tenant.
     * @param {String} tenantId 
     * @param {String} deviceId 
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {module:api/IAMDS/TenantApi~removeDeviceFromTenantCallback} callback The callback function, accepting three arguments: error, data, response
     */
    removeDeviceFromTenant(tenantId, deviceId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling removeDeviceFromTenant");
      }
      // verify the required parameter 'deviceId' is set
      if (deviceId === undefined || deviceId === null) {
        throw new Error("Missing the required parameter 'deviceId' when calling removeDeviceFromTenant");
      }

      let pathParams = {
        'tenant-id': tenantId,
        'device-id': deviceId
      };
      let queryParams = {
      };
      let headerParams = {
        'avalara-version': opts['avalaraVersion'],
        'X-Correlation-Id': opts['xCorrelationId']
      };
      let formParams = {
      };

      let authNames = ['OAuth'];
      let contentTypes = [];
      let accepts = ['text/plain'];
      let returnType = null;
      return this.apiClient.callApi(
        '/tenants/{tenant-id}/devices/{device-id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the removeGrantFromTenantUser operation.
     * @callback module:api/IAMDS/TenantApi~removeGrantFromTenantUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove a grant from a user within a tenant.
     * Removes a grant from a user on a tenant.
     * @param {String} tenantId 
     * @param {String} userId 
     * @param {String} grantId 
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {module:api/IAMDS/TenantApi~removeGrantFromTenantUserCallback} callback The callback function, accepting three arguments: error, data, response
     */
    removeGrantFromTenantUser(tenantId, userId, grantId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling removeGrantFromTenantUser");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling removeGrantFromTenantUser");
      }
      // verify the required parameter 'grantId' is set
      if (grantId === undefined || grantId === null) {
        throw new Error("Missing the required parameter 'grantId' when calling removeGrantFromTenantUser");
      }

      let pathParams = {
        'tenant-id': tenantId,
        'user-id': userId,
        'grant-id': grantId
      };
      let queryParams = {
      };
      let headerParams = {
        'avalara-version': opts['avalaraVersion'],
        'X-Correlation-Id': opts['xCorrelationId']
      };
      let formParams = {
      };

      let authNames = ['OAuth'];
      let contentTypes = [];
      let accepts = ['text/plain'];
      let returnType = null;
      return this.apiClient.callApi(
        '/tenants/{tenant-id}/users/{user-id}/grants/{grant-id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the removeUserFromTenant operation.
     * @callback module:api/IAMDS/TenantApi~removeUserFromTenantCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove a user from a tenant.
     * Removes a user from a tenant.
     * @param {String} tenantId 
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {module:api/IAMDS/TenantApi~removeUserFromTenantCallback} callback The callback function, accepting three arguments: error, data, response
     */
    removeUserFromTenant(tenantId, userId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling removeUserFromTenant");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling removeUserFromTenant");
      }

      let pathParams = {
        'tenant-id': tenantId,
        'user-id': userId
      };
      let queryParams = {
      };
      let headerParams = {
        'avalara-version': opts['avalaraVersion'],
        'X-Correlation-Id': opts['xCorrelationId']
      };
      let formParams = {
      };

      let authNames = ['OAuth'];
      let contentTypes = [];
      let accepts = ['text/plain'];
      let returnType = null;
      return this.apiClient.callApi(
        '/tenants/{tenant-id}/users/{user-id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the replaceTenant operation.
     * @callback module:api/IAMDS/TenantApi~replaceTenantCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a tenant by ID.
     * Updates the tenant with the data in the request body.
     * @param {String} tenantId 
     * @param {Object} opts Optional parameters
     * @param {module:model/IAMDS/String} opts.avalaraVersion States the version of the API to use.
     * @param {String} opts.xCorrelationId Correlation ID to pass into the method. Returned in any response.
     * @param {String} opts.ifMatch Only execute the operation if the ETag for the current version of the resource matches the ETag in this header.
     * @param {module:model/IAMDS/Tenant} opts.tenant 
     * @param {module:api/IAMDS/TenantApi~replaceTenantCallback} callback The callback function, accepting three arguments: error, data, response
     */
    replaceTenant(tenantId, opts, callback) {
      opts = opts || {};
      let postBody = opts['tenant'];
      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling replaceTenant");
      }

      let pathParams = {
        'tenant-id': tenantId
      };
      let queryParams = {
      };
      let headerParams = {
        'avalara-version': opts['avalaraVersion'],
        'X-Correlation-Id': opts['xCorrelationId'],
        'If-Match': opts['ifMatch']
      };
      let formParams = {
      };

      let authNames = ['OAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['text/plain'];
      let returnType = null;
      return this.apiClient.callApi(
        '/tenants/{tenant-id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
