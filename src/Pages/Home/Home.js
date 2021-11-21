import React from 'react';
import AboutUs from '../../Components/AboutUs/AboutUs';
import Benifits from '../../Components/Benifits/Benifits';
import Commingsoon from '../../Components/Commingsoon/Commingsoon';
import Faq from '../../Components/Faq/Faq';
import Header from '../../Components/Header/Header';
import Hero_Banner from '../../Components/Hero_Banner/Hero_Banner';
import Minting from '../../Components/Minting/Minting';
import Partnership from '../../Components/Partnership/Partnership';
import Roadmap from '../../Components/Roadmap/Roadmap';
import Story from '../../Components/Story/Story';

const Home = () => {
    return (
        <div class="home">
            <Header></Header>
            <Hero_Banner></Hero_Banner>
            <Story></Story>
            <Benifits></Benifits>
            <Roadmap></Roadmap>
            <Commingsoon></Commingsoon>
            <Minting></Minting>
            <AboutUs></AboutUs>
            <Faq></Faq>
            <Partnership></Partnership>
        </div>
    );
};

export default Home;