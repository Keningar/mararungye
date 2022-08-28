import create from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { createSelectorHooks, Hook } from "auto-zustand-selectors-hook";

interface GeneralStore {
  enterDirectly: boolean;
  changeEnterDirectly: (val?: boolean) => void;
}

const baseStore = create(
  devtools(
    immer<GeneralStore, [["zustand/devtools", never]]>(set => ({
      enterDirectly: true,
      changeEnterDirectly: val =>
        set(_ => {
          _.enterDirectly = val ?? false;
        }),
    }))
  )
);

export const GeneralStore: typeof baseStore & Hook<GeneralStore> =
  createSelectorHooks(baseStore);
