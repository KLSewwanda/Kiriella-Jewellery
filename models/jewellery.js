import mongoose from "mongoose"

const jewellerySchema = new mongoose.Schema(
    {
        productId: {
            type: String,
            unique: true,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        altName: {
            type: [String],
            default: [],
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        laballedPrice: {
            type: Number,
            required: true
        },
        images : {
            type: [String],
            default: ["/images/default-jewellery.jpg", "/images/default-jewellery.jpg", "/images/default-jewellery.jpg"],
            required: true
        },
        isAwailable: {
            type: Boolean,
            default: true,
            required: true
        },
        category: {
            type: String,
            required: false
        },
        stock: {
            type: Number,
            default: 0,
            required: true
        },
        reviews: {
            type: [String],
            default: [],
            required: true
        }

    }
)

const Jewellery = mongoose.model("Jewellery", jewellerySchema)

export default Jewellery