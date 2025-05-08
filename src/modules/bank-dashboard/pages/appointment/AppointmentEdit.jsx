import AppointmentForm from "./components/AppointmentForm";

export default function AppointmentEdit() {
  function handleUpdate(data) {
    console.log("Appointment Updated:", data);
  }

  return (
    <div>
      <AppointmentForm onSubmit={handleUpdate} isEdit />
    </div>
  );
}
