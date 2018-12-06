import React from 'react';
import {NavLink} from 'react-router-dom';

import './Sidebar.css'

export default class Sidebar extends React.Component {
	render(){
		return (
			<div className="Sidebar">
				<div className="Sidebar__Chats">
					<NavLink to ="/menu" className="Link" activeClassName="Link--Active">
						<div className="Sidebar__Menu">
							<div className="Title__Text">Меню</div>
						</div>
					</NavLink>
					<div className="Chat-Active">
						<div className="Title__Text">Чат 1</div>
					</div>
				</div>
			</div>
		);
	}
}