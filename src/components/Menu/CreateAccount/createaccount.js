import React from 'react';
import FormColumn from '../../FormColumn/Form.js';
import FormText from '../../FormText/FormText.js';
import Button from '../../Button/Button.js';
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

	clearForm() {
		this.setState({
			name:'',
			login:'',
			password:''
		});
	}

	handleSubmit = event => {
		event.preventDefault();

		this.props.send(this.state);

		this.clearForm();
	}

	handleInputChange = event => {
		this.setState({
			[event.target.name]:event.target.value
		});
	}

	render() {
		return (
			<div>
				<NavLink to="/menu"className="Link" activeClassName="Link--Active">
					<div className="Sidebar__Menu">
						<div className="Sidebar__Chat__Border">
							<div className="Title__Text">Назад</div>
						</div>
					</div>
				</NavLink>
				<br/>
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
					<br/>
					<Button type="submit">Создать аккаунт</Button>
				</FormColumn>
			</div>
		);
	}
}

export default CreateAccount;