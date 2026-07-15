import { useState } from "react";

function StudentForm({ onSubmit, initialData = {} }) {
  const [name, setName] = useState(initialData.name || "");
  const [age, setAge] = useState(initialData.age || "");
  const [course, setCourse] = useState(initialData.course || "");
  const [email, setEmail] = useState(initialData.email || "");
  const [status, setStatus] = useState(
    initialData.status || "Active"
  );

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !age || !course || !email) {
      alert("Please fill in all fields.");
      return;
    }

    onSubmit({
      id: initialData.id || Date.now(),
      name,
      age,
      course,
      email,
      status,
    });

    setName("");
    setAge("");
    setCourse("");
    setEmail("");
    setStatus("Active");
  }

  return (
    <form
      className="student-form"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) =>
          setAge(e.target.value)
        }
      />

      <input
        type="text"
        placeholder="Course"
        value={course}
        onChange={(e) =>
          setCourse(e.target.value)
        }
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <select
        value={status}
        onChange={(e) =>
          setStatus(e.target.value)
        }
      >
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>

      <button type="submit">
        Save Student
      </button>
    </form>
  );
}

export default StudentForm;