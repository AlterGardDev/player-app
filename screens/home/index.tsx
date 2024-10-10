import { Center } from "@/components/ui/center";
import { Heading } from "@/components/ui/heading";
import { SafeAreaView } from "@/components/ui/safe-area-view";
import { VStack } from "@/components/ui/vstack";
import { HomeAvatarLayout } from "./home-avatar-layout";
import { ScrollView } from "@/components/ui/scroll-view";
import { FlatList } from "@/components/ui/flat-list";
import { Button, ButtonText } from "@/components/ui/button";
import { Link, router } from "expo-router";

export const Home = () => {
  return (
    <SafeAreaView className="h-full w-full">
      <VStack className="h-[40%] w-full flex items-center justify-end">
        <HomeAvatarLayout />
        <VStack>
          <Center>
            <Heading size="xl">{"THIS IS ALTERGARD SUBTITLE"}</Heading>
            <Heading size="2xl">{"THIS IS ALTERGARD APP TITLE"}</Heading>
          </Center>
        </VStack>
      </VStack>
      <VStack className="mt-10 pl-5">
        <Heading size="xl">{"Horizontal Scroll"}</Heading>
        <FlatList
          horizontal
          data={["data1", "data2", "data3", "data4", "data5", "data6"]}
          renderItem={({ item }) => (
            <Button
              size="lg"
              className="mr-10"
              onPress={() => {
                router.navigate("/game-view");
              }}
            >
              <ButtonText>{item}</ButtonText>
            </Button>
          )}
          keyExtractor={(item) => item}
        />
      </VStack>
    </SafeAreaView>
  );
};
