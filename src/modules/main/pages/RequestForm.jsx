import React from "react";
import { useForm } from "react-hook-form";
import "../style/main.css";

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

  return (
    <section>
      <Navbar />
      <section className="md:pt-10 md:pb-10 bg-linear-to-br/oklab from-white to-red-200">
        <div className="max-w-3xl mx-auto bg-white shadow-xl p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-red-600 mb-6 text-center">
            Blood Request Form
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Requester Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Requester Information
              </h3>
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
                  name="relationship"
                  title="Relationship to Patient (optional)"
                  placeholder="parent, sibling, friend"
                  type="text"
                  required={false}
                />
                <TextInput
                  register={register}
                  name="contact"
                  title="Contact Number"
                  placeholder="09123456789"
                  type="text"
                  errors={errors}
                />
                <TextInput
                  register={register}
                  name="email"
                  title="Email Address (optional)"
                  placeholder="alice@gmail.com"
                  type="email"
                  required={false}
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
            </div>
            {/* Patient Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Patient Information
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <TextInput
                  register={register}
                  name="patientName"
                  title="Patient Name"
                  placeholder="John Doe"
                  type="text"
                  errors={errors}
                />
                <TextInput
                  register={register}
                  name="patientAge"
                  title="Patient Age"
                  placeholder="18"
                  type="number"
                  errors={errors}
                />
                <SelectInput
                  register={register}
                  name="patientGender"
                  title="Patient Gender"
                  placeholder={"Patient Gender"}
                  options={["Male", "Female", "Other"]}
                  errors={errors}
                />
                <TextInput
                  register={register}
                  name="medicalCondition"
                  title="Medical Condition (optional)"
                  placeholder=""
                  type="text"
                  required={false}
                />
              </div>
            </div>
            {/* Hospital Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Hospital & Doctor Info
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <TextInput
                  register={register}
                  name="hospitalName"
                  title="Hospital Name"
                  placeholder="City Hospital"
                  type="text"
                  errors={errors}
                />
                <TextInput
                  register={register}
                  name="hospitalAddress"
                  title="Hospital Address"
                  placeholder="123 Main St, City"
                  type="text"
                  errors={errors}
                />
                <TextInput
                  register={register}
                  name="doctorName"
                  title="Doctor Name (optional)"
                  placeholder="Dr. Smith"
                  type="text"
                  required={false}
                />
                <TextInput
                  register={register}
                  name="doctorContact"
                  title="Doctor Contact (optional)"
                  placeholder="09123456789"
                  type="text"
                  required={false}
                />
              </div>
            </div>
            {/* Blood Details */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Blood Requirement</h3>
              <div className="grid md:grid-cols-2 gap-4">
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
                  name="units"
                  title="Units Required"
                  placeholder="1"
                  type="text"
                  errors={errors}
                />
                <SelectInput
                  register={register}
                  name="urgency"
                  title="Urgency Level"
                  placeholder="Urgency Level"
                  options={["Emergency", "Within 24 hrs", "Flexible"]}
                  errors={errors}
                />
                <TextInput
                  register={register}
                  name="requiredDate"
                  title="Required Date"
                  type="date"
                  errors={errors}
                />
                <SelectInput
                  register={register}
                  name="component"
                  title="Blood Component"
                  placeholder="Blood Component"
                  options={["Whole Blood", "Plasma", "Platelets"]}
                  errors={errors}
                />
              </div>
            </div>
            {/* Consent */}
            <div>
              <div className="flex items-center gap-2 md:col-span-2">
                <input
                  type="checkbox"
                  {...register("consent", { required: true })}
                />
                <span className="text-md">
                  I confirm the above information is accurate.
                </span>
              </div>
              {errors.consent && (
                <p className="text-red-500 text-sm">Consent is required.</p>
              )}
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
