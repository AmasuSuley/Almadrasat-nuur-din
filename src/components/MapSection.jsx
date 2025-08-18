import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaClock, FaEnvelope } from 'react-icons/fa';

const MapSection = () => {
  
  const madrasaLocation = {
    lat: -5.056753,  
    lng: 39.727369,  
    address: "Mchangawima, Njia ya kinyasini, Wete Pemba ",
    phone: "+255 123 456 789",
    email: "info@madrasa.com",
    hours: "Jumamosi - Alkhamis: 8:00 asubuhi - 8:00 jioni\nJumamosi: 9:00 asubuhi - 12:00 jioni"
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-arabic text-black-800">
          Eneo Letu
        </h2>
        <p className="text-xl text-blue-600 text-center max-w-3xl mx-auto mb-12">
          Tafadhali tembelea madrasa yetu kwa maelezo zaidi
        </p>
        
        {/* Interactive Map */}
        <div className="rounded-xl overflow-hidden shadow-lg h-96 mb-12">
          <iframe
            title="Madrasa Ya Quran Location"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            src={`https://maps.google.com/maps?q=${madrasaLocation.lat},${madrasaLocation.lng}&z=15&output=embed`}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
        
        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 flex items-center text-blue-700">
              <FaMapMarkerAlt className="text-blue-600 mr-2" />
              Anwani
            </h3>
            <p className="text-gray-700">{madrasaLocation.address}</p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 flex items-center text-blue-700">
              <FaClock className="text-blue-600 mr-2" />
              Masaa ya Ufunguzi
            </h3>
            <p className="text-gray-700 whitespace-pre-line">{madrasaLocation.hours}</p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 flex items-center text-blue-700">
              <FaPhone className="text-blue-600 mr-2" />
              Mawasiliano
            </h3>
            <p className="text-gray-700 mb-2">
              <a href={`tel:${madrasaLocation.phone}`} className="hover:text-blue-600">
                {madrasaLocation.phone}
              </a>
            </p>
            <p className="text-gray-700">
              <a href={`mailto:${madrasaLocation.email}`} className="hover:text-blue-600">
                {madrasaLocation.email}
              </a>
            </p>
          </div>
        </div>

        {/* Directions Button */}
        <div className="text-center mt-12">
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${madrasaLocation.lat},${madrasaLocation.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg inline-flex items-center transition duration-300"
          >
            <FaMapMarkerAlt className="mr-2" />
            Pata Maelekezo
          </a>
        </div>
      </div>
    </section>
  );
};

export default MapSection;