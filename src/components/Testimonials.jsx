  import React from 'react'; 
  
  const Testimonials = () => {
  const testimonials = [
    {
      stars: 5,
      text: "Watot wetu wanajifunza mambo mengi sana kama qurani, hadithi na fiqhi na wanaelewa wanachofundishwa.",
      author: "Bi Mwalimu, Mzazi"
    },
    {
      stars: 5,
      text: "Namshukuru Allah mtoto wangu toka nimpeleke hiki chuo anajua mambo mengi ya dini na amebadilika kitabia.",
      author: "Bi Mwajuma , Mzazi"
    },
    {
      stars: 5,
      text: "Alhamdulillah sihaba tunajifunza dini na kuhifadhi qurani na hadithi kwa kiwango cha hali ya juuu",
      author: "Mohammed Haroub, Mwanafunzi"
    }
  ];

  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-serif">Wazazi na Wanafunzi  kuhusu madrasa</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white/10 p-8 rounded-lg backdrop-blur-sm"
            >
              <div className="text-yellow-300 text-2xl mb-4">
                {'★'.repeat(testimonial.stars)}
              </div>
              <p className="mb-6 italic">"{testimonial.text}"</p>
              <div className="font-bold">{testimonial.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;