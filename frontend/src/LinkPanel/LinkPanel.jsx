import React, { Component } from 'react';
import style from './LinkPanel.module.css';
import linkPanel_search from '../img/link_panelSearch.png'
import linkPanel_figure from '../img/linkPanel_figure.png'
import linkPanel_calendar from '../img/linkPanel_calendar.png'
import linkPanel_icons from '../img/linkPanel_icon.png'
import linkPanel_change from '../img/linkPanel_change.png'
import linkPanel_add from '../img/linkPanel_add.png'
import { FaGooglePlus , FaLinkedin } from 'react-icons/fa';
import Modal from '../ModalLinkPanel/ModalLinkPanel';

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
    const {showModal, modalInputName, modalInputLink} = this.state
    return (
      <div className={style.linkPanel_container}>
        <div>
          {/* <ul>
            <li>{this.state.iconPack[0].urlGoogle}</li>
          </ul> */}
          <img className={style.panel_search} src={linkPanel_search} alt="search"/>
          <img className={style.panel_line} src={linkPanel_figure} alt="figure"/>
          <img className={style.panel_calendar} src={linkPanel_calendar} alt="calendar"/>
          <img className={style.panel_line} src={linkPanel_figure} alt="figure"/>
          <img className={style.panel_icons} src={linkPanel_icons} alt="icons"/>
          <img className={style.panel_line} src={linkPanel_figure} alt="figure"/>
          <img className={style.panel_icons} src={linkPanel_change} alt="change"/>
          <img className={style.panel_line} src={linkPanel_figure} alt="figure"/>
          <img className={style.panel_add} src={linkPanel_add} onClick={this.toggleModal} alt="add"/>
        </div>
        {showModal && <Modal toggleModal={this.toggleModal}>
          <input className={style.modalInput} value={modalInputName} type="text" placeholder='Enter a channel name'/>
          <input className={style.modalInput} value={modalInputLink} type="text" placeholder='Enter a channel description'/>
        </Modal>}
      </div>
    );
  }
}

export default LinkPanel;