import { BankForm } from "../components/BankForm";

export default function BankEdit() {
  function handleUpdate(data) {
    console.log("Bank Updated:", data);
  }

  return (
    <div>
      <BankForm onSubmit={handleUpdate} isEdit />
    </div>
  );
}
