import { useEffect, useState } from "react";
import { BankForm } from "../components/BankForm";
import { useParams, useNavigate } from "react-router";
import { getBankById, updateBank } from "@/api/dashboard/banks";
import { toast } from "sonner";

export default function BankEdit() {
  const [data, setData] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getBankById(id);
        const data = res?.data.bank;

        if (!data) {
          console.warn("Bank data is missing or undefined");
          return;
        }

        setData(data);
        console.log(res?.message);
      } catch (err) {
        console.error("Failed to fetch Bank Data: ", err);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  async function handleUpdate(data) {
    try {
      const requiredData = {
        email: data.email,
        title: data.title,
        description: data.description,
        address: data.address,
        city: data.city,
        phone: data.phone,
        status: data.status,
      };
      const res = await updateBank(id, requiredData);
      toast.success(res?.message || "Bank Updated successfully!");
      navigate(-1);
      console.log(res?.message);
    } catch (err) {
      console.error("Failed to update Bank: ", err);
    }
  }

  return (
    <div>
      {data ? (
        <BankForm onSubmit={handleUpdate} defaultValues={data} isEdit />
      ) : (
        "Loading..."
      )}
    </div>
  );
}
