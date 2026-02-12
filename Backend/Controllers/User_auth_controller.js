const User = require("../model/User_schema");
const bcrypt = require("bcrypt");



const register = async (req, res) => {
    try {
        const { name, phone, email, password, role } = req.body;
        if (!name || !phone || !email || !password) {
            return res.status(400).json({ error: "All fields required" })
        }
        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(400).json({ err: "User already exist" })
        }

        const newUser = await User.create({
            name: name,
            phone,
            email,
            password,
            role,

        })
        return res.status(200).json({ success: "User Registed successfully", newUser })


    } catch (error) {
        console.log(error)

    }

}
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "All fields required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    return res.status(200).json({
      success: "Login successful",
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
};

module.exports = { register, login }








