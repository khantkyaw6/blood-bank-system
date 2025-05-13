import { useParams } from "react-router";
import AppointmentForm from "./components/AppointmentForm";
import { appointments } from "./appointmentData";

export default function AppointmentEdit() {
  function handleUpdate(data) {
    console.log("Appointment Updated:", data);
  }

  const { id } = useParams();

  const defaultValues = appointments.find((item) => item.donorId === id);
  console.log(defaultValues);

  return (
    <div>
      <AppointmentForm
        onSubmit={handleUpdate}
        defaultValues={defaultValues}
        isEdit
      />
    </div>
  );
}
