import { GemAvatarLayout } from "@/components/altergard/gems-avatar-layout";
import { HomeButton } from "@/components/altergard/home-button";
import { HStack } from "@/components/ui/hstack";

export const HomeAvatarLayout = () => {
  return (
    <HStack className="w-full flex justify-between absolute top-0">
      <HomeButton />
      <GemAvatarLayout />
    </HStack>
  );
};
