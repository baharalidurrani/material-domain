// import { AuthRoute } from "src/modules/auth/auth.routes";
import { AboutRoute } from "src/modules/about/about.routes";
import { ContactRoute } from "src/modules/contact/contact.routes";
import { HomeRoute } from "src/modules/home/home.routes";
import { InterestsRoute } from "src/modules/interests/interests.routes";
import { PlaceholderRoute } from "src/modules/placeholder/placeholder.routes";
import { SkillsRoute } from "src/modules/skills/skills.routes";

export const ROUTES = [
  HomeRoute,
  SkillsRoute,
  InterestsRoute,
  PlaceholderRoute,
  ContactRoute,
  AboutRoute,
];
