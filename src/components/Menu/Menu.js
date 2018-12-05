import React from 'react';
import {NavLink} from 'react-router-dom';

import './Menu.css';

class Menu extends React.Component {
	constructor() {
		super();
	}
	render() {
		return(
			<div>
				<NavLink to ="/" className="Link" activateClassName="Link--Active">
					<div>Назад</div>
				</NavLink>
				<NavLink to ="/create-acc" className="Link" activateClassName="Link--Active">
					<div>создать</div>
				</NavLink>
				<NavLink to = "/enter" className="Link" activateClassName="Link--Active">
					<div>войти</div>
				</NavLink>
			</div>
		);
	}
}

export default Menu;