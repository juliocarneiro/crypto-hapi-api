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
  },
  side: {
    type: String,
    required: [true, "Side is required"],
    unique: true
  },
  type: {
    type: String,
    required: [true, "Type is required"],
    unique: true
  },
  timestamp: {
    type: Date,
    required: [true, "Timestamp is required"],
    unique: true
  },
  quantity: {
    type: Number,
    required: [true, "Quantity is required"],
    unique: true
  }
});

const NewOrderModel = Mongoose.model("NewOrder", schema);

export default NewOrderModel;
