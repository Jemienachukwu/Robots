import React from 'react'

const Search = ({ SearchChange }) => {
  return (
    <div className="pa2">
      <input
        type="search"
        placeholder="search robots..."
        className="pa2 ba b--green bg-lightest-blue"
        onChange={SearchChange}
      />
    </div>
  )
}

export default Search
