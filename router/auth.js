const express = require("express");
const router = express.Router();
require("../db/conn");
const bcrypt = require("bcryptjs");
const User = require("../model/userSchema");
const authenticate = require("../middleware/authenticate");

router.post("/register", async(req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;
    
    if ( !name || !email || !phone || !work || !password || !cpassword ) {
        return res.status(422).json({error: "plz fild all data"});
    }

    try {
        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(500).json({error: "This mail already exist"});
        } else if (password !== cpassword) {
            return res.status(422).json({error: "Password and confirm password are not some"});
        } else {
            const user = new User({ name, email, phone, work, password, cpassword });
            await user.save();
            res.status(201).json({message: "user created"});
        }

    } catch (error) {
        console.log(error);
    }
});

router.post("/signin", async(req, res) => {
    
    try {
        const { email, password } = req.body;
        if ( !email || !password ) {
            return res.status(422).json({error: "fild data"});
        }

        const userLogin = await User.findOne({ email: email });

        if (userLogin) {
            
            const isMatch = await bcrypt.compare(password, userLogin.password);

            if (!isMatch) {
                res.status(400).json({ error: "Invalid Credinentials" });
            } else {
                let token = await userLogin.generateAuthToken();
                console.log(token);
                res.cookie("jwtoken", token, {
                    expires: new Date(Date.now() + 2592000000),
                    httpOnly: true
                });
                console.log("cookie");
                res.json({ message: "User Singin" });
            }
        } else {
            res.status(400).json({ error: "Invalid Credinentials" });
        }

    } catch (error) {
        console.log(error);
    }
});

router.get("/about", authenticate, (req, res) => {
    res.send(req.rootUser);
});

router.get("/getdata", authenticate, (req, res) => {
    res.send(req.rootUser);
});

router.post("/contact", authenticate, async(req, res) => {
    try {
        const {name, email, phone, message} = req.body;
        if (!name || !email || !phone || !message) {
            return res.json({error: "Please Filie The contact Form"});
        }

        const userContact = await User.findOne({_id: req.userID});
        if (userContact) {
            const userMessage = await userContact.addMessage(name, email, phone, message);
            await userContact.save();
            res.status(201).json({message: "Message Sended"});
        }

    } catch (error) {
        console.log(error);
    }
});

router.get("/logout", (req, res) => {
    res.clearCookie("jwtoken", {path: "/"});
    res.status(200).send("Log Out");
});

module.exports = router;