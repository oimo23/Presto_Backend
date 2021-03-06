/* tslint:disable */
/* eslint-disable */
/**
 * Presto Backend API
 * Presto Backend
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ErrorResponse } from '../dto';
// @ts-ignore
import { RegisterUserRequest } from '../dto';
// @ts-ignore
import { User } from '../dto';
// @ts-ignore
import { UserDetail } from '../dto';
// @ts-ignore
import { UserListResponse } from '../dto';
/**
 * UsersApi - axios parameter creator
 * @export
 */
export const UsersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * ログインユーザーの情報を取得する 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fetchLoginUserInfo: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/users/me`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 他ユーザーの詳細情報を取得する 
         * @param {string} userId 詳細情報を取得したい他ユーザーのUser ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fetchOtherUserDetail: async (userId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('fetchOtherUserDetail', 'userId', userId)
            const localVarPath = `/api/users/{userId}`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * # 概要 ユーザーの一覧を取得する。<br> クエリパラメータで取得するユーザーの条件を指定可能。 # 詳細仕様 - ログインユーザー自身は一覧に含まれない。 - 一覧は登録日時(createdAt)の降順で返却される。 
         * @param {string} [keyword] 好きなアーティスなどのキーワードを指定。自己紹介と好きなジャンル・グループ・アーティストの記載から検索される&#x60;,&#x60;区切りで複数指定可能
         * @param {number} [position] &#x60;positionsのid&#x60;を指定。&#x60;,&#x60;区切りで複数指定可能
         * @param {number} [prefecture] &#x60;prefecturesのid&#x60;を指定。&#x60;,&#x60;区切りで複数指定可能
         * @param {number} [minage] 取得対象に含める最低年齢
         * @param {number} [maxage] 取得対象に含める最高年齢
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fetchOtherUsers: async (keyword?: string, position?: number, prefecture?: number, minage?: number, maxage?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/users`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (keyword !== undefined) {
                localVarQueryParameter['keyword'] = keyword;
            }

            if (position !== undefined) {
                localVarQueryParameter['position'] = position;
            }

            if (prefecture !== undefined) {
                localVarQueryParameter['prefecture'] = prefecture;
            }

            if (minage !== undefined) {
                localVarQueryParameter['minage'] = minage;
            }

            if (maxage !== undefined) {
                localVarQueryParameter['maxage'] = maxage;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * ユーザーを新規登録する 
         * @param {RegisterUserRequest} registerUserRequest 新規登録するユーザーの情報
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        registerUser: async (registerUserRequest: RegisterUserRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'registerUserRequest' is not null or undefined
            assertParamExists('registerUser', 'registerUserRequest', registerUserRequest)
            const localVarPath = `/api/users`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(registerUserRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UsersApi - functional programming interface
 * @export
 */
export const UsersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UsersApiAxiosParamCreator(configuration)
    return {
        /**
         * ログインユーザーの情報を取得する 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async fetchLoginUserInfo(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fetchLoginUserInfo(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 他ユーザーの詳細情報を取得する 
         * @param {string} userId 詳細情報を取得したい他ユーザーのUser ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async fetchOtherUserDetail(userId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserDetail>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fetchOtherUserDetail(userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * # 概要 ユーザーの一覧を取得する。<br> クエリパラメータで取得するユーザーの条件を指定可能。 # 詳細仕様 - ログインユーザー自身は一覧に含まれない。 - 一覧は登録日時(createdAt)の降順で返却される。 
         * @param {string} [keyword] 好きなアーティスなどのキーワードを指定。自己紹介と好きなジャンル・グループ・アーティストの記載から検索される&#x60;,&#x60;区切りで複数指定可能
         * @param {number} [position] &#x60;positionsのid&#x60;を指定。&#x60;,&#x60;区切りで複数指定可能
         * @param {number} [prefecture] &#x60;prefecturesのid&#x60;を指定。&#x60;,&#x60;区切りで複数指定可能
         * @param {number} [minage] 取得対象に含める最低年齢
         * @param {number} [maxage] 取得対象に含める最高年齢
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async fetchOtherUsers(keyword?: string, position?: number, prefecture?: number, minage?: number, maxage?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserListResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fetchOtherUsers(keyword, position, prefecture, minage, maxage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * ユーザーを新規登録する 
         * @param {RegisterUserRequest} registerUserRequest 新規登録するユーザーの情報
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async registerUser(registerUserRequest: RegisterUserRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.registerUser(registerUserRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UsersApi - factory interface
 * @export
 */
export const UsersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UsersApiFp(configuration)
    return {
        /**
         * ログインユーザーの情報を取得する 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fetchLoginUserInfo(options?: any): AxiosPromise<User> {
            return localVarFp.fetchLoginUserInfo(options).then((request) => request(axios, basePath));
        },
        /**
         * 他ユーザーの詳細情報を取得する 
         * @param {string} userId 詳細情報を取得したい他ユーザーのUser ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fetchOtherUserDetail(userId: string, options?: any): AxiosPromise<UserDetail> {
            return localVarFp.fetchOtherUserDetail(userId, options).then((request) => request(axios, basePath));
        },
        /**
         * # 概要 ユーザーの一覧を取得する。<br> クエリパラメータで取得するユーザーの条件を指定可能。 # 詳細仕様 - ログインユーザー自身は一覧に含まれない。 - 一覧は登録日時(createdAt)の降順で返却される。 
         * @param {string} [keyword] 好きなアーティスなどのキーワードを指定。自己紹介と好きなジャンル・グループ・アーティストの記載から検索される&#x60;,&#x60;区切りで複数指定可能
         * @param {number} [position] &#x60;positionsのid&#x60;を指定。&#x60;,&#x60;区切りで複数指定可能
         * @param {number} [prefecture] &#x60;prefecturesのid&#x60;を指定。&#x60;,&#x60;区切りで複数指定可能
         * @param {number} [minage] 取得対象に含める最低年齢
         * @param {number} [maxage] 取得対象に含める最高年齢
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fetchOtherUsers(keyword?: string, position?: number, prefecture?: number, minage?: number, maxage?: number, options?: any): AxiosPromise<UserListResponse> {
            return localVarFp.fetchOtherUsers(keyword, position, prefecture, minage, maxage, options).then((request) => request(axios, basePath));
        },
        /**
         * ユーザーを新規登録する 
         * @param {RegisterUserRequest} registerUserRequest 新規登録するユーザーの情報
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        registerUser(registerUserRequest: RegisterUserRequest, options?: any): AxiosPromise<void> {
            return localVarFp.registerUser(registerUserRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UsersApi - interface
 * @export
 * @interface UsersApi
 */
export interface UsersApiInterface {
    /**
     * ログインユーザーの情報を取得する 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApiInterface
     */
    fetchLoginUserInfo(options?: AxiosRequestConfig): AxiosPromise<User>;

    /**
     * 他ユーザーの詳細情報を取得する 
     * @param {string} userId 詳細情報を取得したい他ユーザーのUser ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApiInterface
     */
    fetchOtherUserDetail(userId: string, options?: AxiosRequestConfig): AxiosPromise<UserDetail>;

    /**
     * # 概要 ユーザーの一覧を取得する。<br> クエリパラメータで取得するユーザーの条件を指定可能。 # 詳細仕様 - ログインユーザー自身は一覧に含まれない。 - 一覧は登録日時(createdAt)の降順で返却される。 
     * @param {string} [keyword] 好きなアーティスなどのキーワードを指定。自己紹介と好きなジャンル・グループ・アーティストの記載から検索される&#x60;,&#x60;区切りで複数指定可能
     * @param {number} [position] &#x60;positionsのid&#x60;を指定。&#x60;,&#x60;区切りで複数指定可能
     * @param {number} [prefecture] &#x60;prefecturesのid&#x60;を指定。&#x60;,&#x60;区切りで複数指定可能
     * @param {number} [minage] 取得対象に含める最低年齢
     * @param {number} [maxage] 取得対象に含める最高年齢
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApiInterface
     */
    fetchOtherUsers(keyword?: string, position?: number, prefecture?: number, minage?: number, maxage?: number, options?: AxiosRequestConfig): AxiosPromise<UserListResponse>;

    /**
     * ユーザーを新規登録する 
     * @param {RegisterUserRequest} registerUserRequest 新規登録するユーザーの情報
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApiInterface
     */
    registerUser(registerUserRequest: RegisterUserRequest, options?: AxiosRequestConfig): AxiosPromise<void>;

}

/**
 * UsersApi - object-oriented interface
 * @export
 * @class UsersApi
 * @extends {BaseAPI}
 */
export class UsersApi extends BaseAPI implements UsersApiInterface {
    /**
     * ログインユーザーの情報を取得する 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public fetchLoginUserInfo(options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).fetchLoginUserInfo(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 他ユーザーの詳細情報を取得する 
     * @param {string} userId 詳細情報を取得したい他ユーザーのUser ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public fetchOtherUserDetail(userId: string, options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).fetchOtherUserDetail(userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * # 概要 ユーザーの一覧を取得する。<br> クエリパラメータで取得するユーザーの条件を指定可能。 # 詳細仕様 - ログインユーザー自身は一覧に含まれない。 - 一覧は登録日時(createdAt)の降順で返却される。 
     * @param {string} [keyword] 好きなアーティスなどのキーワードを指定。自己紹介と好きなジャンル・グループ・アーティストの記載から検索される&#x60;,&#x60;区切りで複数指定可能
     * @param {number} [position] &#x60;positionsのid&#x60;を指定。&#x60;,&#x60;区切りで複数指定可能
     * @param {number} [prefecture] &#x60;prefecturesのid&#x60;を指定。&#x60;,&#x60;区切りで複数指定可能
     * @param {number} [minage] 取得対象に含める最低年齢
     * @param {number} [maxage] 取得対象に含める最高年齢
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public fetchOtherUsers(keyword?: string, position?: number, prefecture?: number, minage?: number, maxage?: number, options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).fetchOtherUsers(keyword, position, prefecture, minage, maxage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * ユーザーを新規登録する 
     * @param {RegisterUserRequest} registerUserRequest 新規登録するユーザーの情報
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public registerUser(registerUserRequest: RegisterUserRequest, options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).registerUser(registerUserRequest, options).then((request) => request(this.axios, this.basePath));
    }
}
