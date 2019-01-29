import React from 'react';
import Messages from '../Messages/Messages';
import SidePanel from '../sidePanel/sidePanel';
import style from './Chat.module.css';

const Chat = () => {
    return (
        <div className={style.chat}>
            <SidePanel/>
            <Messages/>
        </div>
    );
};

export default Chat;