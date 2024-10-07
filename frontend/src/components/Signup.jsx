import React, { useState } from "react";
import api from "../services/api";

const Signup = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage("");
    try {
      const response = await api.post("/user/signup", formData);
      localStorage.setItem("token", response.data.token);
      setMessage(response.data.mesage);
    } catch (error) {
      console.log(error.response);
      if (error.response) {
        // If there's a response from the backend, use its message
        setMessage(error.response.data.message); // Show error message from backend
      } else {
        // Otherwise, show a generic error
        setMessage("Signup failed. Please try again.");
      }
    }
  }

  return (
    <div className="bg-sky-100 flex justify-center items-center h-screen">
      <div className="w-1/2 h-screen hidden lg:block">
        <img
          src="https://img.freepik.com/fotos-premium/imagen-fondo_910766-187.jpg?w=826"
          alt="Placeholder Image"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <h1 className="text-2xl font-semibold mb-4">SignUp</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 bg-sky-100">
            <label htmlFor="username" className="block text-gray-600">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              onChange={(e) => {
                e.preventDefault();
                setFormData({ ...formData, username: e.target.value });
              }}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-800">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              onChange={(e) => {
                e.preventDefault();
                setFormData({ ...formData, password: e.target.value });
              }}
            />
          </div>

          {/* <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="text-red-500"
            />
            <label for="remember" className="text-green-900 ml-2">
              Remember Me
            </label>
          </div> */}

          <div className="mb-6 text-blue-500">
            <a href="#" className="hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="bg-red-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-6 text-green-500 text-center">
          <a href="#" className="hover:underline">
            Already have a account,Login here
          </a>
        </div>
      </div>

      {message && <p>{message}</p>}
      {/* <p>
        {formData.username}
        {formData.password}
      </p> */}
    </div>
  );
};

export default Signup;
