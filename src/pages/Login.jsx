import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseconfig";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegisterClick = () => {
    navigate("/register");
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.log(error.code, error.message);
      alert(`error: ${error.code}`);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 font-sans">
      <form
        className="bg-gray-200 p-8 rounded shadow-md flex flex-col justify-center items-center"
        style={{ width: "60vh", height: "130%" }}
        onSubmit={handleLoginSubmit}
      >
        <h1 className="text-3xl font-bold mb-4">Login</h1>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 border rounded w-full p-3 text-lg"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 border rounded w-full p-3 text-lg"
        />
        <div className="flex justify-between w-full">
          <button
            type="button"
            onClick={handleRegisterClick}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/2"
          >
            Register
          </button>
          <button
            type="submit"
            className="bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/2"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
