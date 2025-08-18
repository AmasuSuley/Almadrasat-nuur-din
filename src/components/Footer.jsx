 import React from 'react'; 
 import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt,FaSchool, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About School */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <FaSchool className="text-2xl text-blue-500" />
              <h3 className="text-xl font-bold font-serif">Almadrasat-Nuur-Din</h3>
            </div>
            <p className="text-gray-400">
              Elimu ya dini humuweka mtu karibu na Allah, Njoo usome dini yako
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors duration-200">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors duration-200">
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Viunganishi</h3>
            <ul className="space-y-2">
              {['Home', 'Kukuhusu Madrasa', 'Mafunzo ', 'Shughuli', 'Picha zetu'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 block py-1">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Wasiliana nasi</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-gray-400 mt-1 flex-shrink-0" />
                <p className="text-gray-400">Kizimbani ,Wete Pemba</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-gray-400 flex-shrink-0" />
                <p className="text-gray-400">(123) 456-7890</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-gray-400 flex-shrink-0" />
                <p className="text-gray-400">info@madrasa.com</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Kupata Taarifa Mpya</h3>
            <p className="text-gray-400 mb-3">
              Subscribe kupata taarifa mpya.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder=" email yako"
                className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition-colors duration-200 font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Nuur-Diin. Haki Zote Zimehifadhiwa.
          </p>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;