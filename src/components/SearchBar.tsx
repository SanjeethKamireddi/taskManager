import React, { useState, useEffect } from 'react';
import '../App.css';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(query);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [query, onSearch]);

  return (
    <input
      type="text"
      placeholder="Search tasks"
      value={query}
      onChange={e => setQuery(e.target.value)}
    />
  );
};

export default SearchBar;
