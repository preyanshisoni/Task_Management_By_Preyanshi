import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {

    try {

        const authHeader = req.headers.authorization;

        if (!authHeader) {

            return res.status(401).json({

                message: "Authorization Header Missing"

            });

        }

        if (!authHeader.startsWith("Bearer ")) {

            return res.status(401).json({

                message: "Invalid Authorization Format"

            });

        }

        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(

            token,

            process.env.ACCESS_TOKEN_SECRET

        );

        req.user = decoded;

        next();

    }

    catch (error) {

        res.status(401).json({

            message: "Invalid Token"

        });

    }

};