import React, { useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const teamMembers = [
    {
      name: "Snigdha Choudhari",
      title: "Diploma, CSE",
      image: "/images/Snigdha.jpg",
      social: {
        github: "",
        linkedin: "",
        instagram: "",
      },
    },
    {
      name: "Srushti Arote",
      title: "Diploma, CSE",
      image: "/images/Srushti.jpg",
      social: {
        github: "",
        linkedin: "",
        instagram: "",
      },
    },
    {
      name: "Saloni Garje",
      title: "Diploma, CSE",
      image: "/images/Saloni.jpg",
      social: {
        github: "",
        linkedin: "",
        instagram: "",
      },
    },
    {
      name: "Sejal Hambire",
      title: "Diploma, CSE",
      image: "/images/Sejal.jpg",
      social: {
        github: "",
        linkedin: "",
        instagram: "",
      },
    },
  ];

  return (
    <div>
      <div
        className="bg-blue-500 text-white min-h-screen flex flex-col"
        id="home"
      >
        {/* Header */}
        <header className="w-full py-6">
          <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
            <div className="flex items-center justify-between gap-2">
            <img src="/images/finalmedilogo1.png" width={50} height={50} alt="" />
            <h1 className="text-3xl font-bold">MEDI</h1>
            </div>
            {/* Mobile Hamburger Menu */}
            <button
              className="lg:hidden text-2xl"
              onClick={() => setMenuOpen(true)}
            >
              <i className="fas fa-bars"></i>
            </button>
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8 text-lg font-medium">
              <ul className="flex space-x-8">
                <li>
                  <a href="#home" className="hover:underline cursor-pointer">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:underline cursor-pointer"
                  >
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:underline cursor-pointer">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#team" className="hover:underline cursor-pointer">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:underline cursor-pointer">
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Mobile Sidebar */}
        <div
          className={`fixed inset-0 z-50 bg-gray-800 bg-opacity-50 transition-opacity ${
            menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setMenuOpen(false)}
        >
          <div
            className={`fixed top-0 right-0 w-2/3 max-w-sm h-full bg-white text-blue-500 p-6 shadow-lg transform transition-transform ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the menu
          >
            <button
              className="text-2xl absolute top-4 right-4 text-blue-500"
              onClick={() => setMenuOpen(false)}
            >
              <i className="fas fa-times"></i>
            </button>
            <ul className="space-y-6 mt-12 text-lg font-medium">
              <li>
                <a href="#home" className="hover:underline cursor-pointer">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:underline cursor-pointer">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline cursor-pointer">
                  About Us
                </a>
              </li>
              <li>
                <a href="#team" className="hover:underline cursor-pointer">
                  Team
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline cursor-pointer">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-grow flex items-center justify-center p-8">
          <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center">
            {/* Text Section */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Virtual healthcare for you
              </h2>
              <p className="text-lg mb-6">
                Medimoor provides progressive, affordable healthcare, accessible
                on mobile and online for everyone.
              </p>
              <button className="bg-white text-blue-500 px-8 py-3 rounded-full font-semibold shadow-md hover:bg-blue-100">
                <i className="fas fa-download mr-2"></i> Download App
              </button>
            </div>

            {/* Hero Image Section */}
            <div className="lg:w-1/2 mt-8 lg:mt-0">
              <div className="flex items-center justify-center">
                <img
                  src="/images/banner-image.png"
                  alt="Hero Healthcare"
                  className="w-full h-auto max-w-lg lg:max-w-2xl"
                />
              </div>
            </div>
          </div>
        </main>
      </div>

      <div
        className="bg-white min-h-screen px-4 sm:px-6 lg:px-20 py-16"
        id="services"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Our Services</h2>
          <p className="text-lg text-gray-600 mt-12 max-w-3xl mx-auto">
            Get personalized health support from our smart AI bots. Tailored to
            your needs, our services ensure the care you deserve, anytime.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Service 1 */}
          <Link to={'/chatbot'}><div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center">
            <div className="shadow-lg p-4 rounded-full mb-4">
              <img
                src="/images/medicare.png"
                alt="Search Doctor"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">MediOnco</h3>
            <p className="text-gray-600">
              Empowering Cancer Care with Compassionate Conversations.
            </p>
          </div></Link>

          {/* Service 2 */}
          <Link to={'/chatbot'}><div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center">
            <div className="shadow-lg p-4 rounded-full mb-4">
              <img
                src="/images/medirare1.png"
                alt="Online Pharmacy"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">MediRare</h3>
            <p className="text-gray-600">
            Specialized Support for Rare Medical Journeys.
            </p>
          </div></Link>

          {/* Service 3 */}
          <Link to={'/chatbot'}><div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center">
            <div className="shadow-lg p-4 rounded-full mb-4">
              <img
                src="/images/mediayur.png"
                alt="Consultation"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">MediAyur</h3>
            <p className="text-gray-600">
            Holistic Healing Through Ayurvedic Wisdom.
            </p>
          </div></Link>

          {/* Additional Services */}
          <Link to={'/meditime'}><div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center">
            <div className="shadow-lg p-4 rounded-full mb-4">
              <img
                src="/images/meditime.png"
                alt="Consultation"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">MediTime</h3>
            <p className="text-gray-600">
            Swift Care for Critical Moments.
            </p>
          </div></Link>

          <Link to={'/chatbot'}><div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center">
            <div className="shadow-lg p-4 rounded-full mb-4">
              <img
                src="/images/medifund.png"
                alt="Consultation"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">MediFund</h3>
            <p className="text-gray-600">
            Your Trusted Partner in Medical Financing.
            </p>
          </div></Link>

          <Link to={'/chatbot'}><div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center">
            <div className="shadow-lg p-4 rounded-full mb-4">
              <img
                src="/images/medidiet.png"
                alt="Consultation"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">MediDiet</h3>
            <p className="text-gray-600">
            Personalized Nutrition for a Healthier You
            </p>
          </div></Link>
        </div>

        {/* Learn More Button */}
        <div className="flex justify-center items-center">
          <button className="bg-white text-blue-500 px-12 py-5 border border-blue-500 rounded-full font-bold shadow-md hover:bg-blue-500 hover:text-white transition duration-300 mt-16">
            Learn more
          </button>
        </div>
      </div>

      <div
        className="bg-blue-500 text-white min-h-screen flex items-center justify-center"
        id="about"
      >
        <div className="container mx-auto flex flex-col lg:flex-row items-center p-8 lg:p-20">
          {/* Left Section: Image */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/images/health-care-img.png" // Replace with your actual image path
              alt="Healthcare Illustration"
              className="w-full max-w-lg"
            />
          </div>

          {/* Right Section: Text */}
          <div className="lg:w-1/2 mt-8 lg:mt-0 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Leading healthcare providers
            </h1>
            <p className="text-lg mb-6">
            Revolutionizing healthcare with accessible, affordable, and innovative solutions. At MEDI, it's not just about services; it's about creating impactful care for everyone, anytime, anywhere.
            </p>
            <button className="bg-white text-blue-500 px-8 py-3 rounded-full font-semibold shadow-md hover:bg-blue-100">
              Learn more
            </button>
          </div>
        </div>
      </div>

      <div
        className="bg-white py-16 px-6 sm:px-10 lg:p-40 flex items-center justify-center"
        id="app"
      >
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Section */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Download our mobile apps
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8">
              Our dedicated patient engagement app and web portal allow you to
              access information instantaneously (no tedious forms, long calls,
              or administrative hassle) and securely.
            </p>
            <button className="bg-blue-500 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full font-medium shadow-lg hover:bg-blue-600 transition-all">
              Download <span className="ml-2">↓</span>
            </button>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
            <img
              src="/images/download-image.png" // Replace with your image path
              alt="Mobile Apps Illustration"
              className="w-full max-w-xs sm:max-w-md lg:max-w-xl"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto py-16" id="team">
        <div className="text-center mb-12">
          <p className="inline-block border rounded-full py-2 px-6 text-blue-500 font-medium">
            Developers
          </p>
          <h1 className="text-4xl font-bold mt-4">Behind The Vision</h1>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white shadow-lg rounded-lg overflow-hidden w-64 transition-transform hover:scale-105"
            >
              {/* Member Image */}
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                {/* Social Icons */}
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl hover:text-gray-400"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl hover:text-gray-400"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    href={member.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl hover:text-gray-400"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>

              {/* Member Info */}
              <div className="bg-gray-50 text-center p-4">
                <h5 className="font-semibold text-lg">{member.name}</h5>
                <p className="text-blue-500 font-medium">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto py-16 px-6 lg:px-20" id="contact">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16">
          {/* Left Section */}
          <div className="flex-1 text-center lg:text-left">
            <a href="#contact">
              <p className="inline-block border border-blue-500 text-blue-500 rounded-full py-2 px-6 font-medium">
                Get In Touch
              </p>
            </a>
            <h1 className="text-4xl font-bold mt-6 mb-6">MEDI</h1>
            <p className="text-lg font-semibold text-gray-700 mb-8">
              Protecting Your Wellness with the Power of AI
            </p>

            {/* Call Us Now */}
            <div className="bg-blue-50 rounded-lg flex items-center  p-6 mb-6">
              <div className="flex-shrink-0 bg-white rounded-full w-14 h-14 flex items-center justify-center">
                <i className="fa fa-phone-alt text-blue-500 text-xl"></i>
              </div>
              <div className="ml-4 ">
                <p className="text-sm text-gray-600">Call Us Now</p>
                <h5 className="text-lg font-medium">+91 8080520820</h5>
              </div>
            </div>

            {/* Mail Us Now */}
            <div className="bg-blue-50 rounded-lg flex items-center p-6">
              <div className="flex-shrink-0 bg-white rounded-full w-14 h-14 flex items-center justify-center">
                <i className="fa fa-envelope-open text-blue-500 text-xl"></i>
              </div>
              <div className="ml-4 text-center lg:text-left">
                <p className="text-sm text-gray-600">Mail Us Now</p>
                <h5 className="text-lg font-medium">getmedihelp@gmail.com</h5>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1">
            <div className="bg-blue-50 rounded-lg p-8 shadow-md mx-auto sm:w-full md:w-4/5">
              <form action="https://api.web3forms.com/submit" method="POST">
                <input
                  type="hidden"
                  name="access_key"
                  value="d125da6b-fbc1-4378-ae17-7878ad26e016"
                />

                {/* Form Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <input
                    name="name"
                    type="text"
                    className="form-input rounded-lg p-4 w-full"
                    placeholder="Your Name"
                  />

                  {/* Email */}
                  <input
                    name="email"
                    type="email"
                    className="form-input rounded-lg p-4 w-full"
                    placeholder="Your Email"
                  />

                  {/* Mobile */}
                  <input
                    name="mobile"
                    type="text"
                    className="form-input rounded-lg p-4 w-full"
                    placeholder="Your Mobile"
                  />

                  {/* Guard Selection */}
                  <select
                    name="guard"
                    className="form-select rounded-lg p-4 w-full bg-white text-gray-400"
                  >
                    <option value="" disabled selected>
                      Choose MEDI-Bot
                    </option>
                    <option value="1">MediCare</option>
                    <option value="2">MediRare</option>
                    <option value="3">MediAyur</option>
                    <option value="4">MediFund</option>
                    <option value="5">Other</option>
                  </select>
                </div>

                {/* Subject */}
                <div className="mt-6">
                  <input
                    name="subject"
                    type="text"
                    className="form-input rounded-lg p-4 w-full"
                    placeholder="Subject"
                  />
                </div>

                {/* Message */}
                <div className="mt-6">
                  <textarea
                    name="message"
                    className="form-input rounded-lg p-4 w-full"
                    rows="5"
                    placeholder="Describe your problem"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="mt-6">
                  <button
                    type="submit"
                    className="btn bg-blue-500 text-white w-full py-3 rounded-lg hover:bg-blue-600 transition"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-blue-500 text-white pt-10">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="flex flex-wrap justify-center md:justify-between -mx-4">
            {/* Address Section */}
            <div className="w-full sm:w-2/3 md:w-1/3 px-4 mb-8 text-center sm:text-left">
              <h5 className="text-lg font-semibold mb-4">Address</h5>
              <p className="mb-2 flex items-center justify-center sm:justify-start">
                <i className="fa fa-map-marker-alt mr-3"></i>Pune, Maharashtra
              </p>
              <p className="mb-2 flex items-center justify-center sm:justify-start">
                <i className="fa fa-phone-alt mr-3"></i>+91 8080520820
              </p>
              <p className="mb-2 flex items-center justify-center sm:justify-start">
                <i className="fa fa-envelope mr-3"></i>getmedihelp@gmail.com
              </p>
              <div className="flex justify-center sm:justify-start space-x-3 mt-4">
                <a
                  href="/"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="/"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="/"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600"
                >
                  <i className="fab fa-youtube"></i>
                </a>
                <a
                  href="/"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>

            {/* Services Section */}
            <div className="w-full sm:w-2/3 md:w-1/3 px-4 mb-8 text-center sm:text-left">
              <h5 className="text-lg font-semibold mb-4">Services</h5>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-400">
                    MediCare
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    MediRare
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    MediAyur
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    MediAid
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    MediFund
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    MediMind
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links Section */}
            <div className="w-full sm:w-2/3 md:w-1/3 px-4 mb-8 text-center sm:text-left">
              <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="hover:text-blue-400">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-blue-400">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-blue-400">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#service" className="hover:text-blue-400">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#team" className="hover:text-blue-400">
                    Team
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="bg-blue-500 py-4">
          <div className="container mx-auto px-4 lg:px-16 text-center">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} MEDI, All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
