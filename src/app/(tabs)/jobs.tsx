import { useState } from 'react';
import { FlatList, ScrollView, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import JobCard from '~/components/cards/job-card';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Text } from '~/components/ui/text';
import { Icons } from '~/lib/icons';

const tags = ['Senior designer', 'Designer', 'Full-time', 'Part-time'];

const JobsTab = () => {
  const insets = useSafeAreaInsets();
  const top = useSharedValue(0);
  const [headerHeight, setHeaderHeight] = useState(0);

  const headerStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: top.value }],
  }));

  return (
    <View className="flex-1 bg-white" style={{ paddingTop: insets.top }}>
      <FlatList
        data={[
          { key: 'Devin' },
          { key: 'Dan' },
          { key: 'Dominic' },
          { key: 'Jackson' },
          { key: 'James' },
          { key: 'Joel' },
          { key: 'John' },
          { key: 'Jillian' },
          { key: 'Jimmy' },
          { key: 'Julie' },
        ]}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={10}
        onScroll={(e) => {
          const y = e.nativeEvent.contentOffset.y;
          const clampedY = Math.min(y, headerHeight);
          top.value = withTiming(-clampedY, {
            duration: 100,
            easing: Easing.out(Easing.quad),
          });
        }}
        contentContainerStyle={{
          paddingTop: headerHeight + 16,
          paddingBottom: insets.bottom + 16,
          paddingHorizontal: 20,
        }}
        renderItem={() => (
          <View className="mb-3.5">
            <JobCard />
          </View>
        )}
      />

      <View className="absolute left-0 right-0" style={{ top: insets.top }}>
        <View className="relative">
          <Animated.View
            onLayout={(e) => setHeaderHeight(e.nativeEvent.layout.height)}
            style={[{ position: 'absolute', left: 0, right: 0 }, headerStyle]}>
            <View className="mb-5 rounded-b-3xl border-x border-b border-border bg-white px-5 py-8">
              <View>
                <View className="mb-8 flex-row justify-between">
                  <Text className="font-sans_bold text-2xl text-gray-900">Available Jobs</Text>

                  <Button size={'icon'} variant={'secondary'} className="hidden  rounded-full">
                    <Icons.Read size={18} />
                  </Button>
                </View>
                <View className="relative mb-3">
                  <Icons.Search
                    className="absolute left-3 top-2.5 z-50 text-muted-foreground"
                    size={22}
                  />
                  <Input className="pl-12" placeholder="Design" />
                </View>
                <View className="relative">
                  <Icons.Location
                    className="absolute left-3 top-2.5 z-50 text-[#FCA34D]"
                    size={22}
                  />
                  <Input className="pl-12" placeholder="California, USA" />
                </View>
              </View>
            </View>
            <ScrollView horizontal className="mb-5 ml-5">
              {tags.map((tag, index) => (
                <Button key={index} className="mr-2" variant={'secondary'}>
                  <Text>{tag}</Text>
                </Button>
              ))}
            </ScrollView>
          </Animated.View>
        </View>
      </View>

      <View className="absolute left-0 right-0 top-0 bg-white" style={{ height: insets.top }} />
    </View>
  );
};

export default JobsTab;
