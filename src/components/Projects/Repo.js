import React from 'react';
import styled from 'styled-components';

const Repo = props => {
	const { repo } = props;
	return (
		<Conatiner>
			<a href={repo.html_url} target="_blank" rel="noopener noreferrer">
				{repo.name}
			</a>
			<p>Language: {repo.language}</p>
		</Conatiner>
	);
};

const Conatiner = styled.div`
	background-color: #35495e;
	color: white;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 5px;
	margin: 5px;
	border: 2px solid #526488;
	word-wrap: normal;
	width: 20%;
	height: 120px;
	a {
		color: white;
		text-decoration: underline;
		font-weight: bold;
		margin: 10px 0 0 0;
	}
	p {
		margin-top: 5px;
	}
	@media (max-width: 768px) {
		width: 100%;
	}
`;

export default Repo;
