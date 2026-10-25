import User from "../../models/UserModel.js";
import bcrypt from "bcryptjs";

export const addUser = async (req, res) => {
  try {
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    let role = req.body.role;

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
      password : hashedpassword,
      role : role
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

    res.status(400).json({
      message : "Something Went Wrong",
      error : error.message
    });
  }
};
