import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => (
	<Container id="contact">
		<SectionTitle>
			<h2>Contact</h2>
			<p className="contact-subtitle">Reach me here</p>
			<IconContainer className="contact-icon-container">
				<a href="https://www.linkedin.com/in/phil-owen" target="_blank" rel="noopener noreferrer">
					<FontAwesomeIcon icon={['fab', 'linkedin-in']} color="white" size="1x" />
				</a>
				<a href="mailto:owen.philipb@gmail.com">
					<FontAwesomeIcon icon="envelope" color="white" size="1x" />
				</a>
			</IconContainer>
		</SectionTitle>
	</Container>
);

const Container = styled.div`
	background-color: #35495e;
	color: white;
	width: 100%;
	height: 50vh;
	padding: 90px 50px;
	.contact-subtitle {
		text-decoration: underline;
		text-align: center;
		font-weight: bold;
		font-size: 23px;
		margin-bottom: 5px;
	}
`;

const IconContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	a {
		margin: 10px;
	}
`;

const SectionTitle = styled.div`
	font-size: 40px;
	text-align: center;
	h2 {
		margin-top: 0;
	}
`;

export default Contact;
