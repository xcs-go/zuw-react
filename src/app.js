import React from "react";
import ReactDOM,{render} from "react-dom";
import {Provider} from "react-redux";

import store from "./config/store";
import ListPage from "./components/list";
import CartPage from "./components/cart";
import MinePage from "./components/mine";
import MorePage from "./components/more";
import HomePage from "./components/home";
import ShowDetailPage from "./components/subPage/showDetail";
import DetailPage from "./components/detail";
import {Router,Route,hashHistory} from "react-router";

// SASS文件
import "./style/common/reset.scss";

// 静态js文件
import "./scripts/rem.js";

render(
    <Provider store= {store}>
        <Router history={hashHistory}>
            <Route path="/(home)" component={HomePage}/>
            <Route path="/list" component={ListPage}/>
            <Route path="/detail(/:goodsIndex)" component={DetailPage}/>
            <Route path="/cart" component={CartPage}/>
            <Route path="/mine" component={MinePage}/>
            <Route path="/more" component={MorePage}/>
            <Route path="/subPage/Detail(/:goodsId)" component={ShowDetailPage}/>
        </Router>
    </Provider>,document.getElementById("root"));


// 热替换
if(module.hot){
    module.hot.accept();
}
