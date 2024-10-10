import { router } from "expo-router";
import { Button } from "../ui/button";
import { Image } from "../ui/image";

export const HomeButton = () => {
  return (
    <Button
      className="w-[102px] h-[152px] m-0 p-0"
      variant="solid"
      action="primary"
      onPress={() => {
        router.navigate("/");
      }}
    >
      <Image
        source={require("@/assets/home-icon.png")}
        alt="Logo"
        className="h-[80%] w-[80%]"
      />
    </Button>
  );
};
