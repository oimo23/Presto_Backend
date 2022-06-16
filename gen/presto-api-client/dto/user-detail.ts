/* tslint:disable */
/* eslint-disable */
/**
 * Sample TODO API
 * TODOリストAPIを使ったOpenAPIのサンプル
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
 * @interface UserDetail
 */
export interface UserDetail {
    /**
     * 
     * @type {string}
     * @memberof UserDetail
     */
    'userId': string;
    /**
     * 
     * @type {string}
     * @memberof UserDetail
     */
    'name': string;
    /**
     * 
     * @type {number}
     * @memberof UserDetail
     */
    'age': number;
    /**
     * AWS S3に保存された画像ファイルのURL
     * @type {Array<string>}
     * @memberof UserDetail
     */
    'images'?: Array<string>;
    /**
     * 
     * @type {Array<Position>}
     * @memberof UserDetail
     */
    'positions': Array<Position>;
    /**
     * 
     * @type {string}
     * @memberof UserDetail
     */
    'comment'?: string;
    /**
     * 
     * @type {string}
     * @memberof UserDetail
     */
    'prefecture': string;
    /**
     * 
     * @type {string}
     * @memberof UserDetail
     */
    'preference'?: string;
    /**
     * 
     * @type {string}
     * @memberof UserDetail
     */
    'practiceCycle'?: string;
    /**
     * 
     * @type {string}
     * @memberof UserDetail
     */
    'performanceUrl'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof UserDetail
     */
    'likeGenres'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof UserDetail
     */
    'likeArtists'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof UserDetail
     */
    'hopePracticeDays'?: Array<string>;
    /**
     * 登録日時
     * @type {string}
     * @memberof UserDetail
     */
    'createdAt': string;
    /**
     * 更新日時
     * @type {string}
     * @memberof UserDetail
     */
    'updatedAt': string;
}

