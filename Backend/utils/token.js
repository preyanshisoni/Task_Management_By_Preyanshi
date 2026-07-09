import jwt from "jsonwebtoken";
export const accessToken = (user) => {
	return jwt.sign(
		{
			id: user._id,
			email: user.email,
		},
		process.env.ACCESS_TOKEN_SECRET,
		{
			expiresIn: "15m",
		}
	);
};

