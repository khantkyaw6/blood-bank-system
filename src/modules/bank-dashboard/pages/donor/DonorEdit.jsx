import { useParams } from "react-router";
import DonorForm from "./components/DonorForm";
import { donarsData } from "./donorData";

export default function DonorEdit() {
  function handleUpdate(data) {
    console.log("Donor Edited:", data);
  }

  const { id } = useParams();
  console.log(id);
  const defaultValues = donarsData.find((item) => item.id === id);
  console.log(defaultValues);

  return (
    <div>
      <DonorForm onSubmit={handleUpdate} defaultValues={defaultValues} isEdit />
    </div>
  );
}
