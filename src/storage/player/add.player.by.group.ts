import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION } from "@storage/storage.config";
import { AppError } from "@utils/app.error";
import { PlayerStorageDTO } from "./player.storage.dto";
import { playersGetByGroup } from "./players.get.by.group";

export async function addPlayerByGroup(
  newPlayer: PlayerStorageDTO,
  group: string
) {
  try {
    const storedPlayers = await playersGetByGroup(group);

    if (newPlayer.name === "") {
      throw new AppError("Digite um nome valido");
    }
    const playersExists = storedPlayers.filter(
      (player) => player.name === newPlayer.name
    );
    if (playersExists.length > 0) {
      throw new AppError("O participante ja esta incluso");
    }
    const storage = JSON.stringify([...storedPlayers, newPlayer]);

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);
  } catch (error) {
    throw error;
  }
}
