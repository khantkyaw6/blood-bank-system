// Donar => name / phone / dob ( date of birth ) / gender / address / blood_type / weight
import getRequestCol from "./components/RequestFormColumns";
import { DataTable } from "@/components/ui/custom/data-table";
import { requestData } from "./requestData";

export default function Donor() {
  function handleCreate() {
    console.log("Create Request");
  }

  function handleEdit(id) {
    console.log("Edit Request", id);
  }

  function handleDelete(id) {
    console.log("Delete Request", id);
  }

  const columns = getRequestCol({ handleEdit, handleDelete });

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="bg-white shadow-md rounded-2xl p-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="text-2xl font-bold text-gray-800">Requests</h1>
        </div>

        <div className="overflow-x-auto">
          <DataTable
            columns={columns}
            data={requestData}
            onCreate={handleCreate}
            resourceName="Request"
          />
        </div>
      </div>
    </div>
  );
}
