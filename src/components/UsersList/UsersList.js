import React, { Component } from 'react';
import axios from 'axios';

export default class UsersList extends Component {

    constructor(props){
        super(props)
    }

    render(){
        this.data = this.props.users.map((user, index) => {
            return (
                <li key={index}>
                    <h4>Name: {user.first_name} {user.last_name}</h4>
                    <img src={user.avatar} alt='avatar'/>
                </li>
            );
        })
        console.log('====================================');
        console.log(this.props);
        console.log('====================================');
        return (
            <div>
                <ul>
                    {this.data}
                </ul>
            </div>
        );
    }
}