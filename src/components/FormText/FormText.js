import React from 'react';

import './FormText.css'

export default class FormText extends React.Component {
	render() {
		return (
			<input 
			className="Input"
			type="text"
			 placeholder={this.props.placeholder} 
			 onChange={this.props.onChange}
			 value={this.props.value}
			 name={this.props.name}/>
		);
	}
}