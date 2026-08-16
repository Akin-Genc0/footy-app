import { Image, Text, View } from "react-native";

type CardProps = {
  label?: string;
  header: string;
  subHeader: string;
  spots: number;
  profilePic: string;
  profileName: string;
  price: number;
};

export default function Card({
  label,
  header,
  subHeader,
  spots,
  profilePic,
  profileName,
  price,
}: CardProps) {
  return (
    <View className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      {label && (
        <Text className="mb-2 self-start rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
          {label}
        </Text>
      )}

      <Text className="text-lg font-bold text-slate-900">{header}</Text>
      <Text className="mt-1 text-sm text-slate-500">{subHeader}</Text>

      <View className="my-4 h-px bg-slate-100" />

      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center">
          <Image
            source={{ uri: profilePic }}
            className="h-10 w-10 rounded-full bg-slate-100"
          />
          <View className="ml-3">
            <Text className="text-sm font-semibold text-slate-800">
              {profileName}
            </Text>
            <Text className="text-xs text-slate-500">{spots} spots left</Text>
          </View>
        </View>

        <Text className="text-base font-bold text-slate-800">£ {price}.00</Text>
      </View>
    </View>
  );
}
