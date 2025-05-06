import Navbar from "../components/NavBar";

export default function About() {
  return (
    <section>
      <Navbar />
      <div className="bg-white text-gray-800">
        {/* Hero Section */}
        <section className="relative bg-red-600 text-white py-20 px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                About BloodCare
              </h1>
              <p className="text-lg leading-relaxed">
                We are dedicated to saving lives by connecting donors with those
                in urgent need through technology and compassion.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1615461066159-fea0960485d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymxvb2QlMjBkb25hdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
                alt="Blood Donation"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="bg-gray-100 py-16">
          <div className="max-w-6xl mx-auto text-center grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h2 className="text-4xl font-bold text-red-600">5,000+</h2>
              <p className="text-lg font-medium">Donors Registered</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-red-600">12,000+</h2>
              <p className="text-lg font-medium">Units of Blood Delivered</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-red-600">100+</h2>
              <p className="text-lg font-medium">Partner Hospitals</p>
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="max-w-5xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold text-red-600 mb-4">Who We Are</h2>
          <p className="text-lg mb-6">
            LifeFlow is a smart and secure platform designed to make the blood
            donation and transfusion process simple, transparent, and effective.
            Whether you're a patient, a doctor, or a donor, our system connects
            you instantly with what you need.
          </p>

          <h3 className="text-2xl font-semibold mb-2">🌟 Our Services</h3>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Real-time donor-patient matching</li>
            <li>Secure appointment scheduling for donors</li>
            <li>Live blood inventory monitoring</li>
            <li>Data privacy and transparency</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-2">❤️ Our Vision</h3>
          <p className="text-lg mb-6">
            We dream of a future where no one suffers due to a lack of blood
            availability. Our goal is to reduce waiting times, increase donor
            turnout, and build a life-saving network powered by people and
            technology.
          </p>

          <h3 className="text-2xl font-semibold mb-2">🤝 Join the Mission</h3>
          <p className="text-lg">
            Your small act of kindness can save lives. Register as a donor,
            spread the word, or partner with us today.
          </p>
        </section>

        {/* Call to Action */}
        <section className="bg-red-600 text-white py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Become a Life Saver Today</h2>
          <p className="text-lg mb-6">
            Sign up as a donor and make a difference now.
          </p>
          <a
            href="./donor-form"
            className="bg-white text-red-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Donate Now
          </a>
        </section>
      </div>
    </section>
  );
}

import React from "react";
