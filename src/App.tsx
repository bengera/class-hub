import { useState } from "react";
import data from "../data.json";
// STYLES
import "./scss/main.scss";
// TYPES
import type { Student } from "./types/student";
// COMPONENTS
import { Register } from "./components/register";
import { Header } from "./components/header";

function App() {
  const [studentList, setStudentList] = useState<Student[]>(
    data.studentlist as Student[],
  );
  const [newStudent, setNewStudent] = useState<string>("");

  return (
    <div className="app">
      <main className="dashboard">
        <Header />
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
