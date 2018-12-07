import React from 'react';
import FormColumn from '../../FormColumn/Form.js';
import FormText from '../../FormText/FormText.js';
import Button from '../../Button/Button.js';
import {NavLink} from 'react-router-dom';

import database from '../../../firebase/database.js';

class CreateAccount extends React.Component {
	constructor() {
		super();
		console.log('create');
		this.state = {
			name:'',
			login:'',
			password:'',
			isContain:false
		};
	}

	clearForm() {
		this.setState({
			name:'',
			login:'',
			password:''
		});
	}

	validationForm() {
		if(this.state.name==='' 
			|| this.state.pasword==='' 
			|| this.state.login===''
			|| this.state.name.length>15
			|| this.state.login.length>15
			|| this.state.password>20)
			return false;
		return true;
	}

	shouldComponentUpdate(nextProps, nextState, nextContext) {
		console.log(this.state);
		console.log(nextState);
		if(this.state!==nextState){
			return true;
		}
		return false;
	}

	handleSubmit = event => {
		event.preventDefault();

		if(!this.validationForm())
			return;

		const AccountRef=database.ref('accounts/'+this.state.login);
    	AccountRef.once('value', snapshot => {
      		let items=snapshot.val();
      		console.log(items);
      		if(items !== null){
      			this.setState({
      				isContain:true
      			});
      		} else {
      			this.setState({
      				isContain:false
      			});
      			this.props.send(this.state);
      			this.clearForm();
      		}
    	});
	}

	handleInputChange = event => {
		this.setState({
			[event.target.name]:event.target.value
		});
	}

	render() {
		return (
			<div className="Sidebar">
				<div className="CreateAcccount">
					<NavLink to="/menu"className="Link" activeClassName="Link--Active">
						<div className="Sidebar__Menu">
							<div className="Title__Text">Назад</div>
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
						placeholder="Введите Пароль"
						type="password"/>
						<br/>
						<Button type="submit">Создать аккаунт</Button>
					</FormColumn>
					{this.state.isContain ? <div>Аккаунт с таким логином уже существует</div>
						:<div></div>}
				</div>
			</div>
		);
	}
}

export default CreateAccount;