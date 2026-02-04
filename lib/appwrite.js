
import { Client, Account, Avatars, TablesDB, Storage, ID, InputFile } from "react-native-appwrite";

const client = new Client();

client
  .setEndpoint("https://sgp.cloud.appwrite.io/v1")
  .setProject("694d76b500151af3d2ca")
  .setPlatform("com.bigorg.testapp");

const account = new Account(client);
const database = new TablesDB(client);
const avatar = new Avatars(client);
const storage = new Storage(client);  

export { client, account, database, avatar, storage, ID ,InputFile};
