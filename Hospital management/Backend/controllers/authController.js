import User from "../models/UserModel.js";
import bcrypt from "bcryptjs";

export const signupUser = async (req, res) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    if (!name || !email || !password) {
      return res.status(400).json({
        message : "Name, email and password are required"
      });
    }

    let userExist = await User.findOne({
      email : email.toLowerCase()
    });

    if (userExist) {
      return res.status(400).json({
        message : "User already exists"
      });
    }

    const hashedpassword = await bcrypt.hash(password, 10);

    let user_created = await User.create({
      name : name,
      email : email.toLowerCase(),
      password : hashedpassword
    });

    res.status(201).json({
      message : "User Created Successfully",
      data : {
        _id : user_created._id,
        name : user_created.name,
        email : user_created.email,
        role : user_created.role
      }
    });
  } catch (error) {
    console.log(error.message);

    res.status(500).json({
      message : "Something Went Wrong, Please Contact Support"
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
      return res.status(400).json({
        message : "Email and password are required"
      });
    }

    let user = await User.findOne({
      email : email.toLowerCase()
    });

    if (!user) {
      return res.status(400).json({
        message : "Invalid email or password"
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message : "Invalid email or password"
      });
    }

    res.status(200).json({
      message : "Login Successful",
      data : {
        _id : user._id,
        name : user.name,
        email : user.email,
        role : user.role
      }
    });
  } catch (error) {
    console.log(error.message);

    res.status(500).json({
      message : "Something Went Wrong, Please Contact Support"
    });
  }
};
