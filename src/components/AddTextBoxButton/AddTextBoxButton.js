import React from 'react';
import ReactDOM from 'react-dom';
import './AddTextBoxButton.css';

class AddTextBoxButton extends React.Component {
	handleClick(e){
		ReactDOM.render(
		  <div>Let's pretend this is the textbox.</div>,
		  document.getElementById("dropZone")
		);
	}

	render() {
	    return (
	    	<button onClick={this.handleClick}>Add TextBox</button>
	    );
  	} 
}

export default AddTextBoxButton; 