import React from "react";
import axios from "axios";

//Image
import Loading from "assets/img/loading/loading.gif";

//Sections
import Login from "./Sections/Login";

const LoginPage = (props) => {
  const { apiLink, auth, setUser } = props;
  const { isLoggedIn } = auth;

  const [loading, setLoading] = React.useState(false);
  const [authFaild, setAuthFaild] = React.useState(false);

  const handleFormSubmit = (formData) => {
    setLoading(true);
    //console.log(formData);
    axios
      .post(`${apiLink}/users/login`, {
        username: formData.username,
        password: formData.password,
      })
      .then((response) => {
        setLoading(false);
        console.log(response);
        localStorage.setItem("token", response.data.token);
        props.setUser(response.data.token);
        props.history.push("/home");
      })
      .catch((err) => {
        setLoading(false);
        console.log("err" + err);
        if (err.response && err.response.status === 401) {
          setAuthFaild(true);
        }
      });
  };

  React.useEffect(() => {
    if (isLoggedIn) {
      props.history.push("/home");
    }
  }, []);

  return (
    <React.Fragment>
      {!loading ? (
        <div className="px-4" style={{ minHeight: "80vh", paddingTop: "80px" }}>
          <Login
            setUser={setUser}
            authFaild={authFaild}
            setAuthFaild={setAuthFaild}
            handleFormSubmit={handleFormSubmit}
            {...props}
          />
        </div>
      ) : (
        <div className="d-flex" style={{ height: "100vh" }}>
          <div className="align-self-center w-100 text-center">
            <img width="64px" height="64px" src={Loading} />
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default LoginPage;
