import cron from 'node-cron';
import Reminder from '../models/Reminder.js';
import twilio from 'twilio';
import dotenv from 'dotenv';

dotenv.config();

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

cron.schedule('* * * * *', async () => {
  const now = new Date();

  const dueReminders = await Reminder.find({
    sent: false,
    time: { $lte: now }
  });

  for (let reminder of dueReminders) {
    try {
      const message = await client.messages.create({
        body: `Hi ${reminder.name}, time to take your medicine: ${reminder.medicine} 💊`,
        from: process.env.TWILIO_PHONE,
        to: reminder.phone
      });

      console.log(`✅ Reminder sent to ${reminder.phone}: ${message.sid}`);
      reminder.sent = true;
      await reminder.save();
    } catch (err) {
      console.error(`❌ Failed to send reminder to ${reminder.phone}:`, err.message);
    }
  }
});
