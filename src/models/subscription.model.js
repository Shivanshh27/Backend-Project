import mongoose from "mongoose";


const subscriptionSchema = new Schema({
    subscriber: {
        type: Schema.Types.ObjectId, // Who is subscriving
        ref: "User"
    },
    channel: {
        type: Schema.Types.ObjectId, // to whome subscriber is subscriving
        ref: "User"
    }
},{timestamps:true})


export const Subscription = mongoose.model("Subscription", subscriptionSchema)