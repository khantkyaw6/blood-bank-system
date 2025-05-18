import { useEffect, useState } from "react";
import getBankColumns from "../components/columns";
import { DataTable } from "@/components/ui/custom/data-table";
import { useNavigate } from "react-router";
import { getBanks } from "@/api/dashboard/banks";

export default function Bank() {
  const [data, setData] = useState();

  // get / post / put / patch / delete

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getBanks();
        const data = res?.data.banks;

        if (!data) {
          console.warn("Bank datas are missing or undefined");
          return;
        }

        setData(data);
        console.log(res?.message);
      } catch (err) {
        console.error("Failed to fetch banks lists:", err);
      }
    };

    fetchData();
  }, []);

  const navigate = useNavigate();

  function handleCreate() {
    console.log("Create bank");
    navigate("/dashboard/banks/create");
    // show confirmation or remove from state
  }

  function handleEdit(id) {
    console.log("Edit bank", id);
    navigate(`/dashboard/banks/edit/${id}`);
    // navigate or open modal
  }

  function handleDelete(id) {
    // show confirmation or remove from state
    // const confirmed = window.confirm("Are you sure you want to delete this?");
    // if (confirmed) {/
    // Call your delete function
    // deleteItem(id);
    console.log("Delete bank", id);
    // }
  }

  const columns = getBankColumns({ handleEdit, handleDelete });

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="bg-white shadow-md rounded-2xl p-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="text-2xl font-bold text-gray-800">Bank Management</h1>
        </div>

        <div className="overflow-x-auto">
          {data ? (
            <DataTable
              columns={columns}
              data={data}
              onCreate={handleCreate}
              resourceName="Bank"
            />
          ) : (
            "Loading"
          )}
        </div>
      </div>
    </div>
  );
}
