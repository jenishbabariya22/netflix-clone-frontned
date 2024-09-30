import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Profile from '../pages/Profile';

const Header = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the token from local storage
    localStorage.removeItem('userName'); // Clear the user name from local storage
    localStorage.removeItem('userEmail'); // Clear the user email from local storage
    navigate('/login'); // Redirect to login page
  };

  const isLoggedIn = !!localStorage.getItem('token'); // Check if user is logged in
  const userName = localStorage.getItem('userName'); // Retrieve user name from local storage
  const userEmail = localStorage.getItem('userEmail'); // Retrieve user email from local storage

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev); // Toggle the dropdown menu
  };

  const closeDropdown = () => {
    setDropdownOpen(false); // Close the dropdown menu
  };

  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center">
          <img
            src="https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940"
            alt="Netflix Logo"

            style={{ width: "110px", height: "50px" }}
          />
        </div>

        <nav className="hidden sm:flex items-center space-x-6">
          <Link to="/" className="text-gray-300 hover:text-white transition duration-300">
            Home
          </Link>
          {isLoggedIn ? (
            <>
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="text-gray-300 hover:text-white transition duration-300 focus:outline-none"
                >
                  {userName ? `${userName}` : 'User'}
                </button>
                {dropdownOpen && (
                  <div
                    className="absolute right-0 mt-2 w-48  text-gray-800 rounded-md shadow-lg py-1"
                    onMouseLeave={closeDropdown}
                  >
                    <Link
                      to="/"
                      className="block px-4 py-2 text-sm "
                      onClick={closeDropdown}
                    >
                      <Profile style={{ width: "50px", height: "50px" }} />
                    </Link>
                  </div>
                )}
              </div>
              <button
                onClick={() => {
                  handleLogout();
                  closeDropdown();
                }}
                className="block w-full text-left px-2 py-2 text-sm hover:text-gray-300 transition duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-gray-300 hover:text-white transition duration-300">
                Login
              </Link>
              <Link to="/register" className="text-gray-300 hover:text-white transition duration-300">
                Register
              </Link>
            </>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden">
          <button
            type="button"
            className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
