import { useRouter } from "expo-router";
import "../global.css"
import { Button, Image, Text, View } from "react-native";

export default function Index({}) {

  const navigate = useRouter()
  return (
    <View className="bg-yellow-600 h-screen justify-center items-center">
      <Image source={require("../assets/images/food order1.png")} className="" />

      <Button title="Next" onPress={()=> navigate.push("./screens/quickStart")}/>
    </View>
  );
}
