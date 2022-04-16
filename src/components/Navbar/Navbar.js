import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import CustomLink from "../CustomLink/CustomLink";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { id: 1, path: "/", name: "HOME" },
    { id: 2, path: "/checkout", name: "CHECKOUT" },
    { id: 3, path: "/blogs", name: "BLOGS" },
    { id: 4, path: "/about", name: "ABOUT" },
  ];
  return (
    <>
      <nav>
        <div
          onClick={() => setOpen(!open)}
          className="text-green-800 py-2 lg:hidden"
        >
          {open ? (
            <XIcon className="w-8 inline"></XIcon>
          ) : (
            <MenuIcon className="w-8 inline"></MenuIcon>
          )}
        </div>
        <div>
          <div>
            <ul
              className={`${
                open
                  ? "flex flex-col justify-center gap-5 py-5 absolute right-0 left-0 top-16 bg-white shadow-md"
                  : "hidden lg:flex lg:flex-row lg:justify-evenly lg:mx-24 lg:py-4"
              }`}
            >
              {links.map((link) => (
                <li className="mx-5" key={link.id}>
                  <CustomLink to={link.path}>{link.name}</CustomLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Outlet />
      </nav>
    </>
  );
};

export default Navbar;
