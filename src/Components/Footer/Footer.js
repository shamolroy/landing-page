import React from 'react';

const Footer = () => {
    return (
    <footer class="footer-area">
		<div class="container">
			<div class="footer-top-area">
				<div class="row">
					<div class="col-lg-12">
						<div class="footer-top-content">
							<h2>MEtaverse 7</h2>
							<ul>
								<li><a href="#" target="_blank"><i class="fab fa-discord"></i></a></li>
								<li><a href="#" target="_blank"><i class="fab fa-twitter"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
				<div class="row footer-bottom-area">
					<div class="col-lg-7 col-md-6">
						<div class="footer-left-content">
							<p>Metaverse 7 NFT collection is a series of 15,000 launching on Unique Network. The only collection with profit redistribution from direct investment into the sector across all stages.</p>
						</div>
					</div>
					<div class="col-lg-5 col-md-6">
						{/* mobile social */}
						<div class="mobile-social footer-top-content">
							<ul>
								<li><a href="#" target="_blank"><i class="fab fa-discord"></i></a></li>
								<li><a href="#" target="_blank"><i class="fab fa-twitter"></i></a></li>
							</ul>
						</div>
						<div class="arrow-up-area">
							<i class="fas fa-angle-up"></i>
						</div>
						<div class="copyright-content">
							<p>COPYRIGHT © 2021 ALL RIGHTS RESERVED</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
    );
};

export default Footer;