import protectRoute from "./protectRoute.js"

async function protectRouteAdmin(req, res, next){
    try {
        protectRoute(req, res, () => {
            if (req?.user?.role !== 'admin'){
                return res.status(403).json({message: "Unauthorized only admin can access"});
            }
        })
        next();
    } catch (error) {
        console.log('Error in accessing', error.message);
        req.status(500).json({message: 'Internal server error '});
    }
};

export default protectRouteAdmin;