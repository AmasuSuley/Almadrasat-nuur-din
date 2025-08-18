import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import axios from 'axios';

const ContactPage = () => {


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Chagua Mada',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

     const madrasaLocation = {
    lat: -5.056753,  
    lng: 39.727369,  
    address: "Mchangawima, Njia ya kinyasini, Wete Pemba ",
    phone: "+255 123 456 789",
    email: "info@madrasa.com",
    hours: "Jumamosi - Alkhamis: 8:00 asubuhi - 8:00 jioni\nJumamosi: 9:00 asubuhi - 12:00 jioni"
  };

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    
    try {
      const response = await axios.post('http://localhost:8000/api/contact', formData);
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: 'Chagua Mada',
        message: ''
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      if (err.response?.status === 422) {
        setErrors(err.response.data.errors);
      } else {
        console.error('Error submitting form:', err);
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-blue-50 min-h-screen">
        <div className="pt-16"></div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-arabic">
            Mawasiliano
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Tuna karibisha maswali yako na maoni kuhusu madrasa yetu
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-blue-800 font-arabic">
                Tuwasiliane
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <FaMapMarkerAlt className="text-blue-600 text-2xl mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-1">Mahali Tulipo</h3>
                    <p className="text-gray-700">
                      Barabara ya konde, Jengo la Madrasa<br />
                      Kizimbani, Wete<br />
                      Pemba, Zanzibar
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FaPhone className="text-blue-600 text-2xl mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-1">Namba ya Simu</h3>
                    <p className="text-gray-700">
                      <a href="tel:+255123456789" className="hover:text-blue-600">
                        +255 123 456 789
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FaEnvelope className="text-blue-600 text-2xl mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-1">Barua Pepe</h3>
                    <p className="text-gray-700">
                      <a href="mailto:info@madrasayakikoo.com" className="hover:text-blue-600">
                        info@madrasa.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FaClock className="text-blue-600 text-2xl mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-1">Masaa ya Ufunguzi</h3>
                    <p className="text-gray-700 whitespace-pre-line">
                      Jumamosi - Alkhamis: 8:00 asubuhi - 8:00 jioni\n
                      Jumamosi: 9:00 asubuhi - 12:00 jioni\n
                      Jumapili: Fungwa
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex space-x-4">
                <a href="#" className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700">
                  <FaFacebook className="text-xl" />
                </a>
                <a href="#" className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600">
                  <FaWhatsapp className="text-xl" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
             <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-blue-800">Tuma Ujumbe</h3>
              
              {success && (
                <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg">
                  Ujumbe wako umetumwa kikamilifu! Tutawasiliana nawe hivi karibuni.
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Jina Kamili</label>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    required
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name[0]}</p>}
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Barua Pepe</label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    required
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email[0]}</p>}
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Mada</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border ${errors.subject ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    required
                  >
                    <option value="Chagua Mada">Chagua Mada</option>
                    <option value="Masomo ya Quran">Masomo ya Quran</option>
                    <option value="Usajili wa Wanafunzi">Usajili wa Wanafunzi</option>
                    <option value="Michango na Misaada">Michango na Misaada</option>
                    <option value="Maoni na Mapendekezo">Maoni na Mapendekezo</option>
                  </select>
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject[0]}</p>}
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Ujumbe</label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    required
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message[0]}</p>}
                </div>
                
                <button
                  type="submit"
                  disabled={loading}
                  className={`bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Inatumwa...
                    </span>
                  ) : 'Tuma Ujumbe'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-20">
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
      </section>
    </div>
  );
};

export default ContactPage;