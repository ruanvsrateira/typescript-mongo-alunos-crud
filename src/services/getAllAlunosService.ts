import UserModel from '../models/UserModel';

export default async function() {
    const results = await UserModel.find({});
    
    return results;
}