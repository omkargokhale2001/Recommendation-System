import React from 'react'
import Footer from './Components/Footer';
import Header from './Components/Header';
import MainSection from './Components/MidSection';
import Navbar from './Components/Navbar';
import sections from './Properties/sections';
import mainFeaturedPost from './Properties/mainFeaturedPost';




function Main() {
    return (
        <div>
             <Navbar sections={sections}/>
             <Header post={mainFeaturedPost}/>
             <MainSection/>
            <Footer/>
        </div>
    )
}

export default Main
