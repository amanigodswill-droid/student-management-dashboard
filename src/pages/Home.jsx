import DashboardStats from "../components/DashboardStats";

function Home({ students }) {
  return (
    <div className="container">
      <h1>Student Management Dashboard</h1>

      <p className="welcome-text">
        Welcome to the Student Management Dashboard. This application
        allows you to add, edit, delete, search and manage students
        efficiently.
      </p>

      <DashboardStats students={students} />

      <div className="about">
        <h2>Project Features</h2>

        <ul>
          <li>✔ View all students</li>
          <li>✔ Add new students</li>
          <li>✔ Edit student information</li>
          <li>✔ Delete students</li>
          <li>✔ Search students by name</li>
          <li>✔ Filter students by status</li>
          <li>✔ Toggle Active/Inactive status</li>
          <li>✔ Save data using Local Storage</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;