/**
 * Created by Administrator on 2017/3/10.
 */
import fetchJsonp from "fetch-jsonp";

import LoadUrl from "../config/server";

// 获取数据Action事件
let getShopListDataAction = (dispatch)=>{
    fetchJsonp(LoadUrl.listUrl,{timeout:20000}).then(res=>res.json())
        .then(data=>{
            // 数据加载完成，分发一个返回数据的action
            dispatch({type:"GET_LOAD_LIST_DATA_SUCCESS",data:data});
        }).catch(err=>{
        console.log(err);
        // 数据加载失败，分发一个失败的action
        dispatch({type:"GET_LOAD_LIST_DATA_ERROR"});
    });
    return {
        type:"GET_LOAD_LIST_DATA"
    }
};

export {getShopListDataAction};