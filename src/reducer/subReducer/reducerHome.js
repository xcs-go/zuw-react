/**
 * Created by Administrator on 2017/3/12.
 */
// 首页的reeducer函数
let reducerHome = (state={homeData:[]},action) => {
    // 判断action类型
    switch (action.type){
        case "GET_HOME_DATA_START":
            console.log("开始");
            return {homeData:[]};
            break;
        case "GET_HOME_DATA_SUCCESS":
            console.log("成功");
            console.log(action.data);
            //homeData = action.data;
            return{homeData:action.data};
            break;
        case "GET_HOME_DATA_ERROR":
            console.log("失败");
            return state;
            break;
        default:
            return state;
            break;
    }
};

export {reducerHome};