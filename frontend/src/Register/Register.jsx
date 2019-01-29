import React, { Component } from 'react'
import style from './Register.module.css'
import git from '../img/GitHub.svg';
import lock from '../img/icons8-lock.svg';
import email from  '../img/icons8-envelope-24.png'
import { FaUserAlt } from "react-icons/fa";
import {IconContext} from 'react-icons';
import {NavLink} from 'react-router-dom';

 class Register extends Component {
   state={
     name:'',
     password:'',
     passwordConfig:'',
     email:'',
   }
   handelChange=(ev)=>{
     let change=ev.target.name;
     let value=ev.target.value;
     this.setState({  
       [change]:value
     })
    
   }
  render() {
    return (
    
<div className={style.generall}>
     <div className={style.bg}></div>
            
            <div className={style.left_com}>
            <h2 className={style.emblema}>Register COMPONENT</h2>
            <img src="../img/baseline_lock_black_24dp.png" alt=""/>
            
        <form className={style.form} action="">
        <IconContext.Provider value={{color:'#dcdfe1' ,className:`${style.itemTree}`}}> <FaUserAlt />  </IconContext.Provider> 
        <input className={style.item} type="text" name="name" value={this.props.name} onChange={ this.handelChange} placeholder='Enter username'/>
        <img className={style.item_img} src={email} alt="ds"/>
        <input className={style.item} type="email" name="email" id="" value={this.props.email} onChange={ this.handelChange} placeholder='Enter  email'/>
    

        <input className={style.item} type="text" name="password" value={this.props.password} onChange={ this.handelChange}placeholder='Enter password'/>
        <img className={style.item_imgTwo} src={lock} alt="rr"/>
        <input className={style.item} type="text" name="passwordConfig" value={this.props.telephone} onChange={ this.handelChange}placeholder='Confirm password'/>
        <img className={style.itemFour} src={lock} alt="rr"/>
        <input className={style.submit} type="submit" value="Registration"/>
      
        <div className={style.social}>
        {/* <NavLink className={style.sup}> to='/'>Log in</NavLink> */}
        <a href="#" className={style.img}><img className={style.img} src={git} alt="git"/></a>
        </div>
        </form>
       <p className={style.supTitle}>If you are registered ?  <NavLink className={style.sup} to='/login' >Log in</NavLink></p>
        </div>
        </div>
    )
  }
}


  
export default Register;