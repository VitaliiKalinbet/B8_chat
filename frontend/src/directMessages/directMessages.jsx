import React, { Component } from 'react';
import style from './directMessages.module.css';
import { connect } from 'react-redux';
import { setCurrentDirectUser } from '../redux/actions/actions.js';

class DirectMessages extends Component {

  channels = [
    {
      name: 'Bill',
      id: 'id-111'
    },
    {
      name: 'Arnold',
      id: 'id-222'
    },
    {
      name: 'Clara',
      id: 'id-333'
    },
    {
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
          {users.length > 0 && users.map(x => <li onClick={() => {this.changeDirectUser(x); this.props.setActiveItemId(x.id);}} 
          className={style.directMessagesItem} key={x.id}>{`@ ${x.name}`}</li>)}

        </ul>
        
      </div>
    )
  }
}

export default connect(null, {setCurrentDirectUser})(DirectMessages);