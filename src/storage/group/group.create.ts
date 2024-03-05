import AsyncStorage from "@react-native-async-storage/async-storage";
import { NewGroup } from "@screens/newGroup";
import { GROUP_COLLECTION } from "@storage/storage.config";
import { Alert } from "react-native";
import { groupsGetAll } from "./groups.getall";

export async function groupCreate(newGroupName: string) {
  try {
    const allItems = await groupsGetAll();

    const storedItemsWithNewItem = [...allItems, newGroupName];
    await AsyncStorage.setItem(
      GROUP_COLLECTION,
      JSON.stringify(storedItemsWithNewItem)
    );
  } catch (error) {
    throw error;
  }
}
