import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import ComicPage from "./ComicPage";


function Routes() {

    return (
        <Switch>
            <Route exact path="/comic/:id" component={ComicPage} />
            <Route path="/:page?" component={Home} />
        </Switch>
    )
}

export default Routes;