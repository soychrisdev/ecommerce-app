"use client"; // (a)

import { useAuthStore } from "@/store/auth/auth.store";
import { useCartStore } from "@/store/cart/cart.store";
import { useClientStore } from "@/store/client/client.store";
import * as React from "react";

const Hydration = () => {
  React.useEffect(() => {
    useCartStore.persist.rehydrate();
    useAuthStore.persist.rehydrate();
    useClientStore.persist.rehydrate();
  }, []); // (b)

  return null;
};

export default Hydration;