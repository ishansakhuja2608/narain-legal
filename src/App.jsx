import React from 'react';
import Navbar from './components/Header/Navbar';
import HeroSection from './components/Hero/HeroSection';
import AboutSection from './components/About/AboutSection';
import FacilitiesSection from './components/Facilities/FacilitiesSection';
import RoomsSection from './components/Rooms/RoomsSection';
import StatsSection from './components/Stats/StatsSection';
import TestimonialsSection from './components/Testimonials/TestimonialsSection';
import Footer from './components/Footer/Footer';
import { companyData } from './data/companyData';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="App">
      <div id="home">
      <Navbar companyInfo={companyData.companyInfo} navigation={companyData.navigation} />
      </div>
      <HeroSection companyInfo={companyData.companyInfo} />
      <div id="about">
      <AboutSection companyInfo={companyData.companyInfo} />
      </div>
      <div id="facilities">
      <FacilitiesSection facilities={companyData.facilities} />
      </div>
      <div id="rooms">
      <RoomsSection rooms={companyData.rooms} />
      </div>
      <StatsSection stats={companyData.stats} />
      <TestimonialsSection testimonials={companyData.testimonials} />
      <div id="contact">
      <Footer companyInfo={companyData.companyInfo} />
      </div>
    </div>
  );
};

export default App;