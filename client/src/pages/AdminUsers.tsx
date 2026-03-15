import React, { useEffect, useState } from "react";
import Table from "../components/Table";
import { ApiResponse, BASE_URL, User } from "../utils/defenitions";


function AdminUsers() {
  const [_, setLoading] = useState(true);
  const [usersData, setUsersData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          BASE_URL + '/admin/users',
          {
            method: "GET",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          },);

        if (!response.ok) throw new Error("request failed");

        const result = await response.json();
        setUsersData(result.data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2> Users Data </h2>
      <Table dataTable={usersData} />
    </div>
  );
}

export default AdminUsers;
