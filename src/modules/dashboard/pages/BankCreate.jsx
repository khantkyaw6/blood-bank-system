import { BankForm } from "../components/BankForm";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { createBank } from "@/api/dashboard/banks";

export default function BankCreate() {
  const navigate = useNavigate();

  const handleCreate = async (data) => {
    try {
      const res = await createBank(data);
      toast.success(res?.message || "Bank created successfully!");
      navigate(-1);
      console.log(res?.message);
    } catch (err) {
      console.error("Bank Create Failed: ", err);
    }
  };

  return (
    <div>
      <BankForm onSubmit={handleCreate} />
    </div>
  );
}
