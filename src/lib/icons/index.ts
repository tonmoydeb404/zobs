import { Bell, Bookmark, BriefcaseBusiness, Cog, Home, User, X } from 'lucide-react-native';
import { iconWithClassName } from './with-classname';

iconWithClassName(Home);
iconWithClassName(Cog);
iconWithClassName(BriefcaseBusiness);
iconWithClassName(User);
iconWithClassName(Bell);
iconWithClassName(Bookmark);
iconWithClassName(X);

export const Icons = {
  Setting: Cog,
  Home: Home,
  Work: BriefcaseBusiness,
  User: User,
  Notification: Bell,
  Bookmark: Bookmark,
  Close: X,
};

export { Bell, Bookmark, BriefcaseBusiness, Cog, Home, User, X };
