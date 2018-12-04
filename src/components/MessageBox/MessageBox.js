import React from 'react'
import Message from './Message/Message.js'

import './MessageBox.css'

export default class MessageBox extends React.Component {
	render() {
		return (
			<div className = "MessageBox">
				{
					Object.keys(this.props.messages).map((key, index)=>{
					let message=this.props.messages[key];
					if(this.props.accountId===message.accountId )
						return <div className="YourMessage" key={index}>
						<Message color ={message.accountId%3}
						 name={this.props.name}>{message.message}</Message>
						</div>
					else 
						return <div className="AnotherMessage" key={index}>
						<Message color ={message.accountId%3}
						name={this.props.name}>{message.message}</Message>
						</div>
				})}
			</div>
		);
	}
}