import { StyleSheet, useColorScheme } from "react-native"
import { Stack, useRouter } from "expo-router"
import { useEffect } from "react"
import { StatusBar } from "expo-status-bar"
import { Colors } from "../constants/Color"
import { useUser } from "../hooks/useUser"
import ThemedLoader from "../components/ThemedLoader"

const AppNavigator = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  const { user, authChecked } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (!authChecked) return

    if (user) {
      router.replace("/newfeed")
    } else {
      router.replace("/")
    }
  }, [user, authChecked])

  if (!authChecked) {
    return <ThemedLoader />
  }

  return (
    <>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: theme.navBackground },
          headerTintColor: theme.title,
          headerTitleAlign: "center",
          animation: "slide_from_left",
        }}
      >
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabsbar)" options={{ headerShown: false }} />
      </Stack>
    </>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})
