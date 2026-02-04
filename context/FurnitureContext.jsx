import { createContext, useEffect, useState } from "react";
import { database, client, storage } from "../lib/appwrite";
import { useUser } from "../hooks/useUser";
import { ID, Permission, Query, Role } from "react-native-appwrite";

const DATABASE_ID = "6960f42800009f552d14";
const TABLE_ID = "notes"; // change this to "furnitures" if your table name is different
const BUCKET_ID = "697873f300194bbe85b2";

export const FurnitureContext = createContext();

export function FurnituresProvider({ children }) {
  const { user } = useUser();
  const [furnitures, setFurnitures] = useState([]);
  const [allFurnitures, setAllFurnitures] = useState([])

  //user
  async function fetchFurniture() {
    if (!user) return

    try {
      const response = await database.listRows(
        DATABASE_ID,
        TABLE_ID,
        [Query.equal("userId", user.$id)]
      )

      setFurnitures(addImageUrls(response.rows))
    } catch (err) {
      console.error(err.message)
    }
  }


async function fetchAllFurniture() {
  try {
    const response = await database.listRows(
      DATABASE_ID,
      TABLE_ID,
      [
        Query.limit(20),
        Query.offset(0),
        Query.orderDesc("$createdAt"),
      ]
    )

    const furnituresWithUrls = response.rows.map((item) => ({
      ...item,
      imageUrls:
        item.images?.map(
          (fileId) =>
            `https://sgp.cloud.appwrite.io/v1/storage/buckets/${BUCKET_ID}/files/${fileId}/view?project=694d76b500151af3d2ca`
        ) || [],
    }))

    setAllFurnitures(furnituresWithUrls) 
  } catch (error) {
    console.error(" fetchAllFurniture ERROR:", error.message)
  }
}


  // image
  function addImageUrls(rows) {
    return rows.map((item) => ({
      ...item,
      imageUrls:
        item.images?.map(
          (fileId) =>
            `https://sgp.cloud.appwrite.io/v1/storage/buckets/${BUCKET_ID}/files/${fileId}/view?project=694d76b500151af3d2ca`
        ) || [],
    }))
  }


  async function fetchFurnitureById(id) {
    try {
      const response = await database.getRow(
        DATABASE_ID,
        TABLE_ID,
        id
      );

      let imageUrls = [];

      if (response.images && response.images.length > 0) {
        imageUrls = response.images.map(
          (fileId) =>
            `https://sgp.cloud.appwrite.io/v1/storage/buckets/${BUCKET_ID}/files/${fileId}/view?project=694d76b500151af3d2ca`
        );
      }

      return { ...response, imageUrls };
    } catch (error) {
      console.error(error.message);
    }
  }

  async function createFurniture(data) {
    try {
      await database.createRow(
        DATABASE_ID,
        TABLE_ID,
        ID.unique(),
        { ...data, userId: user.$id },
        [
          Permission.read(Role.users()),
         Permission.update(Role.user(user.$id)),
       Permission.delete(Role.user(user.$id)),
        ]
      );
    } catch (error) {
      console.error(error.message);
    }
  }

  async function deleteFurniture(id) {
    try {
      const furniture = await database.getRow(
        DATABASE_ID,
        TABLE_ID,
        id
      );
      if (furniture.images && furniture.images.length > 0) {
        await Promise.all(
          furniture.images.map(async (fileId) => {
            try {
              await storage.deleteFile(BUCKET_ID, fileId);
              console.log("🧹 Deleting images:", furniture.images)

            } catch (err) {
              console.log("Image delete error:", err);
            }
          })
        );
      }

      await database.deleteRow(
        DATABASE_ID,
        TABLE_ID,
        id
      );
      console.log("🧹 Deleting images22:", furniture.images)

    } catch (error) {
      console.error("Delete furniture error:", error.message);
    }
  }

useEffect(() => {
  if (!user) {
    setFurnitures([]);
    setAllFurnitures([]);
    return;
  }

  fetchFurniture();
  fetchAllFurniture();

  const channel = `databases.${DATABASE_ID}.tables.${TABLE_ID}.rows`;

  const unsubscribe = client.subscribe(channel, (response) => {
    const { payload, events } = response;

    // CREATE
    if (events[0].includes("create")) {
      const imageUrls =
        payload.images?.map(
          (fileId) =>
            `https://sgp.cloud.appwrite.io/v1/storage/buckets/${BUCKET_ID}/files/${fileId}/view?project=694d76b500151af3d2ca`
        ) || [];

      const newFurniture = { ...payload, imageUrls };

      // update public 
      setAllFurnitures((prev) =>
        prev.some((item) => item.$id === newFurniture.$id)
          ? prev
          : [newFurniture, ...prev]
      );

      // update user 
      if (payload.userId === user.$id) {
        setFurnitures((prev) =>
          prev.some((item) => item.$id === newFurniture.$id)
            ? prev
            : [newFurniture, ...prev]
        );
      }
    }

    // DELETE
    if (events[0].includes("delete")) {
      setAllFurnitures((prev) =>
        prev.filter((item) => item.$id !== payload.$id)
      );

      setFurnitures((prev) =>
        prev.filter((item) => item.$id !== payload.$id)
      );
    }
  });

  return () => unsubscribe();
}, [user]);


  return (
    <FurnitureContext.Provider
      value={{
        furnitures,
         allFurnitures,
        fetchFurniture,
        fetchAllFurniture,
        fetchFurnitureById,
        createFurniture,
        deleteFurniture,
      }}
    >
      {children}
    </FurnitureContext.Provider>
  );
}
