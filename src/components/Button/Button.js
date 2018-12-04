import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

export default class Button extends React.Component {
	render() {
		return(
			<button className ="Button"
			 type={this.props.type} 
			 onClick={this.props.onClick}>
			 {this.props.children}
			</button>
		);
	}
}

Button.defaultProps={
	onClick:()=>{}
};

Button.propTypes = {
	onClick:PropTypes.func,
	type:PropTypes.string
};
