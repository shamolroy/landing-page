import React from 'react';

const Partnership = () => {
    return (
    <section class="partnership-area">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="parnership-content">
						<div class="section-heading partnership-heading-bg" data-aos="fade-up" data-aos-duration="1500">
							<h2>Metaverse 7 Partnerships</h2>
						</div>
						<p data-aos="fade-up" data-aos-duration="1500">Metaverse 7 is partnering with Unique Network to build cutting edge interoperable gaming NFTs.
							Unique is a blockchain made for NFTs on the Kusama and Polkadot networks.</p>
					</div>
				</div>
			</div>
			{/* partnership logo */}
			<div class="row parnership-area">
				<div class="col-md-4">
					<div class="parnership-logo-item" data-aos="fade-up" data-aos-duration="1500">
						<a href="#">
							<img src="assets/images/logo/polkadat.png" alt=""/></a>
						</div>
				</div>
				<div class="col-md-4">
					<div class="parnership-logo-item" data-aos="fade-up" data-aos-duration="1500">
						<a href="#">
							<img src="assets/images/logo/unique.png" alt=""/></a>
						</div>
				</div>
				<div class="col-md-4">
					<div class="parnership-logo-item" data-aos="fade-up" data-aos-duration="1500">
						<a href="#">
							<img src="assets/images/logo/kusama.png" alt=""/></a>
						</div>
				</div>
			</div>
		</div>
	</section>
    );
};

export default Partnership;