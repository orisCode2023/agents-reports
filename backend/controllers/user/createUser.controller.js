async function createUsers(req, res){
    try {
        const {agentCode, fullName, role} = req.body;
        if (!agentCode || !fullName || !role || roll !== 'admin' || roll !== 'agent' ){
            return res.status(400).json({message: "one of the details is wrong try again"});
        }
        
        
    } catch (error) {
        console.log('Error in create user controller', error.message);
        req.status(500).json({message: 'Internal server error '});
    }
}
export default createUsers;