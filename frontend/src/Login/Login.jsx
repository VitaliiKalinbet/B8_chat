import React, { Component } from 'react';
import style from './Login.module.css';
import { FaEnvelope, FaUnlockAlt } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

class Register extends Component {

  state = {
    email: '',
    password: '',
    errors: [{message: 'Server error!!!'}],
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

              <form className={style.form}>

                <div className={style.div_input}>
                  <FaEnvelope className={style.icon_input}/>
                  <input required className={style.input} type="email" name="email" id="" value={this.props.email} onChange={this.handelChange} placeholder='Enter  email' />
                </div>

                <div className={style.div_input}>
                  <FaUnlockAlt className={style.icon_input}/>
                  <input required className={style.input} type="password" name="password" value={this.props.password} onChange={this.handelChange} placeholder='Enter password' />
                </div>
                                   
                <input className={style.submit_btn} type="submit" value="Log in" />

              </form>

              <p className={style.subtitle}>Don't have an account ?        <NavLink className={style.subtitle_navlink} to='/registration' >Registration</NavLink>
              </p>

              {this.state.errors.length > 0 && (
                <p className={style.error}>
                  {this.state.errors.map(el => <p key={el.message}>{el.message}</p>)}
                </p>
              )}

        </div>
      </div>
    )
  }
}

export default Register;