import { createColumnHelper } from "@tanstack/react-table";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import DeleteAlertButton from "@/components/ui/custom/DeleteAlertButton";

export default function getRequestColumns({ handleEdit, handleDelete }) {
  const columnHelper = createColumnHelper();

  //   Blood Request => name / phone / email / address / age / blood type / unit / status

  return [
    columnHelper.accessor("id", {
      header: "ID",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("name", {
      header: "Name",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("age", {
      header: "Age",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("email", {
      header: "Email",
      cell: (info) => <span className="text-blue-600">{info.getValue()}</span>,
    }),
    columnHelper.accessor("phone", {
      header: "Phone",
      cell: (info) => (
        <a href={`tel:${info.getValue()}`} className="text-blue-500 underline">
          {info.getValue()}
        </a>
      ),
    }),
    columnHelper.accessor("address", {
      header: "Address",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("blood_type", {
      header: "Blood Type",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("unit", {
      header: "Unit",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("status", {
      header: "Status",
      cell: (info) => {
        const value = info.getValue();
        const color =
          value === "approved"
            ? "text-green-600"
            : value === "pending"
            ? "text-yellow-600"
            : "text-red-600";
        return <span className={`font-medium ${color}`}>{value}</span>;
      },
    }),
    columnHelper.display({
      id: "actions",
      header: "Actions",
      cell: ({ row }) => {
        const id = row.original.id;

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <button
                onClick={() => handleEdit(id)}
                className="custom-dropdownitem text-blue-600 hover:text-white hover:bg-blue-600"
              >
                Edit
              </button>
              <DeleteAlertButton itemId={id} onDelete={handleDelete} />
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    }),
  ];
}
