import React, { Component } from 'react';
import style from './channels.module.css';
import Modal from '../sidePanelModal/modal';
import { setCurrentChannel } from '../redux/actions/actions';
import { connect } from 'react-redux';
import { FaPlus } from 'react-icons/fa';

class Channels extends Component {

  channel = [
    {
      id: 'id-1',
      name: 'Channel-1',
      description: 'my channel 1',
      createdBy: {
        avatar: 'https://brandmark.io/logo-rank/random/beats.png',
        name: 'Valentine1'
      }
    },
    {
      id: 'id-2',
      name: 'Channel-2',
      description: 'my channel 2',
      createdBy: {
        avatar: 'https://brandmark.io/logo-rank/random/beats.png',
        name: 'Valentine2'
      }
    },
    {
      id: 'id-3',
      name: 'Channel-3',
      description: 'my channel 3',
      createdBy: {
        avatar: 'https://brandmark.io/logo-rank/random/beats.png',
        name: 'Valentine3'
      }
    },
    {
      id: 'id-4',
      name: 'Channel-4',
      description: 'my channel 4',
      createdBy: {
        avatar: 'https://brandmark.io/logo-rank/random/beats.png',
        name: 'Valentine4'
      }
    },
    {
      id: 'id-5',
      name: 'Channel-5',
      description: 'my channel 5',
      createdBy: {
        avatar: 'https://brandmark.io/logo-rank/random/beats.png',
        name: 'Valentine5'
      }
    },
    {
      id: 'id-6',
      name: 'Channel-6',
      description: 'my channel 6',
      createdBy: {
        avatar: 'https://brandmark.io/logo-rank/random/beats.png',
        name: 'Valentine6'
      }
    },
    {
      id: 'id-7',
      name: 'Channel-7',
      description: 'my channel 7',
      createdBy: {
        avatar: 'https://brandmark.io/logo-rank/random/beats.png',
        name: 'Valentine7'
      }
    },
    {
      id: 'id-8',
      name: 'Channel-8',
      description: 'my channel 8',
      createdBy: {
        avatar: 'https://brandmark.io/logo-rank/random/beats.png',
        name: 'Valentine8'
      }
    },
    {
      id: 'id-9',
      name: 'Channel-9',
      description: 'my channel 9',
      createdBy: {
        avatar: 'https://brandmark.io/logo-rank/random/beats.png',
        name: 'Valentine9'
      }
    },
  ]

  state = {
    channels: [],
    showModal: false,
    modalInputName: '',
    modalInputDescription: '',
    activeChannel: {},
  }

  componentDidMount = () => {
    this.setState({ channels: this.channel })
  }

  toggleModal = () => {
    this.setState(prev => ({
      showModal: !prev.showModal,
      modalInputName: '',
      modalInputDescription: ''
    }))
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  isFormFilled = ({ modalInputName, modalInputDescription }) => modalInputName && modalInputDescription;

  changeChannel = (x) => {
    this.setState({
      activeChannel: x.id
    });
    this.props.setChannel(x);
  };

  render() {
    let { showModal, modalInputName, modalInputDescription, channels } = this.state;
    return (
      <div className={style.channelsWrapper}>
        <div className={style.channelTitle}>
          <h3>Channels</h3>
          <FaPlus onClick={this.toggleModal} className={style.channelIcon}/>
        </div>
        <div className={style.line}></div>
        {showModal && <Modal toggleModal={this.toggleModal} name={'Add new channel'}>
          <input className={style.modalInput} value={modalInputName} onChange={this.handleChange} type="text" name='modalInputName' placeholder='Enter a channel name' />
          <input className={style.modalInput} value={modalInputDescription} onChange={this.handleChange} type="text" name='modalInputDescription' placeholder='Enter a channel description' />
        </Modal>}
        <ul className={style.channelList}>
          {channels && channels.map(x => <li onClick={() => { this.changeChannel(x); this.props.setActiveItemId(x.id); }}
            className={this.props.getActiveItemId() !== x.id ? style.channelItem : `${style.channelItem} ${style.activeItem}`} key={x.id}>{`# ${x.name}`}</li>)}
        </ul>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  setChannel: (channel) => dispatch(setCurrentChannel(channel)),
});

export default connect(null, mapDispatchToProps)(Channels);
