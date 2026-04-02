import User from "../models/user.js"
import bcrypt from "bcrypt"

export async function createUser(req, res) {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (user != null) {
            return res.status(400).json({ message: "User with this email already exists" })
        }

        const passwordHash = await bcrypt.hash(req.body.password, 10)
        const newUser = new User({
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: passwordHash
        })
        await newUser.save()
        res.status(201).json({ message: "User created successfully" })

    } catch (error) {
        res.status(500).json({ message: error.message})
    }
}

export async function loginUser(req, res) {
    try {
        const email = req.body.email
        const password = req.body.password

        if (email == null || password == null) {
            return res.status(400).json({ message: "Email and password are required" })
        }

        const user = await User.findOne({ email: email })

        if (user == null) {
            return res.status(400).json({ message: "User with this email does not exist" })
        }

        if (isPasswordValid) {

            return res.status(200).json({ message: "Login successful" })

        } else {


            return res.status(400).json({ message: "Invalid password" })
        }

    } catch (error) {
        res.status(500).json({ message: error.message})
    }
    
}