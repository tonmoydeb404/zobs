import { FlatList, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '~/components/ui/button';
import { Card } from '~/components/ui/card';
import { Text } from '~/components/ui/text';
import { Icons } from '~/lib/icons';

interface Notification {
  id: string;
  type: 'job_alert' | 'message' | 'update';
  title: string;
  description: string;
  time: string;
  isRead: boolean;
  avatar?: string;
}

const mockNotifications: Notification[] = [
  {
    id: '1',
    type: 'job_alert',
    title: 'New Job Match!',
    description: 'Senior UI/UX Designer at Google matches your profile',
    time: '2 min ago',
    isRead: false,
  },
  {
    id: '2',
    type: 'message',
    title: 'Message from Tech Corp',
    description: 'We would like to schedule an interview with you',
    time: '1 hour ago',
    isRead: false,
  },
  {
    id: '3',
    type: 'update',
    title: 'Application Status Update',
    description: 'Your application for Frontend Developer has been reviewed',
    time: '3 hours ago',
    isRead: true,
  },
  {
    id: '4',
    type: 'job_alert',
    title: '5 New Jobs Posted',
    description: 'React Developer positions in your area',
    time: '1 day ago',
    isRead: true,
  },
  {
    id: '5',
    type: 'message',
    title: 'Message from StartupXYZ',
    description: 'Thank you for your interest in our company',
    time: '2 days ago',
    isRead: true,
  },
];

export default function NotificationsTab() {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-row justify-between px-5 py-11">
        <View className="flex-row items-center justify-between">
          <Text className="text-2xl font-bold text-gray-900">Notifications</Text>
        </View>

        <Button size={'icon'} variant={'secondary'} className="rounded-full">
          <Icons.Read size={18} />
        </Button>
      </View>

      <FlatList
        data={mockNotifications}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerClassName="px-5 gap-y-3 pb-10"
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Card className="flex-row gap-x-4 rounded-2xl p-4">
              <View className="mt-2 size-10 shrink-0 items-center justify-center rounded-full bg-orange-100">
                <Icons.Setting className="text-orange-500" />
              </View>
              <View className="flex-1">
                <Text className="font-sans_bold text-sm">{item.title}</Text>
                <Text className="mb-3 text-xs" textBreakStrategy="balanced" numberOfLines={0}>
                  {item.description}
                </Text>

                <Text className="text-xs text-muted-foreground">25 minute ago</Text>
              </View>
            </Card>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <View className="flex-1 items-center justify-center py-20">
            <Icons.Bell className="mb-4 text-gray-300" size={48} />
            <Text className="mb-2 text-lg font-medium text-gray-500">No notifications yet</Text>
            <Text className="px-8 text-center text-sm text-gray-400">
              You&apos;ll see job alerts, messages, and updates here when they arrive
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}
