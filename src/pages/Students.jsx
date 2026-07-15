import { useState } from "react";
import StudentList from "../components/StudentList";
import SearchBar from "../components/SearchBar";
import FilterButtons from "../components/FilterButtons";
import DashboardStats from "../components/DashboardStats";

function Students({ students, setStudents }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  function deleteStudent(id) {
    setStudents(students.filter((student) => student.id !== id));
  }

  function toggleStatus(id) {
    setStudents(
      students.map((student) =>
        student.id === id
          ? {
              ...student,
              status:
                student.status === "Active"
                  ? "Inactive"
                  : "Active",
            }
          : student
      )
    );
  }

  const searchedStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  const filteredStudents =
    filter === "All"
      ? searchedStudents
      : searchedStudents.filter(
          (student) => student.status === filter
        );

  return (
    <div className="container">
      <h1>Students</h1>

      <DashboardStats students={students} />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <FilterButtons
        filter={filter}
        setFilter={setFilter}
      />

      <StudentList
        students={filteredStudents}
        onDelete={deleteStudent}
        onToggleStatus={toggleStatus}
      />
    </div>
  );
}

export default Students;