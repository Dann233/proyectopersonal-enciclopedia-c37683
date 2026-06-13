function SearchBar({ query, onSearch }) {
  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Buscar tendencia..."
        value={query}
        onChange={(e) => onSearch(e.target.value)}
        className="searchbar-input"
      />
    </div>
  )
}

export default SearchBar