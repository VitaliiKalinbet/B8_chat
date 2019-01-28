import React, { Component } from 'react';
import styles from './singleMessage.module.css';

class SingleMessage extends Component {
    render() {
        return (
            <div className={styles.oneMessage}>
                <div className={styles.header}>
                    <div className={styles.container}>
                        <div className={styles.wrapper}>
                            <p>TEXT</p>
                        </div>
                    </div >
                </div>
            </div >
        );
    }
}

export default SingleMessage;