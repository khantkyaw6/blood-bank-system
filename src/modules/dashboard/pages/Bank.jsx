import { useEffect, useState } from "react";
import getBankColumns from "../components/columns";
import { DataTable } from "@/components/ui/custom/data-table";
import { banks } from "./sampleData";

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
        </div>

        <div className="overflow-x-auto">
          <DataTable
            columns={columns}
            data={banks}
            onCreate={handleCreate}
            resourceName="Bank"
          />
        </div>
      </div>
    </div>
  );
}
