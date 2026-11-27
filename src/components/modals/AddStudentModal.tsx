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
  function capitlizeName(name: string) {
    return name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  return (
    <div className="modal new-student-modal">
      <h2>Add New Student</h2>
      <form onSubmit={handleAddStudent}>
        <label htmlFor="student">Full name:</label>
        <input
          type="text"
          value={newStudent}
          onChange={(e) => {
            console.log("Event fired");
            const formattedName = capitlizeName(e.target.value);
            console.log(formattedName);
            setNewStudent(formattedName);
          }}
        />

        <button>Add Student</button>
        <button
          className="student-modal__btn-close"
          onClick={() => setIsNewStudentModalOpen(false)}
          type="button"
        >
          ✖
        </button>
      </form>
    </div>
  );
}
