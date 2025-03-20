import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Countdown from './components/Countdown';
import Schedule from './components/Schedule';
import Sponsors from './components/Sponsors';
import VenueMap from './components/VenueMap';
import Footer from './components/Footer';
import SocialShare from './components/SocialShare';
import FloatingTab from './components/FloatingTab';
import Partners from './components/Partners';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Countdown />
      <Schedule />
      <Partners />
      <Sponsors />
      <VenueMap />
      <SocialShare />
      <Footer />
      <FloatingTab />
    </div>
  );
}

export default App;