import React from 'react';
import './DropZone.css';

import TextBox from '../TextBox/TextBox';

const DropZone = (props) => {
	const textboxes = props.textboxes.map((textbox, index) => {
		return (
			<TextBox key={index} />
		);
	});

	return(
		<div id="dropZone">
			{textboxes}
		</div>
	);
};

export default DropZone;