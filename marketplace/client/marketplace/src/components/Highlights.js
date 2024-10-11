import React from 'react';

const games = [
  {
    title: "Doom Eternal",
    price: "$10.00",
    rating: 4.5,
    img: "doom_eternal.jpg" // placeholder for image file
  },
  {
    title: "Resident Evil",
    price: "$15.55",
    rating: 3.9,
    img: "resident_evil.jpg"
  },
  {
    title: "Forza Horizon 4",
    price: "$22.00",
    rating: 4.6,
    img: "forza_horizon_4.jpg"
  },
  {
    title: "Silent Hill 2",
    price: "$25.00",
    rating: 4.1,
    img: "silent_hill_2.jpg"
  },
  {
    title: "Age of Empires",
    price: "$24.00",
    rating: 4.2,
    img: "age_of_empires.jpg"
  },
  {
    title: "Horizon",
    price: "$16.60",
    rating: 4.0,
    img: "horizon.jpg"
  },
  {
    title: "Tomb Raider",
    price: "$21.00",
    rating: 4.0,
    img: "tomb_raider.jpg"
  },
  {
    title: "Gran Turismo 7",
    price: "$18.50",
    rating: 5.0,
    img: "gran_turismo_7.jpg"
  },
];

const Highlights = () => {
  return (
    <div className="highlights-section">
      <h2>Highlights</h2>
      <p>What's new? Discover popular games, new releases and outstanding bargains!</p>
      <div className="tabs">
        <button>Popular</button>
        <button>New Releases</button>
        <button>Offers</button>
      </div>

      <div className="games-grid">
        {games.map((game, index) => (
          <div className="game-card" key={index}>
            <img src={`images/${game.img}`} alt={game.title} />
            <h3>{game.title}</h3>
            <p>{game.price}</p>
            <p>Rating: {game.rating}</p>
            <button className="cart-button">+ Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
