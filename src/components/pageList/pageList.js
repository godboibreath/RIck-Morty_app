import React from 'react';
import Container from '../container/';
import {Link} from 'react-router-dom';
import './pageList.scss';

export default function PageList({ pages,path }) {
	const page = [];
	for (let i = 1; i <= pages; i++){
		page.push(
			<li
				key={i}
				className="pagelist__item"
			>
				<Link to={`/${path}/pages/${i}`}>{i}</Link>
			</li>
		)
	}
	return (
		<div className="pagelist">
			<Container>
				<ul className="pagelist__list">
					{page}
				</ul>
			</Container>
		</div>
	)
}