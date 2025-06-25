import React from "react";
import { Links, NavLink, useLocation } from "react-router-dom";

function Navbar() {

  const path = useLocation().pathname;


  const links = 

    [
      {
        id:1, name:'home', path:'/',

      },
      {
        id:2, name:'blog' , path:'/blog',

      },
      {
        id:3, name:'contact', path:'/contact'
      },
      
    ]

    console.log(path);


    
   
  

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm h-[80px]">
        <div className="navbar-start">
          <div className="dropdown">

            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 md:hidden"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />{" "}
              </svg>
            </div>

            <img className="hidden md:block -mt-6" width="48" height="48" src="https://img.icons8.com/fluency/48/ai-generated-code.png" alt="ai-generated-code"/>

            <ul
              tabIndex={0}
              className="   menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {/* {links} */}



              {
                links.map((items,key)=>(
                  <nav key={key} className="flex flex-col gap-4">

                    <NavLink to={items.path} className={`${items.path===path ? "text-white border-b-2 mt-1 border-blue-500" : "text-white"}`}>

                      {items.name}
                    </NavLink>

                  </nav>
                ))
              }
                <button className="bg-blue-400 px-4 py-2 rounded">FREE TRIAL</button>


            </ul>
          </div>
        </div>

        <div className="navbar-end flex ol gap-x-3 mr-10 md:visible invisible">
              {
                links.map((items,key)=>(
                  <nav key={key}>

                    <NavLink to={items.path} className={`${items.path===path ? "text-white border-b-2 mt-1 border-blue-500" : "text-white"}`}>

                      {items.name}
                    </NavLink>

                  </nav>
                ))
              }
          <button className="bg-blue-400 px-4 py-2 rounded">FREE TRIAL</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
