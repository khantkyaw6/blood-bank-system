import DonorForm from "./components/DonorForm";

export default function DonorsCreate() {
  const handleCreate = (data) => {
    console.log("Donor Created:", data);
  };

  return (
    <div>
      <DonorForm onSubmit={handleCreate} />
    </div>
  );
}
