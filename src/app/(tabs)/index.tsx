import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import JobCard from '~/components/cards/job-card';
import { Text } from '~/components/ui/text';
import { BriefcaseBusiness } from '~/lib/icons';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="mb-10 mt-16 px-6">
        <Text className="font-sans_bold text-2xl">
          Hello
          {'\n'}
          Orlando Diggs.
        </Text>
      </View>

      <View className="mb-4 px-6">
        <Text className="font-sans_bold text-base">Find Your Job</Text>
      </View>
      <View className="mb-10 h-48 flex-row gap-4 px-6">
        <View className="flex-grow items-center justify-center rounded-xl bg-[#AFECFE] text-center">
          <BriefcaseBusiness className="mb-3" size={34} />
          <Text className="font-sans_bold text-xl">44.5k</Text>
          <Text className="text-sm">Remote Job</Text>
        </View>
        <View className="flex-grow gap-4">
          <View className="flex-grow items-center justify-center rounded-xl bg-[#BEAFFE]">
            <Text className="font-sans_bold text-xl">66.8k</Text>
            <Text className="text-sm">Full Time</Text>
          </View>
          <View className="flex-grow items-center justify-center rounded-xl bg-[#FFD6AD]">
            <Text className="font-sans_bold text-xl">38.9k</Text>
            <Text className="text-sm">Part Time</Text>
          </View>
        </View>
      </View>

      <View className="mb-4 px-6">
        <Text className="font-sans_bold text-base">Recent Job List</Text>
      </View>
      <View className="px-6">
        <JobCard />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
