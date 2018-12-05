import React from 'react'
import FormText from '../FormText/FormText.js'
import Form from '../FormRow/Form.js'
import './MessageForm.css'

export default class MessageFrom extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			accountId:props.accountId,
			message:''
		}
	}

	formClear() {
		this.setState({
			accountId:this.props.accountId,
			message:''
		});
	}

	validationForm() {
		if(this.state.message==='')
			return false;
		return true;
	}

	handleSubmit = event => {
		event.preventDefault();

		if(!this.validationForm())
			return;

		this.props.handleSubmit(this.state);

		this.formClear();
	}

	handleInputChange = event => {
		this.setState({
			[event.target.name]:event.target.value
		});
	}

	render() {
		return (
			<div className="Form__Send">
				<Form onSubmit={this.handleSubmit}>
					<div className="Form__Field">
						<FormText placeholder="Enter message"
						onChange={this.handleInputChange}
						value={this.state.message}
						name="message"/>
					</div>
					<div className="Form__Button">
						<button type="submit" className="Form__SendButton"></button>
					</div>
				</Form>
			</div>
		);
	}
}