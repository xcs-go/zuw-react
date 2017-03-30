/**
 * Created by Administrator on 2017/3/8.
 */
import {Header} from "../common/public";
import {Content} from "../common/public";
import {Footer} from "../common/public";
import React,{Component} from "react";
import {Router,Route,hashHistory} from "react-router";

class LoginPage extends Component {
    constructor(props){
        super(props);
    };
    render(){
        return(
            <div>
                <Header/>
                <Content>this is login</Content>
                <Footer/>
            </div>
        )
    }
}

export default LoginPage;
