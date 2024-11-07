// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import RegistrationForm from './RegistrationForm';
// import LoginCard from './LoginCard';
// import LandingPage from './LandingPage';
// import ForgotPassword from './ForgotPassword';
// import ResetPasswordForm from './ResetPasswordForm ';

// function App() {
//   return (
//     <Router>
//       <Routes>
//       <Route path='/' element={<LandingPage/>} /> 
//         {/* <Route path='/LoginCard' element={<LoginCard/>} />
//         <Route path='/LandingPage' element={<LandingPage/>} /> 
//         <Route path='/RegistrationForm' element={<RegistrationForm/>} /> 
//         <Route path='/ForgotPassword' element={<ForgotPassword/>} /> */}
//         {/* <Route path='/' element={<ResetPasswordForm/>} /> */}
//         </Routes>
//         </Router>
//   );
// }

// export default App;
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          <h1>TravelWithUs</h1>
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#packages">Packages</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero-section" id="home">
        <div className="hero-content">
          <h2>Explore the World with Our Travel Agency</h2>
          <p>Your adventure awaits! Discover breathtaking destinations and unforgettable experiences.</p>
          <button className="btn">Get Started</button>
        </div>
      </section>

      <section className="services" id="services">
        <h2>Our Services</h2>
        <div className="service-list">
          <div className="service-item">
            <h3>Custom Travel Plans</h3>
            <p>We tailor your travel plans to match your preferences and budget.</p>
          </div>
          <div className="service-item">
            <h3>Guided Tours</h3>
            <p>Enjoy guided tours with expert local guides for an immersive experience.</p>
          </div>
          <div className="service-item">
            <h3>24/7 Support</h3>
            <p>Our support team is available around the clock to assist you during your travels.</p>
          </div>
        </div>
      </section>

      <section className="packages" id="packages">
        <h2>Travel Packages</h2>
        <div className="package-list">
          {[
            { id: 1, name: 'Beach Getaway', price: 'Rs 25,000', description: 'Relax on the most beautiful beaches.' },
            { id: 2, name: 'Mountain Adventure', price: 'Rs 30,000', description: 'Hike and explore breathtaking mountains.' },
            { id: 3, name: 'City Break', price: 'Rs 20,000', description: 'Experience vibrant city life.' }
          ].map(pkg => (
            <div key={pkg.id} className="package-item">
              <h3>{pkg.name}</h3>
              <p>{pkg.description}</p>
              <h4>Price: {pkg.price}</h4>
              <button className="btn">Book Now</button>
            </div>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="btn">Send</button>
        </form>
      </section>

      <footer className="footer">
        <p>&copy; 2024 TravelWithUs. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
