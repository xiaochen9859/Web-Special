import axios from 'axios';
import QS from 'qs';
import config from '../config/index.js';
import requestConfig from '../config/requestConfig.js';

export function postRequest(url, params) {
    // console.log(config)
    return new Promise((resolve, reject) => {
        // if (url) {
        //     url = config.baseUrl + url
        // } 
        axios({
            method: 'post',
            // baseURL: config.baseUrl, 
            url: requestConfig[url] || url,
            data: params,
            // withCredentials: true,
            // headers:{
            //     // "Content-Type": "application/json",
            //     'Access-Control-Allow-Origin': '*'
            // },
            transformRequest: [function (data) {
                //可对data数据编辑，例如增加token
                return QS.stringify(data);
                // return data;
            }],
        }).then(res => {
            if (res.status == 200) {
                resolve(res.data);
            } else {
                reject(res.data)
            }
        }).catch(err => {
            reject(err.data)
        })
    });
}

export function getRequest(url, params){
    return new Promise((resolve, reject) =>{
        // if (url) {
        //     url = config.baseUrl + url
        // } 
        axios({
            method: 'get',
            // baseURL: config.baseUrl,
            url: url,
            data: params,
            transformRequest: [function (data) {
                //可对data数据编辑，例如增加token
                return QS.stringify(data);
            }],
        }).then(res => {
            if (res) {
                resolve(res.data);
            } else {
                reject(res.data)
            }
        }).catch(err => {
            reject(err.data)
        })
    });
}