import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { getRequestByID } from "@/api/bank-dashboard/requests";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BackButton } from "@/components/ui/custom/FormElements";

export default function BankDetail() {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getRequestByID(id);
        const data = res?.data.request;

        if (!data) {
          console.warn("Request data is missing or undefined");
          return;
        }

        setData(data);
        console.log(res?.message);
      } catch (err) {
        console.error("Failed to fetch Donor Data", err);
        err.message ? toast.error(err.message) : null;
      }
    };

    fetchData();
  }, [id]);

  const fields = data
    ? [
        { label: "ID", value: data._id },
        { label: "Name", value: data.name },
        { label: "Phone", value: data.phone },
        { label: "Email", value: data.email },
        { label: "Address", value: data.address },
        { label: "Age", value: data.age },
        { label: "Blood Type", value: data.bloodType },
        { label: "Unit", value: data.unit },
        {
          label: "Status",
          value: (
            <span
              className={`font-medium ${
                data.status === "approved"
                  ? "text-green-600"
                  : data.status === "pending"
                  ? "text-yellow-600"
                  : "text-red-600"
              }`}
            >
              {data.status}
            </span>
          ),
        },
        {
          label: "Created",
          value: new Date(data.createdAt).toLocaleString(),
        },
        {
          label: "Last Updated",
          value: new Date(data.updatedAt).toLocaleString(),
        },
      ]
    : [];

  const dataElements = fields.map((field, index) => (
    <InfoRow key={index} label={field.label} value={field.value} />
  ));

  function editRequest() {
    navigate(`/bank-dashboard/request-forms/edit/${id}`);
  }

  function deleteRequest() {
    console.log("request deleted: ", id);
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <BackButton />
      <Card className="rounded-2xl shadow-lg border border-gray-200">
        <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-2">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
            Request Detail
          </h2>
          <div className="space-x-2">
            <Button variant="outline" onClick={editRequest}>
              Edit
            </Button>
            <Button variant="destructive" onClick={deleteRequest}>
              Delete
            </Button>
          </div>
        </CardHeader>

        <CardContent>
          {data ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-800">
              {dataElements}
            </div>
          ) : (
            <div className="text-center text-gray-500 py-10">
              Loading request details...
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

const InfoRow = ({ label, value }) => (
  <div className="flex flex-col gap-1">
    <span className="text-sm font-medium text-gray-600">{label}</span>
    <div className="text-base text-gray-900 break-words">{value ?? "—"}</div>
  </div>
);
