import React, {Component} from 'react';
import Container from '../container/';
import Service from '../../services/service';
import Error from '../error/';
import Spinner from '../spinner/';
import './itemDetails.scss';

export default class ItemDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			item: null,
			loading: true,
			error: false
		}
		this.service = new Service();
	}
	componentDidMount() {
		const { itemId } = this.props;

		this.props.serviceFunction(itemId)
			.then(item => {
				this.setState({
					item,
					loading: false,
					error: false
				})
			})
			.catch(() => this.setState({
				loading: false,
				error: true
			}));
	}

	render() {
		const { item, loading, error } = this.state;
		if (loading) {
			return (
				<div className="details">
					<Container>
						<Spinner/>
					</Container>
				</div>
			)
		}
		if (error) {
			return (
				<div className="details">
					<Container>
						<Error/>
					</Container>
				</div>
			)
		}
		if (item) {
			const elements = <Content item={item} />;
			return (
				<div className="details">
					<Container>
						<div className="details__block">
							{elements}
						</div>
					</Container>
				</div>
			)
		}
	}
}

export function Content({item}) {
	const { image} = item;
	const elements = Object.entries(item).map(([key, value]) => {
		if (key === "image") {
			return null
		}
		return (
			<li key={`${item.name}${value}`} className="details__item">
				<span className="details__term">{key.charAt(0).toUpperCase()+key.slice(1)}:</span>
				<span> {value}</span>
			</li>
		)
	})
	return (
		<>
			<div className="details__image">
				<img src={image} alt="Изображение отсутствует"/>
			</div>
			<ul className="details__info">
				{elements}
			</ul>
		</>
	)
}
