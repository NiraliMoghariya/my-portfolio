import mongoose from "mongoose";

const MONGO_URL = process.env.MONGODB_URL;

async function connectDB() {
  if (mongoose.connection.readyState >= 1) return;
  return mongoose.connect(MONGO_URL);
}

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
});

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    await Contact.create(body);
    return new Response(JSON.stringify({ success: true }), { status: 201 });
  } catch (err) {
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}
