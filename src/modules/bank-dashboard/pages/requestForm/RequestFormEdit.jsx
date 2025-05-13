import RequestForm from "./components/RequestFormFormat";
import { useParams } from "react-router";
import { requestData } from "./requestData";

export default function DonorEdit() {
  function handleUpdate(data) {
    console.log("Request Edited:", data);
  }

  const { id } = useParams();
  const defaultValues = requestData.find((item) => item.id === id);

  return (
    <div>
      <RequestForm
        onSubmit={handleUpdate}
        defaultValues={defaultValues}
        isEdit
      />
    </div>
  );
}
