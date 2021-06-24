import React, {Component} from 'react';
import Container from '../container/';
import Spinner from '../spinner/';
import Error from '../error/';
import Service from '../../services/service';
import './randomItem.scss';

export default class RandomItem extends Component {
	constructor(props) {
		super(props)
		this.state = {
			item: {},
			loading: true,
			error: false
		};
		this.service = new Service();
		this.interval = 15000;
	}

	componentDidMount() {
		this.updateChar();
		this.timer = setInterval(this.updateChar, this.interval);
	}
	componentWillUnmount() {
		clearInterval(this.timer);
	}

	updateChar = () => {
		const num = Math.floor(Math.random() * this.props.number);
		this.props.serviceFunction(num)
			.then(item => this.setState({
				item,
				loading: false,
				error: false
			}))
			.catch(() => this.setState({
				loading: false,
				error: true
			}));
	}
	render() {
		const { item, error, loading} = this.state;
		const content = !(error || loading) ? <Content item={item} /> : null;
		const spinner = loading ? <Spinner/> : null;
		const errorMes = error ? <Error /> : null;
		return (
			<div className="random">
				<Container>
					<div className="random__block">
						{errorMes}
						{spinner}
						{content}
					</div>
				</Container>
			</div>
		)
	}
}

export function Content({ item }) {
	const { image} = item;
	const elements = Object.entries(item).map(([key, value]) => {
		if (key === "id" || key === "image"||key==="location") {
			return null
		}
		return (
			<li key={`${item.name}${value}`} className="random__item">
				<span className="random__term">{key.charAt(0).toUpperCase()+key.slice(1)}:</span>
				<span> {value}</span>
			</li>
		)
	})
	return (
		<>
			<div className="random__image">
				<img src={image} alt="Изображение отсутствует"/>
			</div>
			<ul className="random__info">
				{elements}
			</ul>
		</>
	)
}