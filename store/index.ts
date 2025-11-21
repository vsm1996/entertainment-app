import { create } from "zustand";
import { persist } from "zustand/middleware";

import CardData from "@/data.json";

export const useEntStore = create((set, get) =>
  persist(
    (set) => ({
      entertainmentData: CardData,
    }),
    { name: "entertainment-store" }
  )
);
