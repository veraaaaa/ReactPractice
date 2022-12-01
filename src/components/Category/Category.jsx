import React, { Component } from 'react'
// 引用样式
import {CateWrap} from "./styledgory.js"


import { get } from "../../utils/http"
export default class Category extends Component {
    state={
        datasource:null,
        currentItem:"",
        defaultItem:""
    }
    // 在数据改变的时候调用钩子
    static getDerivedStateFromProps(props, state) {
        if(props.defaultItem!==state.defaultItem){
            return {
                ...state,
                defaultItem:props.defaultItem,
                currentItem:props.defaultItem
            }
        }
        return null
    }
    async componentDidMount() {
        let result= await get({
                url:"/api/category"
        })
        console.log(result)
        this.setState({
            datasource:result.data
        })
    }
    handleItemClick=(item)=>{
        return ()=>{
            this.setState({
                currentItem:item
            })
        }
    }
    render() {
        let {type}=this.props
        let data=this.state.datasource? Object.keys(this.state.datasource[type]):[]
        let contents=this.state.datasource? this.state.datasource[type][this.state.currentItem]:[]
        return (
            <CateWrap>
                <div>
                    <ul>
                        {data.map(value=>{
                                return(
                                    this.state.currentItem===value
                                    ?<li key={value} className="active" ><span>{value}</span></li>
                                    :<li key={value} onClick={this.handleItemClick(value)}>{value}</li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div>
                    <ul>
                       {
                           contents.map((value)=>{
                               return(
                               <li key={value}>{value}</li>
                               )
                           })
                       }
                    </ul>
                </div>
            </CateWrap>
        )
    }
}
