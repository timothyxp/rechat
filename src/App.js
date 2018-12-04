import React, { Component } from 'react';
import Title from './components/Title/Title.js'
import Sidebar from './components/Sidebar/Sidebar.js'
import MessageForm from './components/MessageForm/MessageForm.js'
import MessageBox from './components/MessageBox/MessageBox.js'

import database from './firebase/database.js'

import './App.css'

class App extends Component {
  constructor() {
    super();

    this.state = {
      accountId:Math.floor(Math.random()*(1e9)),
      name:'Young',
      messages:{}
    }
  }

  NewMessage = event => {
    database.ref('messages').push(event);
  }

  componentDidMount() {
    const MessageRef = database.ref('messages');

    MessageRef.on('value', snapshot => {
      let items = snapshot.val();
      this.setState({
        messages:{...this.state.messages, ...items}
      });
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App__Layout">
          <div className="App__Sidebar">
          <Sidebar/>
          </div>
          <div className="App__Content">
            <div className="Title">
              <Title />
            </div>
            <div className="App__MessageBox">
              <MessageBox accountId={this.state.accountId}
              messages={this.state.messages}
              name={this.state.name}/>
            </div>
            <div className="App__MessageForm">
              <MessageForm accountId={this.state.accountId}
              handleSubmit = {this.NewMessage}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
