import React, { Component } from 'react';
import style from './Messages.module.css';
import {FaRegSmile, FaSistrix} from 'react-icons/fa';
import { MdSend, MdAttachFile} from 'react-icons/md';
import Message from '../Message/Message'

class Messages extends Component {

  state = {
    message: '',
    search: '',
    messages: [
      {
        "addAt": {
            "$date": "2019-01-28T19:49:06.126Z"
        },
        "_id": {
            "$oid": "5c4f5cb260bd064b4ca20496"
        },
        "time": 1548704945483,
        "content": "It's general",
        "author": "aaa@aa.com",
        "messageId": "2f82029e-84bb-4cc5-a69b-e5930bb25cd9"
    },
    {
        "_id": {
            "$oid": "5c4f7f44c4454b3654b3b472"
        },
        "time": 1548713795690,
        "content": "hello)) it's default start chat.",
        "author": "kk@kk.com",
        "messageId": "efdca3e8-f155-418e-ac93-479e22afa86a",
        "addAt": {
            "$date": "2019-01-28T22:16:36.247Z"
        }
    }
],
messages2: [
  {
    "addAt": {
        "$date": "2019-01-28T19:49:06.126Z"
    },
    "_id": {
        "$oid": "5c4f5cb260bd064b4ca20496"
    },
    "time": 1548704945483,
    "content": "It's generaldv  aga;kgj ;kas;dj sa;kjf alkjgaskjg ;laj j al;ksjg;alsk jalskjgsakj slag",
    "author": "aaa@aa.com",
    "messageId": "2f82029e-84bb-4cc5-a69b-e5930bb25cd9"
},
{
    "_id": {
        "$oid": "5c4f7f44c4454b3654b3b472"
    },
    "time": 1548713795690,
    "content": "hello)) it's default start chat. askgjhadjk has;g ha; hakjsdh a;sdh a;shas;kj has;jd ha;sfhsa;f h;saf ",
    "author": "kk@kk.com",
    "messageId": "efdca3e8-f155-418e-ac93-479e22afa86a",
    "addAt": {
        "$date": "2019-01-28T22:16:36.247Z"
    }
}
]
  }

  

  handlerChange=(e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    return (
      <div className={style.main}>
        <div className={style.headerMain}>
          <div className={style.header}>
            <div className={style.headerName}>
              <h2 className={style.name}>Prog Blog</h2>
              <p className={style.members}>4331 members</p>
            </div>
            <form className={style.headerForm} onSubmit={this.formSubmit}>
              <FaSistrix className={style.searchImg}/>
              <input name='search' type="text" placeholder='Search...' className={style.search} value={this.state.search} onChange={this.handlerChange}/>
            </form>
          </div>
        </div>
        <div className={style.messages}>
          <div className={style.messagesArea}>
            <Message messages={this.state.messages} messages2={this.state.messages2}/>
          </div>
          <form className={style.messageForm} onSubmit={this.formSubmit}>
            <MdAttachFile className={style.addFile}/>
            <input type="text" placeholder='Enter the message' name='message' value={this.state.message} onChange={this.handlerChange} className={style.messageInput}/>
            <FaRegSmile className={style.smile}/>
            <MdSend className={style.send}/>
          </form>
        </div>
      </div>
    );
  }
}

export default Messages;