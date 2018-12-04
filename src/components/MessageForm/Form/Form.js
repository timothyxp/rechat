import React from 'react'

import './Form.css'

export default class Form extends React.Component {
	render() {
		return (
			<form className="MessageForm" onSubmit={this.props.onSubmit}>
				{this.props.children}
			</form>
		);
	}
}