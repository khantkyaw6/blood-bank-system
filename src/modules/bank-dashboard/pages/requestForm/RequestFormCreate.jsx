import RequestForm from "./components/RequestFormFormat";

export default function DonorsCreate() {
  const handleCreate = (data) => {
    console.log("Request Created:", data);
  };

  return (
    <div>
      <RequestForm onSubmit={handleCreate} />
    </div>
  );
}
