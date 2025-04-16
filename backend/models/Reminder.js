import mongoose from 'mongoose';

const reminderSchema = new mongoose.Schema({
  name: String,
  phone: String,
  medicine: String,
  time: Date,
  sent: { type: Boolean, default: false }
});

const Reminder = mongoose.model('Reminder', reminderSchema);
export default Reminder;
