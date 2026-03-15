import { useEffect, useState } from "react";
import Table from "../components/Table";
import { BASE_URL} from "../utils/defenitions";

function ReportsData({title}) {
  const [loading, setLoading] = useState(true);

  const [searchBar, setSearchBar] = useState({
    catagory: "",
    urgancy: "",
  });
  const [appliedSearch, setAppliedSearch] = useState(searchBar);
  const [reportsData, setReportsData] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setSearchBar((prevSearch) => ({ ...prevSearch, [name]: value }));
  }

  function handleSearch() {
    setAppliedSearch(searchBar);
  }

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch(
          BASE_URL +
            `/reports?catagory=${appliedSearch.catagory}&urgancy=${appliedSearch.urgancy}`,
          { 
            method: "GET",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          },
        );

        if (!response.ok) throw new Error("request failed");

        const result = await response.json();
        setReportsData(result.data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [appliedSearch]);
  
  return (
    <div>
      <h2> {title} </h2>
      <div>
        <label>Search by catagory</label>
        <input
          type="text"
          value={searchBar.catagory}
          name="catagory"
          onChange={handleChange}
          placeholder="Enter value to search"
        />
        <label>Search By urgancy</label>
        <input
          type="text"
          value={searchBar.urgancy}
          name="urgancy"
          onChange={handleChange}
          placeholder="Enter value to search"
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <Table dataTable={reportsData ?? []} />
    </div>
  );
}

export default ReportsData;
// import React, { useEffect, useState } from "react";
// import Table from "../components/Table";
// import { BASE_URL, Props, User } from "../utils/defenitions";

// function ReportsData({title} : Props) {
//   const [_, setLoading] = useState(true);

//   const [searchBar, setSearchBar] = useState({
//     catagory: "",
//     urgancy: "",
//   });
//   const [appliedSearch, setAppliedSearch] = useState(searchBar);
//   const [reportsData, setReportsData] = useState(null);

//   function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
//     const { name, value } = e.target;
//     setSearchBar((prevSearch) => ({ ...prevSearch, [name]: value }));
//   }

//   function handleSearch() {
//     setAppliedSearch(searchBar);
//   }

//   useEffect(() => {
//     async function fetchData() {
//       setLoading(true);
//       try {
//         const response = await fetch(
//           BASE_URL +
//             `/reports?catagory=${appliedSearch.catagory}&urgancy=${appliedSearch.urgancy}`,
//           { 
//             method: "GET",
//             credentials: "include",
//             headers: {
//               "Content-Type": "application/json",
//             },
//           },
//         );

//         if (!response.ok) throw new Error("request failed");

//         const result = await response.json();
//         setReportsData(result);
//       } catch (error) {
//         console.log(error.message);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchData();
//   }, [appliedSearch]);

//   return (
//     <div>
//       <h2> {title} </h2>
//       <div>
//         <label>Search by catagory</label>
//         <input
//           type="text"
//           value={searchBar.catagory}
//           name="catagory"
//           onChange={handleChange}
//           placeholder="Enter value to search"
//         />
//         <label>Search By urgancy</label>
//         <input
//           type="text"
//           value={searchBar.urgancy}
//           name="urgancy"
//           onChange={handleChange}
//           placeholder="Enter value to search"
//         />
//         <button onClick={handleSearch}>Search</button>
//       </div>

//       <Table dataTable={reportsData ?? []} />
//     </div>
//   );
// }

// export default ReportsData;
