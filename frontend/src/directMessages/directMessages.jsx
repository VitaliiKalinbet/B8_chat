import React, { Component } from 'react';
import style from './directMessages.module.css';
import { connect } from 'react-redux';
// import { setCurrentDirectUser } from '../redux/actions/allChannelsAction.js';
import { FaCircle } from 'react-icons/fa';
import avatar from '../img/avatar.jpg';

class DirectMessages extends Component {

  channels = [
    {
      avatar: '../img/avatar.jpg',
      name: 'Bill',
      id: 'id-111'
    },
    {
      avatar: '../img/avatar.jpg',
      name: 'Arnold',
      id: 'id-222'
    },
    {
      avatar: '../img/avatar.jpg',
      name: 'Clara',
      id: 'id-333'
    },
    {
      avatar: '../img/avatar.jpg',
      name: 'Sara',
      id: 'id-444'
    },
  ]

  state = {
    users:[],
  }

  componentDidMount() {
    this.setState({users:this.channels})
  }

  changeDirectUser = (x) => {
    this.props.setCurrentDirectUser(x);
  };

  render() {
    let {users} = this.state;
    return (
      <div className={style.directMessagesWrapper}>
        <h4>Direct Messages</h4>
        <div className={style.line}></div>
        <ul className={style.directMessagesList}>
          {users.length > 0 && users.map(x => <li onClick={() => {this.changeDirectUser(x)}} 
          className={style.directMessagesItem} key={x.id}>
          {/* <i class="fa fa-circle" style={{color:'green'}}></i> */}
          <FaCircle color='green'/>
          <p className={style.pName_plus_avatar}>
            {`${x.name}`}
            <img className={style.avatar} src={avatar} alt="avatar"/>
          </p>
          </li>)}
        </ul>
        
      </div>
    )
  }
}

export default connect(null, null)(DirectMessages);