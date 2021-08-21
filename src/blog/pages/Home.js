import React from 'react';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Navbar2 from '../Navbar2';
import Footer from '../Footer';
import RecentPosts from '../RecentPosts';
import RecentPostsData from '../RecentPostsData';

const recentPosts = [...RecentPostsData]

function Home() {
    return (
        <>
            <HeroSection />
            <Navbar2 />      
            <Cards />
            <RecentPosts posts = {recentPosts}/>
            <Footer />
        </>
    );
}

export default Home;