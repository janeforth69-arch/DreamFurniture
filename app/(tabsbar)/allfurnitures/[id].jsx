

import { StyleSheet, ScrollView, Image, View, Pressable, useColorScheme} from "react-native"
import { useState, useEffect } from "react"
import { useLocalSearchParams } from "expo-router"
import { useFurniture } from "../../../hooks/useFurniture"
import ThemedText from "../../../components/ThemeText"
import ThemedView from "../../../components/ThemedView"
import ThemedLoader from "../../../components/ThemedLoader"
import { Colors } from "../../../constants/Color"


const FurnitureDetails = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  const { id } = useLocalSearchParams()
  const [loading, setLoading] = useState(true)
  const [furniture, setFurniture] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)

  const { fetchFurnitureById} = useFurniture()

  useEffect(() => {
    async function loadFurniture() {
      setLoading(true)
      setFurniture(null)
      setSelectedImage(null)

      const data = await fetchFurnitureById(id)
      setFurniture(data)

      if (data?.imageUrls?.length > 0) {
        setSelectedImage(data.imageUrls[0])
      }

      setLoading(false)
    }

    if (id) loadFurniture()
  }, [id])

  if (!furniture || loading) {
    return (
      <ThemedView safe style={styles.container}>
        <ThemedLoader />
      </ThemedView>
    )
  }

  return (
    <ThemedView safe style={styles.container}>
      {/* Curved Header */}
      <View
        style={[
          styles.header,
          { backgroundColor: theme.navBackground }
        ]}
      >
        <ThemedText style={[styles.headerTitle,{color:"theme.text"}]}>
          Dream Furniture
        </ThemedText>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
        contentContainerStyle={{ padding: 16 }}
      >
      
        {/* Main Image */}
        {selectedImage && (
          <Image
            source={{ uri: selectedImage }}
            style={styles.mainImage}
            // resizeMode="cover"
          />
        )}

        {/* Thumbnails */}
        <View style={styles.thumbnailRow}>
          {furniture.imageUrls?.map((img, index) => (
            <Pressable
              key={index}
              onPress={() => setSelectedImage(img)}
            >
              <Image
                source={{ uri: img }}
                style={[
                  styles.thumbnail,
                  {
                    borderColor:
                      selectedImage === img
                        ? theme.iconColorFocused
                        : "transparent"
                  }
                ]}
              />
            </Pressable>
          ))}
        </View>

        {/* Price */}
        <View
          style={[
            styles.sectionBox,
            { backgroundColor: theme.uiBackground }
          ]}
        >
          <ThemedText style={styles.sectionLabel}>
            Price
          </ThemedText>
          <ThemedText
            style={[
              styles.sectionValue,
              { color: theme.title }
            ]}
          >
            ${furniture.price}
          </ThemedText>
        </View>

        {/* Type */}
        <View
          style={[
            styles.sectionBox,
            { backgroundColor: theme.uiBackground }
          ]}
        >
          <ThemedText style={styles.sectionLabel}>
            Type
          </ThemedText>
          <ThemedText
            style={[
              styles.sectionValue,
              { color: theme.title }
            ]}
          >
            {furniture.furnitureType}
          </ThemedText>
        </View>

        {/* Description */}
        <View
          style={[
            styles.sectionBox,
            { backgroundColor: theme.uiBackground }
          ]}
        >
          <ThemedText style={styles.sectionLabel}>
            Description
          </ThemedText>
          <ThemedText
            style={[
              styles.sectionText,
              { color: theme.text }
            ]}
          >
            {furniture.description}
          </ThemedText>
        </View>

        {/* Contact */}
        <View
          style={[
            styles.sectionBox,
            { backgroundColor: theme.uiBackground }
          ]}
        >
          <ThemedText style={styles.sectionLabel}>
            Contact
          </ThemedText>
          <ThemedText
            style={[
              styles.sectionText,
              { color: theme.text }
            ]}
          >
            {furniture.contact}
          </ThemedText>
        </View>

      </ScrollView>
    </ThemedView>
  )
}

export default FurnitureDetails

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    paddingVertical: 15,
    paddingLeft:20,
    alignItems: "flex-start",
  },

  headerTitle: {
    fontSize: 20,
    fontStyle: "italic",
    letterSpacing: 1
  },
  mainImage: {
    width: "100%",
    aspectRatio: 1, 
  resizeMode: "contain",
    borderRadius: 20,
    marginVertical: 15
  },

  thumbnailRow: {
    flexDirection: "row",
    marginBottom: 10
  },

  thumbnail: {
    width: 75,
    height: 75,
    borderRadius: 10,
    marginRight: 10,
    borderWidth: 2
  },

  sectionBox: {
    padding: 18,
    borderRadius: 15,
    marginTop: 15
  },

  sectionLabel: {
    fontSize: 14,
    opacity: 0.6,
    marginBottom: 6
  },

  sectionValue: {
    fontSize: 20,
    fontWeight: "bold"
  },

  sectionText: {
    fontSize: 16,
    lineHeight: 22
  }
})
