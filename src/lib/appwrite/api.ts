import {INewUser} from "@/types"
import {ID} from "appwrite"
import {account} from './config';

export async function createUserAccount(user: INewUser) {
    try{
        //we are getting the account from the appwrite/config file coming from appwrite, it helps with auth
        const newAccount = await account.create(
            ID.unique(),
            user.email,
            user.password,
            user.name
        )

        return newAccount;

    }
    catch(error){
        console.log(error)
        return error;
    }

}