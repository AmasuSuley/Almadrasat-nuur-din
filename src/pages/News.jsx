import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaPhone, FaClock, FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

// Utility function to check if post is new (within 2 days)
const isNewPost = (createdAt) => {
  const postDate = new Date(createdAt);
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - 2); // 2 days ago
  return postDate > cutoffDate;
};

const NewsSection = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
   const navigate = useNavigate()
  const [currentTime, setCurrentTime] = useState(new Date()); // For auto-refreshing badge status

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/posts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setNewsItems(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
    
    // Update time every hour to re-check "newness"
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 3600000); // 1 hour
    
    return () => clearInterval(interval);
  }, []);

  if (loading) return <div className="text-center py-20">Loading news...</div>;
  if (error) return <div className="text-center py-20 text-red-500">Error: {error}</div>;


  // Function to truncate text
  const truncateText = (text, wordLimit = 20) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="pt-16"></div>
      <section className="relative py-20 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-arabic">
            Taarifa za Madrasa
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Angalia taarifa na matukio ya hivi karibuni
          </p>
        </div>
      </section>
      <div className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map(news => (
            <div 
              key={news.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 relative"
            >
              {/* NEW Badge - Only shows for posts created in last 2 days */}
              {isNewPost(news.created_at) && (
                <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                  NEW
                </span>
              )}
              
              {news.photo ? (
                <img 
                  src={`http://localhost:8000/storage/${news.photo}`} 
                  alt={news.title}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="h-48 bg-gray-200"></div>
              )}
              
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div className="text-sm text-gray-500 mb-2">
                    {new Date(news.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  {isNewPost(news.created_at) && (
                    <span className="bg-blue-300 text-green-800 text-xs px-2 py-1 rounded">
                      New
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-3">{news.title}</h3>
                <p className="text-gray-600 mb-4">
                  {truncateText(news.description, 20)} {/* Show only 30 words */}
                </p>
               <button 
                  onClick={() => navigate(`/news/${news.id}`)}
                  className="text-blue-600 font-medium hover:underline"
                >
                  Soma Zaidi →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;