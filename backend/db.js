const mongoose = require('mongoose');
const mongoURI = 'mongodb://127.0.0.1:27017/getfood';
module.exports = function (callback) {
  mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
      if (err) console.log("---" + err)
      else {
          console.log("connected to mongo")
          const foodCollection = await mongoose.connection.db.collection("food_items");
          foodCollection.find({}).toArray(async function (err, data) {
              const categoryCollection = await mongoose.connection.db.collection("Categories");
              categoryCollection.find({}).toArray(async function (err, Catdata) {
                  callback(err, data, Catdata);

              })
          });

      }
  })
};