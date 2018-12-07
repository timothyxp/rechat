import React from 'react';
import FormColumn from '../../FormColumn/Form.js';
import FormText from '../../FormText/FormText.js';
import Button from '../../Button/Button.js';
import {NavLink} from 'react-router-dom';
import hashPassword, {isEqualHashs}from '../../../HashPassword/hash.js';
import './enter.css';

import database from '../../../firebase/database.js';

export default class Enter extends React.Component {
	constructor() {
		super();
		this.state = {
			login:'',
			password:'',
			error:false
		};
	}

	clearForm() {
		this.setState({
			login:'',
			password:''
		});
	}

	validationForm() {
		if(this.state.paswrod==='' 
			|| this.state.login==='')
			return false;
		return true;
	}

	handleSubmit = event => {
		event.preventDefault();

		if(!this.validationForm())
			return;

    	const AccountRef=database.ref('accounts/'+this.state.login);
    	AccountRef.once('value', snapshot => {
      		let items=snapshot.val();
      		if(items!==null){
      			let password=hashPassword(this.state.password);
      			if(isEqualHashs(items.password,password)){
      				this.setState({
      					error:false
      				});
      				this.props.onSubmit({...this.state,...{
      					name:items.name,
      					accountId:items.accountId
      				}});
      				this.clearForm();
      			} else {
      				this.setState({
      					error:true
      				});
      			}
      		} else {
      			this.setState({
      				error:true
      			});
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
				<div className="Enter">
					<NavLink to="/menu" className="Link" activeClassName="Link--Active">
						<div className="Sidebar__Menu">
							<div className="Title__Text">Назад</div>
						</div>
					</NavLink>
					<br/>
					<FormColumn onSubmit={this.handleSubmit}>
						<FormText name="login" 
						onChange={this.handleInputChange}
						value={this.state.login}
						placeholder="Введите Логин"/>
						<FormText name="password" 
						onChange={this.handleInputChange}
						value={this.state.password}
						placeholder="Введите Пароль"/>
						<br/>
						<Button type="submit">Войти</Button>
					</FormColumn>
					{this.state.error ? <div>Неправильный логин или пароль</div>:<div></div>}
				</div>
			</div>
		);
	}
}