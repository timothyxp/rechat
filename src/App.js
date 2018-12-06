import React, { Component } from 'react';
import Title from './components/Title/Title.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import MessageForm from './components/MessageForm/MessageForm.js';
import MessageBox from './components/MessageBox/MessageBox.js';
import Menu from './components/Menu/Menu.js';
import CreateAccount from './components/Menu/CreateAccount/createaccount.js';
import Enter from './components/Menu/Enter/enter.js';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import database from './firebase/database.js'

import './App.css'

class App extends Component {
  constructor() {
    super();

    this.state = {
      accountId:Math.floor(Math.random()*(1e9)),
      name:'user',
      messages:{}
    }
  }

  NewMessage = event => {
    database.ref('messages').push({...event,...{
      name:this.state.name,
      accountId:this.state.accountId
    }});
  }

  createAccount = account => {
    database.ref('accounts/'+account.login).set({
        password:account.password,
        accountId:this.state.accountId,
        name:account.name
      });
    this.setState({
      name:account.name
    });
  }

  enter = event => {
    console.log(event);
    this.setState({
      name:event.name,
      accountId:event.accountId
    });
  }

  getAccountId() {
    return this.state.accountId;
  }

  componentDidMount() {
    const MessageRef = database.ref('messages');

    MessageRef.on('value', snapshot => {
      let items = snapshot.val();
      console.log(items);
      this.setState({
        messages:{...this.state.messages, ...items}
      });
    });
  }

  render() {
    return (
      <Router>
      <div className="App">
        <div className="App__Layout">
            <div className="App__Sidebar">
              <Switch>
                <Route path="/" exact component={Sidebar}/>
                <Route path="/menu" component={Menu}/>
                <Route path="/create-acc" component={
                  ()=><CreateAccount send={this.createAccount}/>}/>
                <Route path="/enter" component={
                  ()=><Enter onSubmit={this.enter}/>}/>
              </Switch>
            </div>  
          <div className="App__Content">
            <div className="Title">
              <Title />
            </div>
            <div className="App__MessageBox">
              <MessageBox accountId={this.state.accountId}
              messages={this.state.messages}/>
            </div>
            <div className="App__MessageForm">
              <MessageForm handleSubmit = {this.NewMessage}/>
            </div>
          </div>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
