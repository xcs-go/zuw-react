/**
 * Created by Administrator on 2017/3/11.
 */
import fetchJsonp from "fetch-jsonp";
import LoadUrl from "../config/server";
let getShowDetailDataAction = (dispatch,id)=>{
    console.log(LoadUrl.listUrl + "?goodsID=" + id);
    fetchJsonp(LoadUrl.listUrl + "?goodsID=" + id,{timeout:20000}).then(res=>res.json())
        .then(data=>{
            // 数据请求成功
            console.log(data);
            dispatch({type:"SHOW_DETAILE_PAGE_SUCCESS",data:data});
        }).catch(err=>{
        // 数据请求失败
        dispatch({type:"SHOW_DETAILE_PAGE_ERROR"})
    });
    return {
        type:"SHOW_DETAILE_PAGE_START"
    }
}

export {getShowDetailDataAction};