import { SafeAreaView } from "@/components/ui/safe-area-view";
import { ScrollView } from "@/components/ui/scroll-view";
import { Text } from "@/components/ui/text";


export const Home = () => {
  return (
    <SafeAreaView className="h-full w-full">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 100,
          flexGrow: 1,
        }}
        className="flex-1 m-8"
      >
      <Text>
        {"THIS IS ALTERGARD APP"}
      </Text>
      </ScrollView>
    </SafeAreaView>
  );
};
