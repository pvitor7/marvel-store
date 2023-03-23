import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import ComicPage from "./ComicPage";


function Routes() {

    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/comic/:id" component={ComicPage} />
        </Switch>
    )
}

export default Routes;