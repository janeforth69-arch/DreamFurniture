
import { UserProvider } from "../context/UserContext"
import { FurnituresProvider } from "../context/FurnitureContext"
import AppNavigator from "./AppNavigator" 

export default function RootLayout() {
  return (
    <UserProvider>
      <FurnituresProvider>
        <AppNavigator />
      </FurnituresProvider>
    </UserProvider>
  )
}
