import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseconfig";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, username, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Registration failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 font-sans">
      <form
        className="bg-gray-200 p-8 rounded shadow-md flex flex-col justify-center items-center"
        style={{ width: "60vh", height: "calc(70vh * 1.3)" }}
      >
        <h1 className="text-3xl font-bold mb-4">Register</h1>
        <input
          type="text"
          placeholder="email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mb-4 border rounded w-full p-3 text-lg"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 border rounded w-full p-3 text-lg"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          onClick={handleRegisterSubmit}
        >
          Register
        </button>
        <button
          type="submit"
          className="bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/2"
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Register;
