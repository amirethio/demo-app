import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={styles.container}>
      <h1>Welcome</h1>
      <p>Select where you want to go:</p>
      <div style={styles.links}>
        <Link to="/login" style={styles.button}>
          Login
        </Link>
        <Link to="/add-employee" style={styles.button}>
          Add Employee
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
    fontFamily: "Segoe UI, sans-serif",
  },
  links: {
    marginTop: "30px",
    display: "flex",
    gap: "20px",
    justifyContent: "center",
  },
  button: {
    textDecoration: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "6px",
    fontSize: "1rem",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
  },
};

export default Home;
