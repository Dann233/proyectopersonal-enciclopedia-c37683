import { useState, useEffect, useMemo } from 'react'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import FilterBar from './components/FilterBar'
import EntradaCard from './components/EntradaCard'
import './App.css'

function App() {
  const [tendencias, setTendencias] = useState([])
  const [query, setQuery] = useState('')
  const [categoriaActiva, setCategoriaActiva] = useState('Todas')
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    fetch('/proyectopersonal-enciclopedia-c37683/data/tendencias.json')
      .then((res) => res.json())
      .then((data) => setTendencias(data))
  }, [])

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode)
  }, [darkMode])

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

  return (
    <>
      <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      <header className="hero-header">
        <p className="hero-eyebrow">Edición 2026 — Moda Urbana</p>
        <h1 className="hero-title">Micro<br />tendencias</h1>
        <p className="hero-sub">Un archivo visual de las estéticas que están definiendo la moda urbana en 2026.</p>
      </header>
      <main className="main">
        <div className="controls">
          <SearchBar query={query} onSearch={setQuery} />
          <FilterBar categorias={categorias} categoriaActiva={categoriaActiva} onSelect={setCategoriaActiva} />
        </div>
        <p className="results-info">{filtradas.length} entradas</p>
        <div className="grid">
          {filtradas.length > 0 ? (
            filtradas.map((entrada, index) => (
              <EntradaCard key={entrada.id} entrada={entrada} index={index + 1} />
            ))
          ) : (
            <div className="empty-state">
              <p>Sin resultados para "{query}"</p>
            </div>
          )}
        </div>
      </main>
    </>
  )
}

export default App