import React, { Component } from 'react';
import Messages from '../Messages/Messages';
import SidePanel from '../sidePanel/sidePanel';
import style from './Chat.module.css';
import LinkPanel from '../LinkPanel/LinkPanel.jsx'

class Chat extends Component {

    state = {
        toggleSidePanel: false,
        toggleLinkPanel: false,
    }

    showSidePanel = (e) => {
        this.setState({
            toggleSidePanel: true,
        })
    }

    showLinkPanel = (e) => {
        this.setState({
            toggleLinkPanel: true,
        })
    }

    render() {
        return (
            <div className={style.chat}>
                <SidePanel toggleSidePanel={this.state.toggleSidePanel}/>
                <Messages showSidePanel={this.showSidePanel} showLinkPanel={this.showLinkPanel}/>
                <LinkPanel toggleLinkPanel={this.state.toggleLinkPanel}/> 
            </div>
        );
    }
}

export default Chat;