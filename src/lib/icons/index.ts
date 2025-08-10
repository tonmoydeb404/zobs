import {
  ArrowLeft,
  Bell,
  Bookmark,
  BriefcaseBusiness,
  Cog,
  Home,
  MapPin,
  Search,
  User,
  X,
} from 'lucide-react-native';
import { iconWithClassName } from './with-classname';

iconWithClassName(Home);
iconWithClassName(Cog);
iconWithClassName(BriefcaseBusiness);
iconWithClassName(User);
iconWithClassName(Bell);
iconWithClassName(Bookmark);
iconWithClassName(X);
iconWithClassName(ArrowLeft);
iconWithClassName(Search);
iconWithClassName(MapPin);

export const Icons = {
  Setting: Cog,
  Home: Home,
  Work: BriefcaseBusiness,
  User: User,
  Notification: Bell,
  Bookmark: Bookmark,
  Close: X,
  Back: ArrowLeft,
  Search,
  Location: MapPin,
};

export { Bell, Bookmark, BriefcaseBusiness, Cog, Home, User, X };
