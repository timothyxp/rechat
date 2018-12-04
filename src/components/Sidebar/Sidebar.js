import React from 'react'

import './Sidebar.css'

export default class Sidebar extends React.Component {
	render(){
		return (
			<div className="Sidebar">
				<div className="Sidebar__Chats">
					<div className="Sidebar__Menu">
						<div className="Title__Text">Меню</div>
					</div>
					<div className="Chat-Active">
						<div className="Title__Text">Чат 1</div>
					</div>
					<div className="Chat">
						<div className="Title__Text">Чат 2</div>
					</div>
					<div className="Chat">
						<div className="Title__Text">Чат 3</div>
					</div>
					<div className="Chat">
						<div className="Title__Text">Чат 4</div>
					</div>
					<div className="Chat">
						<div className="Title__Text">Чат 5</div>
					</div>
					<div className="Chat">
						<div className="Title__Text">Чат 6</div>
					</div>
					<div className="Chat">
						<div className="Title__Text">Чат 7</div>
					</div>
				</div>
			</div>
		);
	}
}