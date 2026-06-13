function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Microtendencias 2026</h1>
      <button className="dark-toggle" onClick={toggleDarkMode}>
        {darkMode ? '☀️ Claro' : '🌙 Oscuro'}
      </button>
    </nav>
  )
}

export default Navbar