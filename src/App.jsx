import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Link as ScrollLink } from "react-scroll";
import PrivacyPolicy from './components/privacyPolicy';
import { FaBuilding } from "react-icons/fa";
import { IoStorefrontSharp } from "react-icons/io5";
import { RiCustomerService2Line } from "react-icons/ri";
import { FaBusinessTime } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import './App.css';

const Home = () => (
  <>
    <div className="container">
      <nav className="navbar">
        <div className="image-section">
          <img
            src="https://res.cloudinary.com/dqvvpyz72/image/upload/v1739792351/WhatsApp_Image_2025-02-17_at_17.08.13_xb5rkk.jpg"
            alt="Illustration"
            className="image-logo"
          />
        </div>
        <ul className="list">
        <ScrollLink to="home-section" smooth={true} duration={500}>
            <li className="list-name list-name-nav">Home</li>
          </ScrollLink>
          <ScrollLink to="about-section" smooth={true} duration={500}>
            <li className="list-name list-name-nav">About</li>
          </ScrollLink>
          <ScrollLink to="services-section" smooth={true} duration={500}>
            <li className="list-name list-name-nav">Services</li>
          </ScrollLink>
          <ScrollLink to="contact-section" smooth={true} duration={500}>
            <li className="list-name list-name-nav">Contact</li>
          </ScrollLink>
          <ScrollLink to="why-us-section" smooth={true} duration={500}>
            <li className="list-name list-name-nav">Why Us</li>
          </ScrollLink>
        </ul>
      </nav>

      <div className="content">
        {/* Left Section */}
        <div className="text-section">
          <h1>Your peace of mind matters</h1>
          <p className="paragraph">
            Let's be honest, managing a business can be stressful as hell, but we got you there. 
            Make your business frictionless & scale it with our one-stop solution for all your needs, 
            from website, marketing, ads, scaling to marketing & legal solutions.
          </p>
          <a href='https://forms.gle/WrEhPyCAQXzBnRnJ7' target='_blank' rel="noreferrer">
            <button className="cta-button">Choose Your Service</button>
          </a>
        </div>

        {/* Right Section */}
        <img 
          src="https://res.cloudinary.com/dqvvpyz72/image/upload/v1739879864/hero-img_wfzsfz.png" 
          alt="Business Growth" 
          className="right-image"
        />
      </div>
    </div>

    {/* Business Section */}
    <h1>We help</h1>
    <div className='card'>  
      <div className="business-section">
        <FaBuilding className='icon-size'/>
        <h1>Local Business</h1>
        <p>Local stores & businesses who want to expand & target a broader audience.</p>
      </div>
      <div className="business-section">
        <IoStorefrontSharp className='icon-size'/>
        <h1>Online stores</h1>
        <p> Online ecommerce stores who wants to scale their 
        business with experts.</p>
      </div>
      <div className="business-section">
        <RiCustomerService2Line className='icon-size'/>
        <h1>Service providers</h1>
        <p> Individuals or Businesses who provides service 
        to their clients. We will help you to grow & scale online & offline.</p>
      </div>
      <div className="business-section">
        <FaBusinessTime className='icon-size'/>
        <h1>Aspiring entrepreneurs</h1>
        <p> If you're an aspiring entrepreneur having 
          an idea in mind or simply start with a business model then take no 
          worries! We are here to guide you & provide all the necessary 
          tools for you to succeed.</p>
      </div>
    </div>

    <h1 id="services-section">Our services</h1>

    <div className='service-card-head'>
      <div className='card-service'>
        <img src='https://res.cloudinary.com/dqvvpyz72/image/upload/v1740058356/Get-the-Most-Fancied-Web-Development-Services-min-scaled_l7dgbf.jpg'
        alt="website development"
        className='service-image'/>
        <h1>Website development</h1>
        <p>We hire professional designers, 
          developers & copywriters to provide you with an  highly optimised, 
          highly converting & feature rich website. We will also help you 
          setup your hosting and domain, all in one place.</p>
      </div>
      <div className='card-service'>
        <img src="https://res.cloudinary.com/dqvvpyz72/image/upload/v1740058913/OIP_frkbjh.jpg"
        alt="graphic design"
        className='service-image'/>
        <h1>Graphic design</h1>
        <p>Highly professional graphic designers are 
          working with us. Get the dream design you want. From fashion 
          mockups, logos, to advertisement posts, we will deliver all with 
          100% satisfaction.
        </p>
      </div>
      <div className='card-service'>
        <img src="https://res.cloudinary.com/dqvvpyz72/image/upload/v1740059144/R.0fa39718b26fa2f0acc3c27c8cbe1ae9_xnkgkf.jpg"
        alt="social media ads"
        className='service-image'/>
        <h1>Social media advertising</h1>
        <p>Facebook ads, Instagram ads, Google 
          ads, YouTube ads, we do it all here with over 5 years of expertise 
          on running ads. Expect high conversions.</p>
      </div>
      <div className='card-service'>
        <img src="https://res.cloudinary.com/dqvvpyz72/image/upload/v1740059282/Social-media-management-resellers1_dbdtoh.png"
        alt="social media management"
        className='service-image'/>
        <h1>Social media management</h1>
        <p>We will manage & grow your 
          Instagram & Facebook handles for you. With our under the table 
          methods, we are able to get you genuine organic followers.</p>
      </div>
      <div className='card-service'>
        <img src="https://res.cloudinary.com/dqvvpyz72/image/upload/v1740059425/legal-services-768x721_stlo4r.jpg"
        alt="legal solutions"
        className='service-image'/>
        <h1>Legal solutions</h1>
        <p>Starting a business & expanding it means going 
            through a bunch of legal, official & documentational 
            complications. Take no worries, our team of experts & lawyers will 
            help you with that as well. Take our help & create your trade 
            licence, current account, register your company & save taxes.</p>
      </div>
    </div>
    
    <div className='choose-service'>
      <a href='https://forms.gle/WrEhPyCAQXzBnRnJ7'>
        <button className="cta-button">Choose Your Service</button>
      </a>
    </div>
    
    {/* why us section */}

    <h1 id="why-us-section" className='heading'>Why Choose US?</h1>
    <div className='last-cont'>
      <img src="https://res.cloudinary.com/dqvvpyz72/image/upload/v1740138110/We_will_take_away_the_extra_burden_guide_you_to_create_the_business_of_your_dreams_1_ucpnr8.jpg" 
      alt="business guidance" className='burden-image'/>
      <div className='text'>
        <h1>We will take away the extra burden & guide you to create the 
          business of your dreams</h1>
        <p>When we started our journey, we had no-one to guide and help 
            us, and guess what, our initial businesses failed, which led us to 
            this idea of helping everyone going through the same hardships. 
            Now we are committed to our goal of helping others to grow & 
            minimize friction as much as possible.</p>
      </div>
    </div>

    <div className='get-touch'>
      <a href='https://wa.me/message/D3H4TPG5AMA7K1' target='_blank' rel="noreferrer">
        <button className='link-button text'><FaSquareWhatsapp />Get In Touch</button>
      </a>
    </div>

    {/* About us section */}

    <div className='link-cont'>
      <h1 id="about-section" className='about-head'>About Us!</h1>
      <p>The solutionist is a new age startup which aspires to become a product that can be used by everyone, 
        businesses, individuals, students, working professionals, and more. We aim to provide solutions & consultancy 
        to every type of problems, be it a property hunting in Bengalore for rent or business coaching or legal advice. 
        The Solutionist is born! Currently we are only open to businesses, however, our aim is to create a platform where 
        everyone can get any help from the experts, whenever needed.</p>
    </div>

    <div className='link-cont'>
      <div>
        <img src='https://res.cloudinary.com/dqvvpyz72/image/upload/v1740398676/young-entrepreneur-presenting-scalable-startup-entrepreneurship-ideas_emfayw.jpg' 
        alt="entrepreneur" className='mobile-image'/>
      </div>
      <div className='button-resize'>
        <div className='privacy-policy'>
          <Link to="/privacy-policy">
            <h3 className='privacy-text'>Privacy Policy</h3>
          </Link>
          <Link to="/privacy-policy">
            <h3 className='privacy-text'>Terms & Conditions</h3>
          </Link>
        </div>
      </div>
    </div>

    {/* Contact information section */}

    <div className='contact-cont'>
      <div>
        <h1 id="contact-section">Contact Information</h1>
        <h3><strong>Email: </strong><a href="mailto:solutionistminds@gmail.com?subject=Inquiry&body=Hello,%20I%20would%20like%20to%20know%20more...">
        solutionistminds@gmail.com
        </a></h3>
        <h3><strong>Phone:</strong> +918910924416</h3>
        <h3><strong>Address:</strong> Hooghly, West Bengal, India 712147</h3>
      </div>
      <div className='fab-ins'>
        <a href='https://wa.me/message/D3H4TPG5AMA7K1' target='_blank' rel="noreferrer">
            <button className='link-button'><FaFacebookSquare />Facebook</button>
        </a>
        <a href='https://www.instagram.com/curioustically_zishan?igsh=MXFwYjN
                  1ODYxb3B3MQ==' target='_blank' rel="noreferrer">
            <button className='link-button instagram'><FaInstagramSquare />Instagram</button>
        </a>
      </div>
    </div>

    <div className='disclaimer'>
      <h2>*Disclaimer: This site is not a part of the Facebook website or Facebook Inc. 
        Additionally, This site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.</h2>

    </div>

    <footer>
    <p>&copy; 2025 All rights reserved</p>
    <p>Design & Developed by <strong>Ramiz</strong> | Web Developer (7003136278) | My <a href='www.linkedin.com/in/ramizali01'>LinkedIn</a> Profile</p>
    </footer>
    <marquee direction="left">Design & Developed by <strong>Ramiz</strong> | Web Developer | UI/UX Designer (7003136278) | We Build User-Friendly and Responsive Websites Tailored to Your Unique Style.</marquee>
  </>
);

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/privacy-policy' element={<PrivacyPolicy />} />
    </Routes>
  </Router>
);

export default App;