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
            <h1 className="class-header__title">
              Project: Building an environmentally friendly museum
            </h1>
            <p className="class-header__class-code">Class code: AEX-0234</p>
          </div>
          <div className="class-header__right-content">
            <div className="dashboard__header-actions"></div>
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
