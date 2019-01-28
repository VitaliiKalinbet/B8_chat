import React, { Component } from 'react'
import style from './Register.module.css'
import {connect} from 'react-redux';
import git from '../img/GitHub.svg';
import google from '../img/googleimg.svg';
import lock from '../img/icons8-lock.svg';
import email from  '../img/icons8-envelope-24.png'
import {addEmail,addPassword,addName,addSurname,addTelephone}from '../redux/actions/emailAction'
 class Register extends Component {
  render() {
    return (
    
<div className={style.generall}>
     <div className={style.bg}></div>
            
            <div className={style.left_com}>
            <h2 className={style.emblema}>Register COMPONENT</h2>
            <img src="../img/baseline_lock_black_24dp.png" alt=""/>
            
        <form className={style.form} action="">
        <img className={style.item_img} src={email} alt="ds"/>
        <input className={style.item} type="email" name="email" id="" value={this.props.email} onChange={this.props.emailAdd} placeholder='Enter your email'/>
        
        <input className={style.item} type="text" name="password" value={this.props.password} onChange={this.props.passwordAdd}placeholder='Enter your password'/>
        <img className={style.item_imgTwo} src={lock} alt="rr"/>
        <input className={style.submit} type="submit" value="Login"/>
        <div className={style.social}>
        <input className={style.item} type="text" name="name" value={this.props.name} onChange={this.props.nameAdd}placeholder='Enter your name'/>
        <input className={style.item} type="text" name="surname" value={this.props.surname} onChange={this.props.surnameAdd}placeholder='Enter your surname'/>
        <input className={style.item} type="text" name="telephone" value={this.props.telephone} onChange={this.props.telephoneAdd}placeholder='Enter your telephone'/>
        <input className={style.item} type="text" name="password" value={this.props.password} onChange={this.props.passwordAdd}placeholder='Enter your password'/>
        <input className={style.submit} type="submit" value="Registration"/>
        <a href="#" className={style.img}><img className={style.img} src={git} alt="git"/></a>
        </div>
        </form>
       <p className={style.supTitle}>If you are registered ?<a href="/login"className={style.sup}>Log in</a></p>
        </div>
        </div>
    )
  }
}

function mapStateToProps(state){
    return{
      email:state.email,
      password:state.password,
      name:state.name,
      surname:state.surname,
      telephone:state.telephone

    }
    
  }
  function mapDispatchToProps(dispatch){
    return{
      emailAdd:function(ev){
        dispatch(addEmail(ev))
     
      },
      
        passwordAdd:function(ev){
          dispatch(addPassword(ev))
       
        },
        nameAdd:function(ev){
          dispatch(addName(ev))
       
        },
        surnameAdd:function(ev){
          dispatch(addSurname(ev))
       
        },
        telephoneAdd:function(ev){
          dispatch(addTelephone(ev))
       
        },
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)  (Register)