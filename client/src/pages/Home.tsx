import React from "react";
import { Link } from "react-router";

function Home() {
  return (
    <>
      <div>
        <Link to={'/login'}> Agent</Link>
        <Link to={'/login'}> Admin</Link>  
      </div>
    </>
  );
}

export default Home;
