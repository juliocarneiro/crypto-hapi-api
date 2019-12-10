import Mongoose from "mongoose";

const schema = new Mongoose.Schema({
  key: {
    type: String,
    required: [true, "Key is required"],
    unique: true
  },
  secret: {
    type: String,
    required: [true, "Secret is required"],
    unique: true
  },
  symbol: {
    type: String,
    required: [true, "Symbol is required"],
    unique: true
  }
});

const OrdersModel = Mongoose.model("Orders", schema);

export default OrdersModel;
