import React from 'react';
import styled from 'styled-components';

const Footer = () => (
	<Container>
		<p>Copyright © Philip Owen 2019</p>
	</Container>
);

const Container = styled.footer`
	display: flex;
	justify-content: center;
	height: 50px;
`;

export default Footer;
