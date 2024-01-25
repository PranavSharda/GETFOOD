const mongoose = require('mongoose');
const mongoURI = 'mongodb://127.0.0.1:27017/getfood';

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        mongoose.connection.setMaxListeners(2);

        console.log('Connected to MongoDB');

        const foodCollection = mongoose.connection.db.collection("food_items");
        const data = await foodCollection.find({}).toArray();

        const categoryCollection = mongoose.connection.db.collection("Categories");
        const Catdata = await categoryCollection.find({}).toArray();

        return { data, Catdata };
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        throw error;
    }
};

module.exports = connectDB;
