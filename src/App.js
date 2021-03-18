import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";
import Header from "./components/Header";
import Work from "./components/Work";
import Skills from "./components/Skills";
function App() {
  return (
    <div className="app">
      {/* <Banner />
      <About /> */}
      <Header />
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about" component={About}>
              <About />
            </Route>
            <Route path="/works" component={withRouter(Work)}>
              <Work />
            </Route>

            <Route path="/" exact component={Banner}>
              <Banner />
            </Route>
            <Route path="/skills" component={Skills}>
              <Skills />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
