import { Switch } from "@material-ui/core";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";


const App = () => {
  return (
    <Route>
      <Switch>
        <Route path="/">
          <Home />
        </Route>

        <Route path="/products">
          <ProductList />
        </Route>
      </Switch>
    </Route>
  );
};

export default App;