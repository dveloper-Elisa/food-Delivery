import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Link, useRouter } from 'expo-router'
import React from 'react'
import { KeyboardAvoidingView, Pressable, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function login() {
    const navigate = useRouter()
  return (
    <SafeAreaView className='bg-yellow-500 w-full h-screen justify-center items-center'>
      
      <View className='bg-white w-full rounded-t-3xl h-screen mt-96 flex flex-col p-10'>
        <Text className='font-extrabold text-[32px] tracking-wider'>Welcome</Text>
        <Text className='text-[12px] mt-5 mb-8'>To access your accunf and activities you requested to login First to see every thing be able to make the order, To Us Client is King today and always</Text>

      <KeyboardAvoidingView>
        <View>
          <Text className='font-bold text-[20px]'>Email or Mobile number</Text>
          <TextInput placeholder='example@example.com' className='bg-orange-200 rounded-lg px-2 py-3'/>
        </View>
        <View className='mt-2'>
          <Text className='font-bold text-[20px]'>Password</Text>
          <TextInput placeholder='******************' className='bg-orange-200 rounded-lg px-2 py-3' secureTextEntry/>
        </View>

        <Pressable>
          <Text className='text-orange-600 text-right mt-2 text-xs font-semibold'>Forgot Password</Text>
        </Pressable>
      </KeyboardAvoidingView>

      <View className='w-full h-fit justify-center items-center mt-20'>
        <Pressable className='bg-orange-600 rounded-3xl px-20 py-3'>
          <Text className='text-white font-light text-[18px] tracking-wider'>Log In</Text>
        </Pressable>

        <Text className='mt-5 text-xs'>Or sign up with</Text>
        <View className='flex flex-row items-center gap-5'>
            <MaterialIcons name='g-mobiledata' size={30} color={'orange'}/>
            <MaterialIcons name='facebook' size={30} color={'orange'}/>
            <MaterialIcons name='fingerprint' size={30} color={'orange'}/>
        </View>
<Pressable>
<Text className='mt-5 font-light'>Didn't have an account? <Link href={"./"} className='text-orange-600 text-sm'>Sign Up</Link></Text>
</Pressable>

      </View>

      <View>
      <Link href={'../'} className='text-blue-500 p-3 bg-green-500'> <Text> Back Home</Text></Link>
      </View>
      </View>

    </SafeAreaView>
  )
}