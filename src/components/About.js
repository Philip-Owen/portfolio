import React from 'react';
import styled from 'styled-components';

const About = () => (
	<Container id="about">
		<SectionTitle>
			<h2>About</h2>
		</SectionTitle>
		<div>
			<p className="section-subtitle">Who Am I?</p>
			<p>
				I'm a Software Developer and IT professional currently working in the networking field. I've worked on
				everything from builing static websites with HTML, CSS, and JavaScript to configuring routing protocols
				to allow internet access for the crew of an aircraft carrier. I have a passion for learning and I am
				constantly diving in and exploring new technologies.
			</p>
		</div>
		<div>
			<p className="section-subtitle">What do I work with?</p>
			<p>
				JavaScript | Python | Node.js | Express.js | PostgreSQL | MongoDB | AngularJS | React.js | Cisco Routers
				and Switches | Ansible
			</p>
		</div>
	</Container>
);

const Container = styled.div`
	background-color: #35495e;
	color: white;
	width: 100%;
	padding: 90px 50px;
	p {
		font-size: 18px;
		text-align: center;
	}
	.section-subtitle {
		text-decoration: underline;
		text-align: center;
		font-weight: bold;
		font-size: 23px;
		margin-bottom: 5px;
	}
`;

const SectionTitle = styled.div`
	font-size: 40px;
	text-align: center;
	h2 {
		margin-top: 0;
	}
`;

export default About;
