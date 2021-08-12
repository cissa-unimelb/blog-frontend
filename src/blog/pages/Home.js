import React from 'react';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Navbar from '../Navbar';
import Footer from '../Footer';
import RecentPosts from '../RecentPosts';

function Home() {
    return (
        <>
            <Navbar />
            <HeroSection />    
            <Cards />
            <RecentPosts />
            <Footer />
        </>
    );
}

export default Home;