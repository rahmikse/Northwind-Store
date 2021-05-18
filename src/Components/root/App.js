import React from "react";
import Navi from "../navi/Navi";
import {Container} from "reactstrap";
import DashBord from "./DashBord";
import {Route, Switch} from "react-router-dom"
import CartDetail from "../cart/CartDetail";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import NotFound from "../common/NotFound";
function App() {
    return (
        <Container className={App}>
            <Navi/>
            <Switch>
                <Route path="/" exact component={DashBord}/>
                <Route path="/product"  component={DashBord}/>
                <Route path="/saveProduct/:productId"  component={AddOrUpdateProduct} />
                <Route path="/saveProduct"  component={AddOrUpdateProduct} />
                <Route path="/cart"  component={CartDetail} />
                <Route component={NotFound} />

            </Switch>

        </Container>
    );
}

export default App;
