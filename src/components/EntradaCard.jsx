import AudioPlayer from './AudioPlayer'

function EntradaCard({ entrada, index }) {
  return (
    <div className="entrada-card">
      <div className="entrada-img-wrapper">
        <img
          src={`/images/${entrada.imagen}`}
          alt={entrada.nombre}
          className="entrada-img"
        />
        <span className="entrada-index">{String(index).padStart(2, '0')}</span>
      </div>
      <div className="entrada-info">
        <span className="entrada-categoria">{entrada.categoria}</span>
        <h2 className="entrada-nombre">{entrada.nombre}</h2>
        <p className="entrada-desc">{entrada.descripcion}</p>
        <div className="entrada-tags">
          {entrada.tags.map((tag) => (
            <span key={tag} className="tag">#{tag}</span>
          ))}
        </div>
        <AudioPlayer src={entrada.audio} />
      </div>
    </div>
  )
}

export default EntradaCard