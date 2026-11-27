interface StudentModalProps {
  handleAddStudent: (e: React.SubmitEvent<HTMLFormElement>) => void;
  newStudent: string;
  setNewStudent: React.Dispatch<React.SetStateAction<string>>;
  setIsNewStudentModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function AddStudentModal({
  handleAddStudent,
  newStudent,
  setNewStudent,
  setIsNewStudentModalOpen,
}: StudentModalProps) {
  return (
    <div className="modal new-student-modal">
      <h2>Add New Student</h2>
      <form onSubmit={handleAddStudent}>
        <label htmlFor="student">Full name:</label>
        <input
          type="text"
          value={newStudent}
          onChange={(e) => setNewStudent(e.target.value)}
        />

        <button>Add Student</button>
        <button
          className="student-modal__btn-close"
          onClick={() => setIsNewStudentModalOpen(false)}
        >
          ✖
        </button>
      </form>
    </div>
  );
}
