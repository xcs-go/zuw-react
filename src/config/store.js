/**
 * Created by Administrator on 2017/3/10.
 */
import {createStore,combineReducers} from "redux";
import * as reducers from "../reducer/reducer";

// 将所有的reducer进行合并
let reducer = combineReducers(reducers);
// 创建store
const store = createStore(reducer);

export default store;