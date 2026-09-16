import { useState } from "react";

interface Student {
  id: string;
  name: string;
  points: number;
  participation: number;
  profileColor: string;
}

interface RegisterProps {
  studentList: Student[];
  setStudentList: React.Dispatch<React.SetStateAction<Student[]>>;
  newStudent: string;
  setNewStudent: React.Dispatch<React.SetStateAction<string>>;
}

export function Register({
  studentList,
  setStudentList,
  newStudent,
  setNewStudent,
}: RegisterProps) {
  function handleAddStudent(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const profileColors = [
      "profilePink",
      "profilePurple",
      "profileTeal",
      "profileSky",
      "profileOrange",
      "profileGreen",
      "profileIndigo",
      "profileRed",
      "profileCyan",
      "profileAmber",
      "profileViolet",
      "profileRose",
    ];

    const randomIndex = Math.floor(Math.random() * profileColors.length);
    const randomColor = profileColors[randomIndex];
    const capitilzedName =
      newStudent.charAt(0).toUpperCase() + newStudent.slice(1);

    const newStudentData: Student = {
      id: crypto.randomUUID(),
      name: capitilzedName.trim(),
      points: 0,
      participation: 0,
      profileColor: randomColor,
    };

    setStudentList((prevList) => [...prevList, newStudentData]);
    setNewStudent("");
  }

  const sortedStudents = [...studentList].sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  function handleChangeFilter(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedFilterVal(e.target.value);
  }

  function runComparison(num: number, name: string) {
    const emptyCircles = Math.max(0, 10 - num);
    if (emptyCircles === 0) {
      console.log(`${name} has no empty circles`);
    } else {
      console.log(`${name} has ${emptyCircles} circles empty`);
    }
    return emptyCircles;
  }

  function incrementPoint(targetStudent: Student) {
    setStudentList((prev) =>
      prev.map((studentCurrent) =>
        studentCurrent.id === targetStudent.id
          ? { ...studentCurrent, points: studentCurrent.points + 1 }
          : studentCurrent,
      ),
    );
  }

  function incrementParticipation(targetStudent: Student) {
    setStudentList((prev) =>
      prev.map((studentCurrent) =>
        studentCurrent.id === targetStudent.id
          ? {
              ...studentCurrent,
              participation: studentCurrent.participation + 1,
            }
          : studentCurrent,
      ),
    );
  }

  const [selectedFilterVal, setSelectedFilterVal] = useState<string>("");
  return (
    <div className="student-register">
      <p className="student-register__heading">Student List</p>
      <p className="student-register__num-students">
        {studentList.length > 1
          ? studentList.length + " students"
          : "1 student"}
      </p>
      <select value={selectedFilterVal} onChange={handleChangeFilter}>
        <option value="name">name</option>
        <option value="points">points</option>
        <option value="participation">participation</option>
      </select>
      <p>{`${selectedFilterVal} selected`}</p>
      <div className="student-register__names-list">
        <table>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Points</th>
              <th scope="col">Participation</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedStudents.map((student, idx) => {
              const participationNum = student.participation;
              const emptyCircles = runComparison(
                participationNum,
                student.name,
              );

              return (
                <tr key={student.id}>
                  <td className="student-register__index-cell">
                    <p className="index">{idx + 1}</p>
                  </td>
                  <th scope="row" className="student-register__row-name">
                    <span
                      className={`student-register__first-letter ${student.profileColor}`}
                    >
                      {student.name.charAt(0)}
                    </span>
                    {student.name}
                  </th>
                  <td className="student-register__points-cell">
                    {student.points}
                  </td>
                  <td className="student-register__participation-cell">
                    <div className="participation-circles">
                      {Array.from({
                        length: participationNum > 10 ? 10 : participationNum,
                      }).map((_, idx) => (
                        <div
                          key={idx}
                          className={
                            participationNum <= 3
                              ? "circle circle--low"
                              : participationNum <= 6
                                ? "circle circle--medium"
                                : "circle circle--high"
                          }
                        />
                      ))}
                    </div>
                    <div className="participation-circles">
                      {Array.from({
                        length: emptyCircles,
                      }).map((_, idx) => (
                        <div key={idx} className="circle circle--empty"></div>
                      ))}
                    </div>
                  </td>

                  <td>
                    <button
                      className="actions__plus-point"
                      onClick={() => incrementPoint(student)}
                    >
                      +1
                    </button>
                    <button
                      className="actions__plus-participation"
                      onClick={() => incrementParticipation(student)}
                    >
                      + P
                    </button>
                    <button className="actions__edit-student">...</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <form className="add-students" onSubmit={handleAddStudent}>
        <label htmlFor="student name"></label>
        <input
          type="text"
          placeholder="Bob"
          value={newStudent}
          onChange={(e) => setNewStudent(e.target.value)}
        />
        <button className="student-list__add">Add Student</button>
      </form>
    </div>
  );
}
