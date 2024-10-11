import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa'; // You need to install react-icons if you don't have it: npm install react-icons

const RatingComponent = () => {
  const [rating, setRating] = useState(4.5); // Initial rating of 4.5
  const [hover, setHover] = useState(null);
  const [comment, setComment] = useState("");

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Rating: ${rating}, Comment: ${comment}`);
  };

  return (
    <div className="rating-container">
      <div className="header">
        <h2>Product Name</h2>
        <p>Seller Name</p>
      </div>

      <div className="stars">
        {[...Array(5)].map((star, index) => {
          const ratingValue = index + 1;
          return (
            <label key={index}>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => handleRating(ratingValue)}
              />
              <FaStar
                className="star"
                color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                size={30}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
                
              />
            </label>
          );
        })}
      </div>

      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Comment your experience"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="submit">Rate!</button>
      </form>    
    </div>
  );
};

export default RatingComponent;
