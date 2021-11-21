import React from 'react';

const Roadmap = () => {
    return (
        <section id="roadmap" class="main-roadmap-area">
            <div class="roadmap-area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-heading heading-bg">
                                <h2 data-aos="fade-up" data-aos-duration="1500">roadmap</h2>
                                <p data-aos="fade-up" data-aos-duration="1500"> The roadmap outlines some of our goals for the Metaverse 7 universe. It may change over time and hopefully
                                    become even bigger and better!</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="roadmap-virtual-area">
                                {/* roadmap image */}
                                <div class="roadmap-virtual-image" data-aos="fade-up" data-aos-duration="1500">
                                    <img src="assets/images/banner/roadmap.png" alt=""/>
                                </div>
                                {/* roamap all item */}
                                <div class="roadmap-all-item">
                                    {/* single item */}
                                    <div class="roadmap-single-item" data-aos="fade-up" data-aos-duration="1500">
                                        <h2>1</h2>
                                        <p>Initial Mint of <span>15,000</span><br /> Unique Metaverse NFTs</p>
                                    </div>
                                    {/* single item */}
                                    <div class="roadmap-single-item" data-aos="fade-up" data-aos-duration="1500">
                                        <h2>2</h2>
                                        <p>Investment into<br />
                                            <span>NFTs</span> & <span>crypto projects</span></p>
                                    </div>
                                    {/* single item */}
                                    <div class="roadmap-single-item" data-aos="fade-up" data-aos-duration="1500">
                                        <h2>3</h2>
                                        <p>Passive Income: earn <span>50%</span> of the community wallet profit</p>
                                    </div>
                                    {/* single item */}
                                    <div class="roadmap-single-item" data-aos="fade-up" data-aos-duration="1500">
                                        <h2>4</h2>
                                        <p>Develop the <span>metaverse 7 universe</span></p>
                                    </div>
                                    {/* single item */}
                                    <div class="roadmap-single-item" data-aos="fade-up" data-aos-duration="1500">
                                        <h2>5</h2>
                                        <p>Launch the <span>metaverse 7<br /> marketplace</span> on Unique Network</p>
                                    </div>
                                    {/* single item */}
                                    <div class="roadmap-single-item" data-aos="fade-up" data-aos-duration="1500">
                                        <h2>6</h2>
                                        <p><span>Trading</span> and <span>developing</span> interoperable gaming NFTs including Metaverse 7 NFTs to be used across <span>ALL platforms.</span> </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="roadmap-sub-content">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="content-item" data-aos="fade-up" data-aos-duration="1500">
                                    <p>Metaverse 7 will evolve with time, always for the better, with the ideas and help of the community, and reveals itself little by little, creating an element of surprise that we love so much. We want to keep it that way.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Roadmap;