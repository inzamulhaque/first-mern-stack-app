const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");

const Authenticate = async(req, res, next) => {
    try {
        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

        const rootUser = await User.findOne({_id: verifyToken._id, "tokens.token": token});
        if (!rootUser) {
            throw new Error("User Not Found")
        } 
        
        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;

    } catch (error) {
        console.log(error);
        // res.json({error: error});
        res.status(401).send("Unauthorized token!");
    }

    next();
}

module.exports = Authenticate;