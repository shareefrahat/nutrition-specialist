import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <div>
      <Link
        className={
          match
            ? " text-lg lg:text-xl text-green-800 border-b-4 border-b-green-800 p-2 rounded-sm"
            : "text-green-800 text-lg lg:text-xl p-2 border-b-4  border-transparent hover:border-b-gray-300 rounded-sm"
        }
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
};

export default CustomLink;
