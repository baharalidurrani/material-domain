import { About } from "../components/About/About";
import { Home } from "../components/Home/Home";
import { LongText } from "../components/Placeholder/LongText";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import NewReleasesIcon from "@material-ui/icons/NewReleases";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Skills } from "../components/Skills/Skills";
import { Interests } from "../components/Interests/Interests";
import { Contact } from "../components/Contact/Contact";

export const ROUTES = [
  { name: "Home", path: "/", component: Home, icon: HomeIcon },
  { name: "Skills", path: "/skills", component: Skills, icon: FavoriteIcon },
  { name: "Interests", path: "/interests", component: Interests, icon: NewReleasesIcon },
  { name: "Contact", path: "/contact", component: Contact, icon: NewReleasesIcon },
  { name: "Long Text", path: "/long", component: LongText, icon: NewReleasesIcon },
  { name: "About", path: "/about", component: About, icon: InfoIcon },
];
