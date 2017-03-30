/**
 * Created by Administrator on 2017/3/8.
 */

import React,{Component} from "react";
import {Header} from "../common/public";
import {Content} from "../common/public";
import {Footer} from "../common/public";

class RegisterPage extends Component {
    constructor(props){
        super(props);
    };
    render(){
        return (
            <div>
                <Header/>
                <Content>this is RegisterPage</Content>
                <Footer/>
            </div>
        )
    }
}

export default RegisterPage;
