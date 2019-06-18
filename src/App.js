import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Feed from "./components/Feed";
import Profile from "./components/Profile";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" component={Feed} exact />
          <Route path="/profile" component={Profile} />
          <Route
            path="*"
            render={() => (
              <div className="notfound">
                <h1>Page not found</h1>
              </div>
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
