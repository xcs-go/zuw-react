/**
 * Created by Administrator on 2017/3/12.
 */
// 我的
let reducerMine = (state={pageTitle:"我的"},action) => {
    switch (action.type){
        case "SHOW_DETAIL":
            return "我的详情";
            break;
        case "SHOW_TITLE":
            return {pageTitle:state.pageTitle};
            break;
        default:
            return state;
    }
};
export {reducerMine};