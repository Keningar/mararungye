import React from "react";
import { Table, TableCell } from "@/components/core/Table";
import { createColumnHelper } from "@tanstack/react-table";

import resultados_db from "@/db/resultados.json";

type Results = typeof resultados_db[number];
type ResultData = Results["men"][number];

interface ResultTableProps {
  eventId: string;
}

const columnHelper = createColumnHelper<ResultData>();
const columns = [
  columnHelper.accessor("position", {
    header: () => <span>Posición</span>,
    cell: info => <TableCell value={info.getValue()} />,
  }),
  columnHelper.accessor("category_position", {
    header: () => <span>Posición en categoria</span>,
    cell: info => <TableCell value={info.getValue()} />,
  }),
  columnHelper.accessor("category", {
    header: () => <span>Categoria</span>,
    cell: info => <TableCell value={info.getValue()} />,
  }),
  columnHelper.accessor("name", {
    header: () => <span>Atleta</span>,
    cell: info => <TableCell value={info.getValue().toUpperCase()} />,
  }),
  columnHelper.accessor("time", {
    header: () => <span>Tiempo</span>,
    cell: info => <TableCell value={info.getValue()} />,
  }),
];

interface CollapseProps {
  label: string;
}
function Collapse({ label, children }: React.PropsWithChildren<CollapseProps>) {
  return (
    <div
      className='dai-collapse dai-collapse-arrow border border-base-300 bg-base-100 rounded-box'
    >
      <input type='checkbox' />
      <div className='dai-collapse-title text-xl font-medium'>{label}</div>
      <div className='dai-collapse-content'>{children}</div>
    </div>
  );
}

export default function ResultTable({ eventId }: ResultTableProps) {
  const results = resultados_db.find(_ => _.id == eventId) as
    | Results
    | undefined;
  const commonProps = {
    columns,
    fixFirstColumn: true,
  };
  return (
    <div className='space-y-4'>
      {results ? (
        <>
          <Collapse label='Resultados Hombres'>
            <Table data={results.men} {...commonProps} />
          </Collapse>
          <Collapse label='Resultados Mujeres'>
            <Table data={results.women} {...commonProps} />
          </Collapse>
          <Collapse label='Resultados Niños'>
            <Table data={results.children} {...commonProps} />
          </Collapse>
        </>
      ) : (
        <span className='text-lg'>No hay resultados disponibles</span>
      )}
    </div>
  );
}
