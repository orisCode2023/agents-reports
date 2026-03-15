import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { BASE_URL, ReportsResponse, User } from "../utils/defenitions";

function CreateUser() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState ({
    agentCode: "",
    fullName: "",
    role: "",
  });
  const [triger, setTriger] = useState(userData);
  function handleChange(e) {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({ ...prevUserData, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(userData);
    setTriger(userData);
 }

  useEffect(() => {
    async function newUser() {
      try {
        const response = await fetch(BASE_URL + "/admin/users", {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });
        const result = await response.json();
        setUserData(result);
      } catch (error) {
        console.log(error);
      }
    }
    newUser();
  }, [triger]);
  // TODO: check if the [] is nedded
  return (
    <div>
      <h2>Create New User</h2>
      <form onSubmit={handleSubmit}>
        <label>Agent Code: </label>
        <input
          type="text"
          name="agentCode"
          value={userData.agentCode}
          onChange={handleChange}
          placeholder="Enter Agent Code"
        />
        <label>Full Name: </label>
        <input
          type="text"
          name="fullName"
          value={userData.fullName}
          onChange={handleChange}
          placeholder="Enter First Name and Last Name"
        />
        <label>Role: </label>
        <input
          type="text"
          name="role"
          value={userData.role}
          onChange={handleChange}
          placeholder="Role can be Agent or Admin"
        />
        <button type="submit">Create</button>
      </form>
      <div>
        {userData?.user &&
          Object.entries(userData?.user).map(([key, value]) => (
            <p key={key}>{`${key} : ${value}`}</p>
          ))}
      </div>
    </div>
  );
}

export default CreateUser;
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router";
// import { BASE_URL, ReportsResponse, User } from "../utils/defenitions";

// function CreateUser() {
//   const navigate = useNavigate();
//   const [userData, setUserData] = useState <User | null | unknown>({
//     agentCode: "",
//     fullName: "",
//     role: "",
//   });
//   const [triger, setTriger] = useState(userData);
//   function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
//     const { name, value } = e.target;
//     setUserData((prevUserData) => ({ ...prevUserData, [name]: value }));
//   }

//   function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     console.log(userData);
//     setTriger(userData);
//     navigate("/");
//   }

//   useEffect(() => {
//     async function newUser() {
//       try {
//         const response = await fetch(BASE_URL + "/admin/users", {
//           method: "POST",
//           credentials: "include",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(userData),
//         });
//         const result = await response.json();
//         setUserData(result);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     newUser();
//   }, [triger]);
//   // TODO: check if the [] is nedded
//   return (
//     <div>
//       <h2>Create New User</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Agent Code: </label>
//         <input
//           type="text"
//           name="agentCode"
//           value={userData.agentCode}
//           onChange={handleChange}
//           placeholder="Enter Agent Code"
//         />
//         <label>Full Name: </label>
//         <input
//           type="text"
//           name="fullName"
//           value={userData.fullName}
//           onChange={handleChange}
//           placeholder="Enter First Name and Last Name"
//         />
//         <label>Role: </label>
//         <input
//           type="text"
//           name="role"
//           value={userData.role}
//           onChange={handleChange}
//           placeholder="Role can be Agent or Admin"
//         />
//         <button type="submit">Create</button>
//       </form>
//       <div>
//         {userData?.user &&
//           Object.entries(userData?.user).map(([key, value]) => (
//             <p key={key}>{`${key} : ${value}`}</p>
//           ))}
//       </div>
//     </div>
//   );
// }

// export default CreateUser;
