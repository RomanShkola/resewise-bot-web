import React from 'react';
import {HomePageContainer} from "./home.styes";
import * as moment from 'moment'

const Home = () => {
	return (
		<HomePageContainer>
			<h2>Home View</h2>
			<p> { moment().format() } Lorem ipsum dolor sit amet, consectetur adip.</p>
		</HomePageContainer>
	);
}

export default Home;
