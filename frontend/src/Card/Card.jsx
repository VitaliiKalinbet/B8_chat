import React, { Component } from 'react';
import styles from './Card.module.css';
import moment from 'moment';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import edit from '../img/edit.svg';
import delIcon from '../img/delete.svg';

class Card extends Component {
state={
    userObj:this.props.allUsers.find(el=>el.email===this.props.email),

}
        
  render() {
    //   console.log(this.state.userObj.username)
    //   console.log(this.props.avatarSrc)
    return (
        <div className={this.props.email===this.props.currentUser.email?styles.cardLeft:styles.cardRight}>
        {/* <div className={styles.cardLeft}> */}
            <p className={styles.icon}>
            {this.props.avatarSrcFunction(this.props.email)}
            {/* <img src={this.props.avatarSrc} alt='user avatar' width='46px' height='auto' /> */}
            </p>
            <div className={styles.message_wrapper}>
                <ul className={this.props.email===this.props.currentUser.email?styles.message_infoLeft:styles.message_infoRight}>
                    <li className={styles.name}>{this.state.userObj.username}</li>
                    <li className={styles.time}>{moment(this.props.time).format('LLLL')}</li>
                </ul>
                {this.props.edited?
                 <p className={styles.edited}>edited</p>
                :null}
                
                <p className={this.props.email===this.props.currentUser.email?styles.text:styles.textRight}>
                    {this.props.content}
                </p>
                {this.props.email===this.props.currentUser.email?
                <p className={styles.text_icon}>
                    <span id={this.props.messageId} 
                    className={styles.text_icon_span}
                    onClick={this.props.editMessage}> 
                    <img src={edit} className={styles.text_image_span} alt='edit' id={this.props.messageId}/>
                    {/* <FaPencilAlt id={this.props.messageId}/> */}
                    edit
                    </span>
                    <span id={this.props.messageId} className={styles.text_icon_span} onClick={this.props.deleteMessage}>
                    <img src={delIcon} className={styles.text_image_span}  alt='delete' id={this.props.messageId}/>
                    {/* <FaTimes id={this.props.messageId}/> */}
                    delete</span>
                </p>:null}
                
            </div>
        </div>
    );
  }
}

export default Card;