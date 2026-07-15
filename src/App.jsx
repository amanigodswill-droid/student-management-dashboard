import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Students from "./pages/Students";
import AddStudent from "./pages/AddStudents";
import EditStudent from "./pages/EditStudent";
import About from "./pages/About";

import "./App.css";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const savedStudents = JSON.parse(localStorage.getItem("students"));

    if (savedStudents) {
      setStudents(savedStudents);
    } else {
      const sampleStudents = [
        {
          id: 1,
          name: "John Doe",
          age: 20,
          course: "Computer Science",
          email: "john@gmail.com",
          status: "Active",
        },
        {
          id: 2,
          name: "Mary Wanjiku",
          age: 21,
          course: "Information Technology",
          email: "mary@gmail.com",
          status: "Inactive",
        },
        
        { id: 3,
            name:"Jane Nyambura",
            age:22,
            course:"Software Engineering",
            email:"nyambujane564.com",
            status: "Active"
          },
      ];

      setStudents(sampleStudents);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home students={students} />} />

          <Route
            path="/students"
            element={
              <Students
                students={students}
                setStudents={setStudents}
              />
            }
          />

          <Route
            path="/add"
            element={
              <AddStudent
                students={students}
                setStudents={setStudents}
              />
            }
          />

          <Route
            path="/edit/:id"
            element={
              <EditStudent
                students={students}
                setStudents={setStudents}
              />
            }
          />

          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
