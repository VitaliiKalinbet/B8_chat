import React, { Component } from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
// import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import Chat from './Chat/Chat';
import Register from './Register/Register';
import Login from './Login/Login';
import style from './App.module.css';

class App extends Component {
  
  state = {
    isLoading: false,
  }

  render() {
    return (
      <div className={style.test}>
        {/* this.props.isLoading ? Spinner подключить пока все не загрузится : */}
       <Switch>
          {this.state.isLoading ?
            <div className={style.loader}>
              <Loader type="Watch" color="#1f8efa" height='100' width='100' />
            </div> :
            <Route exact path='/' component={Chat} />
          }
         <Route path='/login' component={Login}/>
         <Route path='/registration' component={Register}/>
       </Switch>
       
      </div>
    );
  }
}

export default withRouter(App);
