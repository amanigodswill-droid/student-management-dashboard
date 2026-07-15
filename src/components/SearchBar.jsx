function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search student..."
      className="search-bar"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;