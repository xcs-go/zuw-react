/**
 * Created by Administrator on 2017/3/8.
 */
import React,{Component} from "react";
import {Link} from "react-router";
import ReactDOM,{render} from "react-dom";
import {connect} from "react-redux";
import {Header} from "../common/public";
import {Content} from "../common/public";
import {Footer} from  "../common/public";
import {getShopListDataAction} from "../action/listAction";

// SASS
import "../style/list.scss";

class ListPage extends Component {
    // 当页面将要加载的时候开始渲染数据
    componentWillMount(){
      // 对数据进行请求
        this.props.getShopListData();
    };
    render(){
        console.log(this.props.listData);
        console.log(this.props);
        return(
            <div>
                <Header/>
                <Content>
                    <ul className="list">
                        {
                            this.props.listData.map((ele,index)=>
                                <li key={index}>
                                    <Link to={"/detail/" + index }><img src={ele.goodsListImg} alt=""/></Link>
                                    <p className="good-title">{ele.goodsName}</p>
                                    <p>
                                        <span className="good-price">{ele.price}</span>
                                        <span className="undiscount-price">{parseInt(parseInt(ele.price) / (parseInt(ele.discount)?(parseInt(ele.discount) / 10) : 1))}</span>
                                    </p>
                                </li>
                            )
                        }
                    </ul>
                </Content>
                <Footer/>
            </div>
        )
    }
}

// 将仓库里的state(所有的state)传递给组件
let mapStateToProps = (state)=> {
    console.log(state);
    console.log(state.reducerList);
    return {
        listData:state.reducerList.listData
    }
};

// 把所有的dispatch action的方法传递给组件
let mapDispatchToProps = (dispatch) => {
    return {
        getShopListData:()=>dispatch(getShopListDataAction(dispatch))
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(ListPage);

