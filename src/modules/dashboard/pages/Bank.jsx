import { useEffect, useState } from "react";
import getBankColumns from "./columns";
import { DataTable } from "./data-table";
import { banks } from "./sampleData";
import { Plus } from "lucide-react";

// async function getData() {
//   return [
//     {
//       id: "728ed52f",
//       amount: 100,
//       status: "pending",
//       email: "m@example.com",
//     },
//     // ...
//   ];
// }

export default function Bank() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   getData().then(setData);
  // }, []);

  function handleCreate() {
    console.log("Create bank");
    // show confirmation or remove from state
  }

  function handleEdit(id) {
    console.log("Edit bank", id);
    // navigate or open modal
  }

  function handleDelete(id) {
    console.log("Delete bank", id);
    // show confirmation or remove from state
  }

  const columns = getBankColumns({ handleEdit, handleDelete });

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="bg-white shadow-md rounded-2xl p-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="text-2xl font-bold text-gray-800">Bank Management</h1>
          <button
            type="button"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow transition-colors duration-300"
            onClick={handleCreate}
          >
            <Plus className="w-5 h-5" />
            Create Bank
          </button>
        </div>

        <div className="overflow-x-auto">
          <DataTable columns={columns} data={banks} />
        </div>
      </div>
    </div>
  );
}
