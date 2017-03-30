/**
 * Created by Administrator on 2017/3/11.
 */
import React,{Component} from "react";
import {render} from "react-dom";
import {connect} from "react-redux";

import {Header,Content} from "../../common/public";
import {getShowDetailDataAction} from "../../action/showDetailAction";
import "../../style/showDetail.scss";

class ShowDetailPage extends Component{
    componentWillMount(){
        this.props.getShowDetailData(this.props.params.goodsId);
    };
    render() {
        let {showDetailData} = this.props;
        console.log(showDetailData[0]);
        console.log("zzzzz");
        if(showDetailData[0] === undefined) showDetailData[0] = {};
        return (
            <div>
                <Header/>
                <Content>
                    <div className="showDetail">
                        <div>
                            <img src={showDetailData[0].goodsListImg} alt=""/>
                        </div>
                        <p>品牌名称:{showDetailData[0].goodsName}</p>
                        <p>商品名称:{showDetailData[0].goodsName}</p>
                        <p>材质:{showDetailData[0].detail}</p>
                    </div>
                </Content>
            </div>
        )

    }
}

let mapStateToProps = (state) => {
    console.log(state.reducerShowDetail);
    console.log(state.reducerShowDetail + "3333");
    return {
        showDetailData:state.reducerShowDetail.showDetailData
    }
};

let mapDispatchToProps = (dispatch) => {
    return{
        getShowDetailData:(id)=>dispatch(getShowDetailDataAction(dispatch,id))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowDetailPage);

