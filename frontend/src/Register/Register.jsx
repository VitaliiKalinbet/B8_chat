import React, { Component } from 'react'
// import '../fonts/fonts.css'
import style from './Register.module.css'
import {addEmail,addPassword,addName,addSurname,addTelephone}from '../redux/actions/emailAction'
import {connect} from 'react-redux'
 class Register extends Component {
  render() {
    return (
    
<div className={style.generall}>
     <div className={style.bg}></div>
            
            <div className={style.left_com}>
            <h2 className={style.emblema}>Register COMPONENT</h2>
            <img src="../img/baseline_lock_black_24dp.png" alt=""/>
            
        <form className={style.form} action="">
        <input className={style.item} type="email" name="email" id="" value={this.props.email} onChange={this.props.emailAdd} placeholder='Enter your email'/>
        <input className={style.item} type="text" name="name" value={this.props.name} onChange={this.props.nameAdd}placeholder='Enter your name'/>
        <input className={style.item} type="text" name="surname" value={this.props.surname} onChange={this.props.surnameAdd}placeholder='Enter your surname'/>
        <input className={style.item} type="text" name="telephone" value={this.props.telephone} onChange={this.props.telephoneAdd}placeholder='Enter your telephone'/>
        <input className={style.item} type="text" name="password" value={this.props.password} onChange={this.props.passwordAdd}placeholder='Enter your password'/>
        <input className={style.item} type="text" name="password" value={this.props.password} onChange={this.props.passwordAdd}placeholder='Enter your password again'/>
        <input className={style.submit} type="submit" value="Registration"/>
        <div className={style.social}>
        <a href="#" className={style.img}><img  src="../img/gitcat.png" alt="git"/></a>
        <a href="#" className={style.img}><img  src="../img/google+.png" alt="google"/></a>
        </div>
        </form>
       <p className={style.supTitle}>Если вы зарегистрированы?<a href="/login"className={style.sup}>Логинизация</a></p>
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