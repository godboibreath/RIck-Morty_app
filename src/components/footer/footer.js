import React from 'react';
import Container from '../container/';
import './footer.scss';

export default function Footer() {
	return (
		<footer className="footer">
			<Container>
				<div className="footer__block">
					<ul className="footer__list">
						<li className="footer__item">Contact 1</li>
						<li className="footer__item">Contact 2</li>
						<li className="footer__item">Contact 3</li>
					</ul>
				</div>
			</Container>
		</footer>
	)
}