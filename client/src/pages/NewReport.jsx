import { useState } from "react";
import { useNavigate } from "react-router";

function NewReport() {
  const navigate = useNavigate();
  const [reportForm, setReportForm] = useState({
    catagory: "",
    urgancy: "",
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setReportForm((prevReport) => ({ ...prevReport, [name]: value }));
  }

  async function handelSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch(BASE_URL + "", {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(reportForm)
      },)
      if (!response.ok){
        throw new Error('send report faild');
      }
      alert('New report send');
      navigate("/");
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <div>
      <h2>New Report</h2>
      <form onSubmit={handelSubmit}>
        <label>category</label>
        <input
          type="text"
          name="catagory"
          value={reportForm.catagory}
          onChange={handleChange}
          placeholder="catagory"
        />
        <label>urgency</label>
        <input
          type="text"
          name="urgancy"
          value={reportForm.urgancy}
          onChange={handleChange}
          placeholder="urgancy"
        />
        <label>message</label>
        <input
          name="message"
          value={reportForm.message}
          onChange={handleChange}
          placeholder="Enter report context"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default NewReport;
// import React, { useState } from "react";
// import { useNavigate } from "react-router";

// function NewReport() {
//   const navigate = useNavigate();
//   const [reportForm, setReportForm] = useState({
//     catagory: '',
//     urgancy: '',
//     message: '',
//   })

//   function handleChange(e: React.ChangeEvent<HTMLInputElement>){
//     const {name, value} = e.target;
//     setReportForm((prevReport) => ({...prevReport, [name]: value}))
//   }

//   async function handelSubmit(e: React.FormEvent<HTMLFormElement>){
//     e.preventDefault();
//     navigate('/')
//   }

//   // useEffect(() => {
//   //   first

//   //   return () => {
//   //     second
//   //   }
//   // }, [third])

//   return (
//     <div>
//       <h2>New Report</h2>
//       <form onSubmit={handelSubmit}>
//         <label>category</label>
//         <input type="text" name="catagory" value={reportForm.catagory} onChange={handleChange} placeholder="catagory" />
//         <label>urgency</label>
//         <input type="text" name="urgancy" value={reportForm.urgancy} onChange={handleChange} placeholder="urgancy" />
//         <label>message</label>
//         <input name="message" value={reportForm.message} onChange={handleChange} placeholder="Enter report context" />
//         <button type="submit">Send</button>
//       </form>
//     </div>
//   );
// }

// export default NewReport;
