/**
 * Created by Administrator on 2017/3/8.
 */
import React,{Component} from "react";
import {Router,Route,hashHistory,Link} from "react-router";

// SASS文件
import "../style/common/header.scss";
import "../style/common/footer.scss";
import "../style/common/content.scss";

// 头部
class Header extends Component {
    constructor(props){
        super(props);
    };
    static defaultProps = {
        rightBtnText:"登录",
        leftArror:"<",
        headTitle:"商品列表"
    };
    render(){
        let {rightBtnText,leftArror,headTitle} = this.props;
        return (
            <div id="header">
                <button className="left-btn">{leftArror}</button>
                <p>{headTitle}</p>
                <button className="right-btn">{rightBtnText}</button>
            </div>
        )
    }
}

// 内容
class Content extends Component {
    constructor(props){
        super(props);
    };
    render(){
        console.log(this.props.children);
        return (
            <div id="content">{this.props.children}</div>
        )
    }
}
// 底部
class Footer extends Component {
    constructor(props){
        super(props);
    };
    static defaultProps = {
        home:"首页",
        list:"商品列表",
        cart:"购物车",
        mine:"我的",
        more:"更多"
    }
    render(){
        let {home,list,cart,mine,more} = this.props;
        return (
            <div id="footer">
                <ul>
                    <li><Link to="/home">{home}</Link></li>
                    <li><Link to="/list">{list}</Link></li>
                    <li><Link to="/cart">{cart}</Link></li>
                    <li><Link to="/mine">{mine}</Link></li>
                    <li><Link to="/more">{more}</Link></li>
                </ul>
            </div>

        )
    }
}

// 输出
export {Header,Content,Footer}