import jwt from 'jsonwebtoken'
import User from '../models/users.model.js';

async function protectRoute(req, res, next){
    try {
        const token = req.cookies.jwt;

        if (!token) {
            return res.status(401).json({ error: "Unauthorized - No token Provider" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // console.log(decoded)
        if (!decoded) {
            return res.status(401).json({ error: "Unauthorized - Invalid Provider" });
        }
        const user = await User.findById(decoded.userId).select("-password")

        if (!user) {
            return res.status(404).json({error: "User not found"})
        }

        req.user = user;
        next();

    } catch (error) {
        console.log("Error in accessing", error.message);
        res.status(500).json({ error: 'Internal server Error' });
    }
}
export default protectRoute;

// TODO: check the decoded context and delete it after