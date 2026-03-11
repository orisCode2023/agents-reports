import User from "../../models/users.model.js";
import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
import generateTokenAndSetCookie from "../../utils/genrateToken.js";

async function login(req, res) {
  try {
    const { agentCode, password } = req.body;

    if (!agentCode || !password)
      return res.status(400).json({ message: "agent code or password was missing" });

    const user = await User.findOne({ agentCode: agentCode });
    if (!user)
      return res.status(401).json({ message: `user with ${agentCode} not found` });

    const isMatch = await bcrypt.compare(password, user.passwordHash);

    if (!isMatch)
      return res.status(401).json({ message: `password does not match` });
    generateTokenAndSetCookie(user.id, res);
    return res.status(200)
      .json({
        message: "login successfully",
        user: {
          id: user.id,
          agentCode: agentCode,
          name: user.fullName,
          role: user.role,
        },
      });
    // const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    //   expiresIn: "15d",
    // });

    // res.cookie("jwt", token, {
    //     maxAge: 15 * 24 * 60 * 60 * 1000,
    //     httpOnly: true,
    //     sameSite: "strict",
    //   }).status(200)
    //   .json({
    //     message: "login successfully",
    //     user: {
    //       id: user.id,
    //       agentCode: agentCode,
    //       name: user.fullName,
    //       role: user.role,
    //     },
    //   });
  } catch (error) {
    console.log("Error in login controller", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
}

export default login;

