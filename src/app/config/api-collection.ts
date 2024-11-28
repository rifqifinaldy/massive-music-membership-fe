export const API = {
  MEMBERS: {
    LIST: "/api/members/list",
    CREATE: "/api/members/create",
    UPDATE: (id: number) => `/api/members/update/${id}`,
    DELETE: (id: number) => `/api/members/delete/${id}`,
  },
};
