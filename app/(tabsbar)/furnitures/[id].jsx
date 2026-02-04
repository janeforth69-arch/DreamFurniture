// // import { StyleSheet,ScrollView,Image,View,Pressable } from 'react-native'
// // import { useState,useEffect } from 'react'
// // import { useLocalSearchParams } from 'expo-router'
// // import { useFurniture } from '../../../hooks/useFurniture'
// // import { useRouter } from 'expo-router'
// // import ThemedCard from "../../../components/ThemedCard"
// // import Space from "../../../components/Space"
// // import ThemedText from "../../../components/ThemeText"
// // import ThemedView from "../../../components/ThemedView"
// // import ThemedLoader from '../../../components/ThemedLoader'
// // import ThemedButton from "../../../components/ThemeButton"
// // import { Colors } from '../../../constants/Color'

// // const Details= () => {

// //     const{id}=useLocalSearchParams()
// //     const [loading, setLoading] = useState(true)
// //     const [notes,setNotes]=useState(null)
// //     const [selectedImage, setSelectedImage] = useState(null)
// //     const {fetchFurnitureById,deleteFurniture}=useFurniture()
// // const router=useRouter()


// //     const handleDelete= async() =>{
// //         await deleteNote(id)
// //         setNotes(null)
// //         router.replace("/fruniture")
// //     }



// // useEffect(() => {
// //   async function loadNote() {
// //     setLoading(true)        // 🔥 start loading
// //     setNotes(null)
// //     setSelectedImage(null)

// //     const data = await fetchNoteById(id)

// //     setNotes(data)

// //     if (data?.imageUrls?.length > 0) {
// //       setSelectedImage(data.imageUrls[0])
// //     }

// //     setLoading(false)       // 🔥 stop loading
// //   }

// //   if (id) {
// //     loadNote()
// //   }
// // }, [id])

// // // if (loading) {
// // //   return (
// // //     <ThemedView safe={true} style={styles.container}>
// // //       <ThemedLoader />
// // //     </ThemedView>
// // //   )
// // // }
// //     if(!notes || loading){
// //         return (
// //             <ThemedView safe={true} style={styles.container}>
// //                 <ThemedLoader />
// //             </ThemedView>
// //         )
// //     }

// // return (
// //   <ThemedView safe={true} style={styles.container}>
// //     <ScrollView style={{ flex: 1, padding: 16 }}>

// //       {/* Title */}
// //       <ThemedText style={{ fontSize: 22, fontWeight: "bold" }}>
// //         {notes.title}
// //       </ThemedText>

// //       {/* Large Image */}
// //       {selectedImage && (
// //         <Image
// //           source={{ uri: selectedImage }}
// //           style={{ width: "100%", height: 250, marginVertical: 10 }}
// //           resizeMode="cover"
// //         />
// //       )}

// //       {/* Thumbnails */}
// //       <View style={{ flexDirection: "row", gap: 10 }}>
// //         {notes.imageUrls?.map((img, index) => (
// //           <Pressable key={index} onPress={() => setSelectedImage(img)}>
// //             <Image
// //               source={{ uri: img }}
// //               style={{
// //                 width: 80,
// //                 height: 80,
// //                 borderWidth: selectedImage === img ? 2 : 0,
// //                 borderColor: "blue"
// //               }}
// //             />
// //           </Pressable>
// //         ))}
// //       </View>

// //       {/* Price + Type */}
// //       <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 15 }}>
// //         <ThemedText>${notes.price}</ThemedText>
// //         <ThemedText>{notes.furnitureType}</ThemedText>
// //       </View>

// //       {/* Description */}
// //       <ThemedText style={{ marginTop: 15 }}>
// //         {notes.description}
// //       </ThemedText>

// //       {/* Contact */}
// //       <ThemedText style={{ marginTop: 15, fontWeight: "bold" }}>
// //         Contact: {notes.contact}
// //       </ThemedText>

// //       <ThemedButton style={styles.delete} onPress={handleDelete}>
// //         <ThemedText style={{ color: "#fff", textAlign: "center" }}>
// //           Delete
// //         </ThemedText>
// //       </ThemedButton>

// //     </ScrollView>
// //   </ThemedView>
// // )

// // }

// // export default Details

// // const styles = StyleSheet.create({

// //     container:{
// //         flex:1,
// //         alignItems:"stretch",
// //     },
// //     card:{
// //         margin:20,
// //     },title:{
// //         fontSize:30,
// //         fontWeight:'900',
// //         marginVertical:10,
// //     },
// //     delete:{
// //         marginTop:40,
// //         backgroundColor:Colors.warning,
// //         width:200,
// //         alignSelf:"center"
// //     }
// // })



