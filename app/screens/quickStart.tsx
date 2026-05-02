import { Link, useRouter } from "expo-router"
import React from "react"
import { Pressable, Text, View, Image, Button } from "react-native"

const QuickStart = () => {
    const router = useRouter()
    return (
        <View className="flex flex-col justify-center items-center w-full h-screen bg-orange-700">
            <Image source={require('../../assets/images/food order2.png')} />
            <Text className="text-white text-sm">Welcome to food delivery platform, Where </Text>
            <Text className="text-white text-sm">expectations meet reality</Text>

            {/* Login and Sign Up Buttons */}
            <View className="mt-[3rem] gap-1">
                <Pressable onPress={()=>router.push("./login")} className="bg-orange-300 px-20 py-3 rounded-3xl hover:cursor-pointer hover:bg-orange-400">
                    <Text className="text-orange-500 font-bold text-[16px]">Log In</Text>
                </Pressable>
                <Pressable className="bg-orange-100 px-20 py-3 rounded-3xl hover:cursor-pointer hover:bg-orange-200">
                    <Text className="text-orange-500 font-bold text-[16px]">Sign Up</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default QuickStart