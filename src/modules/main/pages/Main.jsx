import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaHandHoldingMedical, FaTint } from "react-icons/fa";

const bloodData = [
  {
    type: "A+",
    donateTo: "A+, AB+",
    receiveFrom: "A+, A-, O+, O-",
    population: "36%",
  },
  {
    type: "A-",
    donateTo: "A+, A-, AB+, AB-",
    receiveFrom: "A-, O-",
    population: "6%",
  },
  {
    type: "B+",
    donateTo: "B+, AB+",
    receiveFrom: "B+, B-, O+, O-",
    population: "9%",
  },
  {
    type: "B-",
    donateTo: "B+, B-, AB+, AB-",
    receiveFrom: "B-, O-",
    population: "2%",
  },
  {
    type: "AB+",
    donateTo: "AB+",
    receiveFrom: "All blood types",
    population: "3%",
  },
  {
    type: "AB-",
    donateTo: "AB+, AB-",
    receiveFrom: "AB-, A-, B-, O-",
    population: "1%",
  },
  {
    type: "O+",
    donateTo: "O+, A+, B+, AB+",
    receiveFrom: "O+, O-",
    population: "37%",
  },
  {
    type: "O-",
    donateTo: "All blood types",
    receiveFrom: "O-",
    population: "7%",
  },
];

const BloodCard = ({ type, donateTo, receiveFrom, population }) => (
  <div className="bg-white p-6 rounded-xl shadow-md text-center border border-gray-100 transform transition duration-500 hover:scale-105 hover:shadow-xl hover:bg-red-400 cursor-pointer">
    <div className="w-20 h-20 rounded-full bg-red-100 text-red-600 font-bold text-2xl flex items-center justify-center mx-auto mb-4">
      {type}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-gray-800">{type} Blood</h3>
    <p className="text-gray-600 mb-2">Can donate to: {donateTo}</p>
    <p className="text-gray-600 mb-2">Can receive from: {receiveFrom}</p>
    <span className="text-sm bg-red-200 text-red-700 px-3 py-1 rounded-full">
      {population} of population
    </span>
  </div>
);

export default function Main() {
  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "16px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "24px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "12px",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-red-50 to-red-100">
      <Navbar />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8 py-10 px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="flex-1 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-700 mb-4 sm:mb-6 leading-tight">
            Save Lives. <br className="hidden md:inline" /> Be a Lifesaver Today
          </h1>
          <p className="max-w-xl mx-auto md:mx-0 text-base sm:text-lg text-gray-800 mb-6">
            “We rise by lifting others — and through blood donation, you rise to
            become a silent hero to someone you may never meet.”
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <Button href="/request-form" primary className="w-full sm:w-auto">
              <FaHandHoldingMedical className="text-white text-2xl inline mr-2" />
              Request Blood
            </Button>
            <Button href="/donor-form" className="w-full sm:w-auto">
              <FaTint className="text-red-700 text-2xl inline mr-2" />
              Book a Donation
            </Button>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-4 bg-red-200 rounded-2xl blur-lg opacity-30"></div>
            <img
              src="HomeImage.jpg"
              alt="Blood Donation Illustration"
              className="relative w-full rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Blood Type Section */}
      <section id="bloodtype" className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              Blood Type <span className="text-red-600">Compatibility</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Learn about different blood types and who you can help
            </p>
          </div>

          {/* Mobile & Tablet Slider */}
          <div className="lg:hidden px-2 sm:px-0">
            <Slider {...sliderSettings}>
              {bloodData.map((item, index) => (
                <div key={index} className="px-1.5 sm:px-2 py-2">
                  <BloodCard {...item} />
                </div>
              ))}
            </Slider>
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {bloodData.map((item, index) => (
              <BloodCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
