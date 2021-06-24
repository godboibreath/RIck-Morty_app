import React from 'react';
import './mainContent.scss';

export default function MainContent(props) {
	return (
		<main className="content">
			{props.children}
		</main>
	)
}