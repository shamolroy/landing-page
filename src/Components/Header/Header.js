import React from 'react';

const Header = () => {
    return (
	<header className="header-area">
		<div className="container-fluid">
			<div className="row">
				<div className="col-lg-10">
					<div className="header-menu-area">
						<div className="menubar-area">
							<ul>
								<li><a href="#story">story</a></li>
								<li><a href="#benifit">benefits</a></li>
								<li><a href="#mint">mint</a></li>
								<li><a href="#roadmap">roadmap</a></li>
								<li><a href="#">Whitepaper</a></li>
								<li><a href="#faq">faq</a></li>
							</ul>
						</div>
					</div>
					<div className="bar-area">
						<img src="assets/images/icon/bar.png" alt=""/>
					</div>
				</div>
				<div className="col-lg-2">
					<div className="header-social-icon">
						<ul>
							<li><a href="#" target="_blank"><i className="fab fa-discord"></i></a></li>
							<li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div className="mobile-menu-area">
			<div className="icon-area">
				<div className="canvas-icon close-area">
					<div className="close">
						<div className="close-icon"></div>
					</div>
				</div>
			</div>
			<div className="menubar-area">
				<ul>
					<li><a href="#">story</a></li>
					<li><a href="#">benefits</a></li>
					<li><a href="#">mint</a></li>
					<li><a href="#">roadmap</a></li>
					<li><a href="#">faq</a></li>
				</ul>
			</div>
			<div className="header-social-icon">
				<ul>
					<li><a href="#" target="_blank"><i className="fab fa-discord"></i></a></li>
					<li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
				</ul>
			</div>
		</div>
	</header>
    );
};

export default Header;