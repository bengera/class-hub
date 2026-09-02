import { useState } from "react";
import data from "../data.json";
import "./scss/main.scss";

type Student = {
  id: string;
  name: string;
  points: number;
  participation: number;
};

function App() {
  const [studentList, setStudentList] = useState(data.studentlist);
  const [newStudent, setNewStudent] = useState<string>("");

  function handleAddStudent(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log({ newStudent });

    const newStudentData: Student = {
      id: crypto.randomUUID(),
      name: newStudent.trim(),
      points: 0,
      participation: 0,
    };

    setStudentList((prevList) => [...prevList, newStudentData]);
    setNewStudent("");
  }

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
          <p className="student-register__num-students">
            {studentList.length > 1
              ? studentList.length + " students"
              : "1 student"}
          </p>
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
          <form className="add-students" onSubmit={handleAddStudent}>
            <label htmlFor="student name">Student name</label>
            <input
              type="text"
              placeholder="Bob"
              value={newStudent}
              onChange={(e) => setNewStudent(e.target.value)}
            />
            <button className="student-list__add">Add Student</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default App;
