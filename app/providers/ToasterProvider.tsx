"use client";

import { Toaster } from "react-hot-toast";

const ToasterProvider = () => {
  const toastOptions = {
    style: {
      background: "#333",
      color: "#fff",
    },
  };

  return <Toaster toastOptions={toastOptions} />;
};

export default ToasterProvider;
