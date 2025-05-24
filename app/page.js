"use client";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faHome,
  faLeaf,
  faBuilding,
  faHeart,
  faShieldAlt,
  faArrowRight,
  faPaperPlane,
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
  faClock,
  faBowlFood,
  
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";



export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const services = [
    {
      name: "House Managers",
      icon: faHome,
      image: "/images/house-manager.jpg",
    },
    {
      name: "Gardeners",
      icon: faLeaf,
      image: "/images/gardener.jpg",
    },
    {
      name: "Caregivers",
      icon: faHeart,
      image: "/images/caregiver.jpg",
    },
    {
      name: "Caretakers",
      icon: faBuilding,
      image: "/images/caretaker1.jpg",
    },
    {
      name: "Security Guards",
      icon: faShieldAlt,
      image: "/images/security-guard.jpg",
    },
    {
      name: "Caterers",
      icon: faBowlFood,
      image: "/images/caterer.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white text-gray-800">
      <Head>
        <title>
          Job Connect Agency - Connecting Service Providers with Clients
        </title>
        <meta
          name="description"
          content="Job Connect Agency in Juja Town connects house managers, gardeners, caretakers, caregivers, security guards, and more with clients. Available 24/7."
        />
      </Head>

      <nav className="bg-gradient-to-r from-blue-900 to-blue-700 text-white fixed w-full top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold tracking-tight">
                Job Connect Agency
              </h1>
            </div>
            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center space-x-6">
              <Link href="#home" className="hover:text-red-400 transition">
                Home
              </Link>
              <Link href="#services" className="hover:text-red-400 transition">
                Services
              </Link>
              <Link href="#about" className="hover:text-red-400 transition">
                About
              </Link>
              <Link href="#contact" className="hover:text-red-400 transition">
                Contact
              </Link>
              <a
                href="https://wa.me/254797349201"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition flex items-center"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="mr-2" /> Chat on
                WhatsApp
              </a>
            </div>
            {/* Mobile Menu Button */}
            <div className="flex sm:hidden items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-3 rounded-md hover:bg-blue-800 transition focus:outline-none focus:ring-2 focus:ring-red-400"
                aria-label="Toggle menu"
              >
                <FontAwesomeIcon
                  icon={isMenuOpen ? faTimes : faBars}
                  className="text-3xl"
                />
              </button>
            </div>
          </div>
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="sm:hidden bg-gradient-to-r from-blue-900 to-blue-700 shadow-lg">
              <div className="px-4 pt-4 pb-6 space-y-3">
                <Link
                  href="#home"
                  className="block text-white hover:text-red-400 transition text-lg font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="#services"
                  className="block text-white hover:text-red-400 transition text-lg font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="#about"
                  className="block text-white hover:text-red-400 transition text-lg font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="#contact"
                  className="block text-white hover:text-red-400 transition text-lg font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  href="https://wa.me/254797349201"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition text-center text-lg font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="mr-2" /> Chat on
                  WhatsApp
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-20 bg-gradient-to-r from-blue-100 to-red-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-900 tracking-tight">
            Your Trusted Partner for Professional Services
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Connecting you with skilled house managers, gardeners, caregivers,
            and more in Juja Town, 24/7.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <Link
              href="#contact"
              className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition shadow-lg"
            >
              Get Started <i className="fas fa-arrow-right ml-2"></i>
            </Link>
            <Link
              href="https://wa.me/254797349201"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition shadow-lg flex items-center"
            >
              <i className="fab fa-whatsapp mr-2"></i> WhatsApp Us
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-blue-900">
            Our Services
          </h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.name}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition"
              >
                <Image
                  src={service.image}
                  alt={service.name}
                  width={400}
                  height={160}
                  className="w-full object-cover rounded-t-xl"
                />
                <FontAwesomeIcon
                  icon={service.icon}
                  className="text-4xl text-blue-900 mt-4 mb-2"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {service.name}
                </h3>
                <p className="mt-2 text-gray-600">
                  Expert {service.name.toLowerCase()} tailored to your needs.
                </p>
                <Link
                  href="#contact"
                  className="mt-4 inline-block text-red-600 hover:text-red-700 font-medium"
                >
                  Learn More{" "}
                  <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>
          {/* Call to Action */}
          <div className="text-center mt-10">
            <a
              href="#contact"
              className="bg-blue-900 text-white px-8 py-3 rounded-full hover:bg-blue-800 transition shadow-lg"
            >
              Connect Now <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center">
            About Job Connect Agency
          </h2>
          <p className="mt-4 text-lg text-center max-w-2xl mx-auto">
            Located in Juja Town, we specialize in connecting clients with
            top-tier service providers, from house managers to security guards.
            Our 24/7 availability ensures you get support whenever you need it.
          </p>
          <div className="mt-10 text-center">
            <a
              href="#contact"
              className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition shadow-lg"
            >
              Contact Us <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-blue-900">
            Get in Touch
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Contact Information
              </h3>
              <p className="mt-4 text-gray-600 flex items-center">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-red-600 mr-3"
                />{" "}
                Juja Town
              </p>
              <p className="mt-2 text-gray-600 flex items-center">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-red-600 mr-3"
                />{" "}
                jobconnectagency30@gmail.com
              </p>
              <p className="mt-2 text-gray-600 flex items-center">
                <FontAwesomeIcon icon={faPhone} className="text-red-600 mr-3" />{" "}
                0797 349 201 or 0781 594 646
              </p>
              <p className="mt-2 text-gray-600 flex items-center">
                <FontAwesomeIcon icon={faClock} className="text-red-600 mr-3" />{" "}
                Open Monday - Sunday, 24/7
              </p>
              <a
                href="https://wa.me/254797349201"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition shadow-lg"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="mr-2" /> Chat on
                WhatsApp
              </a>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-900 transition"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-900 transition"
                  required
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900 transition"
                  rows="4"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition shadow-lg"
                >
                  Send Message{" "}
                  <FontAwesomeIcon icon={faPaperPlane} className="ml-2" />
                </button>
                {status && (
                  <p className="mt-2 text-sm text-gray-600">{status}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2025 Job Connect Agency. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="#" className="hover:text-red-400 transition">
              <FontAwesomeIcon icon={faFacebookF} className="text-lg" />
            </a>
            <a href="#" className="hover:text-red-400 transition">
              <FontAwesomeIcon icon={faTwitter} className="text-lg" />
            </a>
            <a href="#" className="hover:text-red-400 transition">
              <FontAwesomeIcon icon={faInstagram} className="text-lg" />
            </a>
            <a href="#" className="hover:text-red-400 transition">
              <FontAwesomeIcon icon={faLinkedinIn} className="text-lg" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
