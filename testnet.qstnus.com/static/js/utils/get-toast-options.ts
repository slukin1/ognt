import { LOCAL_STORAGE_KEYS } from "configs";

export const getToastOptions = () => {
  const theme = localStorage.getItem(LOCAL_STORAGE_KEYS.theme);
  return {
    style: {
      background: theme === "dark" ? "#18181B" : "",
      color: theme === "dark" ? "#fff" : "",
    },
    success: {
      className: "border border-green-500",
      iconTheme: {
        primary: "#10B981",
        secondary: "white",
      },
    },
    error: {
      className: "border border-red-500",
      iconTheme: {
        primary: "#EF4444",
        secondary: "white",
      },
    },
    loading: { className: "border border-gray-300" },
  };
};
