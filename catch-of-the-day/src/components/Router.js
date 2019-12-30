import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {StorePicker} from './StorePicker'
import {App} from './App'
import {notFound} from "./notFound"


const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={StorePicker}></Route>
            <Route path='/store/:storeId' component={App}></Route>
            <Route component={notFound}></Route>
        </Switch>
    </BrowserRouter>
)

export default Router; 