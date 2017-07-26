import React from 'react';
import './TextBox.css';

import DeleteButton from '../DeleteButton/DeleteButton';

class TextBox extends React.Component {
	
	
	render() {
	    return (
	    	<div className="drag">
	    		<div className="editText" contentEditable="true" spellCheck="false"></div>
	    		<DeleteButton />
	    	</div>
	    );
  	} 
}

export default TextBox; 