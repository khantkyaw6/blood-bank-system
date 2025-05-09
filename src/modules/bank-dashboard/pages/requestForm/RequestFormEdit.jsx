import RequestForm from "./components/RequestFormFormat";

export default function DonorEdit() {
  function handleUpdate(data) {
    console.log("Request Edited:", data);
  }

  return (
    <div>
      <RequestForm onSubmit={handleUpdate} isEdit />
    </div>
  );
}
