function EntradaCard({ entrada, index, onClick }) {
  const imageSrc = entrada.imagen.startsWith('http')
    ? entrada.imagen
    : `/proyectopersonal-enciclopedia-c37683/images/${entrada.imagen}`

  const descCorta = entrada.descripcion.length > 100
    ? entrada.descripcion.slice(0, 100) + '...'
    : entrada.descripcion

  return (
    <div className="entrada-card" onClick={onClick}>
      <div className="entrada-img-wrapper">
        <img
          src={imageSrc}
          alt={entrada.nombre}
          className="entrada-img"
        />
        <span className="entrada-index">{String(index).padStart(2, '0')}</span>
      </div>
      <div className="entrada-info">
        <span className="entrada-categoria">{entrada.categoria}</span>
        <h2 className="entrada-nombre">{entrada.nombre}</h2>
        <p className="entrada-desc">{descCorta}</p>
        <div className="entrada-extra">
          <div className="entrada-tags">
            {entrada.tags.map((tag) => (
              <span key={tag} className="tag">#{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EntradaCard