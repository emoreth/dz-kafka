
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-purple-800 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Exclusive Section */}
        <div>
          <h4 className="font-bold text-lg mb-4">Exclusive</h4>
          <p>Get 10% off your first order</p>
          <div className="mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg text-gray-800 focus:outline-none"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-2">
              Subscribe
            </button>
          </div>
        </div>

        {/* Support Section */}
        <div>
          <h4 className="font-bold text-lg mb-4">Support</h4>
          <p>Dummy address, Colony 3</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        {/* Account Section */}
        <div>
          <h4 className="font-bold text-lg mb-4">Account</h4>
          <ul>
            <li className="mb-2"><a href="/my-account" className="hover:underline">My Account</a></li>
            <li className="mb-2"><a href="/login" className="hover:underline">Login / Register</a></li>
            <li className="mb-2"><a href="/cart" className="hover:underline">Cart</a></li>
            <li className="mb-2"><a href="/wishlist" className="hover:underline">Wishlist</a></li>
            <li><a href="/shop" className="hover:underline">Shop</a></li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h4 className="font-bold text-lg mb-4">Quick Links</h4>
          <ul>
            <li className="mb-2"><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
            <li className="mb-2"><a href="/terms-of-use" className="hover:underline">Terms Of Use</a></li>
            <li className="mb-2"><a href="/faq" className="hover:underline">FAQ</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto mt-8 border-t border-purple-700 pt-8 flex justify-between">
        <p>&copy; Copyright 2024. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-400">🌐</a>
          <a href="#" className="hover:text-gray-400">📱</a>
          <a href="#" className="hover:text-gray-400">📞</a>
          <a href="#" className="hover:text-gray-400">✉️</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
