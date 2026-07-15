function FilterButtons({ filter, setFilter }) {
  return (
    <div className="filter-buttons">
      <button onClick={() => setFilter("All")}>
        All
      </button>

      <button onClick={() => setFilter("Active")}>
        Active
      </button>

      <button onClick={() => setFilter("Inactive")}>
        Inactive
      </button>
    </div>
  );
}

export default FilterButtons;