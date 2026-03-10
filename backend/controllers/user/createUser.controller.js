import User from "../../models/users.model.js";
import bcrypt from "bcryptjs";


async function createUsers(req, res){
    try {
        const {agentCode, fullName, role} = req.body;
        if (!agentCode || !fullName || !role || role !== 'admin' && role !== 'agent' ){
            return res.status(400).json({message: "one of the details is wrong try again"});
        }
        const isExist = await User.findOne({agentCode: agentCode});
        if (isExist){
            res.status(409).json({message: `user with ${agentCode} already exist`});
        } else {
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(fullName, salt);
            const newUser = await User.create({
                agentCode,
                fullName,
                password: hashPassword,
                role
            })
            console.log(newUser)
            res.status(201).json({message: 'agent created', agent: newUser});
        }
    } catch (error) {
        console.log('Error in create user controller', error.message);
        req.status(500).json({message: 'Internal server error '});
    }
}
export default createUsers;