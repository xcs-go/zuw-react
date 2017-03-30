/**
 * Created by Administrator on 2017/3/10.
 */
import fetchJsonp from "fetch-jsonp";
import  "fetch-detector";
import $ from "jquery";

import loadUrl from "../config/server";

// 获取数据
let getDetailDataAction = (dispatch,id)=> {
    fetchJsonp(loadUrl.listUrl,{timeout:20000}).then(res=>res.json())
        .then(data=>{
            // 数据请求成功
            /*console.log(data); // data是一个数组
            console.log(data[id]); // data[id]是一个对象*/
            // 包装一个新的对象
            id = +id;
            console.log(data[id] + "请求数据");
            console.log(id + "索引");
            let newData = {
                data:data[id],
                index:id,
                goodsId:data[id].goodsID
            };
            dispatch({type:"SHOW_SHOP_DETAILE_SUCCESS",data:newData});
        }).catch(err=>{
        // 数据请求失败
        console.log(err);
        dispatch({type:"SHOW_SHOP_DETAILE_ERROR"})
    });

    // 在数据加载成功或失败之前先返回一个action事件行为
    return {type:"SHOW_SHOP_DETAIL_START"};
}

// 添加商品到购物车
let addShopAction = (dispatch,goodsId)=>{
    $.ajax({
        type:"post",
        url:loadUrl.updateUrl ,
        data:"userID=xcs&goodsID="+ goodsId + "&number=1",
        success:function (data) {
            console.log("以成功添加到购物车，可以进行结算");
            // 派发一个新的任务;每次添加一件商品
            let newData = {
                goodsId:goodsId,
                number:1
            };
            dispatch({type:"ADD_SHOP_TO_CART_SUCCESS",data:newData});
        },
        error:function (err) {
            console.log(err);
        }

    })
    return {type:"ADD_SHOP_TO_CART_START"};
}

export {getDetailDataAction,addShopAction};
