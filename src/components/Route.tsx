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
      <div className="navbar">
        <Link className="links" to="/">
          FizzBuzz
        </Link>
        <Link className="links" to="/cheatsheet">
          CheatSheet
        </Link>
        <Link className="links" to="/scoreboard">
          Scoreboard
        </Link>
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
