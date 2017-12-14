import React from "react";

const Contact = () => {
	return (
		<div className="contact container mb-5">
			<a name="contact" />
			<div className="card bg-dark">
				<img
					className="card-img"
					src="http://vignette1.wikia.nocookie.net/spongebob/images/a/a5/The_Krusty_Krab_in_Season_1.png/revision/latest?cb%5Cx3d20141130004439"
					alt="Card image"
				/>
				<div className="card-img-overlay">
					<h4 className="card-title">Contact Us</h4>
					<ul className="card-text ">
						<li>Phone: (715) 820-3420</li>
						<li>
							Address: 831 Bottomfeeder Lane. In, Bikini Bottom, Bikini Attol
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Contact;
