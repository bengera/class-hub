import type { Student } from "../../types/student.ts";

interface ModalProps {
  handleEditName: (e: React.FormEvent<HTMLFormElement>) => void;
  handleDeleteStudent: (id: string) => void;
  setNewName: React.Dispatch<React.SetStateAction<string>>;
  setIsEditStudentModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  student: Student;
  newName: string;
}

export function EditStudentModal({
  handleEditName,
  handleDeleteStudent,
  setNewName,
  setIsEditStudentModalOpen,
  student,
  newName,
}: ModalProps) {
  return (
    <div className="modal edit-student-modal">
      <h2>{student.name}</h2>
      <form onSubmit={handleEditName}>
        <label htmlFor="student">Edit name:</label>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />

        <button type="submit">Save changes</button>
        <button type="button" onClick={() => handleDeleteStudent(student.id)}>
          Delete student
        </button>
        <button
          className="student-modal__btn-close"
          type="button"
          onClick={() => setIsEditStudentModalOpen(false)}
        >
          ✖
        </button>
      </form>
    </div>
  );
}
