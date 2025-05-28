import React from "react";
import { useForm } from "react-hook-form";

import { TextInput, SelectInput } from "@/components/ui/custom/FormElements";
import Navbar from "../components/NavBar";

export default function BloodRequestForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Blood Request Data:", data);
    alert("Blood request submitted successfully!");
  };

  //   Blood Request => name / phone / email / address / age / blood type / unit / status

  return (
    <section className="min-h-screen flex flex-col bg-gradient-to-br from-white to-red-200">
      <Navbar />
      {/* <section className="md:pt-10 md:pb-10 bg-linear-to-br/oklab from-white to-red-200">
           <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg"> */}
      <section className="flex-grow flex items-center justify-center py-10 ">
        <div className="max-w-3xl w-full p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-red-600 mb-6 text-center">
            Blood Request Form
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Requester Info */}
            <div className="grid md:grid-cols-2 gap-4">
              <TextInput
                register={register}
                name="name"
                title="Full Name"
                placeholder="Alice Doe"
                type="text"
                errors={errors}
                forceLight
              />
              <TextInput
                register={register}
                name="age"
                title="Age"
                placeholder="18"
                type="number"
                errors={errors}
                forceLight
              />
              <TextInput
                register={register}
                name="phone"
                title="Phone Number"
                placeholder="09987654321"
                errors={errors}
                forceLight
              />
              <TextInput
                register={register}
                name="email"
                title="Email Address"
                placeholder="alice@gmail.com"
                type="email"
                forceLight
              />
              <SelectInput
                register={register}
                name="blood_type"
                title="Blood Type"
                placeholder="Blood Type"
                options={["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]}
                errors={errors}
                forceLight
              />
              <TextInput
                register={register}
                name="units"
                title="Units Required"
                placeholder="1"
                type="number"
                errors={errors}
                forceLight
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

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </section>
    </section>
  );
}
