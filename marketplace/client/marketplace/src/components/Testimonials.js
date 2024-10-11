import React, { useState } from 'react';


const testimonials = [
  {
    name: 'Viezh Robert',
    rating: 4.0,
    text: "Wow... I am very happy to use this site. I have purchased many games and the offers are really good.",
  },
  {
    name: 'Paola Grey',
    rating: 4.5,
    text: "I really like the email subscription, all the game recommendations were of my interest.",
  },
  {
    name: 'Tonatiu Diaz',
    rating: 4.5,
    text: "Beware of bargains! They are really too tempting! Since I registered, I increased my monthly game purchases.",
  },
  {
    name: 'Alicia Johnson',
    rating: 4.7,
    text: "Fantastic experience! The game deals and customer service are excellent.",
  },
  {
    name: 'Carlos Medina',
    rating: 4.2,
    text: "I enjoy the variety of games available. It's my go-to site for new releases.",
  },
  {
    name: 'Linda Kwon',
    rating: 4.9,
    text: "Their loyalty program is amazing, and the games are always on sale!",
  },
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonials = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % testimonials.length);
  };

  const prevTestimonials = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 3 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="carousel-section">
      <h2>Trusted by Thousands of Happy Customers</h2>
      <p>We keep track of our customer experience. We plan towards better experiences every day.</p>

      <div className="carousel-container">
        <div className="testimonial-cards">
          {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <h3>{testimonial.name}</h3>
              <p>Rating: {testimonial.rating}</p>
              <p>"{testimonial.text}"</p>
            </div>
          ))}
        </div>

        <div className="carousel-controls">
          <button onClick={prevTestimonials}>&larr;</button>
          <button onClick={nextTestimonials}>&rarr;</button>
        </div>

        <div className="dots">
          {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
            <span
              key={index}
              className={`dot ${index === Math.floor(currentIndex / 3) ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index * 3)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
