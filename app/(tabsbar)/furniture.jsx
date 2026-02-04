import { StyleSheet, FlatList, Pressable, Image, View ,useColorScheme} from 'react-native'
import { Colors } from '../../constants/Color'
import { useFurniture } from "../../hooks/useFurniture"
import ThemedCard from "../../components/ThemedCard"
import Space from "../../components/Space"
import ThemedText from "../../components/ThemeText"
import ThemedView from "../../components/ThemedView"
import { useRouter } from "expo-router"


const Furnitures = () => {
  const { furnitures } = useFurniture()
  const router = useRouter()

const colorScheme = useColorScheme()
const theme = Colors[colorScheme] ?? Colors.light


  return (
    <ThemedView style={styles.container} safe={true}>
     <View
        style={[
          styles.header,
          { backgroundColor: theme.navBackground }
        ]}
      >
        <ThemedText title={true} style={styles.heading}>
        Your Selling List
      </ThemedText>
      </View>
      <Space />
      <FlatList
        data={furnitures}
        keyExtractor={(item) => item.$id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => {
          const firstImageUrl =
            item.imageUrls && item.imageUrls.length > 0
              ? item.imageUrls[0]
              : null

          return (
            <Pressable onPress={() => router.push(`furnitures/${item.$id}`)}>
              <ThemedCard style={styles.card}>
                <ThemedView style={styles.row}>
                  {firstImageUrl ? (
                    <Image
                      source={{ uri: firstImageUrl }}
                      style={styles.image}
                    />
                  ) : (
                    <View
                      style={[
                        styles.image,
                        {
                          backgroundColor: "#ccc",
                          justifyContent: "center",
                          alignItems: "center",
                        },
                      ]}
                    >
                      <ThemedText>No Image</ThemedText>
                    </View>
                  )}

                  <ThemedView style={styles.textColumn}>
                    <ThemedText style={[styles.furnitureType,{color:"theme.furnitureType"}]}>
                      Type: {item.furnitureType}
                    </ThemedText>
                    <ThemedText style={styles.price}>
                      Price: $ {item.price}
                    </ThemedText>
                  </ThemedView>
                </ThemedView>
              </ThemedCard>
            </Pressable>
          )
        }}
      />
    </ThemedView>
  )
}

export default Furnitures

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
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
    marginTop: 20,
  },
  card: {
    width: "90%",
    marginHorizontal: "5%",
    marginVertical: 10,
    padding: 10,
    paddingLeft: 14,
    borderLeftColor: Colors.primary,
    borderLeftWidth: 4,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: "30%",
    height: 80,
    borderRadius: 6,
    marginRight: 12,
    resizeMode: "cover",
  },
  textColumn: {
    flex: 1,
    justifyContent: "center",
  },
  furnitureType: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.primary,
  },
})
