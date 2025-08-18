import { useState } from 'react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaTimes, FaSearchPlus } from 'react-icons/fa';
import { AiFillPicture } from 'react-icons/ai';

const GallerySection = () => {
  const galleryImages = [
    {
      id: 1,
      src: '/images/pic1.jpg',
      alt: 'Wanafunzi wakisoma Quran',
      category: 'Masomo ya Quran',
      description: 'Darasa letu la kusoma Quran kwa ufasaha na tartil'
    },
    {
      id: 2,
      src: '/images/pic2.jpg',
      alt: 'Majengo ya Madrasa',
      category: 'Mazingira',
      description: 'Majengo yetu ya kisasa yaliyoundwa kwa kufuata maadili ya Kiislamu'
    },
    {
      id: 3,
      src: '/images/pic3.jpg',
      alt: 'Sherehe za Kiislamu',
      category: 'Matukio',
      description: 'Maadhimisho ya siku muhimu za Kiislamu na mila zetu'
    },
    {
      id: 4,
      src: '/images/pic1.jpg',
      alt: 'Mahafali ya Wanafunzi',
      category: 'Mahafali',
      description: 'Ukaramshi wa wanafunzi waliohitimu kwa mafanikio'
    },
    {
      id: 5,
      src: '/images/pic2.jpg',
      alt: 'Sanaa za Kiislamu',
      category: 'Sanaa',
      description: 'Mafunzo ya sanaa za kikanda na za Kiislamu'
    },
    {
      id: 6,
      src: '/images/pic1.jpg',
      alt: 'Shughuli za Nje',
      category: 'Shughuli',
      description: 'Shughuli mbalimbali za nje za kijamii na ki-mila'
    },
    {
      id: 7,
      src: '/images/pic4.jpg',
      alt: 'Waalimu Wetu',
      category: 'Ualimu',
      description: 'Timu yetu ya waalimu wenye ujuzi na uzoefu'
    },
    {
      id: 8,
      src: '/images/pic2.jpg',
      alt: 'Maktaba ya Kiislamu',
      category: 'Maktaba',
      description: 'Vitabu vya kielimu na vya dini kwa matumizi ya wanafunzi'
    }
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => setSelectedImage(null);

  const navigate = (direction) => {
    let newIndex;
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1;
    }
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  return (
    <section className="py-20 bg-white-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header with Islamic decorative elements */}
         <div className="text-center mb-12 relative">
         
          <h2 className="text-3xl md:text-4xl font-bold relative z-10 text-white-800">
            Picha za Madrasa
          </h2>
          <p className="text-xl text-blue-600 max-w-3xl mx-auto mt-4 relative z-10">
            Angalia shughuli na mazingira ya Madrasa yetu ya Quran
          </p>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id} 
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
              onClick={() => openLightbox(image, index)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                <span className="text-sm text-white bg-blue-600 px-2 py-1 rounded-full self-start mb-2">
                  {image.category}
                </span>
                <p className="text-white font-medium">{image.alt}</p>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <FaSearchPlus className="text-white text-4xl" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 flex items-center justify-center mx-auto">
            <AiFillPicture className="mr-2" />
            <Link to="/gallery" > Angalia Picha Zaidi</Link>
            
          </button>
        </div>

        {/* Lightbox with Islamic design */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button 
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white text-3xl hover:text-blue-300 transition-colors"
            >
              <FaTimes />
            </button>
            
            <button 
              onClick={() => navigate('prev')}
              className="absolute left-6 text-white text-3xl p-2 hover:text-blue-300 transition-colors"
            >
              <FaChevronLeft />
            </button>
            
            <div className="max-w-4xl w-full">
              <img 
                src={galleryImages[currentIndex].src} 
                alt={galleryImages[currentIndex].alt}
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="text-white mt-4 text-center bg-blue-900/50 p-4 rounded-lg">
                <h3 className="text-xl font-bold">{galleryImages[currentIndex].alt}</h3>
                <p className="mt-2 text-blue-100">{galleryImages[currentIndex].description}</p>
                <p className="text-sm mt-2 text-blue-200">
                  Picha {currentIndex + 1} ya {galleryImages.length}
                </p>
              </div>
            </div>
            
            <button 
              onClick={() => navigate('next')}
              className="absolute right-6 text-white text-3xl p-2 hover:text-blue-300 transition-colors"
            >
              <FaChevronRight />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;