/**
 * Created by Administrator on 2017/3/12.
 */
// 购物车
let reducerCart = (state={pageTitle:"购物车"},action) => {
    switch (action.type){
        case "ADD_ITEM_TO_CART":
            return "add success";
            break;
        case "SHOW_TITLE":
            return {pageTitle:state.pageTitle};
            break;
        default:
            return state;
    }
};

export {reducerCart};