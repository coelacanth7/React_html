import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";

class App extends Component {
	render() {
		return (
			<div className="container-fluid">
				<Navbar />
				<Jumbotron />
			</div>
		);
	}
}

export default App;
