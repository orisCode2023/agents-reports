import Home from "./pages/Home";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import AdminReports from "./pages/AdminReports";
import AdminUsers from "./pages/AdminUsers";
import AgentDashboard from "./pages/AgentDashboard";
import NewReport from "./pages/NewReport";
import ReportsData from "./pages/ReportsData";
import UploadCsv from "./pages/UploadCsv";
import CreateUser from "./pages/CreateUser";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import GetUserInfo from "./pages/GetUserInfo";
function App() {

  return (
    <>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/CreateUser" element={<CreateUser />} />
        <Route path="/AdminReports" element={<AdminReports title="Admin Reports"/>} />
        <Route path="/AdminUsers" element={<AdminUsers />} />
        <Route path="/AgentDashboard" element={<AgentDashboard />} />
        <Route path="/NewReport" element={<NewReport />} />
        <Route path="/ReportsData" element={<ReportsData title="Reports Data"/>} />
        <Route path="/UploadCsv" element={<UploadCsv />} />
        <Route path="/GetUserInfo" element={<GetUserInfo />} />
      </Routes>
    </>
  );
}

export default App;
