/**
 * Created by Administrator on 2017/3/10.
 */
import React,{Component} from "react";
import {connect} from "react-redux";
import {render} from "react-dom";
import {Link} from "react-router";
import store from "../config/store";

// Action
import {getDetailDataAction,addShopAction} from "../action/detailAction";

import ShowDetailPage from "./subPage/showDetail";
import {Header,Content,Footer} from "../common/public";

// SASS
import "../style/detail.scss";

class DetailPage extends Component {
    constructor(props){
        super(props);
        console.log(typeof this.props.addShop + "0000");
    };
    componentWillMount(){
        this.props.getDetaiData(this.props.params.goodsIndex);

    };
    render(){
        let {detailData,addShop} = this.props;
        if(detailData.data===undefined) detailData.data = {};
        console.log(detailData);
        return (
            <div>
                <Header/>
                <Content>
                    <div className="detail-content" style={{display: detailData.data.hasOwnProperty("goodsName")? "block" : "none"}}>
                        <div className="detail-container">
                            <div className="warp">
                                <ul>
                                    <li><img src={detailData.data.hasOwnProperty("goodsListImg")?detailData.data.goodsListImg:""} alt=""/></li>
                                </ul>
                            </div>
                            <p className="shop-name">{detailData.data.hasOwnProperty("goodsName")?detailData.data.goodsName:""}</p>
                            <p className="price"><span className="goods-price">￥{detailData.data.hasOwnProperty("price")?detailData.data.price:""}</span>
                                <span className="discount-price">{detailData.data.hasOwnProperty("discount")?(parseInt(detailData.data.price)/(parseInt(detailData.data.discount)/10)).toFixed(2):""}</span>
                            </p>
                            <p className="buy-counter">购买人数:260</p>
                        </div>
                        <Link to={"/subPage/Detail/" + detailData.goodsId} className="show-detail"><span className="show-detail-text">查看商品详情</span> <span className="arror">{">"}</span></Link>
                        <p className="addShop"><button  onClick={()=>addShop(detailData.goodsId)}>添加到购物车</button></p>
                    </div>
                </Content>
                <Footer/>
            </div>
        )
    }
}


// 将state状态发送的仓库
let mapStateToProps = (state)=>{
    console.log("323333" + state.reducerDetail.detailData);
    console.log(state.reducerDetail.detailData);
    console.log(state.reducerDetail.detailData + "-----");
    return{
        detailData:state.reducerDetail.detailData
    }
};

let mapDispatchToProps = (dispatch)=>{
    return{
        getDetaiData:(id)=>dispatch(getDetailDataAction(dispatch,id)),
        addShop:(id)=>dispatch(addShopAction(dispatch,id))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailPage)
