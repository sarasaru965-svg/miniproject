import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  function handleSubmit(e) {
    e.preventDefault();

    if (name === "" || email === "" || password === "") {
      setMessage("Please fill all the fields");
    } else if (password.length < 6) {
      setMessage("Password must have at least 6 character");
    } else {
      setMessage("User" + name + "    registered successfully!   ");
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br></br>
        Email:
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <br></br>
        Password:
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
        <br></br>
        <button type="Submit">Registration</button>
      </form>
      <h3>{message}</h3>
    </div>
  );
}
export default App;
