import User from "../../models/users.model.js";

async function getMe(req, res){
    try {
        const user = await User.findById(req.user.id);
        
        console.log(req.user)
        res.status(200).json({message:'get user info succrssfully', user: user})

    } catch (error) {
        console.log('Error in get self info controller', error.message);
        res.status(500).json({message: 'Internal server error '});
    }
}
export default getMe
