import Jewellery from "../models/jewellery.js";

export async function createJewellery(req, res) {
    if (req.user == null) {
        return res.status(401).json({ message: "Unauthorized" })
    }
    if (!req.user.isAdmin) {
        return res.status(403).json({ message: "Only admin can create jewellery" })
    }
    
    try {
        const existingJewellery = await Jewellery.findOne({ productId: req.body.productId })

        if (existingJewellery != null) {
            return res.status(400).json({ message: "Jewellery with the same productId already exists" })
        } else {
            const jewellery = new Jewellery(req.body)

            await jewellery.save()

            res.status(201).json({ message: "Jewellery created successfully"})

        }
    } catch (error) {
        res.status(500).json({ message: "Error creating jewellery"})
    }
}

export async function getAllJewellerys(req, res) {
    try {

        if (req.user != null && req.user.isAdmin) {
            const jewellerys = await Jewellery.find()
            res.status(200).json(jewellerys)
        }
        else {
            const jewellerys = await Jewellery.find({ isAwailable: true })
            res.status(200).json(jewellerys)
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}