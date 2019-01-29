import React from 'react';
import Messages from '../Messages/Messages';
import SidePanel from '../sidePanel/sidePanel';
import style from './Chat.module.css';
import LinkPanel from '../LinkPanel/LinkPanel.jsx'

const Chat = () => {
    return (
        <div className={style.chat}>
            <SidePanel/>
            <Messages/>
            <LinkPanel/> 
        </div>
    );
};

export default Chat;