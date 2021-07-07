import React from "react";
import FeaturedCelebrity from "./FeaturedCelebrity";
import ProfileLanding from "./ProfileLanding";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">

      <Router>
        <Switch>
          <Route exact path="/" component={FeaturedCelebrity} />
          <Route exact path="/ProfileLanding" component={ProfileLanding} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
