import React, { Component } from 'react';
import axios from 'axios';

export default class UserInfos extends Component {

    constructor(props){
        super(props)
    }
    changeState = (stateKey, value) => {
        let obj = {};
        obj[stateKey] = value;
        this.setState(obj);
    }
    
    render(){
        return (
            <div>
                <h3>Name: {this.props.name}</h3>
                <h3>Job: {this.props.job}</h3>
            </div>
        );
    }
}