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
  }

  componentDidMount() {

    //код Катя
    window.socket.on("all-channels", (data) => {
      if (this.props.currentChannel === null) {
        let currentChannel = data.allChannels.find(el => el.channelName === 'General')
        this.props.setAllChannels(data.allChannels)
        this.props.setCurrentChannel(currentChannel)

          this.setState({
            // channels: data.channels,
            // currentChannel: data.channels.find(el => el.channelName === 'General'),
            online: data.online,
            usersOnline: [...data.usersOnline],
            userId: data.clientId,
        })
      } else {
        //почему здесь просто data?
        let currentChannel =  data.find(el => this.props.currentChannel._id === el._id)
        console.log(currentChannel);
        this.props.setAllChannels(data)
        this.props.setCurrentChannel(currentChannel)
      }
  })
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

     setTimeout(() => this.setDataToRedux(data), 6)
        // console.log(data)
        // let objUser = {}
        //   if (data.currentUser.avatar) {
        //     // console.log('exist')
        //     objUser = {...data.currentUser, avatar:`data:image/jpeg;base64,${data.currentUser.avatar}`}
        //   } else {
        //     // console.log('noooooo exist')
        //     objUser =data.currentUser
        //   }
        //   // console.log(objUser)
        // let arrUsers = data.allUsers.map(el => el.avatar ? ({...el, avatar:`data:image/jpeg;base64,${el.avatar}`}) : el)
        // let currentChannel = data.allChannels.find(el => el.channelName === 'General')

        // this.props.setAllChannels(data.allChannels)
        // this.props.setAllUsers(arrUsers)
        // this.props.setCurrentChannel(currentChannel)
        // this.props.setCurrentUser(objUser)

        // this.changeState()
      
      
      //   this.setState({          
      //     currentUser: objUser,
      //     // user: message.currentUser.username,
      //     error: '',
      //     email: '',
      //     password: '',
      //     allUsers: arrUsers, 
      //     channels: data.allChannels,
      //     online: data.online,
      //     // usersOnline: usersOnline,
      //     clientId: data.clientId,
      //     currentChannel: data.allChannels.find(el => el.channelName === 'General'),
      //     clearInput: true,
      //   })
      } else {
        this.setState({
          error: data.message,
        })
      }
    })
  }

  setDataToRedux = async(data) => {
    let objUser = {}
    if (data.currentUser.avatar) {
      // console.log('exist')
      objUser = {...data.currentUser, avatar:`data:image/jpeg;base64,${data.currentUser.avatar}`}
    } else {
      // console.log('noooooo exist')
      objUser =data.currentUser
    }
    let arrUsers = data.allUsers.map(el => el.avatar ? ({...el, avatar:`data:image/jpeg;base64,${el.avatar}`}) : el)
    let currentChannel = data.allChannels.find(el => el.channelName === 'General')

    await this.props.setAllChannels(data.allChannels)
    await this.props.setAllUsers(arrUsers)
    await this.props.setCurrentChannel(currentChannel)
    await this.props.setCurrentUser(objUser)

    // this.setState({
    //       clearInput: true,
    //     })
  }

  render() {
    return (
      // <div>
       <Switch>
         <Route exact path='/' render={(props) => <Chat {...props} clearInput={this.state.clearInput}/>} />
         <Route path='/login' render={(props) => <Login {...props} clearInput={this.state.clearInput}/>}/>
        
         {/* <Route path='/login' component={Login}/> */}
         <Route path='/registration' component={Register}/>
         
       </Switch>
       
      // </div>
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