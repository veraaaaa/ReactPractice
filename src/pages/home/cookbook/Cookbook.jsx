import React, { Component } from 'react'
import Header from "./Header"
import Swiper from "./swiper"
import HotCate from "./HotCate"
import HotList from "./HotList"
import Search from "@/search/Search"

export default class Cookbook extends Component {
    render() {
        return (
            <div>
                <Header/> 
                <Swiper/>   
                <Search/>
                <HotCate/>
                <HotList/> 
            </div>
        )
    }
}
