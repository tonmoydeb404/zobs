import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import { Icons } from '~/lib/icons';
import { Button } from '../ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';

type Props = {};

const JobCard = (props: Props) => {
  const router = useRouter();
  return (
    <TouchableOpacity onPress={() => router.push('/jobs/hello')}>
      <Card className="rounded-[20px] shadow-none">
        <CardHeader className="flex-row items-start gap-2.5 p-5">
          <View className="size-10 items-center justify-center rounded-full bg-[#D6CDFE]">
            <Icons.Setting size={18} />
          </View>
          <View className="mr-auto">
            <Text className="mb-1 font-sans_bold text-sm">Product Designer</Text>
            <View className="flex-row items-center gap-x-[5px]">
              <Text className="text-xs">Google inc</Text>
              <View className="size-0.5 rounded-full bg-black" />
              <Text className="text-xs">California, USA</Text>
            </View>
          </View>
          <Button size={'icon'} variant={'ghost'}>
            <Icons.Bookmark size={18} />
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
    </TouchableOpacity>
  );
};

export default JobCard;
