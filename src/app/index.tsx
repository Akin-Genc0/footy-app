import { View } from "react-native";
import NavBar from "./components/navbar";
export default function Home() {
  return (
    <View className="flex-1 items-center justify-center">
      <NavBar
        items={[
          {
            label: "Home",
            link: "/",
            linkText: "Home",
            icon: "home",
          },
          {
            label: "Games",
            link: "/games",
            linkText: "Games",
            icon: "search",
          },
          {
            label: "Venues",
            link: "/venues",
            linkText: "Venues",
            icon: "map-pin",
          },
          {
            label: "Messages",
            link: "/messages",
            linkText: "Messages",
            icon: "message-circle",
          },
          {
            label: "Profile",
            link: "/profile",
            linkText: "Profile",
            icon: "user",
          },
        ]}
      />
    </View>
  );
}
