import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoSend } from "react-icons/io5";
import { motion } from "framer-motion";

function MeditimeForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    medicine: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    const { name, phone, medicine, time } = formData;

    if (!name || !phone || !medicine || !time) {
      toast.error("Please fill all fields.");
      return;
    }

    const today = new Date();
    const [hours, minutes] = time.split(":");
    const reminderTime = new Date(today);
    reminderTime.setHours(parseInt(hours));
    reminderTime.setMinutes(parseInt(minutes));
    reminderTime.setSeconds(0);

    try {
      const res = await axios.post("http://localhost:5000/api/meditime", {
        name,
        phone,
        medicine,
        time: reminderTime,
      });

      if (res.data.success) {
        toast.success("⏰ Reminder scheduled!");
        setFormData({ name: "", phone: "", medicine: "", time: "" });
      }
    } catch (error) {
      toast.error("Something went wrong.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen pt-16 bg-gradient-to-b from-[#C6E2E9] to-[#F7F8FC] px-4">
      <motion.div
        className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-3xl font-semibold text-[#3B3B98] mb-8 text-center">
          Set Your Medicine Reminder
        </h2>

        <div className="space-y-6">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">Name</label>
            <input
              name="name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B3B98] transition duration-300"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">Phone Number</label>
            <input
              name="phone"
              type="tel"
              placeholder="+91XXXXXXXXXX"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B3B98] transition duration-300"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">Medicine Name</label>
            <input
              name="medicine"
              type="text"
              placeholder="Medicine"
              value={formData.medicine}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B3B98] transition duration-300"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">Reminder Time</label>
            <input
              name="time"
              type="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B3B98] transition duration-300"
            />
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full flex justify-center items-center gap-3 bg-[#3B3B98] text-white py-3 mt-6 rounded-xl hover:bg-[#2F2F89] transition-all"
        >
          <IoSend size={20} /> Schedule Reminder
        </button>

        <ToastContainer position="top-right" autoClose={3000} />
      </motion.div>
    </div>
  );
}

export default MeditimeForm;
