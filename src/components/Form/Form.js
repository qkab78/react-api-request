import React, { Component } from 'react';
import axios from 'axios';

import UserInfos from '../UserInfos/UserInfos';
import UsersList from '../UsersList/UsersList';

export default class Form extends Component {

    constructor(props){
        super(props)
        this.state = {
            name:'',
            job:'',
            url:'https://reqres.in/',
            users:[],
            isLoading:true

        };
        this.changeState.bind(this);
        this.handleChange.bind(this);
        this.handleSubmit.bind(this);
    }
    componentDidMount = () => {
        const getRequestUrl = 'api/users?page=2';
        axios({
            method:'get',
            url:this.state.url+getRequestUrl
        }).then(response => {
            console.log('====================================');
            console.log(response.data.data);
            console.log('====================================');
            this.setState({users:response.data.data, isLoading:false});
        });
    }
    changeState = (stateKey, value) => {
        let obj = {};
        obj[stateKey] = value;
        this.setState(obj);
    }
    
    handleChange = (e) => {
        this.changeState(e.target.name, e.target.value);
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        const postRequestUrl = 'api/users';
        const user = {
            name:this.state.name,
            job:this.state.job,
        } 
        axios({
            method:'post',
            url:this.state.url+postRequestUrl,
            data:user
        }).then(response => {
            if(response.status == 201){
                console.log('====================================');
                console.log(response);
                console.log('====================================');
                alert('User created !');
            }
            
        })
    }
    
    render(){
        if (this.state.isLoading != true){
            this.usersList = <UsersList  users={this.state.users}/>;
        }else{
            this.usersList = <h3>Chargement...</h3>;
        }
        return (
            <div>
                <div>
                    <h2>POST Request</h2>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Name:
                            <input type="text" placeholder="Enter your name" name="name" onChange={this.handleChange}/>
                        </label>
                        <br/>
                        <label>
                            Job:
                            <input type="text" placeholder="Enter your name" name="job" onChange={this.handleChange} />
                        </label>
                        <br/>
                        <input type="submit" name="submit" value="Send" />                
                    </form>
                    <UserInfos name={this.state.name} job={this.state.job} />
                </div>
                <div>
                <h2>GET Request</h2>
                    {this.usersList}
                </div>
            </div>
        );
    }
}