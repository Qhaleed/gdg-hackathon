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

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Countdown />
      <Schedule />
      <Sponsors />
      <VenueMap />
      <SocialShare />
      <Footer />
    </div>
  );
}

export default App;