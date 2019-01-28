import React from 'react';
import SidePanel from '../sidePanel/sidePanel';
import SingleMessage from '../singleMessage/SingleMessage';
import styles from './Chat.module.css';

const Chat = () => {
    return (
        <div className={styles.chat}>
            <SidePanel />
            <SingleMessage />

        </div>
    );
};

export default Chat;