import React from "react";

const Header = ({ title, numMovies }) => {
  return (
    <div>
      <div className="text-black">
        <h4>
          {`${title}  `}
          <span className="badge badge-pill badge-success" data-test="header-number">{numMovies}</span>
        </h4>
      </div>
    </div>
  );
};

export default Header;