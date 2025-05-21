// Appointment => Donar Id / Blood Request Id / Date / Bank

import { createColumnHelper } from "@tanstack/react-table";
import DeleteAlertButton from "@/components/ui/custom/DeleteAlertButton";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

export default function getBankColumns({
  handleDetail,
  handleEdit,
  handleDelete,
}) {
  const columnHelper = createColumnHelper();

  return [
    // columnHelper.accessor("id", {
    //   header: "ID",
    //   cell: (info) => info.getValue(),
    // }),
    columnHelper.accessor("donorId", {
      header: "Donor ID",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("requestId", {
      header: "Blood Request ID",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("bank", {
      header: "Bank Name",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("date", {
      header: "Date",
      cell: (info) =>
        new Date(info.getValue()).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }),
    }),
    columnHelper.display({
      id: "actions",
      header: "Actions",
      cell: ({ row }) => {
        const id = row.original.donorId;

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <button
                onClick={() => handleDetail(id)}
                className="custom-dropdownitem text-green-500 hover:text-white hover:bg-green-500"
              >
                Detail
              </button>
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
