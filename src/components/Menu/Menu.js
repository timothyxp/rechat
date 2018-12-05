import React from 'react';
import {NavLink} from 'react-router-dom';

import './Menu.css';

class Menu extends React.Component {
	render() {
		return(
			<div>
				<NavLink to ="/" className="Link" activeClassName="Link--Active">
					<div>Назад</div>
				</NavLink>
				<NavLink to ="/create-acc" className="Link" activeClassName="Link--Active">
					<div>создать</div>
				</NavLink>
				<NavLink to = "/enter" className="Link" activeClassName="Link--Active">
					<div>войти</div>
				</NavLink>
			</div>
		);
	}
}

export default Menu;