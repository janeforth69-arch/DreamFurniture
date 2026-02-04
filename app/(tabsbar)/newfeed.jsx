import { useEffect } from "react"
import { StyleSheet, FlatList, Pressable, Image, View ,useColorScheme} from 'react-native'
import { Colors } from '../../constants/Color'
import { useFurniture } from "../../hooks/useFurniture"
import { Dimensions } from "react-native"

import ThemedCard from "../../components/ThemedCard"
import Space from "../../components/Space"
import ThemedText from "../../components/ThemeText"
import ThemedView from "../../components/ThemedView"
import { useRouter } from "expo-router"


const AllFurnitures = () => {
  const router = useRouter()
  const { allFurnitures } = useFurniture()
  const screenWidth = Dimensions.get("window").width

let numColumns = 2 // col-sm
if (screenWidth >= 768) numColumns = 3 // col-md
if (screenWidth >= 1024) numColumns = 4 // col-lg



const colorScheme = useColorScheme()
const theme = Colors[colorScheme] ?? Colors.light

const renderItem = ({ item }) => {
  const firstImageUrl =
    item.imageUrls?.length > 0 ? item.imageUrls[0] : null

  return (
    <Pressable
     style={styles.gridItem}
      onPress={() => router.push(`allfurnitures/${item.$id}`)}
    >
      <ThemedCard style={styles.card}>
        {firstImageUrl ? (
          <Image source={{ uri: firstImageUrl }} style={styles.image} />
        ) : (
          <View style={styles.noImage}>
            <ThemedText>No Image</ThemedText>
          </View>
        )}
        <ThemedView style={styles.infoBox}>
        <ThemedText style={styles.furnitureType} numberOfLines={1}>
          Furniture : {item.furnitureType}
        </ThemedText>

        <ThemedText style={styles.price}>
          Price : $ {item.price}
        </ThemedText>
        </ThemedView>
      </ThemedCard>
    </Pressable>
  )
}


// useEffect(() => {
//   fetchAllFurniture()
// }, [])

  return (
    <ThemedView style={styles.container} safe={true}>
     <View
        style={[
          styles.header,
          { backgroundColor: theme.navBackground }
        ]}
      >
        <ThemedText title={true} style={styles.heading}>
        Low Cost Furnitures
      </ThemedText>
      </View>
      <Space />
      <FlatList
  data={allFurnitures}
  key={numColumns}        
  numColumns={numColumns}
  keyExtractor={(item) => item.$id}
  contentContainerStyle={styles.list}
  renderItem={renderItem}
/>

    </ThemedView>
  )
}

export default AllFurnitures

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
    header: {
    paddingVertical: 20,
    alignItems: "center",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  list: {
    paddingHorizontal: 5,
  },
  gridItem: {
   width: "50%",
    padding:8,
  },
  card: {
    padding: 0,
    elevation: 5,
    borderBottomColor: Colors.primary,
    borderBottomWidth: 5,
   
  },
  image: {
    width: "100%",
      aspectRatio: 1, // 1:1 square (change if needed)
  resizeMode: "cover"
  },
  noImage: {
    height: 140,
    borderRadius: 8,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  infoBox:{
    padding:10,
    backgroundColor:"#e1e1e1"
  } ,
  furnitureType: {
    fontSize: 14,
    fontWeight: "600",
  },
  price: {
    fontSize: 15,
    fontWeight: "bold",
    color: Colors.primary,
    marginVertical:15,
  },
})
