import { AppointmentForm } from "../components/appointmentForm";

export default function AppointmentCreate() {
  const handleCreate = (data) => {
    console.log("Create Appointment:", data);
  };

  return (
    <div>
      <AppointmentForm onSubmit={handleCreate} />
    </div>
  );
}
