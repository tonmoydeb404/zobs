import { FlatList, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import JobCard from '~/components/cards/job-card';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Text } from '~/components/ui/text';
import { Icons } from '~/lib/icons';

type Props = {};

const tags = ['Senior designer', 'Designer', 'Full-time', 'Part-time'];

const JobsTab = (props: Props) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="mb-5 rounded-b-3xl border-x border-b border-border bg-white px-5 py-8">
          <View className="mb-5">
            <Button size={'icon'} variant={'ghost'}>
              <Icons.Back />
            </Button>
          </View>
          <View>
            <View className="relative mb-3">
              <Icons.Search
                className="absolute left-3 top-2.5 z-50 text-muted-foreground"
                size={22}
              />
              <Input className="pl-12" placeholder="Design" />
            </View>
            <View className="relative">
              <Icons.Location className="absolute left-3 top-2.5 z-50 text-[#FCA34D]" size={22} />
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
          renderItem={({ item }) => (
            <View className="mb-3.5">
              <JobCard />
            </View>
          )}
          className="px-5"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default JobsTab;
