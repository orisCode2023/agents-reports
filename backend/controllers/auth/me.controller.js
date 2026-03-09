import User from "../../models/users.model.js";

async function getMe(req, res){
    try {
        // get the cookie from the req.cookie and then check if the token match the token.verify and this i need to send all over the code 

        const user = await User.findOne({agentCode: agentCode});

        res.status(200).json({message:'get user info succrssfully', user: {id: user.id, agentCode: agentCode, name: user.fullName, role: user.role}})

    } catch (error) {
        console.log('Error in get self info controller', error.message);
        req.status(500).json({message: 'Internal server error '});
    }
}
export default getMe
