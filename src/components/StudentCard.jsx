import { Link } from "react-router-dom";

function StudentCard({ student, onDelete, onToggleStatus }) {
  return (
    <div className="student-card">
      <h2>{student.name}</h2>

      <p><strong>Age:</strong> {student.age}</p>
      <p><strong>Course:</strong> {student.course}</p>
      <p><strong>Email:</strong> {student.email}</p>

      <p>
        <strong>Status:</strong>{" "}
        <span
          className={
            student.status === "Active"
              ? "active-status"
              : "inactive-status"
          }
        >
          {student.status}
        </span>
      </p>

      <div className="button-group">
        <Link
          to={`/edit/${student.id}`}
          className="edit-btn"
        >
          Edit
        </Link>

        <button
          className="delete-btn"
          onClick={() => onDelete(student.id)}
        >
          Delete
        </button>

        <button
          className="toggle-btn"
          onClick={() => onToggleStatus(student.id)}
        >
          Toggle Status
        </button>
      </div>
    </div>
  );
}

export default StudentCard;