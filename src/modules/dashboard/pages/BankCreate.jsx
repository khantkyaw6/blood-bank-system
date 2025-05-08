import { BankForm } from "../components/BankForm";

export default function BankCreate() {
  const handleCreate = (data) => {
    console.log("Create bank:", data);
  };

  return (
    <div>
      <BankForm onSubmit={handleCreate} />
    </div>
  );
}
