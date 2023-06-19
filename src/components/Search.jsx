import { useState } from "react";

export default function Search({ onSearch }) {
  const [searchTerm, setSearchterm] = useState("");

  const handleChange = (event) => {
    setSearchterm(event.target.value);

    onSearch(event);
  };

  return (
    <div>
      <label htmlFor='search'>Search: </label>
      <input id='search' type='text' onChange={handleChange} />
      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>
    </div>
  );
}
