import React from "react";
import { useForm } from "react-hook-form";
// import "../style/main.css";

import { TextInput, SelectInput } from "@/components/ui/custom/FormElements";
import Navbar from "../components/NavBar";

export default function DonorForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Donor Data:", data);
    alert("Thank you for your donation!");
  };

  return (
    <section>
      <Navbar />
      <section className="md:pt-10 md:pb-10 bg-linear-to-br/oklab from-white to-red-200">
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-red-600 mb-6">
            Donor Registration Form
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* // Donar => name / phone / dob ( date of birth ) / gender / address / blood_type / weight */}
            <div className="grid md:grid-cols-2 gap-4">
              <TextInput
                register={register}
                name="name"
                title="Full Name"
                placeholder="Alice Doe"
                type="text"
                errors={errors}
              />
              <TextInput
                register={register}
                name="dob"
                title="Date of Birth"
                type="date"
                errors={errors}
              />
              <SelectInput
                register={register}
                name="gender"
                title="Gender"
                placeholder="Gender"
                options={["Male", "Female", "Other"]}
                errors={errors}
              />
              <TextInput
                register={register}
                name="phone"
                title="Phone Number"
                placeholder="09987654321"
                errors={errors}
              />
              <SelectInput
                register={register}
                name="blood_type"
                title="Blood Type"
                placeholder="Blood Type"
                options={["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]}
                errors={errors}
              />
              <TextInput
                register={register}
                name="weight"
                title="Weight (kg)"
                type="number"
              />
              <div className="md:col-span-2">
                <p className="text-xs text-gray-500 mb-1 ml-1">Address</p>
                <textarea
                  {...register("address", {
                    required: "Address is required",
                  })}
                  placeholder="123 Main St, City, Country"
                  className="input"
                  // defaultValue="123 Main St, City, Country"
                />
                {errors?.address && (
                  <p className="text-red-500 text-sm ms-2">
                    {errors.address.message}
                  </p>
                )}
              </div>
            </div>
            {/* Submit btn */}
            <div className="text-center mt-6">
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition"
              >
                Submit Form
              </button>
            </div>
          </form>
        </div>
      </section>
    </section>
  );
}
