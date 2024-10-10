import React from 'react';
import '../App.css';

interface FilterProps {
  filter: string;
  setFilter: (filter: string) => void;
}

const Filter: React.FC<FilterProps> = ({ filter, setFilter }) => {
  return (
    <div className="filter">
      <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>
        All
      </button>
      <button onClick={() => setFilter('completed')} className={filter === 'completed' ? 'active' : ''}>
        Completed
      </button>
      <button onClick={() => setFilter('incomplete')} className={filter === 'incomplete' ? 'active' : ''}>
        Incomplete
      </button>
    </div>
  );
};

export default Filter;
