import { BankForm } from "./BankForm";

export default function EditBank() {
  function handleUpdate(data) {
    console.log("Update bank:", data);
  }

  return (
    <div>
      <BankForm onSubmit={handleUpdate} isEdit />
    </div>
  );
}
