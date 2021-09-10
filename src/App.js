import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Pages
import ListClient from "./pages/ListClient";
import AddClient from "./pages/AddClient";
import EditClient from "./pages/EditClient";
import DeleteClient from "./pages/DeleteClient";

//State
import { ClientState } from "./context/Client/clientState";

const App = () => {
  return (
    <ClientState>
      <Router>
        <Switch>
          <Route component={DeleteClient} exact path='/delete/:id' />
          <Route component={EditClient} exact path='/edit/:id' />
          <Route component={AddClient} exact path='/add' />
          <Route component={ListClient} exact path='/' />
        </Switch>
      </Router>
    </ClientState>
  );
};

export default App;
