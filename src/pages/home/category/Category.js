import React, { Component } from 'react'
import Header from "./Header.jsx"
import Search from "@/search/Search"

import Classify from "../../../components/Category/Category.jsx"
import Material from "../../../components/Category/Category.jsx"

import {CateWrap} from "./styledCategory"

import {Route,Switch,Redirect} from "react-router-dom"

export default class Category extends Component {
    render() {
        return (
            <CateWrap>
                <Header/>
                <Search/>

                <Switch>
              
                    <Route path="/category" render={()=>(<Classify defaultItem="热门" type="category"/>)}/>
                    <Route path="/material" render={()=>(<Material defaultItem="肉类" type="material"/>)}/>
                    <Redirect from="/" to="/material"/>
                </Switch>
            </CateWrap>
        )
    }
}
