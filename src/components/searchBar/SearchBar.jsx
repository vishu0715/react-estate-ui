import { useState } from 'react';
import './SearchBar.scss';

const types = ['Buy', 'Rent'];

function SearchBar() {
  const [query, setQuery] = useState({
    type: 'Buy',
    location: '',
    minPrice: 0,
    maxPrice: 100000,
  });

  const switchType = (type) => {
    setQuery((prev) => ({ ...prev, type: type === 'Buy' ? 'Buy' : 'Rent' }));
  };

  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button 
            key={type} 
            onClick={() => switchType(type)} 
            className={query.type === type ? 'active' : ''}>
            {type}
          </button>
        ))}
      </div>
      <form>
        <input 
          type="text" 
          name="location" 
          placeholder="City Location" 
          value={query.location}
          onChange={(e) => setQuery({ ...query, location: e.target.value })}
        />
        <input 
          type="number" 
          name="minPrice" 
          min={0} 
          max={100000} 
          placeholder="Min Price" 
          value={query.minPrice}
          onChange={(e) => setQuery({ ...query, minPrice: Number(e.target.value) })}
        />
        <input 
          type="number" 
          name="maxPrice" 
          min={0} 
          max={100000} 
          placeholder="Max Price" 
          value={query.maxPrice}
          onChange={(e) => setQuery({ ...query, maxPrice: Number(e.target.value) })}
        />
        <button type="submit">
          <img src="/search.png" alt="Search" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
