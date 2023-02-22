import { Component } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import FailedLogin from "./components/FailedLogin";
import NotFound from "./components/NotFound";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import SuccessLogin from "./components/SuccessLogin";
import VerifyUser from "./components/VerifyUser";
import AppContext from "./Context";

class App extends Component {
  state = { theme: true };

  setTheme = () => {
    this.setState((prevState) => ({
      theme: !prevState.theme,
    }));
  };

  render() {
    const { theme } = this.state;
    return (
      <AppContext.Provider
        value={{
          theme,
          setTheme: this.setTheme,
        }}
      >
        <Switch>
          <Route exact path="/" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/verify-user" component={VerifyUser} />
          <Route exact path="/success/login" component={SuccessLogin} />
          <Route exact path="/failed/login" component={FailedLogin} />
          <Route component={NotFound} />
        </Switch>
      </AppContext.Provider>
    );
  }
}
export default App;
