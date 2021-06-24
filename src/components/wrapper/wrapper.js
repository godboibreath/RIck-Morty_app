import React from 'react';
import './wrapper.scss';

export default function Wrapper(props) {
		return (
			<div className="wrapper">
				{props.children}
			</div>
		)
}