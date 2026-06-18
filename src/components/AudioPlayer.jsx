function AudioPlayer({ src }) {
  if (!src) return null

  const base = import.meta.env.BASE_URL
  const audioSrc = src.startsWith('http')
    ? src
    : `${base}audio/${src}`

  return (
    <div className="audio-player">
      <span className="audio-label">🎧 Escuchar descripción</span>
      <audio controls src={audioSrc} />
    </div>
  )
}

export default AudioPlayer