import React from 'react';
import ReactDOM from 'react-dom';
import './AddTextBoxButton.css';

import TextBox from '../TextBox/TextBox';

class AddTextBoxButton extends React.Component {
	addTextBox(e){
		ReactDOM.render(
		  <TextBox />,
		  document.getElementById("dropZone")
		);
	}

	render() {
	    return (
	    	<button onClick={this.addTextBox}>Add TextBox</button>
	    );
  	} 
}

export default AddTextBoxButton; 