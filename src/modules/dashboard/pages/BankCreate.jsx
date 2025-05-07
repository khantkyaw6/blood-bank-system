import { BankForm } from "./BankForm";

export default function CreateBank() {
  const handleCreate = (data) => {
    console.log("Create bank:", data);
  };

  return (
    <div>
      <BankForm onSubmit={handleCreate} />
    </div>
  );
}
