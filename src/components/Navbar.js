import React, { Component } from 'react';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class Navbar extends Component {
	state = {
		toggled: false,
	};

	menuToggle = () => {
		const { toggled } = this.state;
		this.setState({ toggled: !toggled });
	};

	resetToggle = () => {
		if (window.innerWidth > 768) {
			this.setState({ toggled: false });
		}
	};

	toggleClick = () => {
		this.setState({ toggled: false });
	};

	componentDidMount() {
		window.addEventListener('resize', this.resetToggle);
	}

	render() {
		const { toggled } = this.state;
		return (
			<NavContainer>
				<Nav>
					<div>
						<span id="logo" onClick={this.toggleClick}>
							<AnchorLink href="#main">Philip Owen</AnchorLink>
						</span>
						<div id="menu-toggle" onClick={this.menuToggle}>
							<span>Menu</span>
						</div>
					</div>
					<NavLinkList toggled={toggled}>
						<li>
							<AnchorLink href="#about" onClick={this.toggleClick}>
								About
							</AnchorLink>
						</li>
						<li>
							<AnchorLink href="#projects" onClick={this.toggleClick}>
								Projects
							</AnchorLink>
						</li>
						<li>
							<AnchorLink href="#contact" onClick={this.toggleClick}>
								Contact
							</AnchorLink>
						</li>
					</NavLinkList>
				</Nav>
			</NavContainer>
		);
	}
}

const NavContainer = styled.div`
	width: 100%;
	background-color: white;
	position: fixed;
	margin-bottom: 10px;
`;

const Nav = styled.div`
	display: flex;
	padding: 0 10px;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid gray;
	#logo {
		padding: 10px 0;
		font-size: 25px;
		font-weight: bold;
		a {
			color: #35495e;
			text-decoration: none;
		}
	}
	#menu-toggle {
		display: none;
	}
	@media (max-width: 768px) {
		flex-direction: column;
		align-items: stretch;
		div {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		#menu-toggle {
			padding: 4px;
			cursor: pointer;
			border-radius: 4px;
			border: 1px solid black;
			display: inline;
			text-decoration: none;
			:hover {
				border-color: gray;
			}
		}
	}
`;

const NavLinkList = styled.ul`
	list-style: none;
	display: flex;
	li {
		padding-right: 20px;
	}
	li > a {
		color: #35495e;
		text-decoration: none;
		font-size: 18px;
		cursor: pointer;
	}
	@media (max-width: 768px) {
		padding-inline-start: 0;
		flex-direction: column;
		display: ${props => (props.toggled ? 'inline' : 'none')};
		li {
			padding-top: 5px;
		}
	}
`;

export default Navbar;
