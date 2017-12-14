import React from "react";

const Navbar = () => {
	return (
		<nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
			<a className="navbar-brand" href="#">
				Krusty Krab
			</a>
			<div className="navbar-expand" id="navbarNavAltMarkup">
				<div className="navbar-nav">
					<a className="nav-item nav-link active" href="#reservation">
						Reservation <span className="sr-only">(current)</span>
					</a>
					<a className="nav-item nav-link" href="#menu">
						Menu
					</a>
					<a className="nav-item nav-link" href="#contact">
						Contact
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
