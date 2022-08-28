import React from "react";
import clsx from "clsx";
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

import type { ColumnDef } from "@tanstack/react-table";

export interface TableProps<T = {}> {
  data: T[];
  columns: ColumnDef<T, any>[];
  onRowClick?: (rowData: T) => void;
  fixFirstColumn?: boolean;
}

export default function Table<T = {}>({
  data,
  columns,
  onRowClick,
  fixFirstColumn = false,
}: TableProps<T>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className='overflow-x-auto'>
      <table className='dai-table w-full'>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder ? null : (
                    <div
                      className={clsx({
                        ["cursor-pointer select-none"]:
                          header.column.getCanSort(),
                      })}
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{
                        asc: " 🔼",
                        desc: " 🔽",
                      }[header.column.getIsSorted() as string] ?? null}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr
              key={row.id}
              className={clsx("dai-hover", {
                ["cursor-pointer"]: !!onRowClick,
              })}
              onClick={_ => onRowClick?.(row.original)}
            >
              {row.getVisibleCells().map((cell, i) => {
                const CellTag = fixFirstColumn && i == 0 ? "th" : "td";
                return (
                  <CellTag key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </CellTag>
                );
              })}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map(footerGroup => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  );
}
