import React, { Component } from 'react';
import styles from './Message.module.css'
import Card from '../Card/Card';
import md5 from 'md5';

class Message extends Component {

    avatarSrcFunction = (email) => {
        let user = this.props.allUsers.find(item => item.email === email)
        if (user !== undefined) {
            if (user.avatar) {
                return <img className={styles.message_avatar} src={user.avatar} alt='user avatar' />
            }
            else {
                let userSrc = `https://gravatar.com/avatar/${md5(`${user.username}`)}?d=identicon`
                return <img className={styles.message_avatar} src={userSrc} alt='user avatar' />
            }
        }
        else {
            return <img className={styles.message_avatar} src={email} alt='user avatar' />
        }
    }

    render() {
        return (
            <div>
                {this.props.messages.map(el =>
                    <Card
                        allUsers={this.props.allUsers}
                        currentUser={this.props.currentUser}
                        deleteMessage={this.props.deleteMessage}
                        editMessage={this.props.editMessage}
                        avatarSrcFunction={this.avatarSrcFunction}
                        key={el._id}
                        messageId={el.messageId}
                        edited={el.edited}
                        email={el.author}
                        time={el.time}
                        content={el.content} />
                )}
            </div>
        );
    }
}

export default Message;