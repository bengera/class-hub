import { useState } from "react";
import data from "../data.json";
import "./scss/main.scss";

type Student = {
  id: string;
  name: string;
  points: number;
  participation: "very low" | "low" | "medium" | "high" | "very high";
};

function App() {
  const [studentList, setStudentList] = useState(data.studentlist);
  console.log(data);
  console.log(Array.isArray(data));
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
        <div className="student-register">
          <p className="student-register__heading">Student List</p>
          <p className="student-register__num-students">3 students</p>
          <div className="student-register__names-list">
            <table>
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Points</th>
                  <th scope="col">Participation</th>
                </tr>
              </thead>
              {studentList.map((student) => {
                return (
                  <tbody key={student.id}>
                    <tr>
                      <th scope="row">{student.name}</th>
                      <td>{student.points}</td>
                      <td>{student.participation}</td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
          <button className="student-list__add">Add Student</button>
        </div>
      </main>
    </div>
  );
}

export default App;
