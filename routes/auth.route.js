// auth.route.js
const { Router } = require("express");
const bcrypt = require('bcrypt');
const router = Router();
const jwt = require("jsonwebtoken"); 
const User = require('../models/User');

// Общие константы
const JWT_SECRET = process.env.JWT_SECRET || "strong_secret_key_here";
const SALT_ROUNDS = 10;

// Улучшенная валидация email
const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// Регистрация пользователя
router.post("/registration", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Валидация входных данных
    if (!validateEmail(email)) {
      return res.status(400).json({ 
        message: 'Некорректный email. Введите email в формате example@domain.com'
      });
    }

    if (password.length < 6) {
      return res.status(400).json({ 
        message: 'Пароль должен содержать не менее 6 символов' 
      });
    }

    // Проверка существующего пользователя
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ 
        message: 'Этот email уже зарегистрирован' 
      });
    }

    // Хеширование пароля
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    // Создание и сохранение пользователя
    const user = new User({ email, password: hashedPassword });
    await user.save();

    // Ответ без чувствительных данных
    res.status(201).json({ 
      success: true,
      message: 'Регистрация успешна! Теперь вы можете войти',
      userId: user._id
    });

  } catch (error) {
    console.error('Registration Error:', error);
    res.status(500).json({ 
      message: 'Ошибка сервера. Пожалуйста, попробуйте позже' 
    });
  }
});

// Аутентификация пользователя
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Поиск пользователя
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ 
        message: "Неверные учетные данные" 
      });
    }

    // Проверка пароля
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ 
        message: "Неверные учетные данные" 
      });
    }

    // Генерация JWT токена
    const token = jwt.sign(
      { 
        userId: user._id,
        email: user.email
      }, 
      JWT_SECRET, 
      { expiresIn: "1h" }
    );

    // Ответ с токеном
    res.status(200).json({
      success: true,
      token,
      userId: user._id,
      expiresIn: 3600 // Время жизни токена в секундах
    });

  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ 
      message: "Ошибка сервера. Пожалуйста, попробуйте позже" 
    });
  }
});

module.exports = router;