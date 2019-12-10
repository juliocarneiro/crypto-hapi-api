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
  }
});

const AccountModel = Mongoose.model("Account", schema);

export default AccountModel;
