import React from "react";

const Navbar = () => {
	return (
		<nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
			<a class="navbar-brand" href="#">
				Krusty Krab
			</a>
			<div class="navbar-expand" id="navbarNavAltMarkup">
				<div class="navbar-nav">
					<a class="nav-item nav-link active" href="#reservation">
						Reservation <span class="sr-only">(current)</span>
					</a>
					<a class="nav-item nav-link" href="#menu">
						Menu
					</a>
					<a class="nav-item nav-link" href="#contact">
						Contact
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
