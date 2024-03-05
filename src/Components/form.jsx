"use client";

import { useRouter } from "next/navigation";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Login() {
  const Router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "test@gmail.com",
    password: "200",
  });
  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };
  const handleForm = async (e) => {
    e.preventDefault();

    // Form validation
    if (
      form.name.trim() === "" ||
      form.email.trim() === "" ||
      form.password.trim() === ""
    ) {
      toast.error("Please fill in all fields");
      return;
    }

    // Email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    // Password length validation
    if (form.password.length < 3) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    const config = { method: "POST", body: JSON.stringify(form) };
    try {
      const response = await fetch("/api/login", config);
      const json = await response.json();

      if (json["status"] == true) {
        toast.success(json["message"]);
        Router.push("/private");
      } else {
        setForm({
          name: "",
          email: "",
          password: "",
        });
        toast.error(json["message"]);
      }
    } catch (error) {
      console.error("Error occurred: ", error);
    }
  };

  return (
    <>
      {/* component */}
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <form
            onSubmit={handleForm}
            className="bg-white px-6 py-8 rounded shadow-md text-black w-full min-w-[400px]"
          >
            <h1 className="mb-8 text-3xl text-center">Log In</h1>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="fullname"
              value={form.name}
              placeholder="Full Name"
              onChange={(e) => handleChange("name", e.target.value)}
            />
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="Email"
            />
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              value={form.password}
              onChange={(e) => handleChange("password", e.target.value)}
              placeholder="Password"
            />

            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green  bg-neutral-900 text-neutral-200 focus:outline-none my-1"
            >
              Log In
            </button>
          </form>
          <Toaster position="top-center" reverseOrder={false} />
        </div>
      </div>
    </>
  );
}
