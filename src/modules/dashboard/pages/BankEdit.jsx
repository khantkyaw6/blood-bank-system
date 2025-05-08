import { BankForm } from "../components/BankForm";

export default function BankEdit() {
  function handleUpdate(data) {
    console.log("Update bank:", data);
  }

  return (
    <div>
      <BankForm onSubmit={handleUpdate} isEdit />
    </div>
  );
}
