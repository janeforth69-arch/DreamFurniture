// import { StyleSheet, Text, TouchableWithoutFeedback, Keyboard ,KeyboardAvoidingView,
//   ScrollView,
//   Platform, } from 'react-native'
// import { useNote } from "../../hooks/useNote"
// import { useRouter } from 'expo-router'
// import { useState } from 'react'
// // themed components
// import Space from "../../components/Space"
// import ThemedText from "../../components/ThemeText"
// import ThemedView from "../../components/ThemedView"
// import ThemedInput from "../../components/ThemedInput"
// import ThemedButton from '../../components/ThemeButton'
// import { Colors } from '../../constants/Color'

// const Create = () => {
//   const [title, setTitle] = useState("")
//   const [description, setDescription] = useState("")
//   const [loading, setLoading] = useState(false)
// const[error,setError]=useState(null)
// const[error1,setError1]=useState(null)
//   const { createNotes } = useNote()
//   const router = useRouter()

//   async function handleSubmit() {

//     setError(null)
//     if(!title.trim()){
//        setError("Title field can't be empty");
//       return} 
//        setError1(null)
//       if(!description.trim()){
//        setError1("Description field can't be empty");
//       return} 
//     setLoading(true)
//     await createNotes({title,description})
//     // reset value
//     setTitle("")
//     setDescription("")
//     //router 
//     router.replace("/note")
//     //
//     setLoading(false)
//   }


//   return (

//   <KeyboardAvoidingView
//     style={{ flex: 1 }}
//     behavior={Platform.OS === "ios" ? "padding" : "height"}
//   >
//     <ThemedView safe={true} style={{flex:1}}>
//     <ScrollView
//       contentContainerStyle={{ flexGrow: 1 }}
//       keyboardShouldPersistTaps="handled"
//     >
//       <ThemedView style={styles.container}>

//         <ThemedText title style={styles.heading}>
//           Add a New Book
//         </ThemedText>

//         <Space />

//         <ThemedInput
//           style={styles.input}
//           placeholder="Note Title"
//           value={title}
//           onChangeText={setTitle}
//         />
//         <Space height={10}/>
//  {error && <Text style={styles.error}>{error}</Text>}
//           <Space />
//         <ThemedInput
//           style={styles.multiline}
//           placeholder="Description"
//           value={description}
//           onChangeText={setDescription}
//           multiline
//           textAlignVertical="top"
//         />

//         <Space height={10}/>
// {error1 && <Text style={styles.error}>{error1}</Text>}
//   <Space />
//         <ThemedButton onPress={handleSubmit} disabled={loading}>
//           <Text style={{ color: "#fff" }}>
//             {loading ? "Saving..." : "Create Note"}
//           </Text>
//         </ThemedButton>

//       </ThemedView>
//     </ScrollView>
//   </ThemedView>
//  </KeyboardAvoidingView>
//   )
// }
// export default Create

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   heading: {
//     fontWeight: "bold",
//     fontSize: 18,
//     textAlign: "center",
//   },
//   input: {
//     padding: 20,
//     borderRadius: 6,
//     alignSelf: 'stretch',
//     marginHorizontal: 40,
//   },
//   multiline: {
//     padding: 20,
//     borderRadius: 6,
//     minHeight: 150,
//     alignSelf: 'stretch',
//     marginHorizontal: 40,
//      maxHeight: 300,
//   }, error: {
//             color: Colors.warning,
//             padding: 10,
//             backgroundColor: '#f5c1c8',
//             borderColor: Colors.warning,
//             borderWidth: 1,
//             borderRadius: 6,
//             marginHorizontal: 10,
//           }
// })







// import {
//   KeyboardAvoidingView,
//   ScrollView,
//   Platform,
//   TouchableWithoutFeedback,
//   Keyboard,
// } from "react-native";

{/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
  <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={Platform.OS === "ios" ? "padding" : "height"}
  >
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <ThemedView style={styles.container}>

        <ThemedText title style={styles.heading}>
          Add a New Book
        </ThemedText>

        <Space />

        <ThemedInput
          style={styles.input}
          placeholder="Note Title"
          value={title}
          onChangeText={setTitle}
        />

        <Space />

        <ThemedInput
          style={styles.multiline}
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
          multiline
          textAlignVertical="top"
        />

        <Space />

        <ThemedButton onPress={handleSubmit} disabled={loading}>
          <Text style={{ color: "#fff" }}>
            {loading ? "Saving..." : "Create Note"}
          </Text>
        </ThemedButton>

      </ThemedView>
    </ScrollView>
  </KeyboardAvoidingView>
</TouchableWithoutFeedback> */}



// --------------------------------------this is version 2 for image test------------------------------

// import { StyleSheet, Text, TouchableWithoutFeedback, Keyboard ,KeyboardAvoidingView,ScrollView,Platform, } from 'react-native'
// import { useNote } from "../../hooks/useNote"
// import { useRouter } from 'expo-router'
// import { useState } from 'react'
// //
// import * as ImagePicker from 'expo-image-picker'
// import { Image, View, TouchableOpacity } from 'react-native'
// import { storage, ID } from "../../lib/appwrite"
// // themed components
// import Space from "../../components/Space"
// import ThemedText from "../../components/ThemeText"
// import ThemedView from "../../components/ThemedView"
// import ThemedInput from "../../components/ThemedInput"
// import ThemedButton from '../../components/ThemeButton'
// import { Colors } from '../../constants/Color'

// const Create = () => {

// const [images, setImages] = useState([])
// const [contact, setContact] = useState("")
// const [price, setPrice] = useState("")
// const [furnitureType, setFurnitureType] = useState("")
//   const [title, setTitle] = useState("")
//   const [description, setDescription] = useState("")
//   const [loading, setLoading] = useState(false)
// const[error,setError]=useState(null)
// const[error1,setError1]=useState(null)
//   const { createLists } = useNote()
//   const router = useRouter()

//   async function handleSubmit() {

//     setError(null)
//     if(!title.trim()){
//        setError("Title field can't be empty");
//       return} 
//        setError1(null)
//       if(!description.trim()){
//        setError1("Description field can't be empty");
//       return} 
//     setLoading(true)
//    await createLists({
//   title,
//   description,
//   furnitureType,
//   price,
//   contact,
//   images   // this is array of file IDs
// })

    // // reset value
    // setTitle("")
    // setDescription("")
    // //router 
    // router.replace("/note")
    // //
    // setLoading(false)
//   }

// // async function pickImage() {
// //   if (images.length >= 3) {
// //     alert("Maximum 3 images allowed")
// //     return
// //   }

// //   const permission = await ImagePicker.requestMediaLibraryPermissionsAsync()
// //   if (!permission.granted) {
// //     alert("Permission required")
// //     return
// //   }

// //   const result = await ImagePicker.launchImageLibraryAsync({
// // mediaTypes: ImagePicker.MediaType.Images,
// //     quality: 0.7,
// //   })

// //   if (!result.canceled) {
// //     const image = result.assets[0]

// //     const file = {
// //       name: "upload.jpg",
// //       type: "image/jpeg",
// //       size: image.fileSize || 500000,
// //       uri: image.uri,
// //     }

// //     try {
// //       const response = await storage.createFile(
// //         "697873f300194bbe85b2",
// //         ID.unique(),
// //         file
// //       )

// //       // store file ID
// //       setImages([...images, response.$id])

// //     } catch (error) {
// //       console.log(error)
// //       alert("Upload failed")
// //     }
// //   }}


//   return (

//   <KeyboardAvoidingView
//     style={{ flex: 1 }}
//     behavior={Platform.OS === "ios" ? "padding" : "height"}
//   >
//     <ThemedView safe={true} style={{flex:1}}>
//     <ScrollView
//       contentContainerStyle={{ flexGrow: 1 }}
//       keyboardShouldPersistTaps="handled"
//     >
//       <ThemedView style={styles.container}>

//         <ThemedText title style={styles.heading}>
//           Add New Furniture to Sell
//         </ThemedText>

//         <Space />

//         <ThemedInput
//           style={styles.input}
//           placeholder="Note Title"
//           value={title}
//           onChangeText={setTitle}
//         />
//         <Space height={10}/>
//  {error && <Text style={styles.error}>{error}</Text>}
//           <Space />
//         <ThemedInput
//           style={styles.multiline}
//           placeholder="Description"
//           value={description}
//           onChangeText={setDescription}
//           multiline
//           textAlignVertical="top"
//         />

//         <Space height={10}/>
// {error1 && <Text style={styles.error}>{error1}</Text>}
//   <Space />

// {/*  */}

// <ThemedText>Upload Photos (Max 3)</ThemedText>
// <Space height={10} />

// <TouchableOpacity onPress={pickImage} style={{
//   padding:15,
//   backgroundColor:"#ccc",
//   borderRadius:6,
//   marginHorizontal:40
// }}>
//   <Text>Select Image</Text>
// </TouchableOpacity>

// <View style={{flexDirection:"row", margin:10}}>
//   {images.map((fileId, index) => (
//  <Image
//   key={index}
//   source={{
//     uri: storage.getFileView("furniture-images", fileId)
//   }}
//   style={{ width: 80, height: 80, margin: 5 }}
// />

// ))}
// </View>

// <ThemedInput
//   style={styles.input}
//   placeholder="Furniture Type (Chair, Table...)"
//   value={furnitureType}
//   onChangeText={setFurnitureType}
// />

// <Space />

// <ThemedInput
//   style={styles.input}
//   placeholder="Price"
//   value={price}
//   onChangeText={setPrice}
//   keyboardType="numeric"
// />

// <Space />

// <ThemedInput
//   style={styles.input}
//   placeholder="Contact Number"
//   value={contact}
//   onChangeText={setContact}
//   keyboardType="phone-pad"
// />

// {/*  */}
  
//         <ThemedButton onPress={handleSubmit} disabled={loading}>
//           <Text style={{ color: "#fff" }}>
//             {loading ? "Saving..." : "Create Note"}
//           </Text>
//         </ThemedButton>

//       </ThemedView>
//     </ScrollView>
//   </ThemedView>
//  </KeyboardAvoidingView>
//   )
// }
// export default Create

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   heading: {
//     fontWeight: "bold",
//     fontSize: 18,
//     textAlign: "center",
//   },
//   input: {
//     padding: 20,
//     borderRadius: 6,
//     alignSelf: 'stretch',
//     marginHorizontal: 40,
//   },
//   multiline: {
//     padding: 20,
//     borderRadius: 6,
//     minHeight: 150,
//     alignSelf: 'stretch',
//     marginHorizontal: 40,
//      maxHeight: 300,
//   }, error: {
//             color: Colors.warning,
//             padding: 10,
//             backgroundColor: '#f5c1c8',
//             borderColor: Colors.warning,
//             borderWidth: 1,
//             borderRadius: 6,
//             marginHorizontal: 10,
//           }
// })



// --------------------------- this is version 3 fo image test -------------------------




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
    
  console.log("🟡 Submit pressed")

  try {
    const uploadedImageIds = []

  for (let i = 0; i < images.length; i++) {
  const img = images[i]

  console.log("🟡 Uploading image", img.uri)

  // ⬇️ convert local file → blob
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

  console.log("🟢 Upload response:", uploaded)

  uploadedImageIds.push(uploaded.$id)
}

    console.log("🟢 Uploaded image IDs:", uploadedImageIds)

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
    console.error("🔥 HANDLE SUBMIT ERROR:", err)
    alert("Something went wrong while saving")
  }

}

// async function pickImage() {
//   console.log("🟡 Pick image pressed")

//   if (images.length >= 3) {
//     alert("Maximum 3 images allowed")
//     return
//   }

//   const permission = await ImagePicker.requestMediaLibraryPermissionsAsync()

//   console.log("🟡 Permission result:", permission)

//   if (!permission.granted) {
//     alert("Permission required")
//     return
//   }

//   const result = await ImagePicker.launchImageLibraryAsync({
//     mediaTypes: ImagePicker.MediaTypeOptions.Images,
//     quality: 0.7,
//   })

//   console.log("🟡 Picker result:", result)

//   if (result.canceled) {
//     console.log("⚪ Picker cancelled")
//     return
//   }

//   setImages(prev => [
//     ...prev,
//     { uri: result.assets[0].uri }
//   ])

//   console.log("🟢 Image added:", result.assets[0].uri)
// }
async function pickImage() {
  console.log("🟡 Pick image pressed");

  if (images.length >= 3) {
    Alert.alert("Limit reached", "Maximum 3 images allowed");
    return;
  }

  const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (!permission.granted) {
    Alert.alert("Permission required");
    return;
  }

  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsMultipleSelection: true, // ✅ MULTI SELECT
    selectionLimit: 3 - images.length, // ✅ remaining slots
    quality: 0.7,
  });

  if (result.canceled) return;

  const selectedImages = result.assets.map((asset) => ({
    uri: asset.uri,
  }));

  setImages((prev) => [...prev, ...selectedImages]);

  console.log("🟢 Images added:", selectedImages);
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
{/* <View style={{ flexDirection: "row", margin: 10 }}>
  {images.map((img, index) => (
    <Image
      key={index}
      source={{ uri: img.uri }}
      style={{ width: 80, height: 80, margin: 5, borderRadius: 6 }}
    />
  ))}
</View> */}
<View style={{ flexDirection: "row", flexWrap: "wrap", margin: 10 }}>
  {images.map((img, index) => (
    <View key={index} style={{ position: "relative", margin: 5 }}>
      <Image
        source={{ uri: img.uri }}
        style={{ width: 80, height: 80, borderRadius: 6 }}
      />

      {/* ❌ Remove button */}
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
  }, error: {
            color: Colors.warning,
            padding: 10,
            backgroundColor: '#f5c1c8',
            borderColor: Colors.warning,
            borderWidth: 1,
            borderRadius: 6,
            marginHorizontal: 10,
          }
})















