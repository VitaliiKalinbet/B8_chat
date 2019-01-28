import React from 'react';
import style from './ModalLinkPanel.module.css';

const Modal = ({toggleModal, modalInputName, modalInputLink}) => {
    console.log(modalInputLink);
    return (
        <div className={style.modalBackdrop} onClick={e => e.target.className.includes('modalBackdrop')? toggleModal(): null}>
            <div className={style.modalWrapper} >
                <div className={style.modalHeader}>
                    <h2>{modalInputName}</h2>
                </div>
                <div className={style.modalContent}>
                    {modalInputLink}
                </div>
                <div className={style.modalFooter}>
                    <button className={`${style.btn} ${style.modalOkBtn}`}>Ok</button>
                    <button className={`${style.btn} ${style.modalCancelBtn}`} onClick={toggleModal}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;