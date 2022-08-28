import React from "react";
import { Table, TableCell, TableProps } from "@/components/core/Table";
import { createColumnHelper } from "@tanstack/react-table";

import eventos_db from "@/DB/eventos.json";

type EventData = typeof eventos_db[number];
const columnHelper = createColumnHelper<EventData>();

const columns = [
  columnHelper.accessor(({ name, img }) => ({ name, img }), {
    id: "name-img",
    header: () => <span>Evento</span>,
    cell: info => {
      const { name, img } = info.getValue();
      return (
        <TableCell
          value={name}
          img={{ src: img.card, alt: `imagen del evento ${name}` }}
        />
      );
    },
  }),
  columnHelper.accessor("fecha", {
    header: () => <span>Fecha</span>,
    cell: info => {
      const { año, dia, mes } = info.getValue();
      return <TableCell value={`${dia}/${mes}/${año}`} />;
    },
  }),
  columnHelper.accessor("lugar", {
    header: () => <span>Lugar</span>,
    cell: info => {
      const { ciudad, direccion } = info.getValue();
      let lugar = ciudad || "No hay lugar definido";
      if (direccion) lugar += ` - ${direccion}`;
      return <TableCell value={lugar} />;
    },
  }),
];

interface EventTableProps extends Pick<TableProps<EventData>, "onRowClick"> {}

export default function EventTable({ onRowClick }: EventTableProps) {
  return <Table data={eventos_db} columns={columns} onRowClick={onRowClick} />;
}
