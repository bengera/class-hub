import "./scss/main.scss";

function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <div className="logo">
          <h1>Class Hub </h1>
          <img src="logo.svg" alt="logo" className="logo-img" />
        </div>
        <nav className="sidebar__nav">
          <ul className="sidebar__nav-list">
            <li className="sidebar__nav-item">
              <a href="" className="sidebar__nav-link">
                Dashboard
              </a>
            </li>
            <li className="sidebar__nav-item">
              <a href="" className="sidebar__nav-link">
                Students
              </a>
            </li>
            <li className="sidebar__nav-item">
              <a href="" className="sidebar__nav-link">
                Teams
              </a>
            </li>
            <li className="sidebar__nav-item">
              <a href="" className="sidebar__nav-link">
                Participation
              </a>
            </li>
            <li className="sidebar__nav-item">
              <a href="" className="sidebar__nav-link">
                Reports
              </a>
            </li>
            <li className="sidebar__nav-item">
              <a href="" className="sidebar__nav-link">
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="main"></main>
    </div>
  );
}

export default App;
