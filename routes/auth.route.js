const { Router } = require("express");
const router = Router();
const User = require('../models/User');

router.post(
  "/registration",
  async (req, res) => { 
      try {
          const { email, password } = req.body;

          // Валидация email
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(email)) {
              return res.status(400).json({ message: 'Некорректный email. Убедитесь, что email содержит символ "@" и имеет правильный формат.' });
          }

          // Валидация пароля
          if (password.length < 6) {
              return res.status(400).json({ message: 'Пароль должен содержать не менее 6 символов' });
          }

          const isUsed = await User.findOne({ email });

          if (isUsed) {
              return res.status(300).json({ message: 'Данный email уже занят, попробуйте другой.' });
          }

          const user = new User({
              email, password
          });

          await user.save();

          res.status(201).json({ message: 'Пользователь создан' });

      } catch (error) {
          console.log(error);
          res.status(500).json({ message: 'Ошибка сервера' }); 
      }
  }
);

module.exports = router;