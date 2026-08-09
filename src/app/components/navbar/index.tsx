import { Pressable, View, Text } from "react-native";
import { usePathname, useRouter } from "expo-router";
import Feather from "@expo/vector-icons/Feather";

type NavItem = {
  label: string;
  link: string;
  linkText: string;
  icon?: keyof typeof Feather.glyphMap;
};

type NavBarProps = {
  items: NavItem[];
};

export default function NavBar({ items }: NavBarProps) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <View className="absolute bottom-5 left-4 right-4 flex-row items-center rounded-full border border-slate-200 bg-white p-1.5 shadow-lg">
      {items.map((item) => {
        const isActive = pathname === item.link;

        return (
          <Pressable
            key={item.link}
            accessibilityLabel={item.label}
            onPress={() => router.push(item.link as any)}
            className={`h-[52px] flex-1 flex-row items-center justify-center rounded-3xl active:opacity-80 ${
              isActive ? "flex-[1.8] gap-2 bg-slate-100 px-3.5" : ""
            }`}
          >
            {item.icon && (
              <Feather
                name={item.icon}
                size={22}
                color={isActive ? "#334155" : "#94A3B8"}
              />
            )}

            {isActive && (
              <Text className="text-sm font-bold text-slate-700">
                {item.linkText}
              </Text>
            )}
          </Pressable>
        );
      })}
    </View>
  );
}
