import { Avatar, AvatarFallbackText } from "../ui/avatar";
import { Button, ButtonText } from "../ui/button";

export const AvatarButton = () => {
  return (
    <Button size="md" className="bg-transparent">
      <Avatar size="md">
        <AvatarFallbackText>Jane Doe</AvatarFallbackText>
      </Avatar>
    </Button>
  );
};
