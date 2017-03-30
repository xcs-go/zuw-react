/**
 * Created by Administrator on 2017/3/12.
 */
// 列表页的reducer
let reducerList = (state={listData:[]},action) => {
    switch (action.type){
        case "GET_LOAD_LIST_DATA":
            console.log("开始加载数据...");
            return state;
            break;
        case "GET_LOAD_LIST_DATA_SUCCESS":
            console.log("数据加载成功...");
            // 更新数据
            return {listData:action.data};
            break;
        case "GET_LOAD_LIST_DATA_ERROR":
            console.log("数据加载失败");
            return state;
            break;
        default:
            return state;
    }
};

export {reducerList};