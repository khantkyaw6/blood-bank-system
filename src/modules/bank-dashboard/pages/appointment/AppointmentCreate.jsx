import { useState } from "react";
import AppointmentForm from "./components/AppointmentForm";
import { createAppointment } from "@/api/bank-dashboard/appointments";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export default function AppointmentCreate() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleCreate = async (data) => {
    const formattedData = {
      donor: data.donor,
      bloodRequest: data.request,
      date: data.date,
      bank: "6828e5a15b21986c0c7424e6",
    };
    setLoading(true);

    try {
      const res = await createAppointment(formattedData);
      toast.success(res.message);
      console.log(res);

      navigate(-1);
    } catch (err) {
      console.error("Create Appointment Failed: ", err);
      toast.error(
        err.response
          ? err.response.data.error +
              " - " +
              err.response.data.details.join(". ") ||
              "Appointment created Failed!"
          : err.message
      );
    }
  };

  return (
    <div>
      <AppointmentForm onSubmit={handleCreate} loading={loading} />
    </div>
  );
}
