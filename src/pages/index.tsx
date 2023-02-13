import { AboutUs } from '@Layouts/home/AboutUs';
import { Brands } from '@Layouts/home/Brands';
import { Main } from '@Layouts/home/Main';
import React from 'react';

const Home = () => {
	return (
		<div>
			<Main />
			<Brands />
			<AboutUs />
		</div>
	);
};

export default Home;
