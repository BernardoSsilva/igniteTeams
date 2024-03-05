import AsyncStorage from "@react-native-async-storage/async-storage";
import { playersGetByGroup } from "./players.get.by.group";
import { PLAYER_COLLECTION } from "@storage/storage.config";

export async function playerRemoveByGroup(group: string, playerName: string) {
  try {
    const storedPlayers = await playersGetByGroup(group);
    const playersWithoutDeletedOne = storedPlayers.filter(
      (player) => player.name !== playerName
    );
    console.log(playersWithoutDeletedOne)
    const newDate = JSON.stringify(playersWithoutDeletedOne);
    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, newDate);
  } catch (error) {
    throw error;
  }
}
