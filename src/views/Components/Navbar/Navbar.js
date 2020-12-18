import React from "react";

//Icons
import { MdArrowDropDown } from "react-icons/md";
import { MdPersonAdd } from "react-icons/md";

//Logo
import Logo from "assets/img/app/ju.png";

//Css
import "./Style/navbarStyle.css";

const Navbar = (props) => {
  const { apiLink, auth, logOut } = props;

  const [classes, setClasses] = React.useState({
    collapse: "collapse",
    showInput: false,
    dropdownDisplay: "none",
    NavLinks: {
      home: "",
      about: "",
      login: "",
    },
  });

  const getActiveLink = () => {
    let pathname = props.location.pathname.trim().split(/[\s#?\/]+/)[1];
    const Classes = { ...classes };

    for (const nav in Classes.NavLinks) {
      Classes.NavLinks[nav] = "";
    }

    Classes.NavLinks[pathname] = "active";
    setClasses(Classes);
  };

  const toggleNavbar = () => {
    const Classes = { ...classes };
    Classes.collapse = Classes.collapse === "collapse" ? "" : "collapse";
    setClasses(Classes);
  };

  const handleDropDownClick = (button) => {
    if (button === "logout") {
      localStorage.removeItem("_id");
      localStorage.removeItem("token");
      logOut();
    }
  };

  const dropdownToggle = () => {
    const Classes = { ...classes };
    Classes.dropdownDisplay =
      Classes.dropdownDisplay === "block" ? "none" : "block";
    setClasses(Classes);
  };

  React.useEffect(() => {
    getActiveLink();
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top h6 bg-dark">
      <a
        className="navbar-brand"
        href="#"
        onClick={() => {
          props.history.push("/home");
        }}
      >
        <img
          src={Logo}
          alt="JU Library"
          width="40px"
          height="40px"
          style={{ display: "inline" }}
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={toggleNavbar}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className={`${classes.collapse} navbar-collapse `}
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav mr-auto">
          <li className={`nav-item ${classes.NavLinks.home}`}>
            <a
              className="nav-link"
              href="#"
              onClick={() => {
                props.history.push("/home");
              }}
            >
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className={`nav-item ${classes.NavLinks.about}`}>
            <a
              className="nav-link"
              href="#"
              onClick={() => {
                props.history.push("/about");
              }}
            >
              About
            </a>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className={`nav-item ${classes.NavLinks.login}`}>
            <button
              className="nav-link btn btn-link"
              onClick={() => {
                if (auth.isLoggedIn) props.history.push("/profile");
                else props.history.push("/login");
              }}
            >
              {auth.isLoggedIn ? (
                <img
                  className="rounded-circle border border-light"
                  src={`${apiLink}${auth.userData.profilePicUrl}`}
                  alt="name"
                  width="40px"
                  height="40px"
                />
              ) : (
                <MdPersonAdd size="40px" />
              )}
            </button>
          </li>
          {auth.isLoggedIn && (
            <li
              className={`nav-item dropdown ${
                classes.dropdownDisplay ? "active" : ""
              } `}
            >
              <a
                className="nav-link"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                onClick={dropdownToggle}
              >
                <MdArrowDropDown size="40px" />
              </a>
              <div
                className={`dropdown-menu dropdown-menu-right d-${classes.dropdownDisplay}`}
                aria-labelledby="navbarDropdown"
              >
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => handleDropDownClick("logout")}
                >
                  LogOut
                </a>
              </div>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
