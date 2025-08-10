import { useState } from 'react';
import { Image, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '~/components/ui/button';
import { Card } from '~/components/ui/card';
import { Switch } from '~/components/ui/switch';
import { Text } from '~/components/ui/text';
import { Icons } from '~/lib/icons';

const UserScreen = () => {
  const [pushNotifications, setPushNotifications] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(false);

  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        {/* User Header Section */}
        <View className="mb-10 rounded-b-3xl border-x border-b border-border bg-white px-5 py-8">
          <View className="items-center">
            {/* Avatar */}
            <View className="mb-6 size-24 items-center justify-center rounded-full bg-gray-200">
              <Image
                source={{
                  uri: 'https://tonmoydeb.com/_next/image?url=https%3A%2F%2Fap-south-1.graphassets.com%2Fcmbtd9xq30uh307pj6n99eblf%2Fcmc7ncpra2wiw07o80n4rmmth&w=128&q=75',
                }}
                className="size-24 rounded-full"
              />
            </View>

            {/* Name */}
            <Text className="mb-2 text-2xl font-bold text-gray-900">John Doe</Text>

            {/* Address */}
            <View className="flex-row items-center">
              <Icons.Location className="mr-2 text-gray-500" size={16} />
              <Text className="text-sm text-gray-600">San Francisco, CA</Text>
            </View>
          </View>
        </View>

        {/* Content Area */}
        <View className="flex-1 gap-y-8 px-5">
          {/* Notification Settings */}
          <View className="gap-y-2">
            <Text className="mb-2 font-sans_bold text-base text-gray-900">Notifications</Text>

            {/* Push Notifications */}
            <Card className="flex-row items-center justify-between rounded-2xl p-4">
              <View>
                <Text className="font-sm font-sans_medium text-gray-900">Push Notifications</Text>
                <Text className="text-xs text-gray-500">Get notified about new job matches</Text>
              </View>

              <Switch checked={pushNotifications} onCheckedChange={setPushNotifications} />
            </Card>

            {/* Email Notifications */}
            <Card className="flex-row items-center justify-between rounded-2xl p-4">
              <View>
                <Text className="font-sm font-sans_medium text-gray-900">Email Notifications</Text>
                <Text className="text-xs text-gray-500">Receive job alerts via email</Text>
              </View>

              <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
            </Card>
          </View>

          {/* Account Settings */}
          <View className="gap-y-2">
            <Text className="mb-2 font-sans_bold text-base text-gray-900">Account</Text>

            <Button className="flex-row gap-x-2 rounded-xl" variant={'outline'}>
              <Icons.User size={16} />
              <Text>Update Profile</Text>
              <Icons.ChevronRight className="ml-auto" size={16} />
            </Button>

            <Button className="flex-row gap-x-2 rounded-xl" variant={'outline'}>
              <Icons.LogOut size={16} className="text-destructive" />
              <Text className="text-destructive group-active:text-destructive">Logout</Text>
              <Icons.ChevronRight className="ml-auto" size={16} />
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserScreen;
