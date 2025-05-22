const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); 

const app = express();
const PORT = process.env.PORT || 5000;

// Точная настройка CORS
const corsOptions = {
  origin: 'http://localhost:3000', // явно указываем фронтенд URL
  credentials: true, // разрешаем передачу кук
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // разрешенные методы
  allowedHeaders: ['Content-Type', 'Authorization'] // разрешенные заголовки
};

app.use(cors(corsOptions)); // применяем настройки CORS
app.use(express.json({ extended: true }));

// Явно обрабатываем OPTIONS запросы
app.options('*', cors(corsOptions));

app.use('/api/auth', require('./routes/auth.route'));

async function start() {
  try {
    await mongoose.connect(
      "mongodb+srv://vadimkostenko:12345@cluster0.2wc6c32.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );

    app.listen(PORT, () => {
      console.log(`Server has been started on ${PORT}`);
    });
  } catch (e) {
    console.error("Error connecting to MongoDB", e);
    process.exit(1); // завершаем процесс с ошибкой
  }
}

start();