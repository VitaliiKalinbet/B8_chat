import React, { Component } from 'react'
import style from './Login.module.css'
import {addEmail,addPassword}from '../redux/actions/emailAction'
import {connect} from 'react-redux'
class Login extends Component {


  render() {
    return (


<div className={style.generall}>
     <div className={style.bg}></div>
            
            <div className={style.left_com}>
            <h2 className={style.emblema}>LOGIN COMPONENT</h2>
            <img src="../img/baseline_lock_black_24dp.png" alt=""/>
            
        <form className={style.form} action="">
        <input className={style.item} type="email" name="email" id="" value={this.props.email} onChange={this.props.emailAdd} placeholder='Enter your email'/>
        <input className={style.item} type="text" name="password" value={this.props.password} onChange={this.props.passwordAdd}placeholder='Enter your password'/>

        <input className={style.submit} type="submit" value="Login"/>
        <div className={style.social}>
        <a href="#" className={style.img}><img  src="../img/gitcat.png" alt="git"/></a>
        <a href="#" className={style.img}><img  src="../img/google+.png" alt="google"/></a>
        </div>
        </form>
       <p className={style.supTitle}>Еще не с нами?<a href="/registration"className={style.sup}>Регистрация</a></p>
        </div>
        </div>
    )
  }
}
function mapStateToProps(state){
    return{
      email:state.email,
      password:state.password
    }
    
  }
  function mapDispatchToProps(dispatch){
    return{
      emailAdd:function(ev){
        dispatch(addEmail(ev))
     
      },
      
        passwordAdd:function(ev){
          dispatch(addPassword(ev))
       
        }
    }
  }
export default connect(mapStateToProps,mapDispatchToProps) ( Login);