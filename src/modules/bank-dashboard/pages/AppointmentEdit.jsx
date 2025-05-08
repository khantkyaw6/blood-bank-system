import { AppointmentForm } from "../components/appointmentForm";

export default function AppointmentEdit() {
  function handleUpdate(data) {
    console.log("Update Appointment:", data);
  }

  return (
    <div>
      <AppointmentForm onSubmit={handleUpdate} isEdit />
    </div>
  );
}
