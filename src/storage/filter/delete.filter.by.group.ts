import AsyncStorage from "@react-native-async-storage/async-storage";
import { FILTER_COLLECTION } from "@storage/storage.config";
import { getFiltersByGroup } from "./get.filter.by.group";
import { deleteAllPlayersByFilter } from "@storage/player/delete.all.players.by.filter";

export async function deleteFilterByGroup(
  group: string,
  deletedFilter: string
) {
  try {
    const storedFilters = await getFiltersByGroup(group);
    const itemsWithoutDeletedOne = storedFilters.filter(
      (item: string) => item !== deletedFilter
    );

    await AsyncStorage.setItem(
      `${FILTER_COLLECTION}-${group}`,
      JSON.stringify(itemsWithoutDeletedOne)
    );
  } catch (error) {
    throw error;
  }
}
