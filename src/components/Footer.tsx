import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FiMail} from 'react-icons/fi';
import { faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="text-center">
          {/* Column 1: Contact Us */}
          <h2 className="text-xl font-bold mb-3">Dot Brand</h2>
          
          <a href="mailto:info@dotbrand.com" className="text-sm hover:text-gray-400 transition duration-300">
            Email: info@dotbrand.com
          </a>
          <p className="mt-3 text-sm">Phone: +1 (123) 456-7890</p>
          <a href="/terms" className="text-sm mt-2 hover:text-gray-400 transition duration-300">
            Terms | Privacy Policy
          </a>
        </div>

        <div className="text-center">
          {/* Column 2: Follow Us */}
          <h2 className="text-xl font-bold mb-3">Follow Us</h2>
          <p className="text-base mb-3">
            Stay connected with us on social media for the latest updates and news.
          </p>
          <div className="flex space-x-4 justify-center">
            <a href="#" className="text-xl hover:text-gray-400 transition duration-300">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="text-xl hover:text-gray-400 transition duration-300">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="text-xl hover:text-gray-400 transition duration-300">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>

        <div className="text-center flex flex-col items-center">
          {/* Column 3: Subscribe */}
          <h2 className="text-xl font-bold mb-3">Subscribe</h2>
          <p className="text-base mb-3">
            Get the latest news and articles to your inbox every month.
          </p>
          <div className="flex items-center space-x-2 mt-3">
            <input
              type="email"
              placeholder="Your Email"
              className="p-1 w-72 text-black rounded border focus:outline-none focus:ring focus:border-gray-400"
            />
            <button className="bg-gray-400 text-white p-2 rounded hover:bg-gray-600 transition duration-300">
              <FiMail className=''/>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-xs">
        &copy; {new Date().getFullYear()} DotBrand. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
