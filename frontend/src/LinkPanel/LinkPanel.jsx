import React, { Component } from 'react';
import './LinkPanel.css';
import linkPanel_search from '../img/link_panelSearch.png'
import linkPanel_figure from '../img/linkPanel_figure.png'
import linkPanel_calendar from '../img/linkPanel_calendar.png'
import linkPanel_icons from '../img/linkPanel_icon.png'
import linkPanel_change from '../img/linkPanel_change.png'
import linkPanel_add from '../img/linkPanel_add.png'
import { FaGooglePlus , FaLinkedin } from 'react-icons/fa';

class LinkPanel extends Component {
  state = {
    showModal:false,
    modalInputName: '',
    modalInputLink: '',
    iconPack:[
      {
        urlGoogle: <FaGooglePlus/>,
      },
      {
        urlLinkedin: <FaLinkedin/>
      }
    ]
  }

  toggleModal = () => {
    this.setState(prev => ({
      showModal: !prev.showModal,
      modalInputName: '',
      modalInputLink: ''
    }))
  }

  render() {
    return (
      <div className="linkPanel_container">
        <div>
          <ul>
            <li>{this.state.iconPack[0].urlGoogle}</li>
          </ul>
          <img className="link-panel_search" src={linkPanel_search} alt="search"/>
          <img className="link-panel_line" src={linkPanel_figure} alt="figure"/>
          <img className="link-panel_calendar" src={linkPanel_calendar} alt="calendar"/>
          <img className="link-panel_line" src={linkPanel_figure} alt="figure"/>
          <img className="link-panel_icons" src={linkPanel_icons} alt="icons"/>
          <img className="link-panel_line" src={linkPanel_figure} alt="figure"/>
          <img className="link-panel_icons" src={linkPanel_change} alt="change"/>
          <img className="link-panel_line" src={linkPanel_figure} alt="figure"/>
          <img className="link-panel_add" src={linkPanel_add} alt="add"/>
        </div>
      </div>
    );
  }
}

export default LinkPanel;