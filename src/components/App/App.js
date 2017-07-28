import React from 'react';
import './App.css';
import AddTextBoxButton from '../AddTextBoxButton/AddTextBoxButton';
import DropZone from '../DropZone/DropZone';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = { 
			textboxes: [],
			dragElement: null,
			startX: 0,
			startY: 0,
			offsetX: 0,
			offsetY: 0
		};

		this.onAddTextBoxClick = this.onAddTextBoxClick.bind(this);
		this.onTextBoxMouseDown = this.onTextBoxMouseDown.bind(this);
		this.onTextBoxMouseMove = this.onTextBoxMouseMove.bind(this);
		this.onTextBoxMouseUp = this.onTextBoxMouseUp.bind(this);
	}

	onAddTextBoxClick(textbox) {
		let textboxes = this.state.textboxes.slice();
		textboxes.push(textbox);

		this.setState({
            textboxes: textboxes,
      	 });
	}

	onTextBoxMouseDown(e) {
		if (e.target.classList.contains('drag')){
			let dragElement = e.target;
		    this.setState({
		    	startX: e.pageX,
		    	startY: e.pageY,
		    	dragElement: dragElement,
		    	offsetX: e.target.offsetLeft,
	    		offsetY: e.target.offsetTop
		    });
		    dragElement.style.cursor = 'move';
	    	dragElement.firstChild.setAttribute('contenteditable', false);
		}
	}

	onTextBoxMouseMove(e) {
		
	}

	onTextBoxMouseUp(e) {
		
	}

	render() {
	    return (
	    	<div>
				<AddTextBoxButton onAddTextBoxClick={this.onAddTextBoxClick}/>
				<DropZone 
					textboxes={this.state.textboxes}
					onTextBoxMouseDown={this.onTextBoxMouseDown}
					onTextBoxMouseMove={this.onTextBoxMouseMove}
					onTextBoxMouseUp={this.onTextBoxMouseUp}/>
			</div>
	    );
  	} 
}

export default App;