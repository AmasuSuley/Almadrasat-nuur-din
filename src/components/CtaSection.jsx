import React from 'react';
import { FaBook, FaPhoneAlt, FaCalendarAlt } from 'react-icons/fa';

const CtaSection = () => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-700 to-blue-900 rounded-xl p-8 md:p-12 text-center text-white shadow-xl relative overflow-hidden">
        {/* Islamic decorative elements */}
        <div className="absolute top-0 left-0 text-blue-800 opacity-10 text-9xl">
          <FaBook />
        </div>
        <div className="absolute bottom-0 right-0 text-blue-800 opacity-10 text-9xl">
          <FaBook />
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold mb-6 relative z-10 font-arabic">
          Je, Unatamani Kujiunga Na Madrasa Yetu?
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto relative z-10">
          Jiandikishe au tupigie simu kwa maelezo zaidi kuhusu mafunzo ya Qurani na Dini
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
          <a 
            href="/registration" 
            className="bg-white hover:bg-blue-50 text-blue-800 font-bold py-3 px-6 rounded-lg text-md transition duration-300 flex items-center justify-center"
          >
            <FaCalendarAlt className="mr-2" />
            Jiandikishe Sasa
          </a>
          <a 
            href="/contact" 
            className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-3 px-6 rounded-lg text-md transition duration-300 flex items-center justify-center"
          >
            <FaPhoneAlt className="mr-2" />
            Tuwasiliane
          </a>
        </div>

        <p className="mt-8 text-blue-200 text-sm relative z-10">
          "Na Mwenyezi Mungu amesema: 'Ee wana wa Adamu! Nendeni msafi kwa ibada katika kila msikiti'" 
          <br />(Qur'an 7:31)
        </p>
      </div>
    </section>
  );
};

export default CtaSection;