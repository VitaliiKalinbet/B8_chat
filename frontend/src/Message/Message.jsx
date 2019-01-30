import React, { Component } from 'react';
import styles from './Message.module.css'
import Card from '../Card/Card';
import Card2 from '../Card/Card2';

class Message extends Component {
    render() {
        return (
            <div>
                {/* {this.props.messages.map(el => 
                    <div className={styles.cardLeft} key={el.messageId}>
                        <Card  author={el.author} time={el.time} content={el.content}/>
                    </div>
                    )}
                {this.props.messages2.map(el =>
                    <div className={styles.cardRight} key={el.messageId}>
                    <Card2  author={el.author} time={el.time} content={el.content}/>
                </div>
                )} */}


                {this.props.messages.map(el => 
                    // <div className={styles.cardLeft} >
                        <Card key={el.messageId}  author={el.author} time={el.time} content={el.content}/>
                    // </div>
                    )}
                {this.props.messages2.map(el =>
                    <div className={styles.cardRight} >
                    <Card2 key={el.messageId}  author={el.author} time={el.time} content={el.content}/>
                    </div>
                )}

            </div>
        );
    }
}

export default Message;