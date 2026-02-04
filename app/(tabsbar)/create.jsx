import { StyleSheet, Text ,KeyboardAvoidingView,ScrollView,Platform,useColorScheme } from 'react-native'
import { useFurniture } from "../../hooks/useFurniture"
import { useRouter } from 'expo-router'
import { useState } from 'react'
//
import * as ImagePicker from 'expo-image-picker'
import { Image, View, TouchableOpacity } from 'react-native'
import { storage, ID} from "../../lib/appwrite"
import { Permission, Role } from "react-native-appwrite"
// themed components
import Space from "../../components/Space"
import ThemedText from "../../components/ThemeText"
import ThemedView from "../../components/ThemedView"
import ThemedInput from "../../components/ThemedInput"
import ThemedButton from '../../components/ThemeButton'
import { Colors } from '../../constants/Color'
import { useUser } from '../../hooks/useUser'

const Create = () => {

const [images, setImages] = useState([])
const [contact, setContact] = useState("")
const [price, setPrice] = useState("")
const [furnitureType, setFurnitureType] = useState("")
 
  const [description, setDescription] = useState("")
  const [loading, setLoading] = useState(false)
const[error,setError]=useState(null)
  const { createFurniture } = useFurniture()
   const {user}=useUser()  
  const router = useRouter()

  const colorScheme = useColorScheme()
const theme = Colors[colorScheme] ?? Colors.light

async function handleSubmit() {   
        setError(null)
      if(!furnitureType.trim()){
       setError("Furniture can't be empty");
      return} 
      if(!description.trim()){
       setError("Description can't be empty");
      return} 
     if (!price || price <= 0) {
       setError("Price can't be empty");
      return} 
      if(!contact.trim()){
       setError("Contact can't be empty");
      return}     
if (!images || images.length === 0) {
      setError("Please upload at least one image")
  return
}
    setLoading(true)
    

  try {
    const uploadedImageIds = []

  for (let i = 0; i < images.length; i++) {
  const img = images[i]

  console.log("🟡 Uploading image", img.uri)

  // convert file → blob
  const responseFetch = await fetch(img.uri)
  const blob = await responseFetch.blob()

  const file = {
    name: `image_${Date.now()}.jpg`,
    type: "image/jpeg",
    size: blob.size,
    uri: img.uri,
  }

  const uploaded = await storage.createFile(
    "697873f300194bbe85b2",
    ID.unique(),
    file,
    [
     Permission.read(Role.users()),
    Permission.update(Role.user(user.$id)),
    Permission.delete(Role.user(user.$id)),
  ]
  )

  uploadedImageIds.push(uploaded.$id)
}

   const parsedPrice = Number(price)

    await createFurniture({
     description, furnitureType, price: parsedPrice, contact,
      images: uploadedImageIds,
    })

       // reset value
    setDescription("")
    setPrice("")
    setContact("")
    setImages([])
    setFurnitureType("")
    //router 
    router.replace("/furniture")
    //
    setLoading(false)

  } catch (err) {
    console.error("HANDLE SUBMIT ERROR:", err)
  }

}


async function pickImage() {
  if (images.length >= 3) {
    // Alert.alert("Limit reached", "Maximum 3 images allowed");
    return;
  }

  const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (!permission.granted) {
    Alert.alert("Permission required");
    return;
  }

  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsMultipleSelection: true, 
    selectionLimit: 3 - images.length,
    quality: 0.7,
  });

  if (result.canceled) return;

  const selectedImages = result.assets.map((asset) => ({
    uri: asset.uri,
  }));

  setImages((prev) => [...prev, ...selectedImages]);

}

function removeImage(index) {
  setImages((prev) => prev.filter((_, i) => i !== index));
}

  return (

  <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={Platform.OS === "ios" ? "padding" : "height"}
  >
    <ThemedView safe={true} style={{flex:1}}>
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <ThemedView style={styles.container}>
 <Space height={20}/>
        <ThemedText title style={styles.heading}>
          Add New Furniture to Sell
        </ThemedText>

        <Space height={20}/>
{/*  */}
<View style={{ flexDirection: "row", flexWrap: "wrap", margin: 10 }}>
  {images.map((img, index) => (
    <View key={index} style={{ position: "relative", margin: 5 }}>
      <Image
        source={{ uri: img.uri }}
        style={{ width: 80, height: 80, borderRadius: 6 }}
      />

      {/* image remove btn */}
      <TouchableOpacity
        onPress={() => removeImage(index)}
        style={{
          position: "absolute",
          top: -8,
          right: -8,
          backgroundColor: "#ff0000e9",
          width: 21,
          height: 21,
          borderRadius: 11,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "#fff", fontSize: 18}}>
          ×
        </Text>
      </TouchableOpacity>
    </View>
  ))}
</View>

<Space height={10} />
<ThemedText>Upload 3 Photos ({images.length}/3)</ThemedText>
<Space height={10} />
<TouchableOpacity onPress={pickImage} style={{
  padding:15,
  backgroundColor:"#ccc",
  borderRadius:6,
  marginHorizontal:40
}}>
  <Text>Select Image</Text>
</TouchableOpacity>
<Space height={10} />
{/*  */}
    {error && <Text style={styles.error}>{error}</Text>}
    <Space height={10} />
<ThemedInput
  style={[
    styles.input,
    {
      backgroundColor: theme.inputBackground,
      borderColor: theme.inputBorder,
      color: theme.text,
    },
  ]}
  placeholder="Furniture Type (Chair, Table...)"
   placeholderTextColor={theme.placeholder}
  value={furnitureType}
  onChangeText={setFurnitureType}
/>
<Space height={10}/>

<ThemedInput
  style={[
    styles.input,
    {
      backgroundColor: theme.inputBackground,
      borderColor: theme.inputBorder,
      color: theme.text,
    },
  ]}
  placeholder="Price"
   placeholderTextColor={theme.placeholder}
  value={price}
  onChangeText={setPrice}
  keyboardType="numeric"
/>
<Space height={10}/>
 <ThemedInput
          style={[styles.multiline,
    {
      backgroundColor: theme.inputBackground,
      borderColor: theme.inputBorder,
      color: theme.text,
    }]}
          placeholder="Description"
            placeholderTextColor={theme.placeholder}
          value={description}
          onChangeText={setDescription}
          multiline
          textAlignVertical="top"
        />
<Space height={10}/>

<ThemedInput
  style={[
    styles.input,
    {
      backgroundColor: theme.inputBackground,
      borderColor: theme.inputBorder,
      color: theme.text,
    },
  ]}
  placeholder="Contact Number"
  placeholderTextColor={theme.placeholder}
  value={contact}
  onChangeText={setContact}
  keyboardType="phone-pad"
/>


{/*  */}
  
        <ThemedButton onPress={handleSubmit} disabled={loading}>
          <Text style={{ color: "#fff" }}>
            {loading ? "Creating..." : "Create List"}
          </Text>
        </ThemedButton>

      </ThemedView>
    </ScrollView>
  </ThemedView>
 </KeyboardAvoidingView>
  )
}
export default Create

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  input: {
    padding: 20,
    borderRadius: 6,
    alignSelf: 'stretch',
    marginHorizontal: 40,
  },
  multiline: {
    padding: 20,
    borderRadius: 6,
    minHeight: 150,
    alignSelf: 'stretch',
    marginHorizontal: 40,
     maxHeight: 300,
  }, 
  error: {
  color: Colors.warning,
  padding: 10,
  backgroundColor: '#f5c1c8',
  borderColor: Colors.warning,
  borderWidth: 1,
  borderRadius: 6,
  marginHorizontal: 10,
  }
})















