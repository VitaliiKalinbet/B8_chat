import React, { Component } from 'react';
import {connect} from 'react-redux';
import {handlerChange, clearInput} from '../redux/actions/textAction.js';
import style from './Messages.module.css';
import {FaRegSmile, FaSistrix} from 'react-icons/fa';
import { MdSend, MdAttachFile} from 'react-icons/md'
class Messages extends Component {

  formSubmit=(evt)=>{
    evt.preventDefault();
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
              <input name='search' type="text" placeholder='Search...' className={style.search} value={this.props.search} onChange={this.props.handlerChange}/>
            </form>
          </div>
        </div>
        <div className={style.messages}>
          <div className={style.messagesArea}>
          </div>
          <form className={style.messageForm} onSubmit={this.formSubmit}>
            <MdAttachFile className={style.addFile}/>
            <input type="text" placeholder='Enter the message' value={this.props.text} onChange={this.props.handlerChange} className={style.messageInput}/>
            <FaRegSmile className={style.smile}/>
            <MdSend className={style.send}/>
          </form>
        </div>
      </div>
    );
  }
}
function mapStateToProps(store) {
  return{
    text: store.text,
    search: store.search,
}
}
function mapDispatchToProps(dispatch){
  return{
    handlerChange:function(evt){
          dispatch(handlerChange(evt))
      },
      clearInput:function(){
          dispatch(clearInput())
      }    
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Messages);