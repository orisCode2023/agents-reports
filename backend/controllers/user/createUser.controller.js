async function createUsers(req, res){
    try {
        
    } catch (error) {
        console.log('Error in create user controller', error.message);
        req.status(500).json({message: 'Internal server error '});
    }
}
export default createUsers;