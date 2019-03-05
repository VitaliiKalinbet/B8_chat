import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Chat from './Chat/Chat';
import Register from './Register/Register';
import Login from './Login/Login';

import { connect } from 'react-redux';
import { setAllChannels } from './redux/actions/allChannelsAction';
import { setAllUsers } from './redux/actions/allUsersAction';
import { setCurrentChannel } from './redux/actions/currentChannelAction';
import { setCurrentUser } from './redux/actions/currentUserAction';
import { setClientId } from './redux/actions/clientIdAction'

import socket from "socket.io-client";
window.socket = socket(window.location.origin, {
  path: "/chat/"
}, { transports: ['websocket'] });

class App extends Component {

  state = {
    clearInput: false,
    error: '',
    isError: false,
  }

  componentDidMount() {
    window.socket.on("all-channels", (data) => {
      if (this.props.currentChannel === null) {
        let currentChannel = data.allChannels.find(el => el.channelName === 'General')
        this.props.setAllChannels(data.allChannels)
        this.props.setCurrentChannel(currentChannel)
      } else {
        let currentChannel = data.find(el => this.props.currentChannel._id === el._id)
        this.props.setAllChannels(data)
        this.props.setCurrentChannel(currentChannel)
      }
    });

    this.props.history.push('/login');
    window.socket.emit('new-user');

    window.socket.on('client-id', (id) => {
      this.props.setClientId(id)
    });

    window.socket.on('login-on-DB', (data) => {
      if (data.message === 'User login success') {
        this.props.history.push('/')
        this.setDataToRedux(data)
      } else {
        this.setState({
          error: data.message,
          isError: true,
        })
      }
    });

    window.socket.on('registration-on-DB', (data) => {
      if (data.message === 'User created') {
        this.props.history.push('/')
        this.setDataToRedux(data)
      } else {
        this.setState({
          error: data.message,
        })
      }
    });

    window.socket.on('user-avatar-was-edited', (obj) => {
      this.props.setCurrentUser(obj)
    });

    window.socket.on('all-users', (data) => {
      this.props.setAllUsers(data)
    });
  }

  setDataToRedux = async (data) => {
    let currentChannel = data.allChannels.find(el => el.channelName === 'General')
    await this.props.setAllChannels(data.allChannels)
    await this.props.setAllUsers(data.allUsers)
    await this.props.setCurrentChannel(currentChannel)
    await this.props.setCurrentUser(data.currentUser)
    this.setState({
      error: '',
    })
    let obj = {
      userEmail: this.props.currentUser.email,
      clientId: this.props.clientId,
    }
    window.socket.emit('send-user-name-to-online-DB', obj)
  }

  clearError = () => {
    this.setState({
      error: '',
    })
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' render={(props) => <Chat {...props} clearInput={this.state.clearInput} />} />
        <Route path='/login' render={(props) => <Login {...props} isError={this.state.isError} error={this.state.error} clearError={this.clearError} />} />
        <Route path='/registration' render={(props) => <Register {...props} isError={this.state.isError} error={this.state.error} clearError={this.clearError} />} />
      </Switch>
    );
  }
}

function MSTP(state) {
  return {
    allChannels: state.allChannels,
    allUsers: state.allUsers,
    currentChannel: state.currentChannel,
    currentUser: state.currentUser,
    clientId: state.clientId,
  }
}

function MDTP(dispatch) {
  return {
    setAllChannels: function (data) {
      dispatch(setAllChannels(data))
    },
    setAllUsers: function (data) {
      dispatch(setAllUsers(data))
    },
    setCurrentChannel: function (data) {
      dispatch(setCurrentChannel(data))
    },
    setCurrentUser: function (data) {
      dispatch(setCurrentUser(data))
    },
    setClientId: function (data) {
      dispatch(setClientId(data))
    },
  }
}

export default withRouter(connect(MSTP, MDTP)(App));