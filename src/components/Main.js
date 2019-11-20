import React from 'react';

import styled from 'styled-components';

import headshotImg from '../images/headshot.jpg';

const Main = () => (
	<Container id="main">
		<div>
			<Headshot src={headshotImg} alt="headshot" />
		</div>
		<div>
			<Title>Philip Owen</Title>
			<Subtitle>Software Developer | IT Professional</Subtitle>
		</div>
	</Container>
);

const Container = styled.div`
	margin: 0 auto;
	min-height: 100vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	div {
		padding: 30px;
	}
	@media (max-width: 768px) {
		flex-direction: column;
		div {
			padding: 0;
		}
	}
`;

const Headshot = styled.img`
	max-height: 30vh;
	border-radius: 50%;
	border: 2px solid #35495e;
`;

const Title = styled.h1`
	display: block;
	font-weight: 500;
	font-size: 8.5vmax;
	color: #35495e;
	letter-spacing: 1px;
	margin: 0;
`;

const Subtitle = styled.h2`
	font-weight: 300;
	font-size: 4.5vmin;
	color: #526488;
	word-spacing: 5px;
	padding-bottom: 15px;
`;

export default Main;
