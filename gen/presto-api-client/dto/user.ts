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


import { Position } from './position';

/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'userId': string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'name': string;
    /**
     * 
     * @type {number}
     * @memberof User
     */
    'age': number;
    /**
     * AWS S3に保存された画像ファイルのURL
     * @type {string}
     * @memberof User
     */
    'image'?: string;
    /**
     * 
     * @type {Array<Position>}
     * @memberof User
     */
    'positions': Array<Position>;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'prefecture': string;
    /**
     * 登録日時
     * @type {string}
     * @memberof User
     */
    'createdAt': string;
}

