import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/shop";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
