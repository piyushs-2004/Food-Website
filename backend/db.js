const mongoose = require('mongoose');
const mongoURI="mongodb://project:pass@ac-l80frdq-shard-00-00.vu6gyjc.mongodb.net:27017,ac-l80frdq-shard-00-01.vu6gyjc.mongodb.net:27017,ac-l80frdq-shard-00-02.vu6gyjc.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-29atzo-shard-0&authSource=admin&retryWrites=true&w=majority"


const mongoDB = async () => {
    try {
      await mongoose.connect(mongoURI, { useNewUrlParser: true });
      console.log("Connected");
      const foodCollection = mongoose.connection.db.collection("food_items");
      const data = await foodCollection.find({}).toArray();
      const foodCategory = await mongoose.connection.db.collection("foodCategory");
      const cateData= await foodCategory.find({}).toArray();

      global.food_items = data;
      global.foodCategory = cateData;

    } 
    catch (err) {
      console.log("---", err);
    }
  };


module.exports =mongoDB;
