import React, { Component } from 'react';
import style from './Login.module.css';
import {addEmail,addPassword}from '../redux/actions/emailAction';
import {connect} from 'react-redux';
import git from '../img/GitHub.svg';
import google from '../img/googleimg.svg';
import lock from '../img/icons8-lock.svg';
import email from  '../img/icons8-envelope-24.png'
class Login extends Component {


  render() {
    return (


<div className={style.generall}>
     <div className={style.bg}></div>
            
            <div className={style.left_com}>
            <h2 className={style.emblema}>LOGIN COMPONENT</h2>
       
            
        <form className={style.form} action="">
        <img className={style.item_img} src={email} alt="ds"/>
        <input className={style.item} type="email" name="email" id="" value={this.props.email} onChange={this.props.emailAdd} placeholder='Enter your email'/>
        
        <input className={style.item} type="text" name="password" value={this.props.password} onChange={this.props.passwordAdd}placeholder='Enter your password'/>
        <img className={style.item_imgTwo} src={lock} alt="rr"/>
        <input className={style.submit} type="submit" value="Login"/>
        <div className={style.social}>
     
        <a href="#" className={style.img}><img className={style.img} src={git} alt="git"/></a>
      
        </div>
        </form>
       <p className={style.supTitle}>Not with us yet? <a href="/registration"className={style.sup}>Registration</a></p>
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