// // import { StyleSheet, ScrollView, Image, View, Pressable } from 'react-native'
// // import { useState, useEffect } from 'react'
// // import { useLocalSearchParams, useRouter } from 'expo-router'
// // import { useFurniture } from '../../../hooks/useFurniture'
// // import ThemedText from "../../../components/ThemeText"
// // import ThemedView from "../../../components/ThemedView"
// // import ThemedLoader from '../../../components/ThemedLoader'
// // import ThemedButton from "../../../components/ThemeButton"
// // import { Colors } from '../../../constants/Color'

// // const FurnitureDetails = () => {

// //   const { id } = useLocalSearchParams()
// //   const router = useRouter()

// //   const [loading, setLoading] = useState(true)
// //   const [furniture, setFurniture] = useState(null)
// //   const [selectedImage, setSelectedImage] = useState(null)

// //   const { fetchFurnitureById, deleteFurniture } = useFurniture()

// //   const handleDelete = async () => {
// //     await deleteFurniture(id)
// //     setFurniture(null)
// //     router.replace("/furnitures")
// //   }

// //   useEffect(() => {
// //     async function loadFurniture() {
// //       setLoading(true)
// //       setFurniture(null)
// //       setSelectedImage(null)

// //       const data = await fetchFurnitureById(id)

// //       setFurniture(data)

// //       if (data?.imageUrls?.length > 0) {
// //         setSelectedImage(data.imageUrls[0])
// //       }

// //       setLoading(false)
// //     }

// //     if (id) {
// //       loadFurniture()
// //     }
// //   }, [id])

// //   if (!furniture || loading) {
// //     return (
// //       <ThemedView safe={true} style={styles.container}>
// //         <ThemedLoader />
// //       </ThemedView>
// //     )
// //   }

// //   return (
// //     <ThemedView safe={true} style={styles.container}>
// //       <ScrollView style={{ flex: 1, padding: 16 }}>

// //         {/* Title */}
// //         <ThemedText style={{ fontSize: 22, fontWeight: "bold" }}>
// //           {furniture.title}
// //         </ThemedText>

// //         {/* Large Image */}
// //         {selectedImage && (
// //           <Image
// //             source={{ uri: selectedImage }}
// //             style={{ width: "100%", height: 250, marginVertical: 10 }}
// //             resizeMode="cover"
// //           />
// //         )}

// //         {/* Thumbnails */}
// //         <View style={{ flexDirection: "row", gap: 10 }}>
// //           {furniture.imageUrls?.map((img, index) => (
// //             <Pressable key={index} onPress={() => setSelectedImage(img)}>
// //               <Image
// //                 source={{ uri: img }}
// //                 style={{
// //                   width: 80,
// //                   height: 80,
// //                   borderWidth: selectedImage === img ? 2 : 0,
// //                   borderColor: "blue"
// //                 }}
// //               />
// //             </Pressable>
// //           ))}
// //         </View>

// //         {/* Price + Type */}
// //         <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 15 }}>
// //           <ThemedText>${furniture.price}</ThemedText>
// //           <ThemedText>{furniture.furnitureType}</ThemedText>
// //         </View>

// //         {/* Description */}
// //         <ThemedText style={{ marginTop: 15 }}>
// //           {furniture.description}
// //         </ThemedText>

// //         {/* Contact */}
// //         <ThemedText style={{ marginTop: 15, fontWeight: "bold" }}>
// //           Contact: {furniture.contact}
// //         </ThemedText>

// //         <ThemedButton style={styles.delete} onPress={handleDelete}>
// //           <ThemedText style={{ color: "#fff", textAlign: "center" }}>
// //             Delete
// //           </ThemedText>
// //         </ThemedButton>

// //       </ScrollView>
// //     </ThemedView>
// //   )
// // }

// // export default FurnitureDetails

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     alignItems: "stretch",
// //   },
// //   delete: {
// //     marginTop: 40,
// //     backgroundColor: Colors.warning,
// //     width: 200,
// //     alignSelf: "center"
// //   }
// // })





// // import { StyleSheet, ScrollView, Image, View, Pressable,useColorScheme } from 'react-native'
// // import { useState, useEffect } from 'react'
// // import { useLocalSearchParams, useRouter } from 'expo-router'
// // import { useFurniture } from '../../../hooks/useFurniture'
// // import ThemedText from "../../../components/ThemeText"
// // import ThemedView from "../../../components/ThemedView"
// // import ThemedLoader from '../../../components/ThemedLoader'
// // import ThemedButton from "../../../components/ThemeButton"
// // import { Colors } from '../../../constants/Color'
// // import Space from '../../../components/Space'

