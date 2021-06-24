import React, {Component} from 'react';
import Container from '../container/';
import Service from '../../services/service';
import Error from '../error/';
import Spinner from '../spinner/';
import './itemList.scss';
import {withRouter, Link} from 'react-router-dom';

class ItemList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: null,
			loading: true,
			error: false
		};
		this.service = new Service();
	}
	componentDidMount() {
		this.updateList();
	}
	componentDidUpdate(prevProps){
		if(this.props.page!==prevProps.page){
			this.updateList();
		}
	}
	updateList = () => {
		const { id } = this.props.match.params;
		this.props.serviceFunction(id)
			.then(data => this.setState({
				data,
				loading: false,
				error:false
			}))
			.catch(() => this.setState({
				loading: false,
				error: true
			}))
	}
	render() {
		const { data,error, loading } = this.state;
		const { path } = this.props;
		if (loading) {
			return (
				<div className="group">
					<Container>
							<Spinner/>
					</Container>
				</div>
			)
		}
		if (error) {
			return (
				<div className="group">
					<Container>
							<Error/>
					</Container>
				</div>
			)
		}
		const elements = data.map(item => {
			return <li
				key={item.id}
				className="group__item"
			>
				<Link to={`/${path}/${item.id}`}>{item.name}</Link>
			</li>
		})
		return (
			<div className="group">
				<Container>
					<ul className="group__list">
						{elements}
					</ul>
				</Container>
			</div>
		)
	}
}
export default withRouter(ItemList);