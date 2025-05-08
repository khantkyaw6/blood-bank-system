import DonorForm from "./components/DonorForm";

export default function DonorEdit() {
  function handleUpdate(data) {
    console.log("Donor Edited:", data);
  }

  return (
    <div>
      <DonorForm onSubmit={handleUpdate} isEdit />
    </div>
  );
}
