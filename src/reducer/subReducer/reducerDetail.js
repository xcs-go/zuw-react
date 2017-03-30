/**
 * Created by Administrator on 2017/3/12.
 */
// 详情页
let reducerDetail = (state={detailData:{}},action)=>{
    // 判断action
    switch (action.type){
        case "SHOW_SHOP_DETAIL_START":
            return {detailData:{}};
            break;
        case "SHOW_SHOP_DETAILE_SUCCESS":
            console.log("数据请求成功" + action.data.index);
            console.log(action.data.data);
            console.log(action);
            return {detailData:action.data};
            break;
        case "SHOW_SHOP_DETAIL_ERROR":
            return state;
            break;
        case "ADD_SHOP_TO_CART_START":
            console.log("ADD_SHOP_TO_CART");
            return state;

        default:
            return state;
            break;
    }
};

export {reducerDetail};