import React from 'react'
import styled,{css} from 'styled-components'

import './Message.css'

const Name=styled.span`
	font-size: 10px;
	${props => props.color===0 && css`
		color:#ec1c24;
	`}
	${props => props.color===1 && css`
		color:#0ed145;
	`}
	${props => props.color===2 && css`
		color:#3f48cc;
	`}
`;

class Message extends React.Component {
	render(){
		return(
			<div className="Message">
				<div><Name color={this.props.color}>{this.props.name}</Name></div>
				<span className="Message__Text">{this.props.children}</span>
			</div>
		);
	}
}

export default Message;