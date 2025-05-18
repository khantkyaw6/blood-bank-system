import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  TextInput,
  PasswordInput,
  SelectInput,
  BackButton,
} from "@/components/ui/custom/FormElements";

export function BankForm({
  onSubmit,
  defaultValues = { password: "" }, //if I don't pass, if defined as null and result in uncontrolled error
  isEdit = false,
}) {
  const {
    register,
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  // console.log(defaultValues);

  useEffect(() => {
    if (defaultValues) reset({ ...defaultValues });
  }, []);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-zinc-50 p-8 rounded-2xl shadow-md max-w-2xl w-full mx-auto space-y-6"
    >
      <BackButton />
      <h2 className="text-2xl text-center font-semibold text-gray-800 mb-4">
        {isEdit ? "Edit Bank Details" : "Create New Bank"}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input type="hidden" {...register("_id")} value={defaultValues?._id} />

        <TextInput
          register={register}
          name="title"
          title="Bank Name"
          placeholder="National Bank"
          errors={errors}
        />
        <TextInput
          register={register}
          name="email"
          title="Email"
          type="email"
          placeholder="alice@gmail.com"
          errors={errors}
        />

        <PasswordInput
          control={control}
          name="password"
          title="Password"
          errors={errors}
        />
        <TextInput
          register={register}
          name="phone"
          title="Phone Number"
          placeholder="09987654321"
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
        options={["active", "suspend"]}
        placeholder="Choose status"
        errors={errors}
      />

      {/* Hidden fields for createdAt and updatedAt */}
      {isEdit ? null : (
        <input
          type="hidden"
          {...register("createdAt")}
          value={new Date().toLocaleString()} // Set the current timestamp here
        />
      )}

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
