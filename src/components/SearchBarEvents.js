import React, { useState } from "react";

function EventSearchBar({ data,onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    const newResults = data.filter((event) => {
      return (
        event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
    onSearch(newResults); 
    setSearchQuery("")
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Etkinlik ara..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Ara</button>
    </div>
  );
}

export default EventSearchBar;
