import { Tabs } from 'expo-router';
import { Bell, BriefcaseBusiness, Home, User } from '~/lib/icons';

const screens = [
  { label: 'Jobs', icon: BriefcaseBusiness, name: 'jobs' },
  { label: 'Home', icon: Home, name: 'index' },
  { label: 'Notifications', icon: Bell, name: 'notifications' },
  { label: 'User', icon: User, name: 'user' },
];

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { height: 72, paddingTop: 10 },
        tabBarShowLabel: false,
      }}>
      {screens.map((screen) => (
        <Tabs.Screen
          key={screen.name}
          name={screen.name}
          options={{
            title: screen.label,
            tabBarIcon: ({ color }) => <screen.icon size={24} color={color} />,
          }}
        />
      ))}
    </Tabs>
  );
}
