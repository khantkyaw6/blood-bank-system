import { useNavigate, useParams } from "react-router";
import DonorForm from "./components/DonorForm";
import { useEffect, useState } from "react";
import { getDonorByID, updateDonor } from "@/api/bank-dashboard/donors/donors";
import { toast } from "sonner";

export default function DonorEdit() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  // console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getDonorByID(id);
        setData(res?.data.donor);
        // console.log(res);
      } catch (err) {
        console.error("Failed to fetch Donor Detail: ", err);
        toast.error(
          err.response
            ? err.response.data.error +
                " - " +
                err.response.data.details.join(". ") || "Bank created Failed!"
            : err.message
        );
      }
    };

    fetchData();
  }, []);

  async function handleUpdate(data) {
    const requiredData = {
      name: data.name,
      phone: data.phone,
      dob: data.dob, // YYYY-MM-DD
      gender: data.gender,
      address: data.address,
      bloodType: data.bloodType,
      weight: +data.weight,
    };
    setLoading(true);
    try {
      const res = await updateDonor(id, requiredData);
      console.log(res);
      toast.success(res?.message);
      navigate(-1);
    } catch (err) {
      console.error("Failed to updated donor: ", err);
      toast.error(
        err.response
          ? err.response.data.error +
              " - " +
              err.response.data.details.join(". ") || "Bank created Failed!"
          : err.message
      );
    } finally {
      setLoading(false);
    }
  }

  // Fixing date object not appearing in date input
  function formatDateForInput(date) {
    if (!date) return "";
    return new Date(date).toISOString().split("T")[0]; // returns YYYY-MM-DD
  }

  const formattedData = data
    ? { ...data, dob: formatDateForInput(data.dob) }
    : null;

  return (
    <div>
      {data ? (
        <DonorForm
          onSubmit={handleUpdate}
          defaultValues={formattedData}
          loading={loading}
          isEdit
        />
      ) : (
        "Loading..."
      )}
    </div>
  );
}
