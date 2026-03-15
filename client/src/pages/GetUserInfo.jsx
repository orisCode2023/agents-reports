import { useState } from "react";
import { BASE_URL } from "../utils/defenitions";

function GetUserInfo() {
  const [info, setInfo] = useState(null);

  async function handleClick() {
    try {
      const response = await fetch(BASE_URL + "/auth/me", {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      setInfo(result);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <button onClick={handleClick}>Get User Info</button>
      {info?.data &&
        Object.entries(info?.data).map(([key, value]) => (
          <p key={key}>{`${key} : ${value}`}</p>
        ))}
    </div>
  )
};

export default GetUserInfo;
// import React, { useState } from "react";
// import { BASE_URL } from "../utils/defenitions";

// function GetUserInfo() {
//   const [info, setInfo] = useState<{ message?: string; user?: Record<string, unknown> } | null>(null);

//   async function handleClick() {
//     try {
//       const response = await fetch(BASE_URL + "/auth/me", {
//         method: "GET",
//         credentials: "include",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       const result = await response.json();
//       setInfo(result);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   return (
//     <div>
//       <button onClick={handleClick}>Get User Info</button>
//       {info?.user &&
//         Object.entries(info?.user).map(([key, value]) => (
//           <p key={key}>{`${key} : ${value}`}</p>
//         ))}
//     </div>
//   )
// };

// export default GetUserInfo;
