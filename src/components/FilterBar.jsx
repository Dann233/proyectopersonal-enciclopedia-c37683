function FilterBar({ categorias, categoriaActiva, onSelect }) {
  return (
    <div className="filterbar">
      <button
        className={`filter-btn ${categoriaActiva === 'Todas' ? 'active' : ''}`}
        onClick={() => onSelect('Todas')}
      >
        Todas
      </button>
      {categorias.map((cat) => (
        <button
          key={cat}
          className={`filter-btn ${categoriaActiva === cat ? 'active' : ''}`}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}

export default FilterBar