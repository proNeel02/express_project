import mongoose from "mongoose";

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please add name"],
    },
    email: {
      type: String,
      required: [true, "please add email"],
    },

    phone: {
      type: String,
      required: [true, "please add phone number"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('contact', contactSchema);