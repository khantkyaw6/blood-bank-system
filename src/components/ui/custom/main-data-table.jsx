import React from "react";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowUpDown, Plus } from "lucide-react";

export function MainDataTable({
  columns,
  data,
  onCreate,
  resourceName = null,
  page,
  pageSize,
  totalPages,
  onPageChange,
  onPageSizeChange,
}) {
  const isPaginated =
    page && pageSize && totalPages && onPageChange && onPageSizeChange;

  const [sorting, setSorting] = React.useState([]);
  const [globalFilter, setGlobalFilter] = React.useState("");

  const rowHeight = 48;

  const table = useReactTable({
    data,
    columns,
    state: {
      pagination: isPaginated ? { pageIndex: page - 1, pageSize } : undefined,
      sorting,
      globalFilter,
    },
    manualPagination: isPaginated,
    pageCount: isPaginated ? totalPages : undefined,
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const visibleRows = table.getRowModel().rows;

  return (
    <div className="space-y-4">
      {/* Search + Rows per page */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <Input
          placeholder="Search..."
          value={globalFilter ?? ""}
          onChange={(event) => setGlobalFilter(event.target.value)}
          className="max-w-sm"
        />

        {isPaginated && (
          <div className="flex items-center gap-2">
            <label
              htmlFor="pageSize"
              className="text-sm text-gray-600 dark:text-gray-100"
            >
              Rows per page:
            </label>
            <select
              id="pageSize"
              value={pageSize}
              onChange={(e) => {
                onPageSizeChange(Number(e.target.value));
                onPageChange(1);
              }}
              className="border dark:bg-zinc-900 border-gray-300 rounded px-2 py-1 text-sm"
            >
              {[5, 10, 20, 50].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
        )}

        {onCreate && (
          <Button
            onClick={onCreate}
            className="bg-blue-600 text-white hover:bg-blue-700"
          >
            <Plus className="w-4 h-4 mr-2" />
            Create {resourceName}
          </Button>
        )}
      </div>

      {/* Table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.column.getCanSort() ? (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button
                              onClick={header.column.getToggleSortingHandler()}
                              className="flex items-center space-x-1"
                            >
                              <span>
                                {flexRender(
                                  header.column.columnDef.header,
                                  header.getContext()
                                )}
                              </span>
                              {header.column.getIsSorted() ? (
                                <ArrowUpDown
                                  className="ml-2 h-4 w-4"
                                  style={{
                                    transform:
                                      header.column.getIsSorted() === "desc"
                                        ? "rotate(180deg)"
                                        : "rotate(0deg)",
                                  }}
                                />
                              ) : null}
                            </button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Click to sort</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ) : (
                      flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {visibleRows?.length ? (
              visibleRows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  style={{
                    height: `${rowHeight}px`,
                    maxHeight: `${rowHeight}px`,
                    minHeight: `${rowHeight}px`,
                  }}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination controls */}
      {isPaginated && (
        <div className="flex items-center justify-between space-x-2">
          <div className="text-sm text-muted-foreground">
            Page {page} of {totalPages}
          </div>
          <div className="flex items-center space-x-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => onPageChange(Math.max(page - 1, 1))}
              disabled={page <= 1}
            >
              Previous
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => onPageChange(Math.min(page + 1, totalPages))}
              disabled={page >= totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
