import React from 'react';
import {NavLink} from 'react-router-dom';

import './Menu.css';

class Menu extends React.Component {
	render() {
		return(
			<div className="Sidebar">
				<div className="Sidebar__Chats">
					<NavLink to ="/" className="Link" activeClassName="Link--Active">
						<div className="Sidebar__Menu">
							<div className="Title__Text">Назад</div>
						</div>
					</NavLink>
					<NavLink to ="/create-acc" className="Link" activeClassName="Link--Active">
						<div className="Sidebar__Menu">
							<div className="Title__Text">Создать Аккаунт</div>
						</div>
					</NavLink>
					<NavLink to = "/enter" className="Link" activeClassName="Link--Active">
						<div className="Sidebar__Menu">
							<div className="Title__Text">Войти</div>
						</div>
					</NavLink>
				</div>
			</div>
		);
	}
}

export default Menu;