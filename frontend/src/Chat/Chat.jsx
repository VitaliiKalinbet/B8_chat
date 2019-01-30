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

    closeSidePanel = (e) => {
        console.log('works closeSidePanel');
        this.setState({
            toggleSidePanel: false,
        })
    }

    showLinkPanel = (e) => {
        this.setState({
            toggleLinkPanel: true,
        })
    }

    closeLinkPanel = (e) => {
        console.log('works closeLinkPanel');
        this.setState({
            toggleLinkPanel: false,
        })
    }

    render() {
        return (
            <div className={style.chat}>

                {/* <div onClick={this.closeSidePanel} className={this.state.toggleSidePanel && style.wraperSidePanel}>
                    <SidePanel toggleSidePanel={this.state.toggleSidePanel}/>
                </div>
                <Messages showSidePanel={this.showSidePanel} showLinkPanel={this.showLinkPanel}/>
                <div className={style.wraperLinkPanel}>
                    <LinkPanel toggleLinkPanel={this.state.toggleLinkPanel}/>
                </div> */}

                <SidePanel toggleSidePanel={this.state.toggleSidePanel}/>
                <div onClick={this.closeSidePanel} className={this.state.toggleSidePanel && style.divCloseSidePanel}></div>

                <Messages showSidePanel={this.showSidePanel} showLinkPanel={this.showLinkPanel}/>

                <LinkPanel toggleLinkPanel={this.state.toggleLinkPanel}/>
                <div onClick={this.closeLinkPanel} className={this.state.toggleLinkPanel && style.divCloseLinkPanel}></div>
                 
            </div>
        );
    }
}

export default Chat;