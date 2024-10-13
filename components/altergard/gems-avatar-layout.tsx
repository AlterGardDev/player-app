import { Button } from "../ui/button";
import { HStack } from "../ui/hstack";
import { Image } from "../ui/image";
import { AvatarButton } from "./avatar-button";
import { GemsButton } from "./gems-button";

export const GemAvatarLayout = () => {
  return (
    <HStack>
        <GemsButton />
        <AvatarButton />
    </HStack>
  );
};
