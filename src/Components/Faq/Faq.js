import React from 'react';

const Faq = () => {
    return (
    <section id="faq" class="faq-area">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="faq-content">
						<div class="section-heading heading-bg" data-aos="fade-up" data-aos-duration="1500">
							<h2>FAQ</h2>
						</div>
						<div class="accordion" id="accordionExample" data-aos="fade-up" data-aos-duration="1500">
							<div class="card">
							  <div class="card-header" id="headingOne">
								<h2 class="mb-0">
								  <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
									<img src="assets/images/icon/icon.png" alt=""/> Will there be a pre-sale? <i class="fas fa-angle-down"></i>
								  </button>
								</h2>
							  </div>
						  
							  <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
								<div class="card-body">
								  <p>We will be launching a pre-sale of 1000-1500 NFTs that are for whitelisted members only.</p>
								  <p>Details on how to join the whitelist are to be announced shortly.</p>
								</div>
							  </div>
							</div>
							<div class="card">
							  <div class="card-header" id="headingTwo">
								<h2 class="mb-0">
								  <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
									<img src="assets/images/icon/icon.png" alt=""/>What is the Mint Price?<i class="fas fa-angle-down"></i>
								  </button>
								</h2>
							  </div>
							  <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
								<div class="card-body">
								  <p>The price will be announced closer to the mint date, as current price market fluctuations need to be taken into consideration. In addition, we will create a fiat onramp for people to mint with cash, allowing a larger community and future crypto enthusiasts to enter early. We want to help get people on board!</p>
								</div>
							  </div>
							</div>
							<div class="card">
							  <div class="card-header" id="headingThree">
								<h2 class="mb-0">
								  <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
									<img src="assets/images/icon/icon.png" alt=""/>What tokens, NFTs and gaming projects will you be investing in?<i class="fas fa-angle-down"></i>
								  </button>
								</h2>
							  </div>
							  <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
								<div class="card-body">
								  <p>We will take a very active approach to investing across the sector. And we wish to capture value across the entire value chain from early start-up ideas all the way to the blue chip projects. We will be opportunistic and dynamic. We don't believe in crypto misconceptions such as HODLing, Maximalism, or overly emotional decision making.</p>
								</div>
							  </div>
							</div>
							<div class="card">
							  <div class="card-header" id="heading4">
								<h2 class="mb-0">
								  <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
									<img src="assets/images/icon/icon.png" alt=""/>What sort of returns can NFT holders expect?<i class="fas fa-angle-down"></i>
								  </button>
								</h2>
							  </div>
							  <div id="collapse4" class="collapse" aria-labelledby="heading4" data-parent="#accordionExample">
								<div class="card-body">
								  <p>Every quarter realised profits will be distributed directly into the wallet of our NFT holders.</p>
								</div>
							  </div>
							</div>
							<div class="card">
							  <div class="card-header" id="heading5">
								<h2 class="mb-0">
								  <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
									<img src="assets/images/icon/icon.png" alt=""/>When do holders get profits?<i class="fas fa-angle-down"></i>
								  </button>
								</h2>
							  </div>
							  <div id="collapse5" class="collapse" aria-labelledby="heading5" data-parent="#accordionExample">
								<div class="card-body">
								  <p>Yes! Please refer to the whitepaper for more details.</p>
								</div>
							  </div>
							</div>
							<div class="card">
							  <div class="card-header" id="heading6">
								<h2 class="mb-0">
								  <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
									<img src="assets/images/icon/icon.png" alt=""/>Will there be a Metaverse 7 token?<i class="fas fa-angle-down"></i>
								  </button>
								</h2>
							  </div>
							  <div id="collapse6" class="collapse" aria-labelledby="heading6" data-parent="#accordionExample">
								<div class="card-body">
								  <p>And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.</p>
								</div>
							  </div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <question area */}
			<div class="row">
				<div class="col-lg-12">
					<div class="question-content">
						<h3 data-aos="fade-up" data-aos-duration="1500">Still have a question?</h3>
						<p data-aos="fade-up" data-aos-duration="1500">If you still have questions, we’re very active on our Discord. Head over there and say hi, 
						we’re happy to answer any of your questions.</p>
					</div>
				</div>
			</div>
		</div>
	</section>
    );
};

export default Faq;