import { create, type StateCreator } from "zustand";
import { createJSONStorage, persist, StateStorage, } from "zustand/middleware";
import { customSessionStorage } from "../storages/session-storage";

interface ClientState {
  firstName: string;
  lastName: string;
}

interface ClientActions {
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
  clear: () => void;
}

type ClientStore = ClientState & ClientActions;

const storeApi: StateCreator<ClientStore> = (set, get) => ({
  firstName: "",
  lastName: "",
  clear: () => set({ firstName: "", lastName: "" }),
  setLastName: (lastName) => set({ lastName: lastName }),
  setFirstName: (firstName) => set({ firstName: firstName }),


});



export const useClientStore = create<ClientStore>()(
  persist(storeApi,
    {
      name: "client-storage",
      storage: customSessionStorage,
    })


);