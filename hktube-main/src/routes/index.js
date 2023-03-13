import { HeaderOnly } from "~/layouts";

import Home from "~/pages/Home";
import Subscriptions from "~/pages/Subscriptions";
import Shorts from "~/pages/Shorts";
import Upload from "~/pages/Upload";
import Search from "~/pages/Search";
import Profile from "~/pages/Profile";
import Libarary from "~/pages/Libarary";
import Watch from "~/pages/Watch";
import Watched from "~/pages/Watched";
import Liked from "~/pages/Liked";
import Setting from "~/pages/Setting";
import Help from "~/pages/Help";
import Report from "~/pages/Report";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/Subscriptions", component: Subscriptions },
  { path: `/Profile`, component: Profile },
  { path: "/Shorts", component: Shorts },
  { path: "/Upload", component: Upload, layout: HeaderOnly },
  { path: "/Search", component: Search, layout: null },

  { path: "/Libarary", component: Libarary },
  { path: "/Watched", component: Watched },
  { path: "/Liked", component: Liked },
  { path: "/Setting", component: Setting },
  { path: "/Help", component: Help },
  { path: "/Report", component: Report },
  
  { path: "/Watch", component: Watch, layout: HeaderOnly },
];

export { publicRoutes };
