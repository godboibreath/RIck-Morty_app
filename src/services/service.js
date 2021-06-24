export default class Service {
	
	constructor() {
		this._apiBase = 'https://rickandmortyapi.com/api';
	}

	getResource = async (url) => {
		const res = await fetch(`${this._apiBase}${url}`);
		if (!res.ok) {
			throw new Error(`Error, fetch ${url}`);
		}
		return await res.json();
	}
	getCharPageCount = async () => {
		const res = await this.getResource('/character');
		return res.info.pages;
	}
	getLocationPageCount = async () => {
		const res = await this.getResource('/location');
		return res.info.pages;
	}
	getAllChar = async (page=1) => {
		const res = await this.getResource(`/character/?page=${page}`);
		return res.results.map(item=>this._transformChar(item));
	}
	getChar = async (id) => {
		id = id || 1;
		const res = await this.getResource(`/character/${id}`);
		return this._transformChar(res);
	}
	getAllLocation = async (page=1) => {
		const res = await this.getResource(`/location/?page=${page}`);
		return res.results.map(item=>this._transformLocation(item));
	}
	getLocation = async (id) => {
		id = id || 1;
		const res = await this.getResource(`/location/${id}`);
		return this._transformLocation(res);
	}
	_transform(item) {
		return item || 'have no info';
	}
	_transformChar(char) {
		return {
			id: this._transform(char.id),
			name: this._transform(char.name),
			status: this._transform(char.status),
			species: this._transform(char.species),
			gender: this._transform(char.gender),
			image: this._transform(char.image),
			location: this._transform(char.location.name)
		}
	}
	_transformLocation(loca) {
		return {
			id: this._transform(loca.id),
			name: this._transform(loca.name),
			type: this._transform(loca.type),
			dimension: this._transform(loca.dimension)
		}
	}
}