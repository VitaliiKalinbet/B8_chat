import React, { Component } from 'react';
import style from './Login.module.css';

import git from '../img/GitHub.svg';
import {NavLink} from 'react-router-dom';
import lock from '../img/icons8-lock.svg';
import email from  '../img/icons8-envelope-24.png'

class Login extends Component {
  state={
    
    password:'',
   
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
            <h2 className={style.emblema}>LOGIN COMPONENT</h2>
       
            
        <form className={style.form} action="">
        <img className={style.item_img} src={email} alt="ds"/>
        <input className={style.item} type="email" name="email" id="" value={this.props.email} onChange={this.handelChange} placeholder='Enter your email'/>
        
        <input className={style.item} type="text" name="password" value={this.props.password} onChange={this.handelChange}placeholder='Enter your password'/>
        <img className={style.item_imgTwo} src={lock} alt="rr"/>
        <input className={style.submit} type="submit" value="Login"/>
        <div className={style.social}>
     
        <a href="#" className={style.img}><img className={style.img} src={git} alt="git"/></a>
      
        </div>
        </form>
       <p className={style.supTitle}>Not with us yet? <NavLink className={style.sup} to='/registration' >Registration</NavLink></p>
        </div>
        </div>
    )
  }
}

export default  Login;