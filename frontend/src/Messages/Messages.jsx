import React, { Component } from 'react';
import style from './Messages.module.css';
import { FaRegSmile, FaSistrix, FaBars, FaChevronCircleLeft } from 'react-icons/fa';
import { MdSend, MdAttachFile } from 'react-icons/md';
import Message from '../Message/Message';
import uuidv4 from 'uuid';
import {setAllChannels} from '../redux/actions/allChannelsAction';
import {connect} from 'react-redux';
// import {setAllUsers, removeAllUsers,updateAllUsers} from '../redux/actions/allUsersAction';
// import {setCurrentChannel} from '../redux/actions/currentChannelAction';
// import {setCurrentUser} from '../redux/actions/currentUserAction';


//Баги frontenda
// 1) нет скрола для поля сообщений
// 2) при нажатии на иконку не считывается id
// 3) классы работают плохо лево право
// 4) время отображается не корректно

class Messages extends Component {

  state = {
    message: '',
    search: '',
    newMessage:true,
    editMessage:'',
  }

  deleteMessage = (e) => {
    //не срабатывает при нажатии на иконку, не считывает id
    let id = e.target.id
    console.log(id);
    let obj={
        messageId:id ,
        currentChannel: this.props.currentChannel._id,
    }
    console.log(obj)
     window.socket.emit('deleteChannelMessage', obj)
  }

  editMessage = (e) => {
      let id = e.target.id
      // let message = this.state.messages.find(el => el.messageId === id)
      let edit = this.props.currentChannel.messages.find(el => el.messageId === id)
      this.setState({
          message: edit.content,
          newMessage: false,
          editMessage: edit,
      })
  }

  sendMessageToChannel=(e)=> {
    e.preventDefault();
    if (this.state.newMessage) {
        let message = {
            time: Date.now(),
            content: this.state.message,
            author: this.props.currentUser.email,
            messageId: uuidv4(),
            edited: false,
            }
        let obj = {
            message: message,
            currentChannel: this.props.currentChannel._id
        }
        console.log(obj)
        this.setState({
            message: '',
            // showEmoji: false,
        })
        window.socket.emit("channel-message", obj); 
    } else {
        let editMess = {...this.state.editMessage, content: this.state.message, edited: true}
        console.log(editMess)
        this.setState(prev =>({
            newMessage: true,
            editMessage: {},
            message: '',
            showEmoji: false,
            // currentChannel: prev.currentChannel.messages.map(el => el.messageId === editMess.messageId ? editMess : el)
        }))

        let obj={
            message: editMess,
            currentChannel: this.props.currentChannel._id,
        }
        console.log(obj)
        window.socket.emit("editChannelMessage", obj);    
    }
  }


  handlerChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  uniqueNames=(arr)=> {
    let  obj = {};
      for (let i = 0; i < arr.length; i++) {
      let str = arr[i].author;
      obj[str] = true; // запомнить строку в виде свойства объекта
    }
    let result = [...Object.keys(obj)];
    let usersCount = result.length;

     return usersCount;
  }

  getChannelName=()=> {
    if(this.props.currentChannel) {
           let arr = this.props.currentChannel.channelName.split('/')
           let arr2 = []
          for(let el of this.props.allUsers) {
              for(let ell of arr) {
                 if(el.email === ell){
                     arr2.push(el.username) 
                  }
              }
          }
          let arr3 = arr2.filter(el => el !== this.props.currentUser.username)
          if(arr3.length !== 0) {
              return arr3[0]
          } else {
              return `${this.props.currentUser.username} (you)`
          }
    }
  }

//   handleKeyDown = (e) => {
    
//     if (e.keyCode === 13) {
//       console.log('hello world')
//       //  this.sendMessageToChannel();
//     }
// }




  render() {

    // console.log(this.props.currentUser)
    let showMessages = this.props.currentChannel.messages.filter(el=>el.content.toLowerCase().includes(this.state.search)?el:null)
 console.log(showMessages)
    
    return (
      <div className={style.main}>
        <div className={style.headerMain}>
          <FaBars onClick={this.props.showSidePanel} className={style.additionalButton}/>
          <div className={style.header}>
            <div className={style.headerName}>
              <h2 className={style.name}>B8 chat/{this.props.currentChannel.type === 'public' ? this.props.currentChannel.channelName : this.getChannelName()}  </h2>
              <p className={style.members}>{this.uniqueNames(this.props.currentChannel.messages)} members</p>
            </div>
            <form className={style.headerForm} onSubmit={this.formSubmit}>
              <FaSistrix className={style.searchImg} />
              <input name='search' type="text" placeholder='Search...' className={style.search} value={this.state.search} onChange={this.handlerChange} />
            </form>
          </div>
          <FaChevronCircleLeft onClick={this.props.showLinkPanel} className={style.additionalButton}/>
        </div>
        <div className={style.messages}>
          <div className={style.messagesArea}>
          {/*отрисовываем сообщения */}
            <Message  editMessage = {this.editMessage} deleteMessage={this.deleteMessage} allUsers = {this.props.allUsers} currentUser={this.props.currentUser} messages={showMessages}/>
          
          </div>
          <form className={style.messageForm} onSubmit={this.sendMessageToChannel}>
            <MdAttachFile className={style.addFile} />
            <input type="text" placeholder='Enter the message' name='message' value={this.state.message} onChange={this.handlerChange} className={style.messageInput}  onKeyDown = {this.handleKeyDown}/>
            {/* <FaRegSmile className={style.smile} /> */}
            <MdSend className={style.send} onClick={this.sendMessageToChannel} />
          </form>
        </div>
      </div>
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
    }
}

export default connect(MSTP, MDTP) (Messages);