export function Overview({}) {
  return (
    <div className="overview">
      <div className="overview-snapshot">
        <h2 className="overview__heading">Lesson snapshot</h2>
        <div className="number-data">
          <div className="number-data__container">
            <img
              src="students-icon.svg"
              alt="student icon"
              className="number-data__icon"
            />
            <div className="number-data__container-right">
              <p className="number-data__total-number">24</p>
              <p className="number-data__total__description">Total Students</p>
            </div>
          </div>
          <div className="number-data__container">
            <img
              src="low-participaton-icon.svg"
              alt="low participation icon"
              className="number-data__icon"
            />
            <div className="number-data__container-right">
              <p className="number-data__total-number">3</p>
              <p className="number-data__total__description">
                Low Participation
              </p>
            </div>
          </div>
          <div className="number-data__container">
            <img src="flag.svg" alt="flag icon" className="number-data__icon" />
            <div className="number-data__container-right">
              <p className="number-data__total-number">6</p>
              <p className="number-data__total__description">
                Follow-up flagged
              </p>
            </div>
          </div>
          <div className="number-data__container">
            <img
              src="need-support-icon.svg"
              alt="needs support icon"
              className="number-data__icon"
            />
            <div className="number-data__container-right">
              <p className="number-data__total-number">4</p>
              <p className="number-data__total__description">Need support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
