/**
 * Created by Administrator on 2017/3/12.
 */
import fetchJsonp from "fetch-jsonp";
import LoadUrl from "../config/server";

let getHomeDataAction = (dispatch) => {
    fetchJsonp(LoadUrl.homeUrl,{timeout:20000}).then(res=>res.json())
        .then(data=>{
            //data是一个数组类型
            console.log("chenggong");
            return dispatch({type:"GET_HOME_DATA_SUCCESS",data:data});
        }).catch(err=>{
            console.log("shibai");
            console.log(err);
            return dispatch({type:"GET_HOME_DATA_ERROR"});
    });

    // 返回一个默认的action，否则会报错;Uncaught Error: Actions must be plain objects. Use custom middleware for async actions.
    return{type:"GET_HOME_DATA_START"};
}

export {getHomeDataAction};