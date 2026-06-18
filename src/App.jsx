import { useState, useEffect, useMemo } from 'react'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import FilterBar from './components/FilterBar'
import EntradaCard from './components/EntradaCard'
import Modal from './components/Modal'
import './styles/App.css'
function App() {
  const [tendencias, setTendencias] = useState([])
  const [query, setQuery] = useState('')
  const [categoriaActiva, setCategoriaActiva] = useState('Todas')
  const [darkMode, setDarkMode] = useState(false)
  const [loading, setLoading] = useState(true)
  const [indexSeleccionado, setIndexSeleccionado] = useState(null)

  useEffect(() => {
    fetch('/proyectopersonal-enciclopedia-c37683/data/tendencias.json')
      .then((res) => res.json())
      .then((data) => {
        setTendencias(data)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode)
  }, [darkMode])

  useEffect(() => {
    if (indexSeleccionado !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [indexSeleccionado])

  const categorias = useMemo(() => {
    return [...new Set(tendencias.map((t) => t.categoria))]
  }, [tendencias])

  const filtradas = useMemo(() => {
    return tendencias.filter((t) => {
      const coincideBusqueda = t.nombre.toLowerCase().includes(query.toLowerCase())
      const coincideCategoria = categoriaActiva === 'Todas' || t.categoria === categoriaActiva
      return coincideBusqueda && coincideCategoria
    })
  }, [tendencias, query, categoriaActiva])

  const entradaSeleccionada = indexSeleccionado !== null ? filtradas[indexSeleccionado] : null

  const handlePrev = () => setIndexSeleccionado((i) => (i > 0 ? i - 1 : filtradas.length - 1))
  const handleNext = () => setIndexSeleccionado((i) => (i < filtradas.length - 1 ? i + 1 : 0))

  return (
    <>
      <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      <header className="hero-header" style={{
        backgroundImage: `url('https://images.pexels.com/photos/6985048/pexels-photo-6985048.jpeg?auto=compress&cs=tinysrgb&w=1600')`
      }}>
        <p className="hero-eyebrow">Edición 2026 — Moda Urbana</p>
        <h1 className="hero-title">Micro<br />tendencias</h1>
        <p className="hero-sub">Un archivo visual de las estéticas que están definiendo la moda urbana en 2026.</p>
      </header>
      <main className="main">
        <div className="controls">
          <SearchBar query={query} onSearch={setQuery} />
          <FilterBar categorias={categorias} categoriaActiva={categoriaActiva} onSelect={setCategoriaActiva} />
        </div>

        {loading ? (
          <div className="loading-state">
            <div className="loading-spinner" />
            <p>Cargando tendencias...</p>
          </div>
        ) : (
          <>
            <p className="results-info">
              <span className="results-count">{filtradas.length}</span> entradas
            </p>
            <div className="grid">
              {filtradas.length > 0 ? (
                filtradas.map((entrada, index) => (
                  <EntradaCard
                    key={entrada.id}
                    entrada={entrada}
                    index={index + 1}
                    onClick={() => setIndexSeleccionado(index)}
                  />
                ))
              ) : (
                <div className="empty-state">
                  <p>Sin resultados para "{query}"</p>
                </div>
              )}
            </div>
          </>
        )}
      </main>
      <Modal
        entrada={entradaSeleccionada}
        onClose={() => setIndexSeleccionado(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </>
  )
}

export default App