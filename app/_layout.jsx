// import { StyleSheet} from 'react-native'
// import {Stack} from "expo-router"
// import { useColorScheme } from 'react-native'
// import { Colors } from '../constants/Color'
// import { StatusBar } from 'expo-status-bar'
// import { UserProvider } from '../context/UserContext'
// import { NotesProvider } from '../context/NoteContext'
// import GuestAuth from "../components/auth/GuestAuth"
// const RootLayout = () => {

//     const colorScheme=useColorScheme()
//     const theme=Colors[colorScheme] ?? Colors.light

//   return (
//     <UserProvider>
//     <NotesProvider>
//     {/*  */}
//       <GuestAuth>
//      {/*  */}
//     <StatusBar style="auto"/>
//       <Stack screenOptions={{
//         headerStyle:{backgroundColor:theme.navBackground},
//         headerTintColor:theme.title,
//         headerTitleAlign:"center",
//         animation:"slide_from_left"
//         }}>
       
//         <Stack.Screen name="index" options={{title:"Home"}}/>
//         <Stack.Screen name="(auth)" options={{headerShown:false}}/>
//           <Stack.Screen name="(tabsbar)" options={{headerShown:false}}/>
//       </Stack>
//       {/*  */}
//       </GuestAuth>
//       {/*  */}
//       </NotesProvider>
//       </UserProvider>
//   )
// }

// export default RootLayout

// const styles = StyleSheet.create({})

//part 2------------------

// import { StyleSheet} from 'react-native'
// import {Stack,useRouter} from "expo-router"
// import { useColorScheme } from 'react-native'
// import { Colors } from '../constants/Color'
// import { StatusBar } from 'expo-status-bar'
// import { UserProvider } from '../context/UserContext'
// import { NotesProvider } from '../context/NoteContext'
//  import { useUser } from '../hooks/useUser'

// const RootLayout = () => {

//     const colorScheme=useColorScheme()
//     const theme=Colors[colorScheme] ?? Colors.light
//     const { user, authChecked } = useUser()
//      const router = useRouter()


// useEffect(() => {
//     if (!authChecked) return

//     if (user) {
//       router.replace("/profile")   
//     } else {
//       router.replace("/")          
//     }
//    }, [user, authChecked])

//   if (!authChecked) {
//     return <ThemedLoader />
//   }

//   return (
//     <UserProvider>
//     <NotesProvider>
//     <StatusBar style="auto"/>
//       <Stack screenOptions={{
//         headerStyle:{backgroundColor:theme.navBackground},
//         headerTintColor:theme.title,
//         headerTitleAlign:"center",
//         animation:"slide_from_left"
//         }}>
       
//         <Stack.Screen name="index" options={{title:"Home"}}/>
//         <Stack.Screen name="(auth)" options={{headerShown:false}}/>
//           <Stack.Screen name="(tabsbar)" options={{headerShown:false}}/>
//       </Stack>
//       </NotesProvider>
//       </UserProvider>
//   )
// }

// export default RootLayout

// const styles = StyleSheet.create({})



// app/_layout.jsx
import { UserProvider } from "../context/UserContext"
import { FurnituresProvider } from "../context/FurnitureContext"
import AppNavigator from "./AppNavigator" // make sure path is correct

export default function RootLayout() {
  return (
    <UserProvider>
      <FurnituresProvider>
        <AppNavigator />
      </FurnituresProvider>
    </UserProvider>
  )
}
