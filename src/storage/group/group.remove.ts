import { AppError } from "@utils/app.error";
import { groupsGetAll } from "./groups.getall";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storage.config";

export async function removeGroup(groupName:string) {
    try{
        const allItems = await groupsGetAll();
        const itemsWithoutDeletedOne = allItems.filter(item => item !== groupName)
        AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(itemsWithoutDeletedOne))
    }catch{
        throw new AppError("Não foi possível realizar a exclusão do grupo")
    }
    
}