import React, { useState } from 'react';
import './SearchBox.css'; // นำ CSS ของคุณมาใส่ในไฟล์นี้

const SearchBox = () => {
  const [searchText, setSearchText] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // console.log('Search submitted:', searchText);
  };

  return (
    <div className={`search-box ${isFocused ? 'border-searching' : ''}`}>
        <div className={`search-icon ${isFocused ? 'si-rotate' : ''}`}>
            <i className="bx bx-search"></i>
        </div>
        <form onSubmit={handleSubmit} className="search-form">
            <input
            type="text"
            id="search"
            value={searchText}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="Search for data robot"
            autoComplete="off"
            />
        </form>
    </div>

  );
};

export default SearchBox;
