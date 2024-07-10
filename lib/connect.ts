import mongoose from "mongoose";

async function connect(): Promise<void> {
    try {
        await mongoose.connect(process.env.MONGODB_URI_STRING as string);
        console.log('db connect...')
    }catch(error) {
        console.log(error)
    }
}

export default connect