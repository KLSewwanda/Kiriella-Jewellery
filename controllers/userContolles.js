import User from "../models/user.js"

export async function createUser(req, res) {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (user != null) {
            return res.status(400).json({ message: "User with this email already exists" })
        }

        const newUser = new User({
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: req.body.password,
        })
        await newUser.save()
        res.status(201).json({ message: "User created successfully", user: newUser })

    } catch (error) {
        res.status(500).json({ message: "Error creating user", error: error.message })
    }
}