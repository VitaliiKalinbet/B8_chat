import React, { Component } from 'react';
import style from './RegisterNew.module.css';
import { FaUserAlt } from "react-icons/fa";
import {IconContext} from 'react-icons';
import {NavLink} from 'react-router-dom';
export default class RegisterNew extends Component {
  render() {
    return (
      <div className={style.main_page}>
        <div className={style.form_place}>
            <h2 className={style.emblema}>Register COMPONENT</h2>
            <form className={style.form} action="">
        <IconContext.Provider value={{color:'#dcdfe1' ,className:`${style.itemTree}`}}> <FaUserAlt />  </IconContext.Provider> 
        
         <input className={style.item} type="email" name="email" id="" value={this.props.email} onChange={ this.handelChange} placeholder='Enter  email'/>


         <input className={style.item} type="text" name="password" value={this.props.password} onChange={ this.handelChange}placeholder='Enter password'/>
      
         <input className={style.item} type="text" name="passwordConfig" value={this.props.telephone} onChange={ this.handelChange}placeholder='Confirm password'/>
  
        <input className={style.submit} type="submit" value="Registration"/>
        </form>
            </div>
      </div>
    )
  }
}
