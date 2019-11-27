import React, { useState } from 'react';
import styled from 'styled-components';

const ContactForm = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [error, setError] = useState(false);
	const [msgSent, setMsgSent] = useState(false);

	const formReset = () => {
		setName('');
		setEmail('');
		setMessage('');
		setError(false);
		setMsgSent(true);
	};

	const postForm = async data => {
		try {
			await fetch('https://45z5nk3fmf.execute-api.us-east-1.amazonaws.com/prod/', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data),
			});
			formReset();
		} catch (e) {
			setError(true);
		}
	};

	const handleSubmit = e => {
		e.preventDefault();
		const data = { name, email, message };
		postForm(data);
	};
	return (
		<Container>
			<p className="contact-subtitle">Send me a message</p>
			<Form onSubmit={handleSubmit}>
				<input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" required />
				<input
					type="email"
					value={email}
					onChange={e => setEmail(e.target.value)}
					placeholder="Email address"
					required
				/>
				<textarea
					cols="10"
					rows="5"
					value={message}
					onChange={e => setMessage(e.target.value)}
					placeholder="Your message"
					required
				></textarea>
				<button>Submit</button>
				{msgSent ? <h3>Message Sent!</h3> : null}
				{error ? (
					<ErrorMsg>
						{
							"It doesn't appear that the contact form is working at the moment. Please try again later or contact me at one of the links below."
						}
					</ErrorMsg>
				) : null}
			</Form>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	h3 {
		font-size: 18px;
	}
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 50%;
	input,
	textarea {
		width: 100%;
		max-width: 100%;
		padding: 12px 20px;
		margin: 8px 0;
		border: 1px solid #ccc;
		border-radius: 4px;
		font-size: 18px;
	}
	button {
		width: 100%;
		background-color: #526488;
		color: white;
		padding: 14px 20px;
		margin: 8px 0;
		border: none;
		border-radius: 4px;
		font-size: 18px;
		font-weight: bold;
		cursor: pointer;
	}
	button:hover {
		background-color: #526480;
	}
	textarea {
		resize: none;
	}
	@media (max-width: 768px) {
		width: 100%;
	}
`;

const ErrorMsg = styled.p`
	color: red;
	font-size: 18px;
	font-weight: bold;
`;

export default ContactForm;
