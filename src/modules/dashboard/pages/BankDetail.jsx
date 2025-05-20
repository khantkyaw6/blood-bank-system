import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { getBankById } from "@/api/dashboard/banks";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BackButton } from "@/components/ui/custom/FormElements";

export default function BankDetail() {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getBankById(id);
        setData(res.data.bank);
      } catch (err) {
        console.error("Failed to fetch Bank Data", err);
      }
    };

    fetchData();
  }, [id]);

  const fields = data
    ? [
        { label: "ID", value: data._id },
        { label: "Bank Title", value: data.title },
        { label: "Email", value: data.email },
        { label: "Password", value: "******" },
        { label: "Description", value: data.description },
        { label: "Address", value: data.address },
        { label: "City", value: data.city },
        { label: "Phone", value: data.phone },
        {
          label: "Status",
          value: (
            <Badge
              variant={data.status === "active" ? "default" : "destructive"}
            >
              {data.status}
            </Badge>
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

  function editBank() {
    navigate(`/dashboard/banks/edit/${id}`);
  }

  function deleteBank() {
    console.log("bank deleted: ", id);
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <BackButton />
      <Card className="rounded-2xl shadow-lg border border-gray-200">
        <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-2">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
            Bank Detail
          </h2>
          <div className="space-x-2">
            <Button variant="outline" onClick={editBank}>
              Edit
            </Button>
            <Button variant="destructive" onClick={deleteBank}>
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
              Loading bank details...
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
