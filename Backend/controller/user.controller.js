import userModel from "../models/user.model.js";
import { accessToken } from "../utils/token.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  try {
	const { name, email, password } = req.body;

	if (!email || !password) {
	  return status(400).json({ message: "All fields are required" });
	}
	const userExits = await userModel.findOne({ email });

	if (userExits) {
	  return res.status(400).json({
		message: "User already exist",
	  });
	}
	const hashPassword = await bcrypt.hash(password, 10);

	const newUser = await userModel.create({ name, email, password: hashPassword });
	res.status(201).json({
	  success: true,
	  message: "User Registrated",
	  user: newUser,
	});
  } catch (error) {
	res.status(500).json({ message: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
	const { email, password } = req.body;
	const user = await userModel.findOne({ email });

	if (!user) {
	  res.status(404).json({ message: "Invalid credential" });
	}

	const isMatch = await bcrypt.compare(password, user.password);
	if (!isMatch) {
	  return res.status(400).json({
		message: "Invalid credentials",
	  });
	}
	const token = accessToken(user);
	res.json({
	  success: true,
	  message: "User login sucessfully",
	  token,
	});
  } catch (error) {
	res.status(500).json({ message: error.message });
  }
};