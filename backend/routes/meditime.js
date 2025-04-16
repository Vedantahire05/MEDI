import express from 'express';
import Reminder from '../models/Reminder.js';

const router = express.Router();

router.post('/meditime', async (req, res) => {
  const { name, phone, medicine, time } = req.body;

  try {
    const newReminder = new Reminder({ name, phone, medicine, time });
    await newReminder.save();
    res.status(200).json({ success: true, message: 'Reminder scheduled!' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Error scheduling reminder.', error: err.message });
  }
});

export default router;
