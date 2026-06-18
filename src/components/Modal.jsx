import AudioPlayer from './AudioPlayer'

function Modal({ entrada, onClose, onPrev, onNext }) {
  if (!entrada) return null

  const imageSrc = entrada.imagen.startsWith('http')
    ? entrada.imagen
    : `/proyectopersonal-enciclopedia-c37683/images/${entrada.imagen}`

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <button className="modal-nav modal-prev" onClick={(e) => { e.stopPropagation(); onPrev() }}>‹</button>
        <button className="modal-nav modal-next" onClick={(e) => { e.stopPropagation(); onNext() }}>›</button>
        <div className="modal-img-wrapper">
          <img src={imageSrc} alt={entrada.nombre} className="modal-img" />
        </div>
        <div className="modal-info">
          <span className="entrada-categoria">{entrada.categoria}</span>
          <h2 className="modal-nombre">{entrada.nombre}</h2>
          <p className="modal-desc">{entrada.descripcion}</p>
          <div className="entrada-tags">
            {entrada.tags.map((tag) => (
              <span key={tag} className="tag">#{tag}</span>
            ))}
          </div>
          <AudioPlayer src={entrada.audio} />
        </div>
      </div>
    </div>
  )
}

export default Modal