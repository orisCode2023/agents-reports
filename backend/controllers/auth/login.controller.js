import User from "../../models/users.model.js";

async function login(req, res){
    try {
        const {agentCode, password} = req.body;

    if (!agentCode || !password) res.status(400).json({message: "agent code or password was missing"});

    const user = await User.findOne({agentCode: agentCode})
    if (!user) res.status(401).json({message: `user with ${agentCode} not found`});

    if (user && user.passwordHash !== password){
        return res.status(401).json({message: `password ${password} dose not match`});
    } else {
        res.status(200).json({message: 'login successfully', token: token,
        user: {id: user.id, agentCode: agentCode, name: user.fullName, role: user.role}})
    }

    } catch (error) {
        console.log('Error in login controller', error.message);
        req.status(500).json({message: 'Internal server error '});
    }

}
export default login