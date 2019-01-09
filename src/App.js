import React, { Component } from 'react';
import './App.css';
import Game from './Game.js';

class App extends Component {
	render() {
		return (
			<div className="App">
      <div style={{marginBottom:"90px"}}/>
				<Game />
			</div>
		);
	}
}

export default App;
