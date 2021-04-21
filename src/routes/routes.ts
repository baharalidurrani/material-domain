import { About } from "../components/About/About";
import { Home } from "../components/Home/Home";
import { LongText } from "../components/Placeholder/LongText";

export const ROUTES = [
  { name: "Home", path: "/", component: Home },
  { name: "Long Text", path: "/long", component: LongText },
  { name: "About", path: "/about", component: About },
];
