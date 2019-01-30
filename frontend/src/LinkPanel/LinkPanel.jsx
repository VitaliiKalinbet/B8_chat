import React, { Component } from 'react';
import style from './LinkPanel.module.css';
import Modal from '../ModalLinkPanel/ModalLinkPanel';
// import linkPanel_search from '../img/link_panelSearch.png'
// import linkPanel_figure from '../img/linkPanel_figure.png'
// import linkPanel_calendar from '../img/linkPanel_calendar.png'
// import linkPanel_icons from '../img/linkPanel_icon.png'
// import linkPanel_change from '../img/linkPanel_change.png'
import linkPanel_add from '../img/linkPanel_add.png'
import { FaGooglePlus, FaLinkedinIn, FaFacebookSquare, FaTrello, FaGoogleDrive, FaCalendarAlt, FaEnvelope, FaMusic, FaFileImage } from 'react-icons/fa';
import { MdStar } from "react-icons/md";
// import { IconContext } from "react-icons";

class LinkPanel extends Component {

  state = {
    showModal: false,
    imgActive: '',
    links: [
      {
        linkName: 'Google search',//информация которую вводит юзер
        url: 'https://www.google.com/webhp',//информация которую вводит юзер
        iconName: './images/googleIcon.png',//иконка которую добавляет юзер
      }
    ],
    modalInputName: '',
    modalInputLink: '',
    iconPack: [
      {
        url: <FaGooglePlus className={style.global}/>,
        id: 1,
      },
      {
        url: <FaLinkedinIn className={style.global}/>,
        id: 2,
      },
      {
        url: <FaFacebookSquare className={style.global}/>,
        id: 3,
      },
      {
        url: <FaTrello className={style.global}/>,
        id: 4,
      },
      {
        url: <FaGoogleDrive className={style.global}/>,
        id: 5,
      },
      {
        url: <FaCalendarAlt className={style.global}/>,
        id: 6,
      },
      {
        url: <FaEnvelope className={style.global}/>,
        id: 7,
      },
      {
        url: <MdStar className={style.global}/>,
        id: 8,
      },
      {
        url: <FaMusic className={style.global}/>,
        id: 9,
      },
      {
        url: <FaFileImage className={style.global}/>,
        id: 10,
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

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  activeSvg = (x) => {
    this.setState(({
      imgActive: x,
    }))
  }

  render() {
    const { showModal, modalInputName, modalInputLink, imgActive } = this.state
    return (
      <div className={this.props.toggleLinkPanel ? style.linkPanel_container : style.linkPanel_container_none}>
        <div className={style.link_height}>
          <div className={style.icons}>
            {/* <img className={style.panel_icons} src={linkPanel_search} alt="search" />
            <img className={style.panel_line} src={linkPanel_figure} alt="figure" />
            <img className={style.panel_icons} src={linkPanel_calendar} alt="calendar" />
            <img className={style.panel_line} src={linkPanel_figure} alt="figure" />
            <img className={style.panel_icons} src={linkPanel_icons} alt="icons" />
            <img className={style.panel_line} src={linkPanel_figure} alt="figure" />
            <img className={style.panel_icons} src={linkPanel_change} alt="change" />
            <img className={style.panel_line} src={linkPanel_figure} alt="figure" /> */}

            {/* {links.map(el => <)} */}
          </div>
          <div className={style.panel_add} onClick={this.toggleModal}>
            <img src={linkPanel_add} alt="add" className={style.button}/>
          </div>
        </div>
        {showModal && <Modal toggleModal={this.toggleModal} name={'Add new channel'} imgActive={imgActive} modalInputLink={modalInputLink} modalInputName={modalInputName}>
          <input className={style.modalInput} value={modalInputName} onChange={this.handleChange} type="text" name='modalInputName' placeholder='Enter name of link url ' />
          <input className={style.modalInput} value={modalInputLink} onChange={this.handleChange} type="text" name='modalInputLink' placeholder='Enter link url' />
          <h4>Choose the icon:</h4>
          <ul className={style.card}>
            {this.state.iconPack.map( el => 
            <li onClick={() => this.activeSvg(el.id)} key={el.id} className={imgActive === el.id ? `${style.svgLink}` : `${style.svgFalse}`}>{el.url}
            </li>)}
          </ul>
        </Modal>}
      </div>
    );
  }
}

export default LinkPanel;








