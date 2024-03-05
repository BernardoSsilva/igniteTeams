import AsyncStorage from "@react-native-async-storage/async-storage";
import { NewGroup } from "@screens/newGroup";
import { GROUP_COLLECTION } from "@storage/storage.config";
import { Alert } from "react-native";
import { groupsGetAll } from "./groups.getall";
import { AppError } from "@utils/app.error";

export async function groupCreate(newGroupName: string) {
  try {
    const allItems = await groupsGetAll();

    if (newGroupName === "") {
      throw new AppError("O nome não pode estar vazio");
    } else if (allItems.includes(newGroupName)) {
      throw new AppError("Grupo ja existente");
    }

    const storedItemsWithNewItem = [...allItems, newGroupName];
    await AsyncStorage.setItem(
      GROUP_COLLECTION,
      JSON.stringify(storedItemsWithNewItem)
    );
  } catch (error) {
    throw error;
  }
}
