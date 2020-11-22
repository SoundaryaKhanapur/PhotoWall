import React, { Component } from 'react'
import List from './List';
import Title from './Title';

class Main extends Component{
    render(){
        return <div>
            <Title title={'Todo'}/>
            <List tasks = {['exercise','work']}/>
            <List tasks = {['eat','sleep']}/>
        </div>
    }
}

export default Main