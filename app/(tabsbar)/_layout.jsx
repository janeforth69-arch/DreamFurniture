import { StyleSheet,useColorScheme} from 'react-native'
import {Colors} from "../../constants/Color"
import {Ionicons} from "@expo/vector-icons"
import {Tabs} from "expo-router"
import UserAuth from "../../components/auth/UserAuth"

const TabsLayout = () => {

     const colorScheme=useColorScheme()
      const theme=Colors[colorScheme] ?? Colors.light

  return (
   <UserAuth>
   {/* <Tabs screenOptions={{headerShown:false,
  tabBarStyle:{backgroundColor:theme.navBackground,
                paddingTop:8,
                height:100
                },
  tabBarActiveTintColor:theme.iconColorFocused,
  tabBarInactiveTintColor:theme.iconColor
   }}>


<Tabs.Screen name="newfeed"  options={{title:"",tabBarIcon:({focused})=>(
   <Ionicons size={25} name={focused ? "newspaper" : "newspaper-outline"}/>
)}}/>
<Tabs.Screen name="furniture"  options={{title:"",tabBarIcon:({focused})=>(
   <Ionicons size={24} name={focused ? "person" : "person-outline"}/>
)}}/>
<Tabs.Screen name="create"  options={{title:"",tabBarIcon:({focused})=>(
   <Ionicons size={24} name={focused ? "create" : "create-outline"}/>
)}}/>
<Tabs.Screen name="profile"  options={{title:"",tabBarIcon:({focused})=>(
   <Ionicons size={24} name={focused ? "list" : "list-outline"}/>
)}}/>
<Tabs.Screen name="furnitures/[id]" options={{href:null}} />
   </Tabs> */}
   <Tabs
  screenOptions={{
    headerShown: false,
    tabBarStyle: {
      backgroundColor: theme.navBackground,
      height: 100,
      paddingTop: 10,
    },
    tabBarActiveTintColor: theme.iconColorFocused,
    tabBarInactiveTintColor: theme.iconColor,
    tabBarLabelStyle: { display: "none" },
  }}
>
  <Tabs.Screen
    name="newfeed"
    options={{
      title: "",
      tabBarIcon: ({ color, focused }) => (
        <Ionicons
          size={25}
          color={color}
          name={focused ? "newspaper" : "newspaper-outline"}
        />
      ),
    }}
  />

  <Tabs.Screen
    name="furniture"
    options={{
      title: "",
      tabBarIcon: ({ color, focused }) => (
        <Ionicons
          size={24}
          color={color}
          name={focused ? "person" : "person-outline"}
        />
      ),
    }}
  />

  <Tabs.Screen
    name="create"
    options={{
      title: "",
      tabBarIcon: ({ color, focused }) => (
        <Ionicons
          size={24}
          color={color}
          name={focused ? "create" : "create-outline"}
        />
      ),
    }}
  />

  <Tabs.Screen
    name="profile"
    options={{
      title: "",
      tabBarIcon: ({ color, focused }) => (
        <Ionicons
          size={24}
          color={color}
          name={focused ? "list" : "list-outline"}
        />
      ),
    }}
  />

  <Tabs.Screen name="furnitures/[id]" options={{ href: null }} />
    <Tabs.Screen name="allfurnitures/[id]" options={{ href: null }} />
</Tabs>

   </UserAuth>
  )
}

export default TabsLayout

const styles = StyleSheet.create({})