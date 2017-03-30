/**
 * Created by Administrator on 2017/3/9.
 */
import React,{Component} from "react";
import ReactDOM,{render} from "react-dom";
import {Router,Route,hashHistory,Link} from "react-router";
import {Header,Content,Footer} from "../common/public";

class CartPage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div id="more">
                <Header/>
                <Content>this is contentPage</Content>
                <Footer/>
            </div>
        )
    }
}

export default CartPage;