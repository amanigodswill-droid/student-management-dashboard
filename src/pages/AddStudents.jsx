import { useNavigate } from "react-router-dom";
import StudentForm from "../components/StudentForm";

function AddStudents({ students, setStudents }) {
  const navigate = useNavigate();

  function addStudent(newStudent) {
    setStudents([...students, newStudent]);
    navigate("/students");
  }

  return (
    <div className="container">
      <h1>Add Student</h1>

      <StudentForm onSubmit={addStudent} />
    </div>
  );
}

export default AddStudents;