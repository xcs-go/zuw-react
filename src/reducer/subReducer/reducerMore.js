/**
 * Created by Administrator on 2017/3/12.
 */
// 更多
let reducerMore = (state={pageTitle:"更多"},action) => {
    switch (action.type){
        case "SHOW_MORE":
            return "更多";
            break;
        case "SHOW_TITLE":
            return {pageTitle:state.pageTitle};
            break;
        default:
            return state;
    }
};

export {reducerMore};