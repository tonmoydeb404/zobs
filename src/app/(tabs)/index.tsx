import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '~/components/ui/card';
import { Text } from '~/components/ui/text';
import { Bookmark, BriefcaseBusiness, Cog } from '~/lib/icons';

export default function Tab() {
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
        <Card className="rounded-[20px] shadow-none">
          <CardHeader className="flex-row items-start gap-2.5 p-5">
            <View className="size-10 items-center justify-center rounded-full bg-[#D6CDFE]">
              <Cog size={18} />
            </View>
            <View className="mr-auto">
              <Text className="font-sans_bold mb-1 text-sm">Product Designer</Text>
              <View className="flex-row items-center gap-x-[5px]">
                <Text className="text-xs">Google inc</Text>
                <View className="size-0.5 rounded-full bg-black" />
                <Text className="text-xs">California, USA</Text>
              </View>
            </View>
            <Button size={'icon'} variant={'ghost'}>
              <Bookmark size={18} />
            </Button>
          </CardHeader>
          <CardContent className="pb-2.5">
            <Text className="font-sans_semibold text-sm">
              $15K<Text className="font-sans text-xs text-muted-foreground">/Mo</Text>
            </Text>
          </CardContent>
          <CardFooter className="gap-x-2 pb-5">
            <Text className="rounded-lg bg-muted px-3 py-1 text-xs text-[#524B6B]">
              Senior designer
            </Text>
            <Text className="rounded-lg bg-muted px-3 py-1 text-xs text-[#524B6B]">Full time</Text>
          </CardFooter>
        </Card>
      </View>
    </SafeAreaView>
  );
}
