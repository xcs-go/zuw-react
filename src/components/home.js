/**
 * Created by Administrator on 2017/3/9.
 */
import React,{Component} from "react";
import ReactDOM,{render} from "react-dom";
import {connect} from "react-redux";
import {Router,Route,Link,hashHistory} from "react-router";

import {Header,Content,Footer} from "../common/public";
import {getHomeDataAction} from "../action/homeAction";

class HomePage extends Component{
    constructor(props){
        super(props);
    };
    componentWillMount(){
        this.props.getHomeData();
    };
    render(){
        console.log(this.props);
        let {homeData} = this.props;
        let imageStr = homeData.length?homeData[0].goodsBenUrl.slice(2,-3):"0";
        console.log(imageStr);
        let imageArr = imageStr.split('","');
        console.log(imageArr);
        return (
            <div id="home">
                <Header/>
                <Content>
                    <div>
                        <div className="banner">
                            <ul>
                                {
                                    imageArr.map((element,index)=>
                                        <li>
                                            <a href="#">
                                                <img src={element} alt=""/>
                                            </a>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </Content>
                <Footer/>
            </div>
        )
    }
}

// 处理state
let mapStateToProps = (state)=>{
    console.log(state.reducerHome);
    console.log("处理state");
    console.log(state.reducerHome.homeData);
    return{
        homeData:state.reducerHome.homeData
    }
}

// 处理action事件
let mapDispatchToProps = (dispatch) =>{
    return {
        getHomeData:()=>dispatch(getHomeDataAction(dispatch))
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);