// // const FurnitureDetails = () => {

// //   const colorScheme = useColorScheme()
// //   const theme = Colors[colorScheme] ?? Colors.light
  

// //   const { id } = useLocalSearchParams()
// //   const router = useRouter()

// //   const [loading, setLoading] = useState(true)
// //   const [furniture, setFurniture] = useState(null)
// //   const [selectedImage, setSelectedImage] = useState(null)

// //   const { fetchFurnitureById, deleteFurniture } = useFurniture()

// //   const handleDelete = async () => {
// //     await deleteFurniture(id)
// //     setFurniture(null)
// //     router.replace("/furnitures")
// //   }

// //   useEffect(() => {
// //     async function loadFurniture() {
// //       setLoading(true)
// //       setFurniture(null)
// //       setSelectedImage(null)

// //       const data = await fetchFurnitureById(id)

// //       setFurniture(data)

// //       if (data?.imageUrls?.length > 0) {
// //         setSelectedImage(data.imageUrls[0])
// //       }

// //       setLoading(false)
// //     }

// //     if (id) {
// //       loadFurniture()
// //     }
// //   }, [id])

// //   if (!furniture || loading) {
// //     return (
// //       <ThemedView safe={true} style={styles.container}>
// //         <ThemedLoader />
// //       </ThemedView>
// //     )
// //   }

// //   return (
// //     <ThemedView safe={true} style={styles.container}>

// //      {/* Curved Header */}
// //     <View style={styles.header}>
// //       <ThemedText style={[styles.headerTitle,{backgroundColor:"theme.navBackground"}]}>
// //         Dream Furniture
// //       </ThemedText>
// //     </View>

// //       <ScrollView style={{ flex: 1, padding: 16 }}>

// //         {/* Title */}
// //         <ThemedText style={{ fontSize: 22, fontWeight: "bold" }}>
// //           {furniture.title}
// //         </ThemedText>

// //         {/* Large Image */}
// //         {selectedImage && (
// //           <Image
// //   source={{ uri: selectedImage }}
// //   style={styles.mainImage}
// //   resizeMode="cover"
// // />
// //         )}

// //         {/* Thumbnails */}
// //         <View style={{ flexDirection: "row", gap: 10 }}>
// //           {furniture.imageUrls?.map((img, index) => (
// //             <Pressable key={index} onPress={() => setSelectedImage(img)}>
// //               <Image
// //                 source={{ uri: img }}
// //                 style={{
// //                   width: 80,
// //                   height: 80,
// //                   borderWidth: selectedImage === img ? 2 : 0,
// //                 borderColor: selectedImage === img ? "#aaaaaa" : "transparent"

// //                 }}
// //               />
// //             </Pressable>
// //           ))}
// //         </View>

// //         {/* Price + Type */}
// //    <View style={styles.infoRow}>
// //   <View style={styles.infoBox}>
// //     <ThemedText style={styles.label}>Price</ThemedText>
// //     <ThemedText style={styles.value}>
// //       ${furniture.price}
// //     </ThemedText>
// //   </View>

// //   <View style={styles.infoBox}>
// //     <ThemedText style={styles.label}>Type</ThemedText>
// //     <ThemedText style={styles.value}>
// //       {furniture.furnitureType}
// //     </ThemedText>
// //   </View>
// // </View>

// //         {/* Description */}
// //         <ThemedText style={{ marginTop: 15 }}>
// //           {furniture.description}
// //         </ThemedText>

// //         {/* Contact */}
// //         <ThemedText style={{ marginTop: 15, fontWeight: "bold" }}>
// //           Contact: {furniture.contact}
// //         </ThemedText>

// //         <ThemedButton style={styles.delete} onPress={handleDelete}>
// //           <ThemedText style={{ color: "#fff", textAlign: "center" }}>
// //             Delete
// //           </ThemedText>
// //         </ThemedButton>

// // <Space height={40} />
// //       </ScrollView>
// //     </ThemedView>
// //   )
// // }

// // export default FurnitureDetails

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     alignItems: "stretch",
// //   },
// // delete: {
// //     marginTop: 40,
// //     backgroundColor: Colors.warning,
// //     width: 200,
// //     alignSelf: "center"
// //   }
// // ,
// //   header: {
// //   paddingVertical: 15,
// //   alignItems: "center",
// //   elevation: 8,
// // },
// // headerTitle: {
// //   fontSize: 20,
// //   color: "#fff",
// //  fontStyle: "italic",
// // letterSpacing: 1
// // },mainImage: {
// //   width: "100%",
// //   height: 260,

