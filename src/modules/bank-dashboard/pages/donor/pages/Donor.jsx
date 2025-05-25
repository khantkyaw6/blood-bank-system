// Donar => name / phone / dob ( date of birth ) / gender / address / blood_type / weight
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { DataTable } from "@/components/ui/custom/data-table";
import getDonarsCol from "../components/DonorColumns";
import { getDonors } from "@/api/bank-dashboard/donors";
import { toast } from "sonner";

export default function Donor() {
  const [data, setData] = useState();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getDonors(page, pageSize);
        const data = res?.data.donors;
        const total = res?.data.pagination.totalResult;

        if (!data) {
          console.warn("Donor datas are missing or undefined");
          return;
        }

        setData(data);
        setTotalPages(Math.ceil(total / pageSize));

        console.log(res?.message);
      } catch (err) {
        console.error("Failed to fetch donors lists:", err);
        err.message ? toast.error(err.message) : null;
      }
    };
    fetchData();
  }, [page, pageSize]);

  function handleCreate() {
    console.log("Create donor");
    navigate("/bank-dashboard/donors/create");
  }

  function handleDetail(id) {
    console.log("Donor Detail", id);
    navigate(`/bank-dashboard/donors/detail/${id}`);
  }

  function handleEdit(id) {
    console.log("Edit donor", id);
    navigate(`/bank-dashboard/donors/edit/${id}`);
  }

  function handleDelete(id) {
    console.log("Delete donor: ", id);
  }

  const columns = getDonarsCol({ handleDetail, handleEdit, handleDelete });

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="bg-white dark:bg-zinc-900 shadow-md rounded-2xl p-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            Donors
          </h1>
        </div>

        <div className="overflow-x-auto">
          {data ? (
            <DataTable
              columns={columns}
              data={data}
              onCreate={handleCreate}
              resourceName="Donor"
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
