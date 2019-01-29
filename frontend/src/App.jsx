import React, { Component } from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
// import { connect } from 'react-redux';
import Chat from './Chat/Chat';
import RegisterNew from './RegisterNew/RegisterNew';
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
         <Route exact path='/' component={Chat}/>
         <Route path='/login' component={Login}/>
         <Route path='/registration' component={RegisterNew}/>
       </Switch>
       
      </div>
    );
  }
}

export default withRouter(App);
