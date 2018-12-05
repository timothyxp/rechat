import React from 'react';
import FormColumn from '../FormColumn/Form.js';
import FormText from '../FormText/FormText.js';
import {NavLink} from 'react-router-dom';

class CreateAccount extends React.Component {
	constructor() {
		super();
		this.state = {
			name:'',
			login:'',
			password:''
		};
	}

	handleSubmit = event => {
		event.preventDefault();
		console.log(this.props);

		console.log(this.state);
		this.props.send(this.state);
	}

	handleInputChange = event => {
		this.setState({
			[event.target.name]:event.target.value
		});
	}

	render() {
		return (
			<div>
				<NavLink to="/menu"className="Link" activateClassName="Link--Active">
					Назад
				</NavLink>
				<FormColumn onSubmit={this.handleSubmit}>
					<FormText name="name" 
					onChange={this.handleInputChange}
					value={this.state.name}
					placeholder="Введите Имя"/>
					<FormText name="login" 
					onChange={this.handleInputChange}
					value={this.state.login}
					placeholder="Введите Логин"/>
					<FormText name="password" 
					onChange={this.handleInputChange}
					value={this.state.password}
					placeholder="Введите Пароль"/>
					<button type="submit">Создать аккаунт</button>
				</FormColumn>
			</div>
		);
	}
}

export default CreateAccount;