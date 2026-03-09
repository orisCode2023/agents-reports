async function getUsers(req, res){
    try {
        
    } catch (error) {
        console.log('Error in get users controller', error.message);
        req.status(500).json({message: 'Internal server error '});
    }
}
export default getUsers