import React from 'react';
import { FaBook, FaMosque, FaUserGraduate, FaGlobeAfrica } from 'react-icons/fa';

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaBook className="w-12 h-12 text-blue-600 mx-auto" />,
      title: 'Ualimu wa Qurani Takatifu',
      description: 'Waalimu wetu wenye ujuzi wa Qurani na tafsiri kwa ufasaha wa Kiswahili na Kiarabu.'
    },
    {
      icon: <FaMosque className="w-12 h-12 text-blue-600 mx-auto" />,
      title: 'Mazingira ya Kiislamu',
      description: 'Madrasa yenye mazingira safi na salama kwa kufundishwa kwa maadili ya Kiislamu.'
    },
    {
      icon: <FaUserGraduate className="w-12 h-12 text-blue-600 mx-auto" />,
      title: 'Mafunzo ya Kibinafsi',
      description: 'Mbinu za kufundishia kila mwanafunzi kulingana na kiwango chake na uwezo wake.'
    },
    {
      icon: <FaGlobeAfrica className="w-12 h-12 text-blue-600 mx-auto" />,
      title: 'Mtazamo wa Kiislamu',
      description: 'Kumjenga mwanafunzi kwa ujuzi wa Qurani, Hadithi na maisha ya kila siku.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header with Islamic decorative elements */}
        <div className="text-center mb-12 relative">
          <div 
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-20 text-blue-600 text-2xl opacity-200"
            style={{ fontFamily: '"Amiri", serif' }} // Force Arabic font
          >
            &#xFDFD; {/* Unicode for Bismillah */}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold relative z-10 text-black-800 font-arabic">
            Kile Kinachotutofautisha
          </h2>
          <p className="text-xl text-blue-600 max-w-3xl mx-auto mt-4 relative z-10">
            Jukwaa letu la kipekee la kuelimisha kwa misingi ya Qurani na Sunnah
          </p>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-6 rounded-full"></div>
        </div>
        
        {/* Features Grid with Islamic design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500 group hover:border-blue-600"
            >
              <div className="mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-700 group-hover:text-blue-800 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-justify">
                {feature.description}
              </p>
              <div className="mt-4 text-blue-500 font-arabic text-right text-xl">
                ﴿وَقُل رَّبِّ زِدْنِي عِلْمًا﴾
              </div>
            </div>
          ))}
        </div>

        {/* Decorative footer */}
        <div className="mt-16 text-center">
          <p className="text-blue-600 italic">
            "Elimu ni mwanga, na mwanga wa Mwenyezi Mungu huongozwa kwa anayetaka"
          </p>
          <div className="flex justify-center mt-6 space-x-8 opacity-60 text-blue-400">
            <span className="text-3xl">🕌</span>
            <span className="text-3xl">📖</span>
            <span className="text-3xl">✋</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;