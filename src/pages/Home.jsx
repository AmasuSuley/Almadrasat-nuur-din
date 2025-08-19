import { useState } from 'react';
import React from 'react'; 
import { motion } from 'framer-motion';
import GallerySection from '../components/GallerySection';
import FeaturesSection from '../components/FeaturesSection';
import Testimonials from '../components/Testimonials';
import NewsSection from './News';
import MapSection from '../components/MapSection';
import CtaSection from '../components/CtaSection';
import StatsSection from '../components/StatsSection';
import Navbar from '../components/Navbar';

const Home = () => {
  const [activeTab, setActiveTab] = useState('kuhusu');

  return (
    
    <div className="overflow-hidden">
    
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-4xl font-bold mb-6 font-serif"
          >
             <div 
            className="absolute top- left-1/2 transform -translate-x-1/2 -translate-y-20 text-white-600 text-4xl opacity-200"
            style={{ fontFamily: '"Amiri", serif' }} // Force Arabic font
          >
            &#xFDFD; {/* Unicode for Bismillah */}
          </div>
            Karibu  Almadrsat Nuur Din Islamiyya iliyopo Kizimbani Wete Pemba
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-1xl mb-8"
          >
            Elimu ya dini humuweka mja karibu na Allah
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <button className="bg-white text-blue-800 font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-100 transition">
              Mafunzo Nuur-Din
            </button>
            <button className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-white/10 transition">
               Wanafunzi madrasa
            </button>
          </motion.div>
        </div>
        
        <motion.div 
          animate={{ y: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-2xl"
        >
          ↓
        </motion.div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Features Tabs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-md shadow-sm">
              {['kuhusu', 'mafunzo'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 text-sm font-medium rounded-md ${
                    activeTab === tab
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          {activeTab === 'kuhusu' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <FeaturesSection />
            </motion.div>
          )}
          
          {activeTab === 'mafunzo' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
             <div className="text-center py-12">
  <h3 className="text-3xl font-bold mb-6">Masomo yafundishwayo</h3>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
    {/* Program Card 1 - fiqhi */}
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="bg-blue-600 p-4 text-white">
        <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      </div>
      <div className="p-6">
        <h4 className="text-xl font-bold mb-2">Somo la Fiqhi</h4>
        <p className="text-gray-600 mb-4">
          Fiqhi kwa uelewa wa vitabu na sunna.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition duration-200">
          Soma zaidi
        </button>
      </div>
    </div>

    {/* Program Card 2 - Lugha */}
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="bg-green-600 p-4 text-white">
        <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 6h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      </div>
      <div className="p-6">
        <h4 className="text-xl font-bold mb-2">Lugha ya kiarabu</h4>
        <p className="text-gray-600 mb-4">
          Kujifunza  lugha ya kiarabu kusoma na kuandika
        </p>
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition duration-200">
          Soma zaidi
        </button>
      </div>
    </div>

    {/* Program Card 3 - sharia */}
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="bg-purple-600 p-4 text-white">
        <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      </div>
      <div className="p-6">
        <h4 className="text-xl font-bold mb-2">Sharia za kiislamu</h4>
        <p className="text-gray-600 mb-4">
          Mafunzo ya sharia za dini ya Allah.
        </p>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition duration-200">
          Soma zaidi
        </button>
      </div>
    </div>

    {/* Program Card 4 - hadithi */}
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="bg-yellow-500 p-4 text-white">
        <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </div>
      <div className="p-6">
        <h4 className="text-xl font-bold mb-2">Hadithi</h4>
        <p className="text-gray-600 mb-4">
          kufundisha hadithi kitabu cha hadithi arubaini
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md transition duration-200">
          Soma zaidi
        </button>
      </div>
    </div>

    {/* Program Card 5 - Quran */}
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="bg-red-500 p-4 text-white">
        <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      </div>
      <div className="p-6">
        <h4 className="text-xl font-bold mb-2">Quran</h4>
        <p className="text-gray-600 mb-4">
          Kufundisha na kuhifadhisha Quran
        </p>
        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition duration-200">
          Soma zaidi
        </button>
      </div>
    </div>

    {/* Program Card 6 - Quran Tafsir */}
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="bg-teal-500 p-4 text-white">
        <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      </div>
      <div className="p-6">
        <h4 className="text-xl font-bold mb-2">Quran Tafsir</h4>
        <p className="text-gray-600 mb-4">
          kufundisha na kujua Quran kwa tafsiri yake
        </p>
        <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md transition duration-200">
          Soma zaidi
        </button>
      </div>
    </div>
  </div>
</div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Gallery Section */}
      <GallerySection />

      {/* Map Section */}
      <MapSection />

      {/* News Section */}
      <NewsSection />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <CtaSection />
    </div>
  );
};

export default Home;