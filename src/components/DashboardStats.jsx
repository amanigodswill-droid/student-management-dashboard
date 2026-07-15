function DashboardStats({ students }) {
  const totalStudents = students.length;

  const activeStudents = students.filter(
    (student) => student.status === "Active"
  ).length;

  const inactiveStudents = students.filter(
    (student) => student.status === "Inactive"
  ).length;

  return (
    <div className="dashboard">
      <div className="dashboard-card">
        <h3>Total Students</h3>
        <p>{totalStudents}</p>
      </div>

      <div className="dashboard-card">
        <h3>Active Students</h3>
        <p>{activeStudents}</p>
      </div>

      <div className="dashboard-card">
        <h3>Inactive Students</h3>
        <p>{inactiveStudents}</p>
      </div>
    </div>
  );
}

export default DashboardStats;