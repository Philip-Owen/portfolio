import React from 'react';

import Navbar from './components/Navbar';
import Main from './components/Main';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Main />
			<About />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
