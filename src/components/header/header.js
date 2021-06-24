import React, { Component } from 'react';
import Container from '../container/';
import { Link } from 'react-router-dom';
import './header.scss';

export default class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			menuView: false
		};
	}
	render() {
		return (
			<header className="header">
				<Container>
					<div className="header__block">
						<div className="header__logo">
							<Link to="/"><img src={process.env.PUBLIC_URL + '/img/morty.png'} alt="Morty" /></Link>
						</div>
						<h1 className="header__title">
							<Link to="/">Rick&Morty DataBase</Link>
						</h1>
						<div className="header__burger">
							<span></span>
						</div>
						<ul className="header__menu">
							<li className="haeder__item"><Link to='/characters/'>Characters</Link></li>
							<li className="haeder__item"><Link to='/locations/'>Locations</Link></li>
						</ul>
					</div>
				</Container>
			</header>
		)
	}
}