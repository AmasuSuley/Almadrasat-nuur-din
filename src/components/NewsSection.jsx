import React from 'react'; 
import { Link, useLocation } from 'react-router-dom';

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: 'School Wins Regional Science Competition',
      date: 'May 15, 2023',
      excerpt: 'Our students took first place in the regional science fair with their innovative renewable energy project.'
    },
    {
      id: 2,
      title: 'New STEM Lab Opening',
      date: 'April 28, 2023',
      excerpt: 'The new state-of-the-art STEM laboratory will open next month, funded by a generous alumni donation.'
    },
    {
      id: 3,
      title: 'Summer Camp Registration Open',
      date: 'April 15, 2023',
      excerpt: 'Sign up now for our popular summer enrichment program with new courses in robotics and creative writing.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-serif">Latest News & Announcements</h2>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Stay updated with what's happening at our school
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map(news => (
            <div 
              key={news.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{news.date}</div>
                <h3 className="text-xl font-bold mb-3">{news.title}</h3>
                <p className="text-gray-600 mb-4">{news.excerpt}</p>
                <a href="#" className="text-blue-600 font-medium hover:underline">Read More →</a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
              <Link to="/news" > Angalia taarifa zote</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;