import jwt from 'jsonwebtoken';

function generateTokenAndSetCookie(userId, res){
    const token = jwt.sign({id : userId}, process.env.JWT_SECRET, {
        expiresIn: '15d'
    } )

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: 'strict'
    })
}

export default generateTokenAndSetCookie;