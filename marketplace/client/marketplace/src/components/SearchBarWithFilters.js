import React, { useState } from 'react';


const SearchBarWithFilters = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('All Genres');
  const [selectedMode, setSelectedMode] = useState('All Modes');

  const sampleSuggestions = ['Product 1', 'Product 2', 'Category 1', 'Category 2'];
  const genres = ['All Genres', 'Electronics', 'Fashion', 'Books', 'Music'];
  const modes = ['All Modes', 'New', 'Used', 'Rent', 'Sale'];

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchTerm(query);

    if (query.length > 0) {
      const filteredSuggestions = sampleSuggestions.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
  };

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  const handleModeChange = (event) => {
    setSelectedMode(event.target.value);
  };

  const handleSearchSubmit = () => {
    console.log('Search Term:', searchTerm);
    console.log('Selected Genre:', selectedGenre);
    console.log('Selected Mode:', selectedMode);
    // Add your search logic here (e.g., API call or navigation)
  };

  return (
    <div className="searchbar-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search for products, categories..."
        value={searchTerm}
        onChange={handleInputChange}
      />

      {suggestions.length > 0 && (
        <ul className="suggestions-dropdown">
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}

      <div className="filters">
        <select value={selectedGenre} onChange={handleGenreChange} className="filter-select">
          {genres.map((genre, index) => (
            <option key={index} value={genre}>{genre}</option>
          ))}
        </select>

        <select value={selectedMode} onChange={handleModeChange} className="filter-select">
          {modes.map((mode, index) => (
            <option key={index} value={mode}>{mode}</option>
          ))}
        </select>
      </div>

      {/* Add the send button here */}
      <button type="button" className="search-button" onClick={handleSearchSubmit}>
        Send
      </button>
    </div>
  );
};

export default SearchBarWithFilters;
