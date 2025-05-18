import { useEffect, useState } from "react";
import { BankForm } from "../components/BankForm";
import { useParams } from "react-router";
import axios from "axios";

export default function BankEdit() {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const defaultValues = data ? data.find((item) => item._id === id) : null;

  console.log(id);
  console.log(data);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://blood-bank-server-28lz.onrender.com/api/v1/admin-dashboard/banks",
    }).then((respond) => {
      const data = respond.data.data.banks;
      setData(data);
    });
  }, []);

  function handleUpdate(data) {
    console.log("Bank Updated:", data);
  }

  return (
    <div>
      {data ? (
        <BankForm
          onSubmit={handleUpdate}
          defaultValues={defaultValues}
          isEdit
        />
      ) : (
        "Loading..."
      )}
    </div>
  );
}
