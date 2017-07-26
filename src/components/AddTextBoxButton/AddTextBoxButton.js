import React from 'react';
import ReactDOM from 'react-dom';
import './AddTextBoxButton.css';

import TextBox from '../TextBox/TextBox';

class AddTextBoxButton extends React.Component {
	addTextBox(e){
		// TO DO - change this to add textboxes each time button is clicked
		// instead of just replacing the previous rendered element
		ReactDOM.render(
		  <TextBox />,
		  document.getElementById("dropZone")
		);
		//react.createElement(TextBox);
	}

	render() {
	    return (
	    	<button onClick={this.addTextBox}>Add TextBox</button>
	    );
  	} 
}

export default AddTextBoxButton; 