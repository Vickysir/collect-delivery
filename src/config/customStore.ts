/*
 * @Author: your name
 * @Date: 2021-03-22 16:32:14
 * @LastEditTime: 2021-03-22 17:16:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fudi/src/config/customStore.ts
 */
import { LoginRegistPost } from '@/pages/api/types/login';
import { Att, MyStore } from '../__internal';

/**
 * APP_STORE 配置
 */
@MyStore
export class CustomStore {
    //-----------------------------------------------------
    //                  项目需要的共享数据定义在这里
    //----------------------------------------------------
    @Att
    authInfo: IAuthInfo;
    registInfo: LoginRegistPost;
}

/**
 * 数据中心的自定义事件
 */
export interface ICustomStoreEvents {
    //-----------------------------------------------------
    //                  项目需要的事件定义在这里
    //-----------------------------------------------------
    xx: void;
}

/**
 * 登录后的一些数据存储起来,例如：token
 */
export interface IAuthInfo {
    token: string;
}