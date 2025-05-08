import AppointmentForm from "./components/AppointmentForm";

export default function AppointmentCreate() {
  const handleCreate = (data) => {
    console.log("Appointment Created:", data);
  };

  return (
    <div>
      <AppointmentForm onSubmit={handleCreate} />
    </div>
  );
}
