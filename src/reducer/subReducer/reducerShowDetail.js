/**
 * Created by Administrator on 2017/3/12.
 */
// 展示商品详情页
let reducerShowDetail = (state={showDetailData:[]},action)=>{
    switch (action.type){
        case "SHOW_DETAILE_PAGE_START":
            console.log("kaishi");
            return{showDetailData:[]};
            break;
        /*SHOW_DETAILE_PAGE_SUCCESS*/
        case "SHOW_DETAILE_PAGE_SUCCESS":
            console.log("CHENGGONG");
            console.log(action.data);
            console.log(action.data+ "fffff");
            return {showDetailData:action.data};
            break;
        case "SHOW_DETAILE_PAGE_ERROR":
            console.log("cuowu");
            return state;
            break;
        default:
            return state;
            break;
    }
};
export {reducerShowDetail};