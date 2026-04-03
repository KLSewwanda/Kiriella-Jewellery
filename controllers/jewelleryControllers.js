import Jewellery from "../models/jewellery.js";

export async function createJewellery(req, res) {
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
        res.status(500).json({ message: "Error creating jewellery", error: error.message })
    }
}