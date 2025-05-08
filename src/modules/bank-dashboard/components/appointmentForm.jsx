import { useForm } from "react-hook-form";
import { TextInput, SelectInput } from "@/components/ui/custom/FormElements";

const statusOptions = ["approved", "pending", "rejected"];

export function AppointmentForm({
  onSubmit,
  defaultValues = {},
  isEdit = false,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  // Appointment => Donar Id / Blood Request Id / Date / Bank
  // { donorId: "D020", requestId: "BR020", date: "2025-05-27", bank: "National Blood Center" }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-zinc-50 p-8 rounded-2xl shadow-md max-w-2xl w-full mx-auto space-y-6"
    >
      <h2 className="text-2xl text-center font-semibold text-gray-800 mb-4">
        {isEdit ? "Edit Bank Details" : "Create New Bank"}
      </h2>

      {/* <div className="grid grid-cols-1 gap-6"> */}
      <TextInput
        register={register}
        name="donorId"
        title="Donor ID"
        placeholder="Enter donor Id"
        errors={errors}
      />
      <TextInput
        register={register}
        name="requestId"
        title="Blood Request Id"
        placeholder="Enter Blood Request Id"
        errors={errors}
      />
      <TextInput
        register={register}
        name="date"
        title="Date"
        placeholder="Enter Date"
        errors={errors}
        type="date"
      />
      <TextInput
        register={register}
        name="bank"
        title="Bank"
        placeholder="Enter Bank Name"
        errors={errors}
      />
      {/* </div> */}

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
