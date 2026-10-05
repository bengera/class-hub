import { useState } from "react";
import data from "../data.json";
import "./scss/main.scss";
import { Register } from "./components/register";
import type { Student } from "./types/student";

function App() {
  const [studentList, setStudentList] = useState<Student[]>(
    data.studentlist as Student[],
  );
  const [newStudent, setNewStudent] = useState<string>("");

  return (
    <div className="app">
      <main className="dashboard">
        <header className="dashboard__header">
          <div className="class-header__left-content">
            <img className="logo" src="logo2.svg" alt="logo" />
          </div>
          <div className="class-header__right-content">
            <p className="class-header__title">Grade 6: Gerography lesson</p>
            <p className="class__lesson-description">
              Map Skills: Learn how to find specific places on a map using grid
              lines, symbols, and directions.
            </p>
            <p className="class-header__class-code">Class code: AEX-0234</p>
          </div>
        </header>
        <Register
          studentList={studentList}
          setStudentList={setStudentList}
          newStudent={newStudent}
          setNewStudent={setNewStudent}
        />
      </main>
    </div>
  );
}

export default App;
