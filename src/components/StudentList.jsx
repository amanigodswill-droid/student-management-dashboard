import StudentCard from "./StudentCard";

function StudentList({
  students,
  onDelete,
  onToggleStatus,
}) {
  if (students.length === 0) {
    return <h2>No students found.</h2>;
  }

  return (
    <div className="student-list">
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          onDelete={onDelete}
          onToggleStatus={onToggleStatus}
        />
      ))}
    </div>
  );
}

export default StudentList;