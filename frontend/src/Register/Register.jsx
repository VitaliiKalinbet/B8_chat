import React, { Component } from 'react';
import style from './Register.module.css';
import { FaUserAlt, FaEnvelope, FaUnlockAlt } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

class Register extends Component {

  state = {
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  }

  handelChange = (e) => {
    let change = e.target.name;
    let value = e.target.value;
    this.setState({
      [change]: value
    })
  }

  render() {
    return (
      <div className={style.registration_page}>

          <div className={style.form_place}>
              <h2 className={style.emblema}>B8 chat</h2>

              <form className={style.form} action="">

                <div className={style.div_input}>
                  <FaUserAlt className={style.icon_input} />
                  <input className={style.input} type="text" name="name" value={this.props.name} onChange={this.handelChange} placeholder='Enter username' />
                </div>

                <div className={style.div_input}>
                  <FaEnvelope className={style.icon_input}/>
                  <input className={style.input} type="email" name="email" id="" value={this.props.email} onChange={this.handelChange} placeholder='Enter  email' />
                </div>

                <div className={style.div_input}>
                  <FaUnlockAlt className={style.icon_input}/>
                  <input className={style.input} type="text" name="password" value={this.props.password} onChange={this.handelChange} placeholder='Enter password' />
                </div>
                  
                <div className={style.div_input}>
                  <FaUnlockAlt className={style.icon_input}/>
                  <input className={style.input} type="text" name="passwordConfirm" value={this.props.telephone} onChange={this.handelChange} placeholder='Confirm password' />
                </div>
                  
                <input className={style.submit_btn} type="submit" value="Registration" />

              </form>

              <p className={style.subtitle}>If you have an account ?  
                    
              <NavLink to='/login' className={style.subtitle_navlink}>Log   in</NavLink>
              </p>
        </div>

      </div>
    )
  }
}

export default Register;