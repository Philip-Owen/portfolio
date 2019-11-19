import React from 'react';
import styled from 'styled-components';

const Error = () => (
	<Container>
		<h3>Sorry, my recent projects are not loading at this time.</h3>
		<h4>Please try again later or check the Github link below.</h4>
	</Container>
);

const Container = styled.div`
	text-align: center;
`;

export default Error;
