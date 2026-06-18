function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Microtendencias 2026</h1>
      <div className="toggle-wrapper" onClick={toggleDarkMode}>
        <span className="toggle-label">{darkMode ? 'DARK' : 'LIGHT'}</span>
        <div className={`pixel-switch ${darkMode ? 'checked' : ''}`}>
          <div className="pixel-thumb" />
          <span className="pixel-border-y" />
          <span className="pixel-border-x" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar