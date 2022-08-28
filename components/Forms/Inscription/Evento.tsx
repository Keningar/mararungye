import { SelectField, SelectFieldOption } from "../Fields";
import capitalize from "lodash.capitalize";

import { EventsStore } from "@/stores/eventsStore";
import DB_Eventos from "@/DB/eventos.json";

const fieldsProps = ["evento", "distancia"].map((_) => ({
  key: _,
  id: _,
  name: _,
  label: capitalize(_),
}));

export const Evento = () => {
  const selectedEvent = EventsStore.useSelectedEvent();
  const changeSelectedEvent = EventsStore.useChangeSelectedEvent();

  return (
    <>
      <SelectField
        {...fieldsProps[0]}
        defaultValue={selectedEvent as string}
        onChange={console.log}
      >
        {DB_Eventos.map((_) => (
          <SelectFieldOption key={_.id} value={_.id}>
            {_.name}
          </SelectFieldOption>
        ))}
      </SelectField>
    </>
  );
};