// //   marginVertical: 15,
// // },
// // content: {
// //   flex: 1,
// //   padding: 16,
// // },

// // infoRow: {
// //   flexDirection: "row",
// //   justifyContent: "space-between",
// //   marginTop: 20,
// // },

// // infoBox: {
// //   backgroundColor: "#F5F1ED",
// //   padding: 15,
// //   borderRadius: 15,
// //   width: "48%",
// // },

// // label: {
// //   fontSize: 13,
// //   color: "#888",
// // },

// // value: {
// //   fontSize: 18,
// //   fontWeight: "bold",
// //   marginTop: 5,
// //   color: "#3E2C23",
// // },


// // })

// import {
//   StyleSheet,
//   ScrollView,
//   Image,
//   View,
//   Pressable,
//   useColorScheme
// } from "react-native"
// import { useState, useEffect } from "react"
// import { useLocalSearchParams, useRouter } from "expo-router"
// import { useFurniture } from "../../../hooks/useFurniture"
// import ThemedText from "../../../components/ThemeText"
// import ThemedView from "../../../components/ThemedView"
// import ThemedLoader from "../../../components/ThemedLoader"
// import ThemedButton from "../../../components/ThemeButton"
// import { Colors } from "../../../constants/Color"
// import Space from "../../../components/Space"

// const FurnitureDetails = () => {
//   const colorScheme = useColorScheme()
//   const theme = Colors[colorScheme] ?? Colors.light

//   const { id } = useLocalSearchParams()
//   const router = useRouter()

//   const [loading, setLoading] = useState(true)
//   const [furniture, setFurniture] = useState(null)
//   const [selectedImage, setSelectedImage] = useState(null)

//   const { fetchFurnitureById, deleteFurniture } = useFurniture()

//   const handleDelete = async () => {
//     await deleteFurniture(id)
//     router.replace("/furnitures")
//   }

//   useEffect(() => {
//     async function loadFurniture() {
//       setLoading(true)
//       setFurniture(null)
//       setSelectedImage(null)

//       const data = await fetchFurnitureById(id)
//       setFurniture(data)

//       if (data?.imageUrls?.length > 0) {
//         setSelectedImage(data.imageUrls[0])
//       }

//       setLoading(false)
//     }

//     if (id) loadFurniture()
//   }, [id])

//   if (!furniture || loading) {
//     return (
//       <ThemedView safe style={styles.container}>
//         <ThemedLoader />
//       </ThemedView>
//     )
//   }

//   return (
//     <ThemedView safe style={styles.container}>
//       {/* Curved Header */}
//       <View
//         style={[
//           styles.header,
//           { backgroundColor: theme.navBackground }
//         ]}
//       >
//         <ThemedText style={[styles.headerTitle,{color:"theme.text"}]}>
//           Dream Furniture
//         </ThemedText>
//       </View>

//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         style={{ flex: 1 }}
//         contentContainerStyle={{ padding: 16 }}
//       >
      
//         {/* Main Image */}
//         {selectedImage && (
//           <Image
//             source={{ uri: selectedImage }}
//             style={styles.mainImage}
//             resizeMode="cover"
//           />
//         )}

//         {/* Thumbnails */}
//         <View style={styles.thumbnailRow}>
//           {furniture.imageUrls?.map((img, index) => (
//             <Pressable
//               key={index}
//               onPress={() => setSelectedImage(img)}
//             >
//               <Image
//                 source={{ uri: img }}
//                 style={[
//                   styles.thumbnail,
//                   {
//                     borderColor:
//                       selectedImage === img
//                         ? theme.iconColorFocused
//                         : "transparent"
//                   }
//                 ]}
//               />
//             </Pressable>
//           ))}
//         </View>

//         {/* Price */}
//         <View
//           style={[
//             styles.sectionBox,
//             { backgroundColor: theme.uiBackground }
//           ]}
//         >
//           <ThemedText style={styles.sectionLabel}>
//             Price
//           </ThemedText>
//           <ThemedText
//             style={[
//               styles.sectionValue,
//               { color: theme.title }
//             ]}
//           >
//             ${furniture.price}
//           </ThemedText>
//         </View>

