import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFiltersByGroup } from "./get.filter.by.group";
import { FILTER_COLLECTION } from "@storage/storage.config";
import { AppError } from "@utils/app.error";

export async function addFilterByGroup(group: string, filterName: string) {
  try {
    const storageFilters = await getFiltersByGroup(group);

    if(filterName.trim().length === 0 || filterName === ""){
        throw new AppError("O nome do filtro não pode estar vazio")
    }
    const filterExists = storageFilters.filter(
      (filter:string) => filter === filterName
    );
    if (filterExists.length > 0) {
      throw new AppError("Ja existe um filtro com este nome");
    }
    const newData = JSON.stringify([...storageFilters, filterName]);
    await AsyncStorage.setItem(`${FILTER_COLLECTION}-${group}`, newData);
  } catch (error) {
    throw error;
  }
}
