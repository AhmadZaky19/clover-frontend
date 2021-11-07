import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// PAGES
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Hire from "./pages/Hire";
import Login from "./pages/Login";
import RegisterWorkers from "./pages/RegisterWorkers";
import RegisterRecruiters from "./pages/RegisterRecruiters";
import ProfilePerusahaan from "./pages/ProfilePerusahaan";
import EditProfilePerusahaan from "./pages/EditProfilePerusahaan";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/hire" component={Hire} />
        <Route path="/login" exact component={Login} />
        <Route path="/register-workers" exact component={RegisterWorkers} />
        <Route path="/register-recruiters" exact component={RegisterRecruiters} />
        <Route path="/profile-perusahaan" exact component={ProfilePerusahaan} />
        <Route path="/edit-profile-perusahaan" exact component={EditProfilePerusahaan} />
        <Route path="/profile" exact component={ProfilePage} />
      </Switch>
    </Router>
  );
}

export default App;
