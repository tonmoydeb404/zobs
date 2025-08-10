import {
  ArrowLeft,
  Bell,
  Bookmark,
  Briefcase,
  BriefcaseBusiness,
  Cog,
  Home,
  MapPin,
  MessageCircle,
  Search,
  User,
  X,
} from 'lucide-react-native';
import { iconWithClassName } from './with-classname';

iconWithClassName(Home);
iconWithClassName(Cog);
iconWithClassName(BriefcaseBusiness);
iconWithClassName(Briefcase);
iconWithClassName(User);
iconWithClassName(Bell);
iconWithClassName(Bookmark);
iconWithClassName(X);
iconWithClassName(ArrowLeft);
iconWithClassName(Search);
iconWithClassName(MapPin);
iconWithClassName(MessageCircle);

export const Icons = {
  Setting: Cog,
  Home: Home,
  Work: BriefcaseBusiness,
  User: User,
  Notification: Bell,
  Bell: Bell,
  Bookmark: Bookmark,
  Close: X,
  Back: ArrowLeft,
  Search,
  Location: MapPin,
  Briefcase: Briefcase,
  MessageCircle: MessageCircle,
};

export { Bell, Bookmark, BriefcaseBusiness, Cog, Home, User, X };
