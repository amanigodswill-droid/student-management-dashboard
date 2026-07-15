import { useParams, useNavigate } from "react-router-dom";
import StudentForm from "../components/StudentForm";

function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const students = JSON.parse(localStorage.getItem("students")) || [];

  const student = students.find(
    (student) => student.id === Number(id)
  );

  function updateStudent(updatedStudent) {
    const updatedStudents = students.map((student) =>
      student.id === Number(id) ? updatedStudent : student
    );

    localStorage.setItem("students", JSON.stringify(updatedStudents));

    alert("Student updated successfully!");

    navigate("/students");
  }

  if (!student) {
    return <h2>Student not found.</h2>;
  }

  return (
    <div className="container">
      <h1>Edit Student</h1>

      <StudentForm
        initialData={student}
        onSubmit={updateStudent}
      />
    </div>
  );
}

export default EditStudent;