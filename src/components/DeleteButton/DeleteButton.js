import React from 'react';
import './DeleteButton.css';

class DeleteButton extends React.Component {
	deleteTextBox(e){
		console.log("delete");
		e.target.parentNode.remove();
	}

	render() {
	    return (
	    	<div className="delete" onClick={this.deleteTextBox}>x</div>
	    );
  	} 
}

export default DeleteButton;