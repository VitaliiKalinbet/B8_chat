import React, { Component } from 'react';
import style from './sidePannel.module.css';
import UserPanel from '../userPanel/userPanel';
import Channels from '../channels/channels';
import DirectMessages from '../directMessages/directMessages';

export default class SidePanel extends Component {
  state = {
    activeItemId: null,
  }

  setActiveItemId = (activeItemId) => {
    this.setState({ activeItemId });
  }

  getActiveItemId = () => {
    return this.state.activeItemId;
  }

  render() {
    return (
      <div className={true ? style.sidePanel : style.sidePanelNone}>
        <UserPanel/>
        <Channels setActiveItemId = {this.setActiveItemId} getActiveItemId = {this.getActiveItemId}/>
        <DirectMessages setActiveItemId = {this.setActiveItemId} getActiveItemId = {this.getActiveItemId}/>
      </div>
    )
  }
}
