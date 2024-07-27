
import jwt from "jsonwebtoken"

export const tokenVerification = (req, res, next) => {
    const { token } = req.headers;
    jwt.verify(token, "Fade", (err, decoded) => {
        if (err)
            return res.status(401).json({ message: "Invaild token", err })

        req.user = decoded;
        console.log('Token verified:', req.user); // Logging to check req.user
        next()
    })

}