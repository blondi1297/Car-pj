import React, {Component} from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import Products from "./Components/Products";
import Footer from "./Components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

          <Switch>
            <Route path="/products" component={Products} />
            <Route path="/" component={Landing} />
          </Switch>
        
        <Footer />
      </div>
    )
  }
}
export default App;