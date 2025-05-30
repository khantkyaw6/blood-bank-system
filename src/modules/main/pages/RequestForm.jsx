import { useState } from "react";
import { useForm } from "react-hook-form";

import { TextInput, SelectInput } from "@/components/ui/custom/FormElements";
import Navbar from "../components/NavBar";
import BankSelectorModal from "../components/BankSelectorModal";

export default function BloodRequestForm() {
  const [bankModalOpen, setbankModalOpen] = useState(false);
  const [bank, setBank] = useState(null);

  // console.log(bank);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Blood Request Data:", data);
    alert("Blood request submitted successfully!");
  };

  const handleBankSelect = (bank) => {
    setBank(bank);
    setValue("bank", bank, { shouldValidate: true });
    setbankModalOpen(false);
  };

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
                {/* Bank Selector */}
                <div>
                  <label className="block text-xs text-gray-500 mb-1 ml-1">
                    Bank
                  </label>
                  <div className="flex rounded-lg border border-gray-300 overflow-hidden shadow-sm w-full">
                    {/* Left: Display selected bank info (75%) */}
                    <div className="flex-4 bg-gray-100 px-4 py-2 text-sm text-gray-700 flex items-center">
                      {bank ? (
                        <div className="flex items-center space-x-4 text-gray-600">
                          <p className="font-medium">{bank.title}</p>
                        </div>
                      ) : (
                        <span className="text-gray-400 italic">
                          No bank selected
                        </span>
                      )}
                    </div>

                    {/* Right: Button to open modal (25%) */}
                    <button
                      type="button"
                      onClick={() => setbankModalOpen(true)}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm font-medium whitespace-nowrap rounded-lg cursor-pointer"
                    >
                      {bank ? "Change" : "Select"}
                    </button>
                  </div>

                  {/* Hidden input for form submission */}
                  <input
                    type="hidden"
                    value={bank?._id ?? ""}
                    {...register("bank", { required: true })}
                  />
                  {errors.donor && (
                    <p className="text-sm text-red-600 mt-1">
                      Bank is required
                    </p>
                  )}
                </div>
              </div>

              <div className="md:col-span-2">
                <p className="text-xs text-gray-500 mb-1 ml-1">Address</p>
                <textarea
                  {...register("address", {
                    required: "Address is required",
                  })}
                  placeholder="123 Main St, City, Country"
                  className="input text-black"
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
        {/* Donor Modal */}
        <BankSelectorModal
          isOpen={bankModalOpen}
          onClose={() => setbankModalOpen(false)}
          onSelect={handleBankSelect}
        />
      </section>
    </section>
  );
}
