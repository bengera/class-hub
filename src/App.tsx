import { useState } from "react";
import data from "../data.json";
// STYLES
import "./scss/main.scss";
// TYPES
import type { Student } from "./types/student";
// COMPONENTS
import { Register } from "./components/Register";
import { Header } from "./components/Header";
import { Overview } from "./components/Overview";

function App() {
  const [studentList, setStudentList] = useState<Student[]>(
    data.studentlist as Student[],
  );
  const [newStudent, setNewStudent] = useState<string>("");
  const [overlay, setOverlay] = useState<boolean>(false);

  return (
    <div className="app">
      <div className={overlay === true ? "overlay show" : "overlay"}></div>
      <main className="dashboard">
        <Header />
        <div className="sections">
          <Register
            studentList={studentList}
            setStudentList={setStudentList}
            newStudent={newStudent}
            setNewStudent={setNewStudent}
            setOverlay={setOverlay}
          />
          <Overview />
        </div>
      </main>
    </div>
  );
}

export default App;
