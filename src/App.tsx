import "./scss/main.scss";

function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <div className="logo">
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
      <main className="dashboard">
        <header className="dashboard__header">
          <div className="class-header__left-content">
            <h1 className="class-header__title">
              Project: Building an environmentally friendly museum
            </h1>
            <p className="class-header__class-code">Class code: AEX-0234</p>
          </div>
          <div className="class-header__right-content">
            <div className="dashboard__header-actions">
              <button className="dashboard__header-action">
                Random Student
              </button>
              <button className="dashboard__header-action">Create teams</button>
            </div>
          </div>
        </header>
        <div className="student-list">
          <p>List</p>
        </div>
      </main>
    </div>
  );
}

export default App;
