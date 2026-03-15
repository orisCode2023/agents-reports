import User from "../../models/users.model.js";

async function getMe(req, res){
    try {
        const user = await User.findById(req.user.id);
        if (!user){
            return res.status(401).json({message: 'user not found'})
        }
        return res.status(200).json({message:'get user info succrssfully', data: user})

    } catch (error) {
        console.log('Error in get self info controller', error.message);
        return res.status(500).json({message: 'Internal server error '});
    }
}
export default getMe
