import "@/global.css";
import { useRouter } from "expo-router";
import { Button, Image, View } from "react-native";

export default function Index({}) {

  const navigate = useRouter()
  return (
    <View className="bg-yellow-600 h-screen justify-center items-center">
      <Image source={require("@/assets/images/food order1.png")} className="" />

<View className="flex flex-col gap-3">
      <Button title="Next" onPress={()=> navigate.push("./(screens)/quickStart")}/>
      <Button title="Shoping" onPress={()=> navigate.push("./(shoping)/cart")} />
        </View>
    </View>
  );
}
