import React from "react";

export default function Login() {
  return (
    <>
      {/* component */}
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full min-w-[400px]">
            <h1 className="mb-8 text-3xl text-center">Log In</h1>

            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
            />
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
            />

            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green text-white bg-green-800 focus:outline-none my-1"
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
