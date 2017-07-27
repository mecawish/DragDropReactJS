import React from 'react';
import './TextBox.css';

import DeleteButton from '../DeleteButton/DeleteButton';

class TextBox extends React.Component {	
	constructor(props) {
		super(props);

		this.state = {
			startX: 0,
			startY: 0,
			offsetX: 0,
			offsetY: 0
		}

		this.onTextBoxMouseDown = this.onTextBoxMouseDown.bind(this);
		this.onTextBoxMouseMove = this.onTextBoxMouseMove.bind(this);
	}

	onTextBoxMouseDown(e){
		let dragElement = e.target;
		this.setState({
			startX: e.pageX,
			startY: e.pageY,
			offsetX: dragElement.offsetLeft,
			offsetY: dragElement.offsetTop
		}); 
		console.log(this.state);
	}

	onTextBoxMouseMove(e){

	}

	render() {
	    return (
	    	<div 	className="drag" 
	    			onMouseDown={this.onTextBoxMouseDown}
	    			onMouseMove={this.onTextBoxMouseMove}
	    	>
	    		<div className="editText" contentEditable="true" spellCheck="false"></div>
	    		<DeleteButton />
	    	</div>
	    );
  	} 
}

export default TextBox; 