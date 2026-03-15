
const BASE_URL = 'http://localhost:3000';


export async function apiRequestres(loginData, path, method) {
  try {
    const response = await fetch(BASE_URL + path, {
      method: method,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });
    if (!response) {
      throw new Error("login faild");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log("error login", error.message);
    throw error;
  }
}
// import { LoginInterface, BASE_URL } from "../utils/defenitions";

// export async function apiRequestres(login: LoginInterface) {
//   try {
//     const response = await fetch(BASE_URL + login.path, {
//       method: login.method,
//       credentials: "include",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(login.form),
//     });
//     if (!response) {
//       throw new Error("login faild");
//     }
//     const data = await response.json();
//     return data.user;
//   } catch (error) {
//     console.log("error login", error.message);
//     throw error;
//   }
// }
