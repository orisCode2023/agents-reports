import User from "../../models/users.model.js";

async function getUsers(req, res){
    try {
        const usersData = await User.find();
        res.status(200).json({message:"load users successfully", users: usersData})
    } catch (error) {
        console.log('Error in get users controller', error.message);
        res.status(500).json({message: 'Internal server error '});
    }
}
export default getUsers