import { Heading } from "@/components/ui/heading";
import { SafeAreaView } from "@/components/ui/safe-area-view";
import { VStack } from "@/components/ui/vstack";
import { HomeButton } from "@/components/altergard/home-button";

export const GameView = () => {
  return (
    <SafeAreaView className="h-full w-full">
      <VStack className="h-[40%] w-full top-0">
        <HomeButton />
      </VStack>
      <VStack className="mt-10 pl-5">
        <Heading size="4xl">{"THIS IS THE GAME VIEW"}</Heading>
      </VStack>
    </SafeAreaView>
  );
};
