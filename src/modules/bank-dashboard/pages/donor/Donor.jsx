// Donar => name / phone / dob ( date of birth ) / gender / address / blood_type / weight
import getDonarsCol from "./components/DonorColumns";
import { DataTable } from "@/components/ui/custom/data-table";
import { donarsData } from "./donorData";

export default function Donor() {
  function handleCreate() {
    console.log("Create donor");
  }

  function handleEdit(id) {
    console.log("Edit donor", id);
  }

  function handleDelete(id) {
    console.log("Delete donor", id);
  }

  const columns = getDonarsCol({ handleEdit, handleDelete });

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="bg-white shadow-md rounded-2xl p-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="text-2xl font-bold text-gray-800">Donors</h1>
        </div>

        <div className="overflow-x-auto">
          <DataTable
            columns={columns}
            data={donarsData}
            onCreate={handleCreate}
            resourceName="Donor"
          />
        </div>
      </div>
    </div>
  );
}
