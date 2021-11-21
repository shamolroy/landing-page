import React from 'react';

const Welcome = () => {
    return (
    <section class="welcome-area">
		{/* mobile image */}
		<div class="mobile-image">
			<img src="assets/images/banner/mobile-image.png" alt=""/>
		</div>
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="welcome-content">
						<img src="assets/images/banner/welcome.png" alt=""/>
						<div class="welcome-metaverse-content">
							<div class="welcome-metaverse-content-area">
								<h2>Welcome to 
									Metaverse 7</h2>
								<div class="enter-button">
									<div class="button-item">
										<a href="#">Enter </a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="welcome-sub-content">
						<p>Invest and Participate in the Metaverse. NFTs with financial exposure to the Crypto Gaming Sector. Its going to be big!</p>
					</div>
				</div>
				<img src="assets/images/banner/My Post(2).png" alt=""/>
			</div>
		</div>
	</section>
    );
};

export default Welcome;