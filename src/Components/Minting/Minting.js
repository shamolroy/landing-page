import React from 'react';

const Minting = () => {
    return (
    <section id="mint" class="minting-area">
		<div class="container-area">
			<div class="row">
				<div class="col-lg-6">
					<div class="minting-image" data-aos="fade-up" data-aos-duration="1500">
						<img src="assets/images/banner/minting.png" alt=""/>
						 {/* mobile version */}
						<img class="mobile-minting-image" src="assets/images/banner/minting-mobile.png" alt=""/>
					</div>
				</div>
				<div class="col-lg-6">
					<div class="minting-form-area" data-aos="fade-up" data-aos-duration="1500">
						<div class="minting-form">
							<form action="">
								<h2>minting</h2>
								 {/* input field */}
								<div class="minting-input-item">
									<label for="amount">amount</label>
									<input type="text" id="amount" placeholder=""/>
								</div>
								{/* input field */}
								<div class="minting-input-item">
									<label for="Sub-total">Sub-total</label>
									<input type="text" id="Sub-total" placeholder=""/>
								</div>
								{/* submit field */}
								<div class="minting-button submit-button">
									<input type="submit" value="connect wallet"/>
								</div>
								{/* button */}
								<div class="minting-button">
									<button>mint now</button>
								</div>
							</form>
							<div class="pay-area" data-aos="fade-up" data-aos-duration="1500">
								<img src="assets/images/banner/dot.png" alt=""/>
								<p>Option to pay with Fiat!</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    );
};

export default Minting;