import { lazy } from "react";
import { route } from "../Helpers/utils";

const Home = lazy(() => import("../Components/Pages/Home/Home"));
const NotFound = lazy(() => import("../Components/Pages/404/404"));

const routers = [
  route(Home, "/"),
  route(NotFound),
];

export default routers;
