import React, { Component } from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
// import { connect } from 'react-redux';
// import Loader from 'react-loader-spinner';
import Chat from './Chat/Chat';
import Register from './Register/Register';
import Login from './Login/Login';
// import style from './App.module.css';

import {connect} from 'react-redux';
import {setAllChannels} from './redux/actions/allChannelsAction';
import {setAllUsers} from './redux/actions/allUsersAction';
import {setCurrentChannel} from './redux/actions/currentChannelAction';
import {setCurrentUser} from './redux/actions/currentUserAction';

import socket from "socket.io-client";
window.socket = socket(window.location.origin, {
  path: "/chat/"
}, {transports: ['websocket']});



class App extends Component {
  
  state = {
    clientId: '',
    clearInput: false,
    error: '',
  }

  componentDidMount() {
    // if(!this.state.modal) {
    //   this.props.history.push('/')
    // } else {
      this.props.history.push('/login')
    // }

    window.socket.emit('new-user')
    
    window.socket.on('client-id', (id) => {
      this.setState({
        clientId: id
      })
    })

    window.socket.on('login-on-DB', (data) => {
      if (data.message === 'User login success') {
      this.props.history.push('/')
      this.setDataToRedux(data)
        } else {
          this.setState({
            error: data.message,
          })
        }
      })

      window.socket.on('registration-on-DB', (data) => {
        if(data.message === 'User created') {
          this.props.history.push('/')
          this.setDataToRedux(data)
        } else {
          this.setState({
            error: data.message,
          })
        }
      })

      window.socket.on('user-avatar-was-edited', (obj) => {
        // console.log('Its obj!!', obj)
        this.props.setCurrentUser(obj)
      })

      
  }

  setDataToRedux = async(data) => {
    let currentUser = data.currentUser
  
    let arrUsers = data.allUsers.map(el => el.avatar ? ({...el, avatar:`data:image/jpeg;base64,${el.avatar}`}) : el)

    let currentChannel = data.allChannels.find(el => el.channelName === 'General')

    await this.props.setAllChannels(data.allChannels)
    await this.props.setAllUsers(arrUsers)
    await this.props.setCurrentChannel(currentChannel)
    await this.props.setCurrentUser(currentUser)

    this.setState({
      error: '',
    })
  }

  render() {
    return (
       <Switch>
         <Route exact path='/' render={(props) => <Chat {...props} clearInput={this.state.clearInput}/>} />
         <Route path='/login' render={(props) => <Login {...props} clearInput={this.state.clearInput}/>}/>
         <Route path='/registration' component={Register}/>   
       </Switch>
    );
  }
}

function MSTP (state) {
  return {
      allChannels: state.allChannels,
      allUsers: state.allUsers,
      currentChannel:state.currentChannel,
      currentUser : state.currentUser,
  }
}

function MDTP (dispatch) {
  return {
      setAllChannels: function (data){
          dispatch(setAllChannels(data))
      },
      setAllUsers: function (data){
        dispatch(setAllUsers(data))
      },
        setCurrentChannel: function (data){
          dispatch(setCurrentChannel(data))
      },
        setCurrentUser: function (data){
          dispatch(setCurrentUser(data))
      },
  }
}

export default withRouter(connect(MSTP, MDTP)(App));