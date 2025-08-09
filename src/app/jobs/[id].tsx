import { useRouter } from 'expo-router';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '~/components/ui/button';
import { Text } from '~/components/ui/text';
import { Icons } from '~/lib/icons';

const list = [
  'Sed ut perspiciatis unde omnis iste natus error sit.',
  'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur & adipisci velit.',
  'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
  'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur',
];

export default function JobDetailsScreen() {
  const router = useRouter();
  return (
    <SafeAreaView className="flex flex-col">
      <View>
        <Button
          onPress={router.back}
          size={'icon'}
          variant={'secondary'}
          className="absolute right-6 top-4 z-50 rounded-full">
          <Icons.Close />
        </Button>
      </View>
      <ScrollView className="h-full flex-grow">
        <View className="pb-24 pt-12">
          <View className="mb-16 items-center justify-center">
            <View className="mb-3.5 size-20 items-center justify-center rounded-full bg-red-100">
              <Icons.Setting className="size-20 text-red-500" size={34} />
            </View>
            <Text className="mb-1 font-sans_bold text-lg">UI/UX Designer</Text>
            <View className="flex-row items-center gap-3">
              <Text>Google</Text>
              <View className="size-1.5 rounded-full bg-black" />
              <Text>California</Text>
              <View className="size-1.5 rounded-full bg-black" />
              <Text>1 day ago</Text>
            </View>
          </View>

          <View className="mb-10 px-5">
            <Text className="mb-3.5 font-sans_bold text-sm">Job Description</Text>
            <Text className="mb-4 text-xs leading-relaxed text-[#524B6B]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Porro, dolores possimus deleniti sequi,
              atque in vero placeat provident quasi beatae error quis laudantium amet reprehenderit
              minima ullam. Perferendis quisquam dolorem eius nesciunt nostrum nulla cupiditate
              eligendi atque laudantium maxime assumenda id distinctio aliquam illo quas architecto
              nisi accusamus, laborum officiis et vero illum explicabo.
            </Text>
            <Button size={'sm'} variant={'secondary'} className="self-start">
              <Text>Read more</Text>
            </Button>
          </View>

          <View className="mb-10 px-5">
            <Text className="mb-3.5 font-sans_bold text-sm">Requirements</Text>
            <View className="gap-y-1">
              {list.map((item, index) => (
                <View key={index} className="flex-row items-center">
                  <Text className="mr-2">{'\u2022'}</Text>
                  <Text className="flex-grow break-all text-xs leading-relaxed text-[#524B6B]">
                    {item}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
      <View className="absolute bottom-0 left-0 w-full shrink-0 flex-row items-center justify-center gap-2 gap-x-4 border-t border-t-gray-200 bg-background px-5 pb-8 pt-5">
        <Button className="grow">
          <Text className="">Apply Now</Text>
        </Button>
        <Button size={'icon'} variant={'ghost'}>
          <Icons.Bookmark />
        </Button>
      </View>
    </SafeAreaView>
  );
}
