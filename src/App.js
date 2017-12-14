import React, { Component } from "react";
import logo from "./logo.svg";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Menu from "./menu";
import Contact from "./contact";
import "./App.css";

var seafoodItems = [
	{
		name: "Krabby Patty",
		price: "1.25"
	},
	{
		name: "Krabby Patty w/ sea cheese",
		price: "1.50"
	},
	{
		name: "Double Krabby Patty",
		price: "2.00"
	},
	{
		name: "Double Krabby Patty w/ sea cheese",
		price: "2.25"
	},
	{
		name: "Kelp Rings",
		price: "1.50"
	},
	{
		name: "xt Salty Sauce",
		price: "0.50"
	},
	{
		name: "Seafoam Soda",
		price: "1.00"
	}
];

class App extends Component {
	render() {
		return (
			<div className="container-fluid">
				<Navbar />
				<Jumbotron />
				<Menu seafoodItems={seafoodItems} />
				<Contact />
			</div>
		);
	}
}

export default App;
