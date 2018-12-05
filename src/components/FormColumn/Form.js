import React from 'react'

import './Form.css'

export default class FormColumn extends React.Component {
	render() {
		return (
			<form className="MessageFormColumn" onSubmit={this.props.onSubmit}>
				{this.props.children}
			</form>
		);
	}
}