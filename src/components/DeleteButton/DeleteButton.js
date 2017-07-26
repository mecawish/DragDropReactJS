import React from 'react';
import './DeleteButton.css';

class DeleteButton extends React.Component {
	deleteTextBox(e){
		e.target.parentNode.remove();
	}

	render() {
	    return (
	    	<div className="delete" onClick={this.deleteTextBox}>x</div>
	    );
  	} 
}

export default DeleteButton;