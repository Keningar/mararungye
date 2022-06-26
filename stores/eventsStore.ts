import create from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { createSelectorHooks, Hook } from "auto-zustand-selectors-hook";

interface EventsStore {
  selectedEvent: string | null;
  changeSelectedEvent: (event: string) => void;
}

const baseStore = create(
  devtools(
    immer<EventsStore, [["zustand/devtools", never]]>(set => ({
      selectedEvent: null,
      changeSelectedEvent: e =>
        set(_ => {
          _.selectedEvent = e;
        }),
    }))
  )
);

export const EventsStore: typeof baseStore & Hook<EventsStore> =
  createSelectorHooks(baseStore);
