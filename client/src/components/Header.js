import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	//Nav view
	const navBar = () => (
		<nav className="navbar navbar-expand-lg bg-light">
			<div className="container-fluid">
				<Link to="/" className="navbar-brand">
					Logo
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarTogglerDemo02"
					aria-controls="navbarTogglerDemo02"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse " id="navbarTogglerDemo02">
					<form className="d-flex ms-auto" role="search">
						<input
							className="form-control me-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button className="btn btn-outline-success" type="submit">
							Search
						</button>
					</form>
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link to="/" className="nav-link " aria-current="page">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/signup" className="nav-link " aria-current="page">
								Sign-up
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/login" className="nav-link ">
								Login
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
	return <header id="header">{navBar()}</header>;
};

export default Header;
