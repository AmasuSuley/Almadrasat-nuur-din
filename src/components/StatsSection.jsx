import React from 'react'; 


const StatsSection = () => {
  const stats = [
    { value: '5000+', label: 'Wanafunzi waliohitimu' },
    { value: '98%', label: 'Wamehifadhi Quran ' },
    { value: '20+', label: 'Walimu Waliofundisha' },
    { value: '25', label: 'Miaka toka kuanzishwa' }
  ];

  return (
    <section className="bg-blue-600 text-white py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-4">
        {stats.map((stat, index) => (
          <div key={index}>
            <div className="text-4xl font-bold mb-2">{stat.value}</div>
            <div className="text-lg">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;