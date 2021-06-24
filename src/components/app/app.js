import React, { Component } from 'react';
import Wrapper from '../wrapper/';
import Header from '../header/';
import Footer from '../footer/';
import MainContent from '../mainContent/';
import Service from '../../services/service';
import HomePage from '../pages/homePage/'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CharPage from '../pages/charPage/';
import LocationPage from '../pages/locationPage/';
import './app.scss';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.service = new Service();
	}
	render() {
		return (
			<Router>
				<Wrapper>
					<Header />
					<MainContent>
						<Route path="/" exact component={HomePage} />
						<Route path='/characters/' component={CharPage} />
						<Route path='/locations/' component={LocationPage} />
					</MainContent>
					<Footer />
				</Wrapper>
			</Router>
		)
	}
}

