import { create } from "zustand";
import { persist } from "zustand/middleware";
import { apiRequestres } from "../services/auth.services";

export const useAuthStore = create()(
  persist(
    (set) => ({
      user: null,

      login: async (loginData, path, method) => {
        const user = await apiRequestres(loginData, path, method);
        set({ user });
        return user;
      },
    }),
    { name: "auth-storage" }
  )
);
// import { create } from "zustand";
// import { persist } from "zustand/middleware";
// import { LoginInterface, AuthState } from "../utils/defenitions";
// import { apiRequestres } from "../services/auth.services";

// export const useAuthStore = create<AuthState>()(
//   persist(
//     (set) => ({
//       user: null,
//       login: async (form: LoginInterface) =>
//         set({ user: await apiRequestres(form) }),
//     }),
//     { name: "auth-storage" },
//   ),
// );
