export const getToken = () => localStorage.getItem("token");
export const getRole = () => localStorage.getItem("role");
export const isAdmin = () => getRole() === "admin";
export const isUser = () => getRole() === "user";
