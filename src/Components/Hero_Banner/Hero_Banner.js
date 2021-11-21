import React from 'react';

const Hero_Banner = () => {
    return (
    <section class="banner-main-area">
        <div class="banner-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="banner-content">
                            <div class="banner-image">
                                <img src="assets/images/banner/metaverse-logo.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div class="banner-counter">
                        {/* <h2>Countdown</h2> */}
                        <p id="demo"></p>
                        <div class="banner-button">
                            <a href="#">connect wallet</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Hero_Banner;