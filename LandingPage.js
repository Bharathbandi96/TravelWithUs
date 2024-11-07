// import React from 'react';
// import './LandingPage.css';
// import { Link } from 'react-router-dom';

// const LandingPage = () => {
//   return (
//     <>
//       <header className="header">
//         <nav>
//           <div className="nav__bar">
//             <div className="logo">
//               <a href="#">
//                 <img src="https://img.freepik.com/premium-vector/hotel-logo-simple-illustration_434503-736.jpg?w=2000" alt="logo" />
//               </a>
//             </div>
//             <div className="nav_menu_btn" id="menu-btn">
//               <i className="ri-menu-line"></i>
//             </div>
//           </div>
//           <ul className="nav__links" id="nav-links">
//             <li><b><a href="#home">Home</a></b></li>
//             <li><b><a href="#about">About</a></b></li>
//             <li><b><a href="#service">Services</a></b></li>
//             <li><b><a href="#explore">Restaurant</a></b></li>
//             <li><b><a href="#contact">Contact</a></b></li>
//           </ul>
//           <div> <Link to='/LoginCard'>  <button style={{marginLeft:'80%',cursor:'pointer',width:'70px',height:'30px',borderRadius:'8px',backgroundColor:'ButtonShadow'}}>SignIn</button> </Link></div>
//         <div> <Link to='/RegistrationForm'> <button  style={{marginLeft:'80%',cursor:'pointer',width:'70px',height:'30px',borderRadius:'8px',backgroundColor:'ButtonShadow'}}>Register</button></Link></div>
        
        
//         </nav>
       
//       </header>

//       <section className="section_container booking_container">
//         <form action="/" className="booking__form">
//            {/* <h1>Check Availability</h1> */}
//           <div className="input__group">
//             <span><i className="ri-calendar-2-fill"></i></span>
//             <div>
//               <label htmlFor="check-in">CHECK-IN</label>
//               <input type="date" placeholder="Check In" />
//             </div>
//           </div>
//           <div className="input__group">
//             <span><i className="ri-calendar-2-fill"></i></span>
//             <div>
//               <label htmlFor="check-out" style={{marginLeft:'-0cm'}}>CHECK-OUT</label>
//               <input type="date" placeholder="Check Out"  style={{marginRight:'9cm'}} />
//             </div>
//           </div>
        
//           <div className="input_group input_btn">
//             <Link to='/LoginCard'>
//             <button className="btn" style={{marginRight:'4cm'}}>Check Availability</button>
//           </Link>
//           </div>
//         </form>
//       </section>

//       <section className="section_container about_container" id="about">
//         <div className="about__image">
//           <img src="https://wallpapercave.com/wp/wp1846068.jpg" alt="about" />
//         </div>
//         <div className="about__content"><br></br>
//         <br></br>
//           <p className="section__subheader">ABOUT US</p>
//           <h2 className="section__header">The Best Holidays Start Here!</h2>
//           <p className="section__description">
//           We are dedicated to providing travelers with quality accommodations, 
//           personalized experiences, and seamless booking services.
//           Our platform is committed to instilling confidence and excitement in every traveler, 
//           ensuring that they embark on their dream holiday with ease. With a focus on excellence, 
//           we strive to redefine the travel experience, making it not just a journey but a cherished memory.
//           </p>
         
//         </div>
//       </section>
//       <br></br>

//       <section class="section_container room_container">
//       <p class="section__subheader">OUR LIVING ROOM</p>
//       <h2 class="section__header">The Most Memorable Rest Time Starts Here.</h2>
//       <div class="room__grid">
//         <div class="room__card">
//           <div class="room_card_image">
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQon9pHlmtAN-4QiEu9M39sDrny1CulwB82cg&usqp=CAU" alt="room" height={300} />
            
//           </div>
//           <div class="room_card_details">
//             <h4> Classic Deluxe</h4>
//             <p>
//               Bask in luxury with breathtaking ocean views from your private
//               suite.
//             </p>
//             <h5>Starting from <span>Rs 4999/night</span></h5>
//             <Link to='/LoginCard'>
//             <button className="btn">Book Now</button>
//             </Link>
//           </div>
//         </div>
//         <div className="room__card">
//           <div className="room_card_image">
//             <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/404886721.jpg?k=3d6b7a376bc63e884f58bff2e7f6e0afa2d87c86d69aa424e40a44b333eca7aa&o=&hp=1" alt="room" height={300}/>

//           </div>
//           <div className="room_card_details">
//             <h4>Premium Suite</h4>
//             <p>
//               Experience urban elegance and modern comfort in the heart of the
//               city.
//             </p>
//             <h5>Starting from <span>Rs 9999/night</span></h5>
//             <Link to='/LoginCard'>
//             <button className="btn">Book Now</button>
//             </Link>
//           </div>
//         </div>
//         <div className="room__card">
//           <div className="room_card_image">
//             <img src="https://thumbs.dreamstime.com/b/hotel-room-13225019.jpg" alt="room" height={300}/>
//           </div>
//           <div class="room_card_details">
//             <h4> Deluxe Suite</h4>
//             <p>
//               Spacious and inviting, perfect for creating cherished memories
//               with loved ones.
//             </p>
//             <h5>Starting from <span>Rs 7999/night</span></h5>
//             <Link to='/LoginCard'>
//             <button className="btn">Book Now</button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>

//     <section className="service" id="service">
//       <div className="section_container service_container">
//         <div className="service__content">
//           <p className="section__subheader">SERVICES</p>
//           <h2 className="section__header">Strive Only For The Best.</h2>
//           <ul className="service__list">
//             <li>
//               <span><i className="ri-shield-star-line"></i></span>
//               High Class Security
//             </li>
//             <li>
//               <span><i clclassNameass="ri-24-hours-line"></i></span>
//               24 Hours Room Service
//             </li>
//             <li>
//               <span><i className="ri-headphone-line"></i></span>
//               Conference Room
//             </li>
//             <li>
//               <span><i className="ri-map-2-line"></i></span>
//               Tourist Guide Support
//             </li>
//           </ul>
//         </div>
//       </div>
//     </section>

//     <section className="section_container banner_container">
//       <div className="banner__content">
//         <div className="banner__card">
//           <h4>25+</h4>
//           <p>Properties Available</p>
//         </div>
//         <div className="banner__card">
//           <h4>150+</h4>
//           <p>Bookings Completed</p>
//         </div>
//         <div className="banner__card">
//           <h4>130+</h4>
//           <p>Happy Customers</p>
//         </div>
//       </div>
//     </section>

//     <section className="explore" id="explore"><br></br>
//       <p className="section__subheader">Restaurant</p><br></br>
//       <h2 className="section__header">Restaurant</h2>
//       <div className="explore__bg">
//         <div className="explore__content">
        
//           <button className="btn" style={{color:'whitesmoke',background:'black',width:'5cm',marginTop:'2cm'}}>Explore</button>
//         </div>
//       </div>
//     </section>

//     <footer className="footer" id="contact">     
//        <div className="footer__col">
//           <h4>OUR SERVICES</h4>
//           <ul className="footer__links">
//             <li><a href="#">Concierge Assistance</a></li>
//             <li><a href="#">Flexible Booking Options</a></li>
//             <li><a href="#">Airport Transfers</a></li>
//             <li><a href="#">Wellness & Recreation</a></li>
//           </ul>
//         </div>
//         <br></br>
//         <div className="footer__col">
//           <h4>CONTACT US</h4>
        
//             <li><a href="#">Anarghyacommunications@gmail.com</a></li>
//             <li><a href="#">Call now : 9845612340</a></li>
         
//         </div>
     
//       <div className="footer__bar">
//       © 2023-2024 Anarghya Communications. All Rights Reserved.
//       </div>
//     </footer>
//     </>
//   );
// };

// export default LandingPage;

import React from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <>
      <header className="header">
        <nav>
          <div className="nav__bar">
            <div className="logo">
              <a href="#">
                {/* <img src="https://img.freepik.com/free-vector/car-rental-logo-design_23-2148504315.jpg" alt="logo" /> */}
              </a>
            </div>
            <div className="nav_menu_btn" id="menu-btn">
              <i className="ri-menu-line"></i>
            </div>
          </div>
          <ul className="nav__links" id="nav-links">
            <li><b><a href="#home">Home</a></b></li>
            <li><b><a href="#about">About</a></b></li>
            <li><b><a href="#service">Services</a></b></li>
            <li><b><a href="#fleet">Fleet</a></b></li>
            <li><b><a href="#contact">Contact</a></b></li>
          </ul>
          <div> 
            <Link to='/LoginCard'>  
              <button style={{ marginLeft: '80%', cursor: 'pointer', width: '70px', height: '30px', borderRadius: '8px', backgroundColor: 'ButtonShadow' }}>
                SignIn
              </button> 
            </Link>
          </div>
          <div> 
            <Link to='/RegistrationForm'> 
              <button style={{ marginLeft: '80%', cursor: 'pointer', width: '70px', height: '30px', borderRadius: '8px', backgroundColor: 'ButtonShadow' }}>
                Register
              </button>
            </Link>
          </div>
        </nav>
      </header>

      <section className="section_container booking_container">
        <form action="/" className="booking__form">
          <div className="input__group">
            <span><i className="ri-calendar-2-fill"></i></span>
            <div>
              <label htmlFor="pickup-date">PICK-UP DATE</label>
              <input type="date" placeholder="Pick-Up Date" />
            </div>
          </div>
          <div className="input__group">
            <span><i className="ri-calendar-2-fill"></i></span>
            <div>
              <label htmlFor="dropoff-date" style={{ marginLeft: '-0cm' }}>DROP-OFF DATE</label>
              <input type="date" placeholder="Drop-Off Date" style={{ marginRight: '9cm' }} />
            </div>
          </div>
          <div className="input_group input_btn">
            <Link to='/LoginCard'>
              <button className="btn" style={{ marginRight: '4cm' }}>Check Availability</button>
            </Link>
          </div>
        </form>
      </section>

      <section className="section_container about_container" id="about">
        <div className="about__image">
          <img src="https://wallpapercave.com/wp/wp2011972.jpg" alt="about" />
        </div>
        <div className="about__content"><br></br><br></br>
          <p className="section__subheader">ABOUT US</p>
          <h2 className="section__header">Your Journey, Our Priority!</h2>
          <p className="section__description">
            We are committed to providing customers with reliable car rental services, flexible booking options, and exceptional customer support. 
            Our goal is to ensure that every trip is seamless and enjoyable, no matter the destination. Trust us to make your travel experience 
            smooth and worry-free.
          </p>
        </div>
      </section>
      <br></br>

      <section className="section_container fleet_container">
        <p className="section__subheader">OUR FLEET</p>
        <h2 className="section__header">Comfortable, Reliable, Ready to Roll.</h2>
        <div className="fleet__grid">
          <div className="fleet__card">
            <div className="fleet_card_image">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2V7FzYwvR8y2s4sQKkDfqI3PfgMei4zXbZQ&usqp=CAU" alt="car" height={300} />
            </div>
            <div className="fleet_card_details">
              <h4>Sedan</h4>
              <p>Perfect for city rides with style and comfort.</p>
              <h5>Starting from <span>Rs 999/day</span></h5>
              <Link to='/LoginCard'>
                <button className="btn">Book Now</button>
              </Link>
            </div>
          </div>
          <div className="fleet__card">
            <div className="fleet_card_image">
              <img src="https://cdn.pixabay.com/photo/2016/01/19/15/05/car-1149997_1280.jpg" alt="car" height={300}/>
            </div>
            <div className="fleet_card_details">
              <h4>SUV</h4>
              <p>Spacious and powerful, ideal for long drives and adventures.</p>
              <h5>Starting from <span>Rs 1999/day</span></h5>
              <Link to='/LoginCard'>
                <button className="btn">Book Now</button>
              </Link>
            </div>
          </div>
          <div className="fleet__card">
            <div className="fleet_card_image">
              <img src="https://thumbs.dreamstime.com/b/compact-car-12397236.jpg" alt="car" height={300}/>
            </div>
            <div className="fleet_card_details">
              <h4>Compact Car</h4>
              <p>Economical and convenient for daily commutes.</p>
              <h5>Starting from <span>Rs 699/day</span></h5>
              <Link to='/LoginCard'>
                <button className="btn">Book Now</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="service" id="service">
        <div className="section_container service_container">
          <div className="service__content">
            <p className="section__subheader">SERVICES</p>
            <h2 className="section__header">Excellence on Every Trip.</h2>
            <ul className="service__list">
              <li>
                <span><i className="ri-shield-star-line"></i></span>
                24/7 Roadside Assistance
              </li>
              <li>
                <span><i className="ri-24-hours-line"></i></span>
                Flexible Pick-Up and Drop-Off
              </li>
              <li>
                <span><i className="ri-headphone-line"></i></span>
                Customer Support
              </li>
              <li>
                <span><i className="ri-map-2-line"></i></span>
                GPS Navigation Options
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section_container banner_container">
        <div className="banner__content">
          <div className="banner__card">
            <h4>50+</h4>
            <p>Vehicles Available</p>
          </div>
          <div className="banner__card">
            <h4>500+</h4>
            <p>Trips Completed</p>
          </div>
          <div className="banner__card">
            <h4>300+</h4>
            <p>Satisfied Clients</p>
          </div>
        </div>
      </section>

      <section className="explore" id="fleet"><br></br>
        <p className="section__subheader">Explore Our Fleet</p><br></br>
        <h2 className="section__header">Vehicles for Every Journey</h2>
        <div className="explore__bg">
          <div className="explore__content">
            <button className="btn" style={{ color: 'whitesmoke', background: 'black', width: '5cm', marginTop: '2cm' }}>Explore</button>
          </div>
        </div>
      </section>

      <footer className="footer" id="contact">     
        <div className="footer__col">
          <h4>OUR SERVICES</h4>
          <ul className="footer__links">
            <li><a href="#">Vehicle Maintenance</a></li>
            <li><a href="#">Custom Rental Plans</a></li>
            <li><a href="#">Insurance Options</a></li>
            <li><a href="#">Customer Loyalty Program</a></li>
          </ul>
        </div>
        <br></br>
        <div className="footer__col">
          <h4>CONTACT US</h4>
          <li><a href="#">TravelAgencyCars@gmail.com</a></li>
          <li><a href="#">Call now: 9876543210</a></li>
        </div>
     
        <div className="footer__bar">
          © 2023-2024 Travel Agency Cars. All Rights Reserved.
        </div>
      </footer>
    </>
  );
};

export default LandingPage;

