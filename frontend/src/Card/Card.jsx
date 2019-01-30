import React, { Component } from 'react';
import styles from './Card.module.css';
import moment from 'moment';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';

class Card extends Component {
  render() {
    return (
        <div className={styles.cardLeft}>
            <p className={styles.icon}></p>
            <div className={styles.message_wrapper}>
                <ul className={styles.message_infoLeft}>
                    <li className={styles.name}>{this.props.author}</li>
                    <li className={styles.time}>{moment.unix(this.props.time).format('llll')}</li>
                </ul>
                <p className={styles.edited}>edited</p>
                <p className={styles.text}>
                    {this.props.content}
                </p>
                <p className={styles.text_icon}>
                    <span className={styles.text_icon_span}> <FaPencilAlt/> edit</span>
                    <span className={styles.text_icon_span}> <FaTimes/> delete</span>
                </p>
            </div>
        </div>
    );
  }
}

export default Card;