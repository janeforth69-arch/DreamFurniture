
import { Image, useColorScheme } from 'react-native'

// images
import DarkLogo from '../assets/img/dark.jpg'
import LightLogo from '../assets/img/light.jpg'

const ThemedLogo = ({style,...props}) => {
  const colorScheme = useColorScheme()
  
  const logo = colorScheme === 'dark' ? DarkLogo : LightLogo

  return (
    <Image source={logo} style={style} {...props}/>
  )
}

export default ThemedLogo