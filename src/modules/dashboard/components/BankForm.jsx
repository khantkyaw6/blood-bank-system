import { useForm } from "react-hook-form";
import { TextInput, SelectInput } from "@/components/ui/custom/FormElements";

const statusOptions = ["approved", "pending", "rejected"];

export function BankForm({ onSubmit, defaultValues = {}, isEdit = false }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-zinc-50 p-8 rounded-2xl shadow-md max-w-2xl w-full mx-auto space-y-6"
    >
      <h2 className="text-2xl text-center font-semibold text-gray-800 mb-4">
        {isEdit ? "Edit Bank Details" : "Create New Bank"}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TextInput
          register={register}
          name="title"
          title="Bank Name"
          placeholder="Enter bank name"
          errors={errors}
        />
        <TextInput
          register={register}
          name="email"
          title="Email"
          placeholder="Enter email"
          errors={errors}
          type="email"
        />
        <TextInput
          register={register}
          name="password"
          title="Password"
          placeholder="Enter password"
          errors={errors}
          type="password"
        />
        <TextInput
          register={register}
          name="phone"
          title="Phone"
          placeholder="+1 212-555-0101"
          errors={errors}
        />
        <TextInput
          register={register}
          name="address"
          title="Address"
          placeholder="123 Elm Street"
          errors={errors}
        />
        <TextInput
          register={register}
          name="city"
          title="City"
          placeholder="New York"
          errors={errors}
        />
      </div>

      <TextInput
        register={register}
        name="description"
        title="Description"
        placeholder="Short description about the bank"
        errors={errors}
      />

      <SelectInput
        register={register}
        name="status"
        title="Status"
        options={statusOptions}
        placeholder="Choose status"
        errors={errors}
      />

      <div className="text-center pt-4">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300"
        >
          {isEdit ? "Update Bank" : "Create Bank"}
        </button>
      </div>
    </form>
  );
}
