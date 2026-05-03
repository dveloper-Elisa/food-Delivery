import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import { Tabs } from "expo-router"

const TabLayout = () => (
<Tabs screenOptions={{headerShown:false}}>
    <Tabs.Screen name="index" options={{title:"Home", tabBarIcon:()=><MaterialIcons name='home' size={30} color={'orange'}/>}}/>
    <Tabs.Screen name="cart" options={{title:"Mycat", tabBarIcon:()=><MaterialIcons name='shop' size={30} color={'orange'}/>}}/>
</Tabs>
)

export default TabLayout