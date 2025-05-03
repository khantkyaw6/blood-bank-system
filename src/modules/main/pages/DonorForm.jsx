import React from "react";
import { useForm } from "react-hook-form";
import "../style/main.css";

import { TextInput, SelectInput } from "../components/FormElements";

const InputField = ({
  title = "Full Name",
  register,
  name,
  type = "text",
  placeholder,
  required,
  defaultValue,
  errors,
}) => (
  <div>
    <input
      {...register(name, { required })}
      type={type}
      placeholder={placeholder}
      defaultValue={defaultValue}
      className="input"
    />
    {errors?.[name] && (
      <p className="text-red-500 text-sm">
        {errors[name].message || "This field is required."}
      </p>
    )}
  </div>
);

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
    <section className="md:pt-10 md:pb-10 bg-linear-to-br/oklab from-white to-red-200">
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-red-600 mb-6">
          Donor Registration Form
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
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
                name="nationalId"
                title="National ID"
                placeholder="10/MDN(N)123456"
                errors={errors}
                defaultValue="123456"
              />
              <TextInput
                register={register}
                name="contact"
                title="Contact Number"
                placeholder="09987654321"
                errors={errors}
              />
              <TextInput
                register={register}
                name="email"
                title="Full Name"
                type="email"
                placeholder="alice@gmail.com"
                errors={errors}
              />
              <textarea
                {...register("address", { required: true })}
                placeholder="Address"
                className="input col-span-2"
                defaultValue="123 Main St, City, Country"
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Donation Info</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <SelectInput
                register={register}
                name="bloodGroup"
                title="Blood Group"
                placeholder="Blood Group"
                options={["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]}
                errors={errors}
              />
              <SelectInput
                register={register}
                name="donationTime"
                title="Preferred Donation Time"
                placeholder="Preferred Time"
                options={["Morning", "Afternoon", "Evening"]}
                errors={errors}
              />
              <TextInput
                register={register}
                name="lastDonation"
                title="Last Donation Date"
                type="date"
                errors={errors}
              />
              <label className="flex items-center gap-2">
                <input type="checkbox" {...register("willingAgain")} />
                Willing to donate again?
              </label>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Health Screening</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <SelectInput
                register={register}
                name="chronicIllness"
                title="Chronic Illness"
                placeholder={"Chronic Illness"}
                options={["Yes", "No"]}
                errors={errors}
              />
              <SelectInput
                register={register}
                name="medication"
                title="Medication"
                placeholder={"Taking Medication"}
                errors={errors}
                options={["Yes", "No"]}
              />
              <SelectInput
                register={register}
                name="recentSurgery"
                title="Recent Surgery"
                placeholder={"Recent Surgery"}
                errors={errors}
                options={["Yes", "No"]}
              />
              <SelectInput
                register={register}
                name="feelingWell"
                title="Health Status"
                placeholder={"Feeling Well"}
                errors={errors}
                options={["Yes", "No"]}
              />
              <TextInput
                register={register}
                name="weight"
                title="Weight (kg)"
                type="number"
                errors={errors}
              />
              <label className="flex items-center gap-2 col-span-2">
                <input
                  type="checkbox"
                  {...register("consent", { required: true })}
                />
                I consent to donate blood.
              </label>
              {errors.consent && (
                <p className="text-red-500 text-sm col-span-2">
                  You must give consent to proceed.
                </p>
              )}
            </div>
          </div>

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
  );
}
