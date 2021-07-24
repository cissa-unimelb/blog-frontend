import React from 'react';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Navbar2 from '../Navbar2';
import Footer from '../Footer';
import RecentPosts from '../RecentPosts';

function Home() {
    return (
        <>
            <HeroSection />
            <Navbar2 />      
            <Cards />
            <RecentPosts />
            <Footer />
        </>
    );
}

export default Home;