import { Switch, BrowserRouter, Route } from "react-router-dom";
import routers from "../config/routers";

export default function Routers() {
  return (
    <BrowserRouter>
      <Switch>
        {routers.map((route, i) => {
          const key = route.path || i;
          return <Route {...route} key={key} />;
        })}
      </Switch>
    </BrowserRouter>
  );
}
