import {
  Link,
  createRootRoute,
  Outlet,
  createRoute,
} from "@tanstack/react-router";
import { FizzBuzzBox } from "./FizzBuzzBox";
import { Cheatsheet } from "./Cheatsheet";
import { Scoreboard } from "./Scoreboard";

const rootRoute = createRootRoute({
  component: () => (
    <>
      <div>
        <Link to="/"> FizzBuzz </Link>
        <Link to="/cheatsheet"> CheatSheet </Link>
        <Link to="/scoreboard"> Scoreboard </Link>
      </div>
      <Outlet />
    </>
  ),
});

const mainPage = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: FizzBuzzBox,
});

const cheatSheetPage = createRoute({
  getParentRoute: () => rootRoute,
  path: "/cheatsheet",
  component: Cheatsheet,
});

const scoreBoardPage = createRoute({
  getParentRoute: () => rootRoute,
  path: "/scoreboard",
  component: Scoreboard,
});

export const routeTree = rootRoute.addChildren({
  mainPage,
  cheatSheetPage,
  scoreBoardPage,
});
