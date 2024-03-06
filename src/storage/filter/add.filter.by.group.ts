import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFiltersByGroup } from "./get.filter.by.group";
import { FILTER_COLLECTION } from "@storage/storage.config";

export async function addFilterByGroup(group: string, filterName: string) {
  try {
    const storageFilters = await getFiltersByGroup(group);
    const newData = JSON.stringify([...storageFilters, filterName]);
    await AsyncStorage.setItem(`${FILTER_COLLECTION}-${group}`, newData);
  } catch (error) {
    throw error;
  }
}
