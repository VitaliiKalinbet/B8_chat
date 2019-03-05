import React, { Component } from 'react';
import style from './Register.module.css';
import { FaUserAlt, FaEnvelope, FaUnlockAlt } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import uuidv4 from 'uuid'

class Register extends Component {

  state = {
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    error: '',
    isLoading: false,
  }

  handelChange = (e) => {
    let change = e.target.name;
    let value = e.target.value;
    this.setState({
      [change]: value
    })
  }

  registrationToChat = (e) => {
    e.preventDefault()
    if (this.state.password === this.state.passwordConfirm) {
      let user = {
        username: this.state.name,
        password: this.state.password,
        email: this.state.email,
        link: {
          linkName: 'Google search',
          url: 'https://www.google.com',
          iconName: 'FaGoogle',
          linkId: uuidv4()
        }
      }
      this.setState({
        error: '',
        isLoading: true,
      })
      window.socket.emit('registration', user)
    } else {
      this.setState({
        error: 'Different password!'
      })
    }
  }

  toggleIsLoading = () => {
    this.setState({
      isLoading: false,
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      if (this.props.isError) {
        this.toggleIsLoading()
      }
    }
  }

  render() {
    return (
      <div className={style.registration_page}>
        <div className={style.form_place}>
          <h2 className={style.emblema}>B8 chat</h2>
          
          <form className={style.form} onSubmit={this.registrationToChat}>
            <div className={style.div_input}>
              <FaUserAlt className={style.icon_input} />
              <input className={style.input} type="text" name="name" value={this.props.name} onChange={this.handelChange} placeholder='Enter username' />
            </div>
            <div className={style.div_input}>
              <FaEnvelope className={style.icon_input} />
              <input className={style.input} type="email" name="email" id="" value={this.props.email} onChange={this.handelChange} placeholder='Enter  email' />
            </div>
            <div className={style.div_input}>
              <FaUnlockAlt className={style.icon_input} />
              <input className={style.input} type="password" name="password" value={this.props.password} onChange={this.handelChange} placeholder='Enter password' />
            </div>
            <div className={style.div_input}>
              <FaUnlockAlt className={style.icon_input} />
              <input className={style.input} type="password" name="passwordConfirm" value={this.props.telephone} onChange={this.handelChange} placeholder='Confirm password' />
            </div>
            <input onClick={this.isFormValid} className={style.submit_btn} type="submit" value={this.state.isLoading ? "Loading..." : "Registration"} />
          </form>

          <p className={style.subtitle}>If you have an account ?
              <NavLink to='/login' className={style.subtitle_navlink} onClick={this.props.clearError}>Log   in</NavLink>
          </p>
          <p className={style.error}>
            {this.props.error && this.props.error}
            {this.state.error && this.state.error}
          </p>
        </div>
      </div>
    )
  }
}

export default Register;