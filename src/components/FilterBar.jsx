function FilterBar({ categorias, categoriaActiva, onSelect }) {
  const handleSelect = (cat) => {
    onSelect(cat)
    setTimeout(() => {
      document.querySelector('.grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
  }

  return (
    <div className="filterbar">
      <button
        className={`filter-btn ${categoriaActiva === 'Todas' ? 'active' : ''}`}
        onClick={() => handleSelect('Todas')}
      >
        Todas
      </button>
      {categorias.map((cat) => (
        <button
          key={cat}
          className={`filter-btn ${categoriaActiva === cat ? 'active' : ''}`}
          onClick={() => handleSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}

export default FilterBar