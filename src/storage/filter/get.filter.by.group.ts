import AsyncStorage from "@react-native-async-storage/async-storage";
import { FILTER_COLLECTION } from "@storage/storage.config";

export async function getFiltersByGroup(group: string) {
  try {
    const storageFilters = await AsyncStorage.getItem(
      `${FILTER_COLLECTION}-${group}`
    );
    const filters = storageFilters ? JSON.parse(storageFilters) : [];

    return filters;
  } catch (error) {
    throw error;
  }
}
