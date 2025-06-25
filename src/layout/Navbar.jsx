import React from "react";
import { Links, NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const path = useLocation().pathname;

  const links = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Blog",
      path: "/blog",
    },
    {
      id: 3,
      name: "Contact",
      path: "/contact",
    },
  ];

  console.log(path);

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links.map((items, key) => (
                <nav key={key} className="flex flex-col gap-4">
                  <NavLink
                    to={items.path}
                    className={`${
                      items.path === path
                        ? "text-white border-b-2 mt-1 border-blue-500"
                        : "text-white"
                    }`}
                  >
                    {items.name}
                  </NavLink>
                </nav>
              ))}
              <button className="bg-blue-400 px-4 py-2 rounded cursor-pointer">
                FREE TRIAL
              </button>
            </ul>
          </div>

          <img className="md:visible invisible" src="https://img.icons8.com/fluency/48/ai-generated-code.png"/>

        </div>
        <div className="navbar-center hidden lg:flex">

          <ul className="menu flex flex-row justify-center items-center gap-x-5">

             {
                links.map((items,key)=>(
                  <nav key={key} className="flex flex-col gap-4">

                    <NavLink to={items.path} className={`${items.path===path ? "text-white border-b-2 mt-1 border-blue-500 font-semibold" : "text-white font-semibold"}`}>

                      {items.name}
                    </NavLink>

                  </nav>
                ))
              }
             
               


          </ul>
        </div>
        <div className="navbar-end">
             <button className="bg-blue-400 px-4 py-2 rounded">
                FREE TRIAL
              </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
