import React from 'react';
import './App.css';
import AddTextBoxButton from '../AddTextBoxButton/AddTextBoxButton';
import DropZone from '../DropZone/DropZone';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = { 
			textboxes: [] 
		};

		this.onAddTextBoxClick = this.onAddTextBoxClick.bind(this);
	}

	onAddTextBoxClick(textbox) {
		var textboxes = this.state.textboxes.slice();
		textboxes.push(textbox);

		this.setState({
            textboxes: textboxes
      	 });
	}

	render() {
	    return (
	    	<div>
				<AddTextBoxButton onAddTextBoxClick={this.onAddTextBoxClick}/>
				<DropZone textboxes={this.state.textboxes}/>
			</div>
	    );
  	} 
}

export default App;