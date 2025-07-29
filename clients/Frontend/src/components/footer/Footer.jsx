import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaAngleRight,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcAmex,
} from "react-icons/fa";
import axios from "axios";

// Constants for links and social media
const shopLinks = [
  { name: "Home", path: "/" },
  { name: "Our Shop", path: "/shop" },
  { name: "Shop Detail", path: "/product/:id" },
];

const supportLinks = [
  { name: "Shopping Cart", path: "/cart" },
  { name: "Checkout", path: "/checkout" },
  { name: "Contact Us", path: "/contact" },
];

const socialMedia = [
  { name: "Facebook", icon: <FaFacebookF />, url: "https://facebook.com" },
  { name: "Twitter", icon: <FaTwitter />, url: "https://twitter.com" },
  { name: "Instagram", icon: <FaInstagram />, url: "https://instagram.com" },
];

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) {
      toast.error("Please fill in both name and email.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setSubmitting(true);
    try {
      await axios.post("http://localhost:5000/api/newsletter", { name, email });
      toast.success("Subscribed successfully!");
      setName("");
      setEmail("");
    } catch (err) {
      toast.error("Failed to subscribe. Please try again.");
      console.error("Newsletter subscription error:", err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-200 pt-12 pb-6 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo & Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <span className="border border-amber-500 text-amber-500 px-4 py-2 rounded font-extrabold text-xl mr-2">
              E
            </span>
            Shopper
          </h2>
          <p className="text-sm mb-4 leading-relaxed">
            Discover the best shopping experience with exclusive deals and quality products.
            Join our community for updates and offers!
          </p>
          <p className="flex items-center gap-2 text-sm mb-2">
            <FaMapMarkerAlt className="text-amber-500" /> 123 Street, New York, USA
          </p>
          <p className="flex items-center gap-2 text-sm mb-2">
            <FaEnvelope className="text-amber-500" /> info@eshopper.com
          </p>
          <p className="flex items-center gap-2 text-sm">
            <FaPhoneAlt className="text-amber-500" /> +012 345 67890
          </p>
          {/* Social Media Icons */}
          <div className="flex gap-4 mt-4">
            {socialMedia.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-500 hover:text-amber-400 transition"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-amber-500">Shop</h3>
          <ul className="space-y-2 text-sm">
            {shopLinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  to={link.path}
                  className="flex items-center gap-2 hover:text-amber-400 transition"
                  aria-label={link.name}
                >
                  <FaAngleRight /> {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-amber-500">Support</h3>
          <ul className="space-y-2 text-sm">
            {supportLinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  to={link.path}
                  className="flex items-center gap-2 hover:text-amber-400 transition"
                  aria-label={link.name}
                >
                  <FaAngleRight /> {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-amber-500">Newsletter</h3>
          <form onSubmit={handleNewsletterSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-600 p-2 mb-3 rounded bg-gray-800 text-gray-200 focus:outline-none focus:border-amber-500 transition"
              aria-label="Your Name"
              disabled={submitting}
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-600 p-2 mb-3 rounded bg-gray-800 text-gray-200 focus:outline-none focus:border-amber-500 transition"
              aria-label="Your Email"
              disabled={submitting}
            />
            <button
              type="submit"
              className="w-full bg-amber-500 text-white py-2 font-semibold rounded hover:bg-amber-600 transition disabled:bg-gray-500"
              disabled={submitting}
            >
              {submitting ? "Subscribing..." : "Subscribe Now"}
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 py-4 text-center text-sm">
        <p>
          © <span className="font-bold">EShopper</span>. All Rights Reserved. Designed by{" "}
          <span className="font-bold">Team Awesome</span> Distributed By{" "}
          <span className="text-amber-400">ShopWagon</span>
        </p>

        {/* Payment Icons */}
        <div className="flex justify-center gap-4 mt-2">
          <FaCcVisa className="h-6 w-6 text-amber-500" aria-label="Visa" />
          <FaCcMastercard className="h-6 w-6 text-amber-500" aria-label="Mastercard" />
          <FaCcPaypal className="h-6 w-6 text-amber-500" aria-label="PayPal" />
          <FaCcAmex className="h-6 w-6 text-amber-500" aria-label="Amex" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;