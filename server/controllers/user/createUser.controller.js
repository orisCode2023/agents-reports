import User from "../../models/users.model.js";
import bcrypt from "bcrypt";

async function createUsers(req, res) {
  try {
    const { agentCode, fullName, role } = req.body;
    if (
      !agentCode ||
      !fullName ||
      !role ||
      (role !== "admin" && role !== "agent")
    ) {
      return res
        .status(400)
        .json({ message: "one of the details is wrong try again" });
    }
    const isExist = await User.findOne({ agentCode: agentCode });
    if (isExist) {
      return res.status(409).json({ message: `user with ${agentCode} already exist` });
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(agentCode, salt);
    const newUser = await User.create({
      agentCode,
      fullName,
      passwordHash: hashPassword,
      role,
    });

    return res.status(201).json({ message: "agent created", data: newUser });
  } catch (error) {
    console.log("Error in create user controller", error.message);
    return res.status(500).json({ message: "Internal server error " });
  }
}
export default createUsers;