//         {/* Type */}
//         <View
//           style={[
//             styles.sectionBox,
//             { backgroundColor: theme.uiBackground }
//           ]}
//         >
//           <ThemedText style={styles.sectionLabel}>
//             Type
//           </ThemedText>
//           <ThemedText
//             style={[
//               styles.sectionValue,
//               { color: theme.title }
//             ]}
//           >
//             {furniture.furnitureType}
//           </ThemedText>
//         </View>

//         {/* Description */}
//         <View
//           style={[
//             styles.sectionBox,
//             { backgroundColor: theme.uiBackground }
//           ]}
//         >
//           <ThemedText style={styles.sectionLabel}>
//             Description
//           </ThemedText>
//           <ThemedText
//             style={[
//               styles.sectionText,
//               { color: theme.text }
//             ]}
//           >
//             {furniture.description}
//           </ThemedText>
//         </View>

//         {/* Contact */}
//         <View
//           style={[
//             styles.sectionBox,
//             { backgroundColor: theme.uiBackground }
//           ]}
//         >
//           <ThemedText style={styles.sectionLabel}>
//             Contact
//           </ThemedText>
//           <ThemedText
//             style={[
//               styles.sectionText,
//               { color: theme.text }
//             ]}
//           >
//             {furniture.contact}
//           </ThemedText>
//         </View>

        // {/* Delete Button */}
        // <ThemedButton
        //   style={[
        //     styles.delete,
        //     { backgroundColor: Colors.warning }
        //   ]}
        //   onPress={handleDelete}
        // >
        //   <ThemedText style={styles.deleteText}>
        //     Delete
        //   </ThemedText>
        // </ThemedButton>
//       </ScrollView>
//     </ThemedView>
//   )
// }

// export default FurnitureDetails

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   },
//   header: {
//     paddingVertical: 15,
//     paddingLeft:20,
//     alignItems: "flex-start",
//   },

//   headerTitle: {
//     fontSize: 20,
//     fontStyle: "italic",
//     letterSpacing: 1
//   },
//   mainImage: {
//     width: "100%",
//     height: 450,
//     resizeMode: "stretch",
//     borderRadius: 20,
//     marginVertical: 15
//   },

//   thumbnailRow: {
//     flexDirection: "row",
//     marginBottom: 10
//   },

//   thumbnail: {
//     width: 75,
//     height: 75,
//     borderRadius: 10,
//     marginRight: 10,
//     borderWidth: 2
//   },

//   sectionBox: {
//     padding: 18,
//     borderRadius: 15,
//     marginTop: 15
//   },

//   sectionLabel: {
//     fontSize: 14,
//     opacity: 0.6,
//     marginBottom: 6
//   },

//   sectionValue: {
//     fontSize: 20,
//     fontWeight: "bold"
//   },

//   sectionText: {
//     fontSize: 16,
//     lineHeight: 22
//   },

  // delete: {
  //   marginTop: 40,
  //   paddingVertical: 15,
  //   borderRadius: 15,
  //   width: "80%",
  //   alignSelf: "center"
  // },

  // deleteText: {
  //   color: "#fff",
  //   textAlign: "center",
  //   fontSize: 16,
  //   fontWeight: "bold"
  // }
// })



import { StyleSheet, ScrollView, Image, View, Pressable, useColorScheme} from "react-native"
import { useState, useEffect } from "react"
import { useLocalSearchParams ,useRouter} from "expo-router"
import { useFurniture } from "../../../hooks/useFurniture"
import ThemedText from "../../../components/ThemeText"
import ThemedView from "../../../components/ThemedView"
import ThemedButton from "../../../components/ThemeButton"
import ThemedLoader from "../../../components/ThemedLoader"
import { Colors } from "../../../constants/Color"


const FurnitureDetails = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  const { id } = useLocalSearchParams()
  const [loading, setLoading] = useState(true)
  const [furniture, setFurniture] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)

   const { fetchFurnitureById, deleteFurniture } = useFurniture()
const router=useRouter()

  const handleDelete = async () => {
    await deleteFurniture(id)
    router.replace("/furniture")
  }

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

 {/* Delete Button */}
        <ThemedButton
          style={[
            styles.delete,
            { backgroundColor: Colors.warning }
          ]}
          onPress={handleDelete}
        >
          <ThemedText style={styles.deleteText}>
            Delete
          </ThemedText>
        </ThemedButton>
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
  resizeMode: "cover",
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
  },
    delete: {
    marginTop: 40,
    paddingVertical: 15,
    borderRadius: 15,
    width: "80%",
    alignSelf: "center"
  },

  deleteText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold"
  }
})
