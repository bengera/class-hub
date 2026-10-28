export function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <h1>ClassHub</h1>
        <img className="logo-img" src="logo2.svg" alt="logo" />
      </div>
      <div className="header__center-content">
        <p className="header__title">Grade 6: Gerography lesson</p>
        <p className="header__lesson-description">
          Map Skills: Learn how to find specific places on a map using grid
          lines, symbols, and directions.
        </p>
      </div>
      <div className="header__right-content">
        <button className="header__btn-start">Start lesson</button>
        <p className="header__profile">Ms. Carter</p>
      </div>
    </header>
  );
}
