import React from "react";

//Components
import Navbar from "views/Components/Navbar/Navbar";
import Footer from "views/Components/Footer/Footer";

const WithNavbarAndFooter = (
  Component,
  auth,
  apiLink,
  logUserOut,
  setUser,
  props
) => {
  return (
    <React.Fragment>
      <Navbar
        logOut={logUserOut}
        auth={{ ...auth }}
        apiLink={apiLink}
        {...props}
      />
      <Component auth={auth} apiLink={apiLink} setUser={setUser} {...props} />
      <Footer />
    </React.Fragment>
  );
};

export default WithNavbarAndFooter;
