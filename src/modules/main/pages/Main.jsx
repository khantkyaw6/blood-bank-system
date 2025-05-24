import { useState } from "react";
import Navbar from "../components/NavBar";
import Button from "../components/Button";

export default function Main() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-red-50 to-red-100">
      {/* Navbar */}
      {/* blah blah */}
      <Navbar />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 py-20 px-6 md:px-10">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-red-700 mb-6 leading-tight">
            Save Lives. <br className="hidden md:inline" /> Be a Hero Today.
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Every drop counts. Your blood donation could give someone a second
            chance.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <Button href="/request-form" primary>
              🚑 Request Blood
            </Button>
            <Button href="/donor-form">🩸 Book</Button>
          </div>
        </div>

        <div className="flex-1">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2936/2936740.png"
            alt="Blood Donation Illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
