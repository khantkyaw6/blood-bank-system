import { useEffect } from "react";
import { BankForm } from "../components/BankForm";
import { useParams } from "react-router";
import { banks } from "./sampleData";

export default function BankEdit() {
  function handleUpdate(data) {
    console.log("Bank Updated:", data);
  }

  const { id } = useParams();
  console.log(id);

  const defaultValues = banks.find((item) => item.id === id);

  console.log(defaultValues);

  return (
    <div>
      <BankForm onSubmit={handleUpdate} defaultValues={defaultValues} isEdit />
    </div>
  );
}
