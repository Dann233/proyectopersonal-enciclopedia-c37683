function AudioPlayer({ src }) {
  if (!src) return null

  return (
    <div className="audio-player">
      <span>🎧 Escuchar descripción</span>
      <audio controls src={`/audio/${src}`} />
    </div>
  )
}

export default AudioPlayer