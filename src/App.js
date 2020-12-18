import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";

//Components
import Navbar from "views/Components/Navbar/Navbar";
import Footer from "views/Components/Footer/Footer";

//HOC
import WithNavbarAndFooter from "helpers/WithNavbarAndFooter";

//Routes
import LandingPage from "views/LandingPage/LandingPage";
import LoginPage from "views/LoginPage/LoginPage";
import ProfilePage from "views/ProfilePage/ProfilePage";
import AboutPage from "views/AboutPage/AboutPage";

function App(props) {
  //API Link
  const apiLink = "https://aptite.com";
  //State
  const [auth, setAuth] = React.useState({
    isLoggedIn: false,
    userData: {
      firstname: "example",
      lastname: "example",
      role: "user",
      username: "example125",
      email: "example125@mail.com",
    },
  });

  const setUser = () => {};

  const logUserOut = () => {};

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/about"
          component={(props) =>
            WithNavbarAndFooter(
              AboutPage,
              auth,
              apiLink,
              logUserOut,
              setUser,
              props
            )
          }
        />
        <Route
          exact
          path="/login"
          component={(props) =>
            WithNavbarAndFooter(
              LoginPage,
              auth,
              apiLink,
              logUserOut,
              setUser,
              props
            )
          }
        />
        <Route
          exact
          path="/profile"
          component={(props) =>
            WithNavbarAndFooter(
              ProfilePage,
              auth,
              apiLink,
              logUserOut,
              setUser,
              props
            )
          }
        />
        <Route
          exact
          path="/home"
          component={(props) =>
            WithNavbarAndFooter(
              LandingPage,
              auth,
              apiLink,
              logUserOut,
              setUser,
              props
            )
          }
        />
        <Route
          exact
          path="*"
          component={(props) => (
            <Redirect
              to={{
                pathname: "/home",
                state: {
                  from: props.location,
                },
              }}
            />
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
