import React from 'react';
import Container from '../../container/';
import './homePage.scss';

export default function HomePage() {
	return (
		<div className='home'>
			<Container>
				<div className='home__block'>
					<h2 className="home__title">
						Wellcome to Rick and Morty DataBase
					</h2>
					<p className="home__text">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est perspiciatis corrupti doloremque nobis ut ex in pariatur! Asperiores voluptatibus voluptatem ratione suscipit ex sint, autem earum ipsam nobis quas ipsum!
					</p>
				</div>
			</Container>
		</div>
	)
}