import React, { Component } from 'react';
import styles from './singleMessage.module.css';

class singleMessage extends Component {
    render() {
        return (
            <div className={styles.oneMessage}>
                <p>TEXT</p>
            </div>
        );
    }
}

export default singleMessage;