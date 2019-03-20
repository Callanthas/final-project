import React from "react";
import { Link } from "react-router-dom";


function Card() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <h1 className="navbar-brand"> Admin.  </h1>
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">


        <li className="nav-item active">
          <Link className="nav-link" to="/newstudent">
            Add Student 
          </Link>
        </li>



      </ul>
    </nav>
  );
}

export default Card;
