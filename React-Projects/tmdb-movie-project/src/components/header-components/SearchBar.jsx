import React, { useState } from "react";

function SearchBar({search}) {

  const [value,setValue] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        search(value)
    }

    const handleChange = (e) => {

      setValue(e.target.value)
      

    }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={handleChange} type="text" placeholder="Film Ara" />
      </form>
    </>
  );
}

export default SearchBar;
