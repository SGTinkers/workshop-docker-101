import './App.css';
import { HomeView } from "../../views/HomeView/HomeView";
import { AboutView } from "../../views/AboutView/AboutView";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { ContactUsView } from "../../views/ContactUsView/ContactUsView";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to={"/"}>Home</Link>
        &nbsp;|&nbsp;
        <Link to={"/about"}>About</Link>
        &nbsp;|&nbsp;
        <Link to={"/contact-us"}>Contact Us</Link>
      </div>
      <Switch>
        <Route exact path={"/"} component={HomeView} />
        <Route exact path={"/about"} component={AboutView} />
        <Route exact path={"/contact-us"} component={ContactUsView} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
