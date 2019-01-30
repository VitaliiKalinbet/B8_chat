import React, { Component } from 'react';
import style from './userPanel.module.css';
import Modal from '../sidePanelModal/modal';
import AvatarEditor from 'react-avatar-editor';
import { FaEllipsisH } from 'react-icons/fa';

export default class UserPanel extends Component {

    state = {
        dropdown: false,
        showModal: false,
        previewImage: '',
        croppedImage: '',
        blob: '',
    }

    toggleDropdown = () => {
        this.setState(prev => ({
            dropdown: !prev.dropdown
        }));
    }

    toggleModal = () => {
        this.setState(prev => ({
            showModal: !prev.showModal
        }));
    }

    handleChange = event => {
        const file = event.target.files[0];
        const reader = new FileReader();
        if (file) {
            reader.readAsDataURL(file);
            reader.addEventListener('load', () => {
                this.setState({ previewImage: reader.result });
            })
        }
    };

    handleCropImage = () => {
        if (this.avatarEditor) {
            this.avatarEditor.getImageScaledToCanvas().toBlob(blob => {
                let imageUrl = URL.createObjectURL(blob);
                this.setState({
                    croppedImage: imageUrl,
                    blob,
                })
            })
        }
    };

    render() {
        const imageSrc = 'https://cdn.vox-cdn.com/thumbor/TiwabydzgLgAVBjjJvAO_dnKo_o=/0x16:1103x751/1200x800/filters:focal(0x16:1103x751)/cdn.vox-cdn.com/uploads/chorus_image/image/46840054/Screenshot_2015-07-27_15.11.13.0.0.png';
        let { dropdown, showModal, previewImage, croppedImage } = this.state;
        return (
            <div className={style.wrapper}>
                <div className={style.avatarAndUsername}>
                    <img className={style.avatar} src={imageSrc} alt='avatar' />
                    <span className={style.userName}>Valentine</span>
                </div>
                <div className={style.dropdownWrapper}>
                    <FaEllipsisH onClick={this.toggleDropdown} className={style.dropdownBtn}/>
                    {dropdown && <div className={style.dropdownList} onClick={this.toggleDropdown}>
                        <span><i className="fa fa-sign-out"></i> Sign Out</span>
                        <span onClick={this.toggleModal}><i className="fa fa-image"></i> Change Avatar</span>
                    </div>}
                </div>
                {showModal && <Modal toggleModal={this.toggleModal} name={'Change avatar'} >
                    <input className={style.btn} type="file" onChange={this.handleChange} />
                    {previewImage && <div className={style.previewBloack}>
                        {previewImage && this.handleCropImage()}
                        <AvatarEditor
                            onLoadSuccess={this.handleCropImage}
                            ref={node => (this.avatarEditor = node)}
                            image={previewImage}
                            width={120}
                            height={120}
                            border={50}
                            scale={1.2} />
                        <span><i><i style={{ fontSize: '3rem', color: '#273247' }} class="fa fa-arrow-circle-o-right"></i></i></span>
                        {croppedImage && <img className={style.prevImg} src={croppedImage} alt='prev img' />}
                    </div>}
                </Modal>}
            </div>
        )
    }
}