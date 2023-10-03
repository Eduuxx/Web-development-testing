import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
	<nav>
		<ul>
			<li>
				<Link to="/">Koti</Link>
			</li>
			<li>
				<Link to="/about">Tietoa</Link>
			</li>
			<li>
				<Link to="/article-list">Artikkeli</Link>
			</li>
		</ul>
	</nav>
);

export default NavBar;
