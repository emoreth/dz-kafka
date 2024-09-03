import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-gray-800">
            <span className="ml-2">DevZero</span>
          </a>
          <span className="text-gray-600">E-commerce</span>
        </div>
        {/* Navigation */}
        <nav className="flex space-x-6">
          <a href="/" className="text-gray-600 hover:text-blue-600">
            Home
          </a>
          <a href="/about" className="text-gray-600 hover:text-blue-600">
            About
          </a>
          <a href="/signup" className="text-gray-600 hover:text-blue-600">
            Sign Up
          </a>
        </nav>
        {/* Search and Icons */}
        <div className="flex items-center space-x-6">
          <div className="relative">
            <input
              type="text"
              className="border rounded-lg py-2 px-4 w-64 focus:outline-none focus:border-blue-600"
              placeholder="What are you looking for?"
            />
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
              🔍
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="/wishlist" className="text-gray-600 hover:text-red-600">
              ❤️
            </a>
            <a href="/cart" className="text-gray-600 hover:text-blue-600">
              🛒
            </a>
            <a href="/account" className="text-gray-600 hover:text-blue-600">
              👤
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
