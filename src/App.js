import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
	constructor(){
		super()
		this.state = {
			name: null
		}
	}
	async componentDidMount(){
		const example = await fetch('http://localhost:9000/demo-postman', {
			method: 'POST',
			credentials: 'include',
			body: JSON.stringify({'name': 'Nate Smith'}),
			headers: {
				'Content-Type': 'application/json'
			}
		})

		// console.log(example)

		const parsedResponse = await example.json()

		// console.log(parsedResponse)
		this.setState({
			name: parsedResponse.dataRecieved.name
		})
	}
	render(){
		console.log(this.state)
		return (
			<div className="App">
				{this.state.name ? <h1> {this.state.name} </h1> : null}
			</div>
		);
	}
}

export default App;
