const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); 

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); 
app.use(express.json({ extended: true }));
app.use('/api/auth', require('./routes/auth.route'));

async function start() {
  try {
    await mongoose.connect(
      "mongodb+srv://poxoye8123:12345@cluster0.pmvst.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );

    app.listen(PORT, () => {
      console.log(`Server has been started on ${PORT}`);
    });
  } catch (e) {
    console.error("Error connecting to MongoDB", e);
  }
}

start();