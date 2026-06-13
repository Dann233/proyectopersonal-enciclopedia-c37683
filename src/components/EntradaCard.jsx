function EntradaCard({ entrada }) {
  return (
    <div className="entrada-card">
      <img
        src={`/images/${entrada.imagen}`}
        alt={entrada.nombre}
        className="entrada-img"
      />
      <div className="entrada-info">
        <span className="entrada-categoria">{entrada.categoria}</span>
        <h2 className="entrada-nombre">{entrada.nombre}</h2>
        <p className="entrada-desc">{entrada.descripcion}</p>
        <div className="entrada-tags">
          {entrada.tags.map((tag) => (
            <span key={tag} className="tag">#{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EntradaCard