import { useEffect, useState } from "react";
import getBankColumns from "../components/columns";
import { DataTable } from "@/components/ui/custom/data-table";
import { useNavigate } from "react-router";
import { getBanks } from "@/api/dashboard/banks";
import { toast } from "sonner";

export default function Bank() {
  const [data, setData] = useState();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();

  // get / post / put / patch / delete

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getBanks(page, pageSize);
        const data = res?.data.banks;
        const total = res?.data.pagination.totalResult;

        if (!data) {
          console.warn("Bank datas are missing or undefined");
          return;
        }

        setData(data);
        setTotalPages(Math.ceil(total / pageSize));

        console.log(res?.message);
      } catch (err) {
        console.error("Failed to fetch banks lists:", err);
        err.message ? toast.error(err.message) : null;
      }
    };

    fetchData();
  }, [page, pageSize]);

  function handleCreate() {
    console.log("Create bank");
    navigate("/dashboard/banks/create");
  }

  function handleDetail(id) {
    navigate(`/dashboard/banks/detail/${id}`);
  }

  function handleEdit(id) {
    navigate(`/dashboard/banks/edit/${id}`);
  }

  function handleDelete(id) {
    console.log("Delete bank", id);
  }

  const columns = getBankColumns({ handleDetail, handleEdit, handleDelete });

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="bg-white dark:bg-zinc-900 shadow-md rounded-2xl p-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            Bank Management
          </h1>
        </div>

        <div className="overflow-x-auto">
          {data ? (
            <DataTable
              columns={columns}
              data={data}
              onCreate={handleCreate}
              resourceName="Bank"
              page={page}
              pageSize={pageSize}
              totalPages={totalPages}
              onPageChange={setPage}
              onPageSizeChange={setPageSize}
            />
          ) : (
            "Loading..."
          )}
        </div>
      </div>
    </div>
  );
}
