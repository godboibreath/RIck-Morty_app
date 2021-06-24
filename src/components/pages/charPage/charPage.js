import React, {Component} from 'react';
import RandomItem from '../../randomItem/';
import ItemList from '../../itemList/';
import ItemDetails from '../../itemDetails/';
import PageList from '../../pageList';
import Service from '../../../services/service';
import Error from '../../error/';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class CharPage extends Component{
	constructor(props) {
		super(props);
		this.service = new Service();
		this.state = {
			pageCount: null,
			error: false
		}
	}
	componentDidMount() {
		this.service.getCharPageCount()
			.then(pageCount => {
				this.setState({
					pageCount
				});
			});
	}
	componentDidCatch() {
		this.setState({
			error: true,
		});
	}
	render() {
		const { pageCount, error } = this.state;
		if (error) {
			return <Error />
		}
		return (
			<>
				<Router>
					<RandomItem serviceFunction={this.service.getChar} number={671}/>
					<Route path="/characters/pages/:id" render={
						({match}) =>{
							const { id } = match.params;
							return <ItemList page={id} serviceFunction={this.service.getAllChar} path='characters' />
						}
					} />
					<Route path="/characters/:id" exact render={
						({ match }) => {
							const { id } = match.params;
							return <ItemDetails serviceFunction={this.service.getChar}  itemId={id} />
						}
					} />
					<PageList pages={pageCount} path='characters' />
				</Router>
			</>
		)
	}
}