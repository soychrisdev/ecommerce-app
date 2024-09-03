"use client";

import * as React from "react";
import { useAuthStore } from "./auth/auth.store";

const Hydration = () => {
  React.useEffect(() => {
    useAuthStore.persist.rehydrate();
  }, []);

  return null;
};

export default Hydration;