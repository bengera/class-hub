import { useState } from "react";
import type { Student } from "../types/student";

interface ModalProps {
  setStudentList: React.Dispatch<React.SetStateAction<Student[]>>;
  student: Student;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  getFirstTwoLetters: (fullName: string) => string;
}

export function Modal({
  setStudentList,
  student,
  setOpenModal,
  getFirstTwoLetters,
}: ModalProps) {
  const [notes, setNotes] = useState<string>("");
  function saveNote(targetStudent: Student, id: string) {
    console.log(`You are saving a note for ${targetStudent.name}`);

    setStudentList((prev) =>
      prev.map((studentCurrent) =>
        studentCurrent.id === id
          ? { ...studentCurrent, notes: [...studentCurrent.notes, notes] }
          : studentCurrent,
      ),
    );
    setNotes("");
    setOpenModal(false);
  }

  function handleKeyDown(
    e: React.KeyboardEvent<HTMLTextAreaElement>,
    student: Student,
    studentId: string,
  ) {
    console.log("Key pressed");
    if (e.key === "Enter" && e.ctrlKey) {
      e.preventDefault();
      saveNote(student, studentId);
    }
  }

  return (
    <div className="student-modal">
      <p>Observation notes</p>
      <div className="student-modal__info-container">
        <div className="student-modal__profile">
          {" "}
          <span
            className={`student-register__profile-initials ${student.profileColor}`}
          >
            {getFirstTwoLetters(student.name)}
          </span>
        </div>
        <p className="student-modal__name">{student.name}</p>
        {/* <div className="student-modal__support">
                            {student.understanding}
                          </div> */}
      </div>
      <div className="student-modal__all-notes">
        <p>All notes</p>
        <ul className="student-modal__notes-list">
          {student.notes.map((note, idx) => (
            <li key={idx}>{note}</li>
          ))}
        </ul>
      </div>
      <div className="student-modal__note-area">
        <p>Notes {`(${student.notes.length})`}</p>
        <textarea
          className="student-modal__notes-field"
          name="note"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, student, student.id)}
        />
      </div>
      <button
        className="student-modal__btn-cancel"
        onClick={() => setOpenModal(false)}
      >
        Cancel
      </button>
      <button
        className="student-modal__btn-cancel"
        onClick={() => saveNote(student, student.id)}
      >
        Save note
      </button>
    </div>
  );
}
