import getAppointmentCol from "../components/appointmentColumns";
import { DataTable } from "@/components/ui/custom/data-table";
import { appointments } from "./appointmentData";

export default function Appointment() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   getData().then(setData);
  // }, []);

  function handleCreate() {
    console.log("Create appointment");
    // show confirmation or remove from state
  }

  function handleEdit(id) {
    console.log("Edit appointment", id);
    // navigate or open modal
  }

  function handleDelete(id) {
    console.log("Delete appointment", id);
    // show confirmation or remove from state
  }

  const columns = getAppointmentCol({ handleEdit, handleDelete });

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="bg-white shadow-md rounded-2xl p-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="text-2xl font-bold text-gray-800">Appointments</h1>
        </div>

        <div className="overflow-x-auto">
          <DataTable
            columns={columns}
            data={appointments}
            onCreate={handleCreate}
            resourceName="Appointment"
          />
        </div>
      </div>
    </div>
  );
}
