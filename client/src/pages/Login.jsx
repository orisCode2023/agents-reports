import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuthStore } from "../store/useAuthStore";

function Login() {
  const navigate = useNavigate();
  const {user, login} = useAuthStore();
  const [loginFields, setLoginFields] = useState({
    agentCode: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFields((prevLogin) => ({ ...prevLogin, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const loggedInUser = await login(loginFields ,'/auth/login', 'POST' );
    if (loggedInUser?.role === 'agent') {
      navigate('/AgentDashboard');
    } else if (loggedInUser?.role === 'admin') {
      navigate('/AdminDashboard');
    }
  }
  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>agent code</label>
        <input
          type="text"
          name="agentCode"
          id="agentCode"
          value={loginFields.agentCode}
          placeholder="Enter your agent code here"
          onChange={handleChange}
        />

        <label>password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={loginFields.password}
          placeholder="Enter password"
          onChange={handleChange}
        />

        <button type="submit">log in</button>
      </form>
    </>
  );
}

export default Login;
// import React, { useState } from "react";
// import { useNavigate } from "react-router";
// import { LoginForm } from "../utils/defenitions";
// import { useAuthStore } from "../store/useAuthStore";

// function Login() {
//   const navigate = useNavigate();
//   const {user, login} = useAuthStore();
//   const [loginFields, setLoginFields] = useState<LoginForm>({
//     agentCode: "",
//     password: "",
//   });

//   function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
//     const { name, value } = e.target;
//     setLoginFields((prevLogin) => ({ ...prevLogin, [name]: value }));
//   }

//   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     const loggedInUser = await login({ form: loginFields, path: '/auth/login', method: 'POST' });
//     if (loggedInUser?.role === 'agent') {
//       navigate('/AgentDashboard');
//     } else if (loggedInUser?.role === 'admin') {
//       navigate('/AdminDashboard');
//     }
//   }
//   return (
//     <>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <label>agent code</label>
//         <input
//           type="text"
//           name="agentCode"
//           id="agentCode"
//           value={loginFields.agentCode}
//           placeholder="Enter your agent code here"
//           onChange={handleChange}
//         />

//         <label>password</label>
//         <input
//           type="password"
//           name="password"
//           id="password"
//           value={loginFields.password}
//           placeholder="Enter password"
//           onChange={handleChange}
//         />

//         <button type="submit">log in</button>
//       </form>
//     </>
//   );
// }

// export default Login